---
title: Point Cloud & Mesh Processing
summary: "Six geometry processing labs: normal estimation, ICP, surface reconstruction, curvatures, smoothing and parameterization."
order: 5
---

Lab projects for the **Geometry Processing** course (MIRI, UPC). Each lab is a small C++ / OpenGL application (GLFW + ImGui + Eigen + nanoflann) that loads a PLY file and lets you play with the algorithm through an on-screen options panel.

**This page is only a quick visual overview of what was implemented.** All the technical details (formulas, implementation decisions, limitations) are in [`Documentation.pdf`](https://github.com/PauAdell/PointCloud-and-Mesh-processing-GPR/blob/main/Documentation.pdf).

## Lab 1 - Normal estimation

Normals are estimated with PCA over the 16 nearest neighbours of each point (smallest eigenvector of the covariance matrix), and oriented using the centroid of the object.

![Normal estimation](/projects/pointcloud-mesh-processing-gpr/normals.png)

## Lab 2 - Iterative Closest Point

Border points are detected from the largest angular gap between neighbours and are excluded from the correspondences. Border detection with a 180° and a 90° threshold:

![Border detection](/projects/pointcloud-mesh-processing-gpr/borders.png)

Each ICP step finds nearest-neighbour correspondences and solves the optimal rotation and translation with an SVD. The process repeats until convergence:

![ICP](/projects/pointcloud-mesh-processing-gpr/icp.gif)

The same process without the animation: initial position (left), after two ICP steps (middle) and the final result once it has converged (right). The red points are the detected borders:

![ICP steps](/projects/pointcloud-mesh-processing-gpr/icp_steps.png)

## Lab 3 - Surface reconstruction

Both methods build an implicit function that is polygonised with Dual Marching Cubes.

- **Hoppe (1992):** signed distance to the tangent plane of the closest point. Works as intended.
- **Radial Basis Functions:** implemented, but it is slow and leaves holes in the result.

Hoppe (left) and RBF (right) on the bunny:

![Reconstruction](/projects/pointcloud-mesh-processing-gpr/reconstruction.png)

## Lab 4 - Curvatures

A quadratic Monge patch is fitted to the neighbourhood of each vertex. Its Hessian gives the principal curvatures, from which the mean and Gaussian curvatures are derived.

Minimum curvature (left) and Gaussian curvature (right):

![Curvatures](/projects/pointcloud-mesh-processing-gpr/curvature.png)

## Lab 5 - Smoothing

Iterative Laplacian, Bilaplacian and Taubin (λ-μ) smoothing, plus global Laplacian and Bilaplacian smoothing that solve a sparse linear system with constrained vertices.

Iterative Laplacian smoothing applied to the corrupted armadillo:

![Smoothing](/projects/pointcloud-mesh-processing-gpr/smoothing.gif)

## Lab 6 - Parameterization

The boundary of a mesh with one hole is mapped onto the unit square, and the interior vertices are placed by solving a harmonic (spring) system.

![Parameterization](/projects/pointcloud-mesh-processing-gpr/parameterization.png)

## Build and run

Requirements: a C++11 compiler, CMake, OpenGL, GLFW 3.3 and GLM. Eigen, ImGui, nanoflann and gl3w are included in each folder.

Each lab folder contains a compressed dataset. Extract it once:

```bash
cd 01-icp-base            && tar xzf points.tgz
cd ../02-reconstruction-base && tar xzf points.tgz
cd ../03-curvatures-base  && tar xzf meshes.tgz
cd ../04-smoothing-base   && tar xzf corrupted.tar.gz
cd ../06-parameterization-base && tar xzf meshes.tgz
```

Then build and run from inside a lab folder, for example:

```bash
cd 01-icp-base
mkdir -p build && cd build
cmake .. && make
./01-icp-base ../points/bunny.ply ../points/bunny.ply   # ICP needs two clouds

cd ../../04-smoothing-base
mkdir -p build && cd build
cmake .. && make
./04-smoothing-base ../corrupted/armadillo.ply
```

All programs read **ASCII PLY** files. Labs 1 and 2 take point clouds (a program prints its usage if the arguments are wrong), and labs 3 to 6 need meshes with faces.
