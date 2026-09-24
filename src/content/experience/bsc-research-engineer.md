---
title: Research Engineer
company: Barcelona Supercomputing Center (BSC-CNS)
period: Aug. 2023 – Present
order: 1
detailed: true
summary: Building an open-source research platform for safety-critical avionics graphics, from a custom C/OpenGL SC rendering pipeline to a full VR flight simulator testbench.
---

Since 2023, I have been a research engineer at BSC focusing on graphics software for safety-critical systems. It is a specialized domain as standard graphics APIs and common rendering shortcuts are largely unavailable due to strict certification and standards. Consequently, much of the work involves solving core rendering challenges within tight operational and architectural constraints.

### A safety-critical rendering pipeline

Avionics graphics run on OpenGL SC 1.0, a fixed-function API: it only lets you draw through one specific, predefined pipeline, with no programmable shaders. OpenGL SC 2.0, the newer specification, moves to a programmable pipeline with GLSL support instead, custom vertex and fragment shaders, while keeping the same deterministic, certifiable guarantees through strict limits on shader usage and resource management. It's built for more demanding avionics and automotive displays, and that flexibility is what made this project possible in the first place.

The project starts from an existing open-source C library, originally written for OpenGL SC 2.0 and OpenGL ES 2.0, that renders avionics widgets like compasses, altimeters, and airspeed indicators. My job was to get that library talking to Unity without reimplementing or forking it. Alongside its original **direct** mode, which renders straight to a window, I added two new rendering modes:

<img src="/experience/rendering-pipelines.png" alt="Three rendering pipelines: Direct draws straight to the default framebuffer; Hybrid renders each widget into its own framebuffer object and also draws the result as a textured quad into the default framebuffer for visual debugging; Offscreen renders only into framebuffer objects, with no window at all." />

- **Hybrid**: Renders each widget offscreen into dedicated Framebuffer Objects (FBOs) while simultaneously displaying the output in a host window as a textured, wireframe-bordered quad. This served as an essential visual validation step during development prior to Unity integration.
- **Offscreen**: The primary mode used for Unity bridging and performance benchmarking. It eliminates window creation entirely, rendering directly to FBOs and transferring pixel data via `glReadPixels()`.

Those offscreen pixels reach Unity through POSIX shared memory, simplified down it looks like this:

<img src="/experience/opengl-unity-texture-share.png" alt="Diagram: the OpenGL program writes a rendered texture into shared memory, and Unity reads it from there." style="max-width: 420px; margin: 0 auto; display: block;" />


The C library outputs each rendered widget into a shared memory segment that a Unity C# script reads frame-by-frame into a `Texture2D`. In parallel, operational telemetry flows upstream via a dedicated shared-memory segment using a `FlightDataPacket` structure (mapped to platform-specific paths on Windows or Linux) to keep widget states synchronized. This decoupled architecture leaves the safety-critical C codebase fully isolated and reusable without redundant porting or logic duplication while remaining directly usable by our high-end simulation.

### Bringing it into VR

Because consumer VR headsets do not natively run OpenGL SC or Vulkan SC binaries, the simulation runs host-side in Unity on a Windows workstation and streams directly to a Meta Quest 3 via Meta Horizon. The setup combines Unity's OpenXR stack for head-tracking with the offscreen shared-memory bridge to drive the avionics displays.

Around that, I designed an Airbus A380 glass-cockpit simulation featuring high-resolution terrain streaming via Cesium, synchronized telemetry over shared memory, and pilot/co-pilot seat perspective toggles. Additionally, I developed a prototype "helmet-mounted display" mode: core flight data (compass, attitude indicator, airspeed, vertical speed, and altimeter) is rendered to a dynamic texture and mapped onto curved 3D geometry to evaluate primary instrument displays in head-mounted environments (instead of the cockpit screens only).

<img src="/experience/vr-overall-experience.png" alt="Everything running together: the Unity editor with the Airbus A380 cockpit and Cesium terrain, the OpenGL ES 2.0 SCS widget window overlaid on top, and a debugger attached to the widget library process reading shared flight data, all running at 72 FPS." />

That's the whole pipeline running in sync: the SC-compliant widget library on the left, driving the cockpit instruments inside the Unity/Cesium scene on the right, in real time.

### Performance benchmarking

Using Unity's internal profiler alongside native instrumentation in the widget library, I profiled both sides of the bridge to isolate architectural bottlenecks and maximize throughput. The methodology and benchmark results are documented in my Master's thesis, which hasn't been published yet.

### Modernizing the Brook Auto compiler

Brook Auto is BSC’s safety-critical fork of Brook, the pioneering stream-programming language and compiler developed at Stanford that laid the groundwork for CUDA. Because Brook was open-sourced and largely left unmaintained for nearly two decades, its toolchain relied on outdated, deprecated dependencies that prevented further adaptation for modern GPU targets. Everything below is documented in more detail in my [Bachelor's thesis](https://hdl.handle.net/2117/414403).

The primary architectural bottleneck was NVIDIA's Cg. Under the legacy pipeline, the `brcc` frontend translated `.br` source into `.cg`, NVIDIA's Cg compiler lowered that output to GLSL ES, and the generated code was packaged into a `.cpp` file for compilation and linking by the Brook Runtime (BRT):

<img src="/experience/brook-cg-architecture.png" alt="Old Brook Auto pipeline: a .br file is translated to a .cg file, the Cg compiler outputs GLSL ES into a .cpp file, and the Brook Runtime (BRT) compiles that into a binary." />

Cg has been unmaintained by NVIDIA for years, so my contribution was to remove that dependency from the core of the compiler: it now generates GLSL directly, with no Cg step in between. That output is the groundwork for new backends going forward, targeting more modern OpenGL, and eventually Vulkan and their SC counterparts, with the end goal of Brook Auto being able to generate certifiable SC GPU code.

To validate the direct GLSL codegen without immediately rewriting the legacy runtime, I implemented a transitional cross-compilation pipeline. The emitted GLSL is validated and translated to SPIR-V via `glslangValidator`, optimized using `spirv-opt`, and lowered back to legacy-compatible GLSL ES using `spirv-cross`. This produces the dialect expected by the existing backend while severing the toolchain's reliance on Cg:

<img src="/experience/brook-glsl-test-hack.png" alt="Testing hack: GLSL is validated into a .frag file with GLSLang Validator, converted to SPIR-V and optimized with spirv-opt, then cross-compiled back to GLSL ES as a .glsl file with spirv-cross, to feed the old Cg-era backend without depending on Cg." />

### Lowering the barrier to OpenGL SC

None of this is something you pick up at university: OpenGL SC and its safety-critical constraints aren't part of any standard graphics curriculum, so most of what I learned about it came from reading specifications and working through the projects above by trial and error. Together with Leonidas Kosmidis, I turned that ramp-up into a [conference poster](https://hdl.handle.net/2117/471752): two open, step-by-step tutorials, vector addition and matrix multiplication, implemented in both OpenGL SC 2 and Vulkan, meant to lower that same barrier for whoever wants to get into GPU computing for safety-critical systems next.
