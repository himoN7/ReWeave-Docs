# ReWeave Service Reference

High-level reference of core application services and platform interfaces.

## Application Services Overview

ReWeave exposes internal service interfaces for managing simulation execution, document serialization, and hardware acceleration.

### 1. Fabric Physics Service
Coordinates macroscopic sheet drape modeling, drape coefficient calculation, and mechanical stress analysis.
- **Capabilities:** Asynchronous simulation execution, real-time cancellation, drape metric generation.

### 2. Strain Bench Testing Service
Manages virtual mechanical testing procedures for periodic textile unit cells.
- **Capabilities:** Uniaxial tensile loading, trellis shear deformation, cantilever bending, transverse compression.

### 3. 3D Mesh & Geometry Service
Generates continuous 3D swept meshes along analytical yarn centerlines.
- **Capabilities:** Multi-model centerline evaluation, PBR texture mapping, swept profile generation.

### 4. Image Processing & AI Service
Processes digital photographs of fabric samples to extract structural information.
- **Capabilities:** CLAHE contrast equalization, 2D FFT density calculation, binary floating matrix generation.

### 5. Document & Export Service
Manages project persistence, auto-save recovery, and file conversions.
- **Capabilities:** `.weave` project serialization, WIF export/import, DXF, OBJ, and high-resolution PNG image generation.
