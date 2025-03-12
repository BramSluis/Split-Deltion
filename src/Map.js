import React from 'react';
import { useState } from "react";
import "./map.css";
import newMap from "./mapsImages/satelite.png";
import roadMap from "./mapsImages/streetmap.png";
import oldMap from "./mapsImages/Swolla.png";

function Map() {
    const [selectedMap, setSelectedMap] = useState(newMap);
    const [opacity, setOpacity] = useState(100);
    const [overlayMap, setOverlayMap] = useState(null);
    const [opacity2, setOpacity2] = useState(100);
    const [zoom, setZoom] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);

    const mapChange = (event) => {
        const value = event.target.value;
        setSelectedMap(value === "oldMap" ? oldMap : value === "roadMap" ? roadMap : newMap);
    };

    const overlayMapChange = (event) => {
        const value = event.target.value;
        setOverlayMap(value === "oldMap2" ? oldMap : value === "roadMap2" ? roadMap : value === "newMap2" ? newMap : null);
    };

    const handleZoom = (factor) => {
        setZoom((prevZoom) => Math.max(0.5, Math.min(2, prevZoom + factor)));
    };

    return (
        <div className="map-page">
            {/* Sidebar Menu */}
            <div className={`sidebar ${menuOpen ? "open" : ""}`}>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "←" : "→"}
                </button>
                <div className="menu-content">
                    <label>Choose Base Map:</label>
                    <select onChange={mapChange} defaultValue="newMap">
                        <option value="newMap">New Map</option>
                        <option value="oldMap">Old Map</option>
                        <option value="roadMap">Road Map</option>
                    </select>
                    <input type="range" min="0" max="100" value={opacity} onChange={(e) => setOpacity(e.target.value)} />

                    <label>Add Overlay Map:</label>
                    <select onChange={overlayMapChange} defaultValue="noMap2">
                        <option value="noMap2">No Overlay</option>
                        <option value="newMap2">New Map</option>
                        <option value="oldMap2">Old Map</option>
                        <option value="roadMap2">Road Map</option>
                    </select>
                    {overlayMap && <input type="range" min="0" max="100" value={opacity2} onChange={(e) => setOpacity2(e.target.value)} />}

                    {/* Move Zoom Buttons Here */}
                    <div className="zoom-controls">
                        <button className="zoom-btn zoom-in" onClick={() => handleZoom(0.1)}>+</button>
                        <button className="zoom-btn zoom-out" onClick={() => handleZoom(-0.1)}>-</button>
                    </div>
                </div>
            </div>

            {/* Map container */}
            <div className="map-wrapper">
                <div className="map-container-inner">
                    <img src={selectedMap} alt="Map" className="map" style={{ opacity: opacity / 100, transform: `scale(${zoom})` }} />
                    {overlayMap && <img src={overlayMap} alt="Overlay Map" className="map overlay" style={{ opacity: opacity2 / 100, transform: `scale(${zoom})` }} />}
                </div>
            </div>
        </div>
    );
}

export default Map;