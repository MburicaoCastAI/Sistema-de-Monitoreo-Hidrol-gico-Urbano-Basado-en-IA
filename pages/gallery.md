---
layout: default-bilingual
title: "Gallery"
permalink: /pages/gallery/
lang: en
---

# Gallery

<div class="page-content">
    <div class="container">
        <h2>Photos and Events</h2>
        <p>Visual documentation of monitoring activities, flooding events, and community participation in the Mburicaó project.</p>
        
        <div class="info-box">
            <h3><i class="fas fa-images"></i> Event Documentation</h3>
            <p>This gallery contains photos from monitoring stations, past flooding events, and community science activities. These images help document the environmental conditions and provide visual context for our scientific measurements.</p>
        </div>

        <div class="info-box" style="background: #f0f9ff; border-left: 4px solid #3b82f6;">
            <h3>Latest Event Report</h3>
            <p>For detailed information about recent events and comprehensive event documentation, please visit:</p>
            <p><a href="https://www.ing.una.py/FIUNA3/?p=84962" target="_blank" style="color: #3b82f6; font-weight: 600;">FIUNA Publications - Recent Event Report <i class="fas fa-external-link-alt"></i></a></p>
        </div>

        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?river,monitoring" alt="Monitoring station">
                <div class="gallery-caption">Monitoring Station Setup</div>
            </div>
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?flood,water" alt="Flood event">
                <div class="gallery-caption">Flood Event Documentation</div>
            </div>
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?sensor,technology" alt="Sensor installation">
                <div class="gallery-caption">Sensor Installation</div>
            </div>
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?community,science" alt="Community workshop">
                <div class="gallery-caption">Community Science Workshop</div>
            </div>
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?fieldwork,research" alt="Field research">
                <div class="gallery-caption">Field Research Activities</div>
            </div>
            <div class="gallery-item">
                <img src="https://source.unsplash.com/random/400x300/?data,analysis" alt="Data analysis">
                <div class="gallery-caption">Data Analysis Session</div>
            </div>
        </div>

        <style>
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 2rem 0;
            }
            
            .gallery-item {
                position: relative;
                border-radius: 1rem;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.3s;
            }
            
            .gallery-item:hover {
                transform: translateY(-5px);
            }
            
            .gallery-item img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
            
            .gallery-caption {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 1rem;
                text-align: center;
                font-weight: 600;
            }
        </style>
    </div>
</div>