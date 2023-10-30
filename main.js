// import Scaleline from "ol/control/ScaleLine.js";

function loadMap() {
    const view = new ol.View({
        center : [0,0],
        zoom : 2
    })
    const layers = [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
    const target = "map"

    const map = new ol.Map({
        layers: layers,
        view: view,
        target: target
    })
    const fullScreenControl = new ol.control.FullScreen();
    map.addControl(fullScreenControl)
}

window.onload = loadMap