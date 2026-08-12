# ReWeave Physics Models & Solvers

Overview of physical simulation capabilities and numerical solver engines in ReWeave.

## Simulation Solvers

ReWeave incorporates dual-scale physical solver engines to model fabric mechanical behavior across macroscopic and microscopic scales.

### 1. Extended Position-Based Dynamics (XPBD) Sheet Drape
Designed for real-time garment and sheet drape simulation under interactive user manipulation.
- **Drape Dynamics:** Computes realistic gravity drape, surface contact, and self-collision handling.
- **Tension & Stiffness Control:** Supports non-linear stretch and flexural rigidity constraints tailored to textile physical metrics.

### 2. Cosserat Rod Unit Cell Mechanics
Specialized micro-scale mechanical solver evaluating periodic yarn unit cells.
- **Bending & Torsion:** Models individual yarn centerline curvature and torsional resistance.
- **Cross-Over Contact:** Simulates yarn-to-yarn compression and friction at weave intersections.

### 3. MITC4 Linear FEA Drape Solver
Linear Mixed Interpolation of Tensorial Components (MITC4) shell element FEA solver for standardized drape coefficient evaluation and flexural stiffness testing.
