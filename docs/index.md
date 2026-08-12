---
layout: default
title: ReWeave Documentation & Showcase
description: Official ReWeave Product & Engineering Documentation - Fabric Simulation, Physics FEA, and AI Vision.
permalink: /
---

<!-- Hero Featured Post / Doc Card -->
<section class="ms-hero-card">
  <div>
    <div class="ms-hero-category">Fabric Physics</div>
    <h1 class="ms-hero-title">ReWeave Fabric Physics Engine: High-Fidelity Garment &amp; Sheet Drape Simulation</h1>
    <p class="ms-hero-excerpt">Experience real-time fabric drape modeling, interactive tension dynamics, and responsive garment visualization engineered for modern textile applications.</p>
    <a href="{{ '/01-USER-GUIDE' | relative_url }}" class="ms-btn-dark">
      Read User Guide <i class="fa-solid fa-arrow-right" style="margin-left: 6px; font-size: 0.85em;"></i>
    </a>
  </div>
  <div class="ms-hero-img-wrap">
    <img src="{{ '/assets/images/physics_after_solve.png' | relative_url }}" alt="ReWeave Fabric Physics Engine: High-Fidelity Garment &amp; Sheet Drape Simulation" />
  </div>
</section>

<!-- Feature Showcase Grid (4 Columns) -->
<section>
  <div class="ms-section-header">
    <div>
      <h2 class="ms-section-title">Product Feature Showcases</h2>
      <p class="ms-section-desc">Key engineering modules and physics capabilities in ReWeave Studio.</p>
    </div>
  </div>

  <div class="ms-grid-4" id="showcaseGrid">
    <a href="{{ '/17-PHYSICS-MODELS' | relative_url }}" class="ms-card" data-category="Strain Bench" data-title="unit cell strain bench: virtual textile mechanical testing suite">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/strain_live_uniaxial_after.png' | relative_url }}" alt="Unit Cell Strain Bench" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 10, 2026</div>
        <h3 class="ms-card-title">Unit Cell Strain Bench: Virtual Mechanical Testing</h3>
        <p class="ms-card-excerpt">Simulate periodic fabric samples under tensile, shear, bending, and compression testing protocols in a virtual 3D workspace.</p>
        <div class="ms-card-footer">
          <span>Hamed Rezaei Adaryani</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/14-EXPORT-FORMATS' | relative_url }}" class="ms-card" data-category="3D Simulation" data-title="3d yarn path modeling &amp; photorealistic surface rendering">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/3d_simulation_hero.png' | relative_url }}" alt="3D Yarn Path Modeling" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 8, 2026</div>
        <h3 class="ms-card-title">3D Yarn Path Modeling &amp; Surface Rendering</h3>
        <p class="ms-card-excerpt">Generate mathematical 3D yarn centerlines and PBR swept meshes across multiple analytical yarn geometry models.</p>
        <div class="ms-card-footer">
          <span>ReWeave Engineering Team</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/09-DATA-MODELS' | relative_url }}" class="ms-card" data-category="Weave Design" data-title="2d weave design studio: infinite canvas &amp; built-in pattern library">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/weave_studio_live.png' | relative_url }}" alt="2D Weave Design Studio" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 5, 2026</div>
        <h3 class="ms-card-title">2D Weave Design Studio: Infinite Canvas</h3>
        <p class="ms-card-excerpt">Author custom dobby and jacquard weave patterns with accent warp/weft color repeats, 27 built-in templates, and instant 2D previews.</p>
        <div class="ms-card-footer">
          <span>ReWeave UX Team</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/01-USER-GUIDE' | relative_url }}" class="ms-card" data-category="AI Vision &amp; Analytics" data-title="ai weave recognition: automated pattern capture from fabric photos">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/image_analyzer_hero.png' | relative_url }}" alt="AI Weave Recognition" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 3, 2026</div>
        <h3 class="ms-card-title">AI Weave Recognition: Photo Pattern Capture</h3>
        <p class="ms-card-excerpt">Recognize weave structures automatically from fabric photographs using advanced image processing and density estimation.</p>
        <div class="ms-card-footer">
          <span>ReWeave AI Research</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>
  </div>
</section>

<!-- Additional Showcase Sections -->
<section class="cat-section-block" data-cat-name="3D Simulation">
  <div class="ms-section-header">
    <div>
      <h2 class="ms-section-title">3D Simulation &amp; PBR Customization</h2>
      <p class="ms-section-desc">Latest news, product features, and engineering updates for 3D Simulation.</p>
    </div>
  </div>

  <div class="ms-grid-3">
    <a href="{{ '/14-EXPORT-FORMATS' | relative_url }}" class="ms-card" data-category="3D Simulation" data-title="yarn materials &amp; substance 3d pbr texture customization">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/strain_detail.png' | relative_url }}" alt="Yarn Materials &amp; PBR Texture Customization" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 2, 2026</div>
        <h3 class="ms-card-title">Yarn Materials &amp; Substance 3D PBR Texture Customization</h3>
        <p class="ms-card-excerpt">Enhance fabric realism with PBR material packs, customizable fiber twist, packing factors, and surface hairiness.</p>
        <div class="ms-card-footer">
          <span>ReWeave Design Team</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/19-PLATFORM-DEPLOYMENT' | relative_url }}" class="ms-card" data-category="Developer &amp; Packaging" data-title="deploying reweave: native desktop architecture &amp; msix packaging">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/packaging_live.png' | relative_url }}" alt="Deploying ReWeave Native Desktop Architecture" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 1, 2026</div>
        <h3 class="ms-card-title">Deploying ReWeave: Native Desktop &amp; MSIX Packaging</h3>
        <p class="ms-card-excerpt">Built with WinUI 3, .NET 8 self-contained deployment, and single .msixbundle packaging for seamless Windows 10/11 installation.</p>
        <div class="ms-card-footer">
          <span>ReWeave DevOps</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/13-FEATURES-COMPLETE' | relative_url }}" class="ms-card" data-category="Fabric Physics" data-title="complete feature matrix &amp; solver capabilities">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/fabric_physics_hero.png' | relative_url }}" alt="Complete Feature Matrix" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">July 28, 2026</div>
        <h3 class="ms-card-title">Complete Feature Matrix &amp; Engine Capabilities</h3>
        <p class="ms-card-excerpt">Detailed overview of XPBD sheet drape, Cosserat rod backends, MITC4 FEA solvers, and material parameters.</p>
        <div class="ms-card-footer">
          <span>ReWeave Product Team</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>
  </div>
</section>

<!-- Full Documentation Modules Section -->
<section>
  <div class="ms-section-header">
    <div>
      <h2 class="ms-section-title">Documentation Manuals &amp; Guides</h2>
      <p class="ms-section-desc">Complete index of technical guides, developer references, and architecture manuals.</p>
    </div>
  </div>

  <div class="ms-grid-4" id="docsIndexGrid">
    {% assign docs_pages = site.pages | sort: 'path' %}
    {% for doc in docs_pages %}
      {% unless doc.name contains '_' %}
      {% if doc.name != 'index.md' and doc.name != 'README.md' and doc.name != 'DOCUMENTATION-SUMMARY.md' %}
        {% assign name = doc.name | remove: '.md' | replace: '-',' ' | capitalize %}
        {% assign cat = 'Developer & Packaging' %}
        {% if doc.name contains 'USER' or doc.name contains 'PHYSICS' or doc.name contains 'FEATURES' %}
          {% assign cat = 'Fabric Physics' %}
        {% elsif doc.name contains 'DATA' or doc.name contains 'KEYBOARD' %}
          {% assign cat = 'Weave Design' %}
        {% elsif doc.name contains 'EXPORT' %}
          {% assign cat = '3D Simulation' %}
        {% elsif doc.name contains 'TESTING' or doc.name contains 'PERFORMANCE' %}
          {% assign cat = 'Strain Bench' %}
        {% endif %}
        
        <a href="{{ doc.url | relative_url }}" class="ms-card" data-category="{{ cat }}" data-title="{{ doc.title | default: name | downcase }}">
          <div class="ms-card-body" style="padding-top: 24px;">
            <div class="ms-card-date">{{ cat }}</div>
            <h3 class="ms-card-title">{{ doc.title | default: name }}</h3>
            <p class="ms-card-excerpt">
              {% if doc.description %}
                {{ doc.description }}
              {% elsif doc.excerpt %}
                {{ doc.excerpt | strip_html | truncate: 110 }}
              {% else %}
                Technical reference and manual for {{ doc.title | default: name }} in ReWeave Studio.
              {% endif %}
            </p>
            <div class="ms-card-footer">
              <span>Read Article</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
      {% endif %}
      {% endunless %}
    {% endfor %}
  </div>
</section>
