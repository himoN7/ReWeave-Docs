# ReWeave Data Models & Formats

Overview of project file formats, design standards, and export compatibility.

## File Format Overview

ReWeave uses standardized, open data formats for project storage and inter-application compatibility.

### ReWeave Project Format (`.weave`)
The primary project container storing complete fabric specifications, weave matrices, yarn material parameters, and simulation state.
- **Features:** Asynchronous auto-save recovery, version metadata tracking, embedded preview thumbnails.

### Weave Information Format (`.wif`)
Full support for industry-standard `.wif` files for importing and exporting dobby weave patterns across weaving applications.

### 3D CAD & Mesh Formats (`.obj`, `.dxf`, `.stl`)
Export continuous 3D swept yarn geometries and unit cell meshes for downstream CAD modeling, FEA software, and 3D printing.

### Image & Document Formats (`.png`, `.jpg`, `.pdf`)
Generate high-resolution technical spec sheets, weave draft diagrams, and photorealistic 3D viewport renderings.
