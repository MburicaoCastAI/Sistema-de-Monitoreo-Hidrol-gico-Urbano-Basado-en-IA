---
layout: default
title: "Registrations - Participación Ciudadana"
permalink: /pages/registrations/
custom_css: "/assets/css/form.css"
custom_js: "/assets/js/registrations.js"
---

# Ciencia Ciudadana

## Reporta en Tiempo Real

<div class="registration-container">
    <div class="form-section">
        <h3>Envía tu Reporte</h3>
        
        <form id="citizen-report-form">
            <div class="form-group">
                <label for="name"><i class="fas fa-user"></i> Nombre</label>
                <input type="text" id="name" required>
            </div>
            
            <div class="form-group">
                <label for="location"><i class="fas fa-map-marker-alt"></i> Ubicación</label>
                <button type="button" id="get-location" class="btn-location">
                    <i class="fas fa-location-dot"></i> Obtener ubicación
                </button>
                <input type="text" id="location" placeholder="O manualmente" readonly>
                <input type="hidden" id="lat">
                <input type="hidden" id="lng">
            </div>
            
            <div class="form-group">
                <label for="report-type"><i class="fas fa-tag"></i> Tipo de Reporte</label>
                <select id="report-type" required>
                    <option value="">Seleccionar...</option>
                    <option value="flood">Inundación</option>
                    <option value="water-level">Nivel de agua anormal</option>
                    <option value="pollution">Contaminación</option>
                    <option value="infrastructure">Infraestructura dañada</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="description"><i class="fas fa-pen"></i> Descripción</label>
                <textarea id="description" rows="4" required></textarea>
            </div>
            
            <div class="form-group">
                <label><i class="fas fa-image"></i> Imágenes / Videos</label>
                <div class="file-upload">
                    <input type="file" id="media" accept="image/*,video/*" multiple>
                    <div class="file-list" id="file-list"></div>
                </div>
            </div>
            
            <button type="submit" class="btn-submit">
                <i class="fas fa-paper-plane"></i> Enviar Reporte
            </button>
        </form>
    </div>
    
    <div class="recent-reports">
        <h3>Reportes Recientes</h3>
        <div id="reports-feed">
            <!-- Los reportes se cargarán dinámicamente -->
        </div>
    </div>
</div>

## Mapa de Reportes Ciudadanos

<div class="reports-map">
    <div id="citizen-map"></div>
    <div class="map-legend">
        <span><i class="fas fa-circle" style="color: #ef4444;"></i> Inundaciones</span>
        <span><i class="fas fa-circle" style="color: #f59e0b;"></i> Nivel alto</span>
        <span><i class="fas fa-circle" style="color: #10b981;"></i> Contaminación</span>
    </div>
</div>