# ReWeave System Architecture

High-level architectural overview of the ReWeave Studio simulation platform.

## System Overview

ReWeave is architected as a native Windows application built on WinUI 3 and .NET 8. The system uses a modular, multi-tier architecture to deliver real-time physics interactive visual rendering.

```
┌─────────────────────────────────────────────────────────┐
│               WinUI 3 Presentation Layer                 │
│         (Fluent Design 2, Mica Backdrops, Views)        │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│                MVVM Application Services                │
│       (State Management, Navigation, Commands)          │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│            Core Simulation & Graphics Engine            │
│  (XPBD Physics, 3D Mesh Generation, Direct3D 11)        │
└─────────────────────────────────────────────────────────┘
```

## Architectural Highlights

### Modular Subsystem Separation
- **Presentation Layer:** Built with XAML and WinUI 3 controls adhering to Microsoft Fluent Design 2 guidelines.
- **Application Logic:** Structured using modern MVVM pattern for responsive, asynchronous UI updates and background task execution.
- **Physics & Graphics Core:** High-performance simulation pipeline featuring GPU-assisted rendering and numerical solvers.

### Performance & Memory Management
- **Asynchronous Execution:** Heavy physics calculations run off the main UI thread to maintain 60 FPS viewport interaction.
- **Direct3D Hardware Acceleration:** High-density 3D swept yarn meshes and surface textures are rendered via DirectX 11.
- **Self-Contained Deployment:** Packaged as a single MSIX bundle with zero external framework dependencies.
