---
title: Scalable Rendering for Graphics and Game Engines
summary: "A real-time OpenGL renderer for a walkable virtual museum: automatic LOD generation, distance-based LOD selection and cell-to-cell visibility culling."
order: 5
---

A real-time OpenGL renderer built to display large 3D models in a walkable virtual museum, with a focus on keeping performance smooth as scene complexity grows.

A full technical writeup with further implementation detail is available in [`documentation.pdf`](https://github.com/PauAdell/SRGGE-Project/blob/main/docs/documentation.pdf).

## Museum map & models

The museum layout is defined in a simple text map: a grid of numbers where each value marks a wall, an empty floor tile, or the camera's starting position. Models to populate the scene are then listed by PLY file path and placed with a position, scale, and type index.

![Objects loaded into the museum](/projects/srgge-project/loadobjects.png)

## Level of detail (LOD) generation

To keep large meshes fast to render, models are automatically simplified into multiple LODs using vertex clustering with quadric error metrics, which preserves thin/detailed features better than a naive average. Missing LOD files are generated on the fly and cached to disk. For example, the hairball model goes from ~1.47M vertices down to ~30K across its four LODs:

| File | Vertices | Faces |
|---|---:|---:|
| `hairball_LOD1.ply` | 1,470,000 | 2,880,000 |
| `hairball_LOD2.ply` | 662,775 | 2,210,635 |
| `hairball_LOD3.ply` | 314,921 | 1,819,295 |
| `hairball_LOD4.ply` | 29,962 | 959,678 |

![Hairball LOD1, LOD2 and LOD3](/projects/srgge-project/hairball-thin-features.png)

## Distance-based LOD selection

A time-critical rendering mode picks the best LOD for each object every frame to stay within a fixed triangle budget, favoring objects closer to the camera over distant ones.

![Rendering with fixed, specified LODs](/projects/srgge-project/specified-lods.png)

![Rendering with time-critical LOD selection based on distance](/projects/srgge-project/time-critical-lods.png)

## Cell-to-cell visibility computation

A standalone tool precomputes, for each walkable map cell, which other cells are visible from it, so at runtime the renderer only draws geometry in cells visible from the camera's current position.

![Cell-to-cell visibility culling in action](/projects/srgge-project/cell-to-cell-visibility.gif)

## Building & running

```bash
mkdir build && cd build
cmake ..
make -j
./SRGGE ../map.txt
```

To (re)generate the visibility data used for occlusion culling:

```bash
cd visibility_map_generator
g++ -std=c++11 main.cpp -o visibility
./visibility
```

The `models/` folder is not included in the repository and must be added manually before running.

## Controls

- `P` — toggle LOD debug coloring
- `C` — toggle time-critical rendering mode
- `F` — toggle top-down map view
