// Cargador de dashboards Grafana
class GrafanaLoader {
    constructor(config) {
        this.config = config;
        this.iframeElements = new Map();
    }
    
    loadDashboard(dashboardId, elementId, options = {}) {
        const defaultOptions = {
            theme: 'dark',
            kiosk: true,
            refresh: '30s',
            from: 'now-6h',
            to: 'now'
        };
        
        const opts = { ...defaultOptions, ...options };
        const url = `${this.config.grafana_url}/d/${dashboardId}?kiosk=${opts.kiosk}&theme=${opts.theme}&refresh=${opts.refresh}&from=${opts.from}&to=${opts.to}`;
        
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'grafana-iframe';
        iframe.allow = 'fullscreen';
        
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = '';
            container.appendChild(iframe);
            this.iframeElements.set(dashboardId, iframe);
        }
    }
    
    refreshDashboard(dashboardId) {
        const iframe = this.iframeElements.get(dashboardId);
        if (iframe) {
            iframe.src = iframe.src;
        }
    }
}

// Configuración
const grafanaConfig = {
    grafana_url: 'http://200.10.231.202:3000', // Cambiar por tu IP
    dashboards: {
        main: 'lluvia-y-nivel',
        forecasting: 'forecasting-dashboard',
        historical: 'historical-dashboard',
        rainfall: 'rainfall-dashboard'
    }
};

const loader = new GrafanaLoader(grafanaConfig);

// Cargar dashboards cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Dashboard principal
    if (document.getElementById('main-dashboard')) {
        loader.loadDashboard(grafanaConfig.dashboards.main, 'main-dashboard');
    }
    
    // Dashboard de pronósticos
    if (document.getElementById('forecast-dashboard')) {
        loader.loadDashboard(grafanaConfig.dashboards.forecasting, 'forecast-dashboard');
    }
});