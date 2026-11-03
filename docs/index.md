---
layout: default
title: ReWeave Documentation & Showcase
description: Design dobby and layered weaves, preview yarn geometry, and explore drape and mechanical tests on your PC.
permalink: /
---

<!-- Hero Featured Post / Doc Card -->
<section class="ms-hero-card">
  <div>
    <div class="ms-hero-category">ReWeave studio</div>
    <h1 class="ms-hero-title">Design weaves, preview yarn geometry, and explore drape on your PC</h1>
    <p class="ms-hero-excerpt">ReWeave is a Windows studio for dobby and layered fabric. Projects stay on this computer. The current Store edition saves and reopens <code>.reweave</code> files and does not export loom, image, or CAD files.</p>
    <a href="{{ '/01-USER-GUIDE' | relative_url }}" class="ms-btn-dark">
      Read User Guide <i class="fa-solid fa-arrow-right" style="margin-left: 6px; font-size: 0.85em;"></i>
    </a>
  </div>
  <div class="ms-hero-img-wrap">
    <img src="{{ '/assets/images/physics_after_solve.png' | relative_url }}" alt="ReWeave drape preview after a physics solve" />
  </div>
</section>

<!-- Feature Showcase Grid (4 Columns) -->
<section>
  <div class="ms-section-header">
    <div>
      <h2 class="ms-section-title">Product Feature Showcases</h2>
      <p class="ms-section-desc">What the current Windows app includes. Mechanical tests are analytical tracks, not a laboratory certificate.</p>
    </div>
  </div>

  <div class="ms-grid-4" id="showcaseGrid">
    <a href="{{ '/17-PHYSICS-MODELS' | relative_url }}" class="ms-card" data-category="Strain Bench" data-title="unit cell strain bench: virtual textile mechanical testing suite">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/strain_live_uniaxial_after.png' | relative_url }}" alt="Unit Cell Strain Bench" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">August 10, 2026</div>
        <h3 class="ms-card-title">Mechanical tests</h3>
        <p class="ms-card-excerpt">Tensile, shear, bending, and compression tracks for a periodic fabric sample. The app labels analytical results so they are not read as a measured lab curve.</p>
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
        <h3 class="ms-card-title">Yarn geometry</h3>
        <p class="ms-card-excerpt">Yarn centerlines from Peirce, Kemp, elastica, and related analytical models, with a 3D preview in the app. Mesh export is not in the current Store edition.</p>
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
        <h3 class="ms-card-title">Weave design</h3>
        <p class="ms-card-excerpt">Dobby and layered drafts, warp and weft colour repeats, and a built-in weave library. Jacquard editing is not in this edition.</p>
        <div class="ms-card-footer">
          <span>ReWeave UX Team</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>

    <a href="{{ '/store-listing.html' | relative_url }}" class="ms-card" data-category="Developer &amp; Packaging" data-title="microsoft store listing privacy policy and current edition">
      <div class="ms-card-img-wrap">
        <img src="{{ '/assets/images/app_icon.png' | relative_url }}" alt="ReWeave app icon" loading="lazy" />
      </div>
      <div class="ms-card-body">
        <div class="ms-card-date">November 3, 2026</div>
        <h3 class="ms-card-title">Store listing and privacy</h3>
        <p class="ms-card-excerpt">Partner Center copy for this edition, plus the privacy policy and data disclosure the listing must link to.</p>
        <div class="ms-card-footer">
          <span>ReZephyr</span>
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
        <h3 class="ms-card-title">Yarn materials</h3>
        <p class="ms-card-excerpt">Fiber, twist, and surface settings used by the geometry preview. Substance 3D packs are not part of this edition.</p>
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
        <h3 class="ms-card-title">Windows desktop package</h3>
        <p class="ms-card-excerpt">WinUI 3 on .NET 10, packaged for Windows 10 and Windows 11 (x86, x64, and ARM64). Microsoft signs the Store build.</p>
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
        <h3 class="ms-card-title">What this edition includes</h3>
        <p class="ms-card-excerpt">Design, yarns, geometry, drape, and mechanical tests. Models, Analyzer, Jacquard, and artifact export are outside this Store edition.</p>
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
