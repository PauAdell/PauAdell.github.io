// Theses and papers shown on the home page, newest first.
// Link to the UPCommons handle (the permanent, citable address), not to a hosted PDF.
// Leave `url` out for anything that is not public yet.
export interface Publication {
  title: string;
  meta: string; // type, venue and date
  summary: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: "Facilitando el acceso al aprendizaje de la computación en GPU en sistemas críticos",
    meta: "Conference poster · JENUI 2026 · with Leonidas Kosmidis · in Spanish",
    summary:
      "Two open, step-by-step tutorials (vector addition and matrix multiplication) written with OpenGL SC 2 and Vulkan, to lower the barrier to learning GPU computing for safety-critical systems.",
    url: "https://hdl.handle.net/2117/471752",
  },
  {
    title: "Design and Implementation of a Safety Critical Virtual Reality Testbench",
    meta: "Master's thesis · UPC · 2026 · not public yet",
    summary:
      "Open-source infrastructure for research on safety-critical avionics graphics in virtual reality: an OpenGL SC avionics widget library running inside a Unity flight simulator with an Airbus A380 cockpit and a prototype head-mounted display interface, plus benchmarks of the cost of moving frames between the two.",
  },
  {
    title: "Improving the Programmability of Vulkan Safety Critical GPU Systems",
    meta: "Bachelor's thesis · UPC · May 2024",
    summary:
      "A new Vulkan SC backend for the Brook Auto compiler, so developers can write GPU code in Brook and run it on Vulkan SC without having to learn Vulkan itself.",
    url: "https://hdl.handle.net/2117/414403",
  },
];
