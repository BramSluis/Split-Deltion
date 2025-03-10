import { useState } from "react";
import "./map.css";
import newMap from "./mapsImages/satelite.png";
import roadMap from "./mapsImages/streetmap.png";
import oldMap from "./mapsImages/Swolla.png";
import mapJson from "./map.json";
function Map() {
    const [selectedMap, setSelectedMap] = useState(newMap);
    const [opacity, setOpacity] = useState(100);
    const [rotation, setRotation] = useState(0);
    const [overlayMap, setOverlayMap] = useState(null);
    const [opacity2, setOpacity2] = useState(100);
    // const [rotation2, setRotation2] = useState(0);
    const [zoom, setZoom] = useState(1);



    const mapChange = (event) => {
        if (event.target.checked) {
            switch (event.target.value) {
                case "oldMap":
                    setSelectedMap(oldMap);
                    break;
                case "newMap":
                    setSelectedMap(newMap);
                    break;
                case "roadMap":
                    setSelectedMap(roadMap);
                    break;
                default:
                    break;
            }
        }
    };


    const overlayMapChange = (event) => {

        if (event.target.checked) {
            switch (event.target.value) {
                case "oldMap2":
                    setOverlayMap(oldMap);
                    break;
                case "newMap2":
                    setOverlayMap(newMap);
                    break;
                case "roadMap2":
                    setOverlayMap(roadMap);
                    break;
                case "noMap2":
                    setOverlayMap(null);
                default:
                    setOverlayMap(null);
                    break;
            }
        }
    }

    const handleZoomIn = () => {
        if (zoom < 2) {
            setZoom(zoom + 0.1);
        }
    }

    const handleZoomOut = () => {
        if (zoom > 0.5) {
            setZoom(zoom - 0.1);
        }
    }
    return (
        <div className="App">
            <div className="mapContainer">
                <div className="map">
                    <div className="buttons">
                        <button className="zoomIn" onClick={handleZoomIn}>+</button>
                        <button className="zoomOut" onClick={handleZoomOut}>-</button>
                    </div>
                    <map name="map" id="map">
                        <div >

                            <img
                                src={selectedMap}
                                alt="Map"
                            id="map"
                            usemap="#map"
                            style={{
                                opacity: opacity / 100,
                                transform: `rotate(${rotation}deg) scale(${zoom})`,
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }} />

                    </div>
                    {overlayMap && (
                        <img
                            src={overlayMap}
                            alt="Overlay Map"
                            usemap="#map"

                            style={{
                                opacity: opacity2 / 100,
                                transform: `rotate(${rotation}deg)  scale(${zoom})`,
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        />
                    )}
                    
                        {mapJson.map(map => (
                            <area
                                key={map.id}
                                title={map.name}
                                href= "#"
                                coords={map.location}
                                shape="poly"
                               target="_self"
                            />
                        ))}
                    </map>
                </div>
                <div className="mapFunctions">
                    <div>
                        <div className="checkBoxes">
                            <h1>Choose which map you want:</h1><br></br>

                            <input type="radio" id="oldMap" name="basemap" value="oldMap" onChange={mapChange} />
                            <label htmlFor="oldMap">Old map</label><br />

                            <input type="radio" id="newMap" name="basemap" value="newMap" onChange={mapChange} defaultChecked />
                            <label htmlFor="newMap">New map</label><br />

                            <input type="radio" id="roadMap" name="basemap" value="roadMap" onChange={mapChange} />
                            <label htmlFor="roadMap">Road map</label><br />
                        </div><br></br>


                        <div className="range">
                            <label>Opacity:</label>
                            <input
                                type="range"
                                id="opacity"
                                min="0"
                                max="100"
                                value={opacity}
                                onChange={(e) => setOpacity(e.target.value)}
                            /><br />

                            <label>Rotation:</label>
                            <input
                                type="range"
                                id="rotation"
                                min="0"
                                max="360"
                                value={rotation}
                                onChange={(e) => setRotation(e.target.value)}
                            />
                        </div>

                        <div className="radioButtons">
                            <h2>Add another map:</h2>
                            <input type="radio" id="oldMap2" name="overlaymap" value="oldMap2" onChange={overlayMapChange} />
                            <label htmlFor="oldMap2">Old map</label><br />

                            <input type="radio" id="newMap2" name="overlaymap" value="newMap2" onChange={overlayMapChange} />
                            <label htmlFor="newMap2">New map</label><br />

                            <input type="radio" id="roadMap2" name="overlaymap" value="roadMap2" onChange={overlayMapChange} />
                            <label htmlFor="roadMap2">Road map</label><br />

                            <input type="radio" id="noMap2" name="overlaymap" value="noMap2" onChange={overlayMapChange} />
                            <label htmlFor="noMap2">No map</label><br />
                        </div>
                        {overlayMap && (
                            <div>
                                <div className="range2">
                                    <label>Opacity:</label>
                                    <input
                                        type="range"
                                        id="opacity2"
                                        min="0"
                                        max="100"
                                        value={opacity2}
                                        onChange={(e) => setOpacity2(e.target.value)}
                                    /><br />

                                    {/* <label>Rotation:</label>
                                    <input
                                        type="range"
                                        id="rotation2"
                                        min="0"
                                        max="360"
                                        value={rotation2}
                                        onChange={(e) => setRotation2(e.target.value)}
                                    /> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
