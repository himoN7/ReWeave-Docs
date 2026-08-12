# Performance & Optimization Overview

Summary of rendering optimizations and physics solver performance.

## Optimization Highlights

### 1. GPU Surface Rendering
Swept yarn 3D meshes and PBR textures are rendered using DirectX 11 hardware acceleration to maintain smooth 60 FPS viewport interaction.

### 2. Multi-Threaded Physics Solvers
XPBD constraint solving and Cosserat rod calculations execute on dedicated background thread pools, keeping the WinUI 3 interface responsive during complex drape simulations.

### 3. Memory & Asset Management
Efficient mesh buffering and texture recycling minimize memory consumption even with complex 256 × 256 weave matrix repeats.
