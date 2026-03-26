---
layout: default
title: "3D Map - Cuenca del Arroyo Mburicao"
permalink: /pages/3d-map/
custom_css: "/assets/css/map.css"
custom_js: "/assets/js/3d-map.js"
---

# Mapa Interactivo 3D

## Visualización de la Cuenca

<div class="map-container">
    <div id="map3d"></div>
    <div class="map-controls">
        <button id="toggle-terrain" class="map-btn">
            <i class="fas fa-mountain"></i> Terreno
        </button>
        <button id="toggle-sensors" class="map-btn">
            <i class="fas fa-microchip"></i> Sensores
        </button>
        <button id="toggle-flood-zones" class="map-btn">
            <i class="fas fa-water"></i> Zonas Inundables
        </button>
    </div>
</div>

## Puntos de Monitoreo

<div class="sensors-list">
    <div class="sensor-card" data-lat="-25.263" data-lng="-57.575">
        <h4>Estación 1 - Av. España</h4>
        <div class="sensor-data">
            <span><i class="fas fa-tint"></i> Nivel: 1.85m</span>
            <span><i class="fas fa-chart-line"></i> Caudal: 2.3 m³/s</span>
        </div>
        <div class="sensor-status normal">Normal</div>
    </div>
    
    <div class="sensor-card" data-lat="-25.278" data-lng="-57.589">
        <h4>Estación 2 - Santa Teresa</h4>
        <div class="sensor-data">
            <span><i class="fas fa-tint"></i> Nivel: 2.35m</span>
            <span><i class="fas fa-chart-line"></i> Caudal: 3.8 m³/s</span>
        </div>
        <div class="sensor-status warning">Alerta</div>
    </div>
    
    <div class="sensor-card" data-lat="-25.295" data-lng="-57.602">
        <h4>Estación 3 - Desembocadura</h4>
        <div class="sensor-data">
            <span><i class="fas fa-tint"></i> Nivel: 1.52m</span>
            <span><i class="fas fa-chart-line"></i> Caudal: 1.9 m³/s</span>
        </div>
        <div class="sensor-status normal">Normal</div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>