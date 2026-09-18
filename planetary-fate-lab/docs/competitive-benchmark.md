# Planetary Fate Lab — Competitive Benchmark & Next-Gen Product Direction

Updated: 2026-09-18

## Positioning
Planetary Fate Lab should not try to be only a planetarium, only a physics sandbox, or only a spaceflight game. Its strongest differentiator is the combination of:
- evidence-labeled planetary science;
- live/public operational data;
- causal hazard/recovery simulation;
- branching story and Action Director;
- mission operations, SAR, colonization and team play;
- enterprise/classroom modes;
- speculative technology separated from demonstrated engineering.

## Benchmarks

### NASA Eyes
Strengths:
- browser-based interactive 3D;
- hundreds of worlds and 170+ NASA missions;
- full Mars terrain and free-fly;
- trajectory views;
- Lagrange points;
- mission-event bookmarks;
- frequent real-mission data updates;
- share/embed/deep-link workflows.

Adopt:
1. Universal free-fly mode from surface to interplanetary space.
2. Mission trajectory overlays with timeline scrubber.
3. Event bookmarks that automatically select camera, time and target.
4. Shareable deep links that encode world, time, camera, mission and scenario.
5. Progressive terrain streaming for Earth/Mars/Moon.

### SpaceEngine
Strengths:
- seamless 1:1-scale traversal;
- real catalog objects plus procedural unknown regions;
- surface-to-galaxy navigation;
- time acceleration/reversal;
- 3D terrain;
- object search and maps;
- saved locations/journal;
- spacecraft flight;
- modding;
- VR;
- context-sensitive music.

Adopt:
1. Seamless scale ladder: surface → orbit → system → interstellar.
2. Universal search box for body, mission, craft, launch site, event and saved scenario.
3. Saved locations / mission journal / favorites.
4. Time control with real orbital animation.
5. Optional creator packs and community scenarios with provenance labels.
6. VR/AR adapter architecture rather than platform-specific scene duplication.

### Universe Sandbox
Strengths:
- interactive gravity and collision simulation;
- dynamic heating and surface systems;
- fragmentation;
- atmospheric drag;
- multi-object editing;
- body deformation under fast rotation and gravity;
- performance-focused simulation architecture.

Adopt:
1. Dedicated physics worker/thread separated from UI rendering.
2. Multi-body gravity mode for sandbox experiments.
3. Atmospheric entry, drag and ablation model.
4. Fragmentation/ejecta particle representation with strict performance tiers.
5. Oblateness/shape deformation for rapid rotation.
6. Surface energy budget and phase-state overlays.

### Kerbal Space Program
Strengths:
- spacecraft construction;
- understandable orbital mechanics;
- crew management;
- science/career/sandbox modes;
- EVA;
- docking;
- bases and stations;
- progression and strong failure/retry loops.

Adopt:
1. Modular craft designer with mass, power, thrust, delta-v, thermal and comm budgets.
2. Career/science progression tied to educational objectives rather than grinding.
3. Docking/rendezvous training mini-games.
4. Crew qualifications and mission-readiness scoring.
5. Colony logistics connected to actual transfer windows and infrastructure.

### CesiumJS
Strengths:
- global terrain and imagery;
- 3D Tiles;
- glTF;
- vectors;
- real-time/time-dynamic data;
- multiple globe/map modes.

Adopt:
1. Cesium as the Earth/local-scale geospatial layer.
2. 3D Tiles for cities, launch sites, terrain and institutional datasets.
3. CZML for missions, satellites and time-dynamic trajectories.
4. Runtime switching between global/orbital view and local terrain view.

### Stellarium / Celestia / Solar System Scope
Strengths:
- accurate sky and ephemerides;
- fast object search;
- labels/orbit overlays;
- real-time sky positions;
- accessible controls;
- extensibility/modding;
- phone-friendly astronomy exploration.

Adopt:
1. Unified search + autocomplete.
2. Toggleable labels, orbit lines, grids and reference planes.
3. Sky-observer mode from any world.
4. Constellation / star / deep-sky expansion as optional astronomy layer.
5. Side-by-side scale comparison and measurement tools.

## Priority Roadmap

### P0 — immediate
- True 3D/WebGL planetary spheres with GPU shaders.
- Search-anything command palette.
- Time controls with play/pause/speed/reverse/date.
- Mission trajectory overlays.
- Scale comparison mode.
- Saved views/deep links.
- Performance profiler + adaptive quality presets.

### P1 — flagship differentiation
- Real terrain transition for Earth/Moon/Mars.
- Craft builder and delta-v/thermal/power budgets.
- SAR mission generator.
- Colony supply chains and transfer windows.
- Multiplayer mission roles and team objectives.
- Replayable Action Director timeline.
- Physics worker with multi-body gravity and atmospheric entry.

### P2 — institutional / next-gen
- Classroom teacher console.
- Assignment/scenario authoring.
- Shared synchronized sessions.
- Assessment and learning analytics.
- AR tabletop Solar System.
- VR exploration.
- Museum/dome projection mode.
- Open scenario/plugin format with signed official packs.

## Differentiation Rule
Do not compete by copying competitors feature-for-feature. Planetary Fate Lab should use:
**NASA-grade provenance + SpaceEngine-scale exploration + Universe-Sandbox-style causal physics + KSP-style mission agency + SimCity-style systems management + cinematic branching storytelling.**
