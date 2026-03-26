---
layout: dashboard
title: "Real Time Forecasting - Monitoreo Mburicao"
permalink: /pages/real-time-forecasting/
custom_css: "/assets/css/dashboard.css"
custom_js: "/assets/js/forecasting.js"
---

# Predicciones en Tiempo Real

## Pronóstico de Nivel de Agua

<div class="forecast-container">
    <div class="forecast-header">
        <h3>Próximas 48 horas</h3>
        <div class="last-update">Actualizado: <span id="last-update">--</span></div>
    </div>
    
    <div class="forecast-chart">
        <canvas id="forecast-chart"></canvas>
    </div>
    
    <div class="forecast-alerts">
        <div class="alert-level normal">
            <i class="fas fa-check-circle"></i>
            <strong>Nivel Normal</strong>
            <span>Por debajo de 2.5m</span>
        </div>
        <div class="alert-level warning">
            <i class="fas fa-exclamation-triangle"></i>
            <strong>Alerta Amarilla</strong>
            <span>2.5m - 3.0m</span>
        </div>
        <div class="alert-level danger">
            <i class="fas fa-skull-crossbones"></i>
            <strong>Alerta Roja</strong>
            <span>Superior a 3.0m</span>
        </div>
    </div>
</div>

## Modelo Predictivo IA

<div class="model-info">
    <div class="model-card">
        <i class="fas fa-brain"></i>
        <h4>LSTM Neural Network</h4>
        <p>Modelo entrenado con 5 años de datos históricos</p>
        <div class="accuracy">Precisión: 94%</div>
    </div>
    
    <div class="model-card">
        <i class="fas fa-chart-line"></i>
        <h4>HEC-HMS Simulation</h4>
        <p>Modelo hidrológico distribuido de la cuenca</p>
        <div class="accuracy">Calibración: R² 0.89</div>
    </div>
</div>

## Dashboard Grafana - Predicciones

<div class="grafana-embed">
    <iframe 
        src="{{ site.grafana_url }}/d/forecasting-dashboard?kiosk=tv"
        frameborder="0"
        allow="fullscreen">
    </iframe>
</div>

<script>
// Datos del pronóstico (ejemplo)
const forecastData = {
    timestamps: [],
    predicted: [],
    observed: [],
    confidence: []
};

// Configuración para actualización cada 30 minutos
setInterval(updateForecast, 1800000);
</script>