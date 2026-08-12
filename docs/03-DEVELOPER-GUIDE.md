# ReWeave Developer Overview

High-level summary of the ReWeave engineering stack, system components, and extension points.

## Overview

ReWeave is a high-performance Windows desktop application designed for fabric simulation, textile mechanics, and weave structure analysis.

### Core Stack
- **UI Platform:** WinUI 3 & Windows App SDK (Native Windows Desktop)
- **Runtime:** .NET 8 (Self-contained deployment)
- **3D Graphics & Rendering:** Direct3D 11 & HelixToolkit SharpDX integration
- **Architecture:** Clean MVVM design with loose service coupling

## Key Subsystems

### 1. Fabric Physics Engine
Proprietary Extended Position-Based Dynamics (XPBD) engine supporting real-time sheet drape simulation, tension dynamics, and FEA drape metrics calculation.

### 2. Unit Cell Strain Bench
Virtual mechanical testing suite providing simulated uniaxial tensile, pure shear, cantilever bending, and transverse compression tests for periodic textile unit cells.

### 3. 3D Yarn Geometry Engine
Analytical yarn path generator supporting 6 geometric models (Peirce, Kemp, Fourier, Spline, Bézier, and Float Compensation) with PBR surface mesh generation.

### 4. 2D Weave Design Studio
High-resolution infinite canvas for authoring dobby and jacquard weave patterns, managing warp/weft color repeat sequences, and exporting to standard WIF files.

### 5. Computer Vision & AI Pipeline
Automated pattern capture pipeline utilizing Contrast Limited Adaptive Histogram Equalization (CLAHE) and 2D FFT density estimation to analyze fabric photographs.

## Integration & Extensions
For integration inquiries, plugin development, or enterprise customization, please contact the Rezephyr Studio engineering team.
