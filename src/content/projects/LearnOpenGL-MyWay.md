---
title: LearnOpenGL, My Way
summary: My personal learning process working through the LearnOpenGL book.
order: 2
---

This project is my personal learning process while working through the [LearnOpenGL](https://learnopengl.com/) book, written in C++ with OpenGL and Dear ImGui.

## Structure

Each concept from the book (depth testing, stencil testing, blending, instancing, shadow mapping, normal/parallax mapping, HDR, bloom, deferred shading, SSAO, PBR, IBL, etc.) is implemented as its own **scene** in [`src/Scenes`](https://github.com/PauAdell/LearnOpenGL-MyWay/tree/main/src/Scenes), registered and switched between through the [`SceneManager`](https://github.com/PauAdell/LearnOpenGL-MyWay/blob/main/src/SceneManager/SceneManager.cpp).

Shared building blocks used across scenes (shaders, textures, framebuffers, materials, meshes/models, cubemaps, UBOs, etc.) live under [`src/OpenGL`](https://github.com/PauAdell/LearnOpenGL-MyWay/tree/main/src/OpenGL) and [`src/Models`](https://github.com/PauAdell/LearnOpenGL-MyWay/tree/main/src/Models).

## Scenes

The scenes are grouped and selected at runtime through the UI, following the book's own chapter groupings:

<p align="center">
  <img src="/projects/learnopengl-myway/AdvancedOpenGLScenes.png" width="32%" alt="Advanced OpenGL scene selection" />
  <img src="/projects/learnopengl-myway/AdvancedLightingScenes.png" width="32%" alt="Advanced Lighting scene selection" />
  <img src="/projects/learnopengl-myway/PBRScenes.png" width="32%" alt="PBR scene selection" />
</p>

## Some examples

**Phong vs. Blinn-Phong shading**:

![Phong vs Blinn-Phong](/projects/learnopengl-myway/PhongVsBlinn-Phong.png)

**Deferred rendering (debug mode)**:

![Deferred rendering](/projects/learnopengl-myway/OpenGLEdit1080.gif)

**Physically Based Rendering (PBR)**:

![PBR materials](/projects/learnopengl-myway/PBR.png)

### A note on the helper classes

These helper classes are intentionally specific to what each scene needed at the time, not generic engine-style abstractions (still learning!). As later chapters required different or more advanced usage (for example a `Texture2D` for a framebuffer attachment, or a `Framebuffer`/`Material` built from a full specification struct instead of a simple set of parameters), I added a second constructor rather than reworking the original one and risking breaking every scene that already depended on it. So you'll find classes like `Texture2D`, `Material`, and `Framebuffer` with more than one way to initialize them.

This isn't the optimal design and it's not meant to be. It's left as-is on purpose so the progression is visible: the newer overloads are a decent hint at how the class would look if it were refactored properly, without having to go back and rewrite the earlier scenes that still rely on the original, simpler form.

### Others

Developed and tested on **CachyOS** (Arch-based). Built and launched using the `./run.sh` script.

No AI was used to write any of the project's code.
