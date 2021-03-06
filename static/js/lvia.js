// init map, set world view?
var map = L.map('map');
map.setView([51.2, 7], 9);

//add basemap
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomControl: false,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicy1jb3JiZXR0IiwiYSI6ImNrdXplb3ZwMTB4YnYyb3FxYmFnOXh3NXIifQ.-6qtWspRRH3FWkNs6dDkaA'
}).addTo(map);

// add zoom control in bottom right!
//L.control.zoom({
//    position: 'bottomright'
//}).addTo(map);

// init vps geojson
var viewpoints = {
    "type": "FeatureCollection",
    "name": "viewpoints_4326",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "VP_No": 1, "VP_Name": "Track near Maovally" }, "geometry": { "type": "Point", "coordinates": [-4.753193803646453, 58.145997293104685] } },
        { "type": "Feature", "properties": { "VP_No": 2, "VP_Name": "Ben More Assynt" }, "geometry": { "type": "Point", "coordinates": [-4.858017710624069, 58.137462234269137] } },
        { "type": "Feature", "properties": { "VP_No": 3, "VP_Name": "Coire Ceann Loch" }, "geometry": { "type": "Point", "coordinates": [-4.819547579179524, 58.196505974058958] } },
        { "type": "Feature", "properties": { "VP_No": 4, "VP_Name": "Arscaig track, Loch Shin" }, "geometry": { "type": "Point", "coordinates": [-4.530324914879478, 58.091131975343615] } },
        { "type": "Feature", "properties": { "VP_No": 5, "VP_Name": "A838 near Colaboll" }, "geometry": { "type": "Point", "coordinates": [-4.445622827819274, 58.061634619964558] } },
        { "type": "Feature", "properties": { "VP_No": 6, "VP_Name": "A838 near Achnairn" }, "geometry": { "type": "Point", "coordinates": [-4.464029272476647, 58.074110747011339] } },
        { "type": "Feature", "properties": { "VP_No": 7, "VP_Name": "A838 Cnoc an Laoigh" }, "geometry": { "type": "Point", "coordinates": [-4.552148613752386, 58.136280289126816] } },
        { "type": "Feature", "properties": { "VP_No": 8, "VP_Name": "A838 near Fiag" }, "geometry": { "type": "Point", "coordinates": [-4.636238489082844, 58.150177017813192] } },
        { "type": "Feature", "properties": { "VP_No": 9, "VP_Name": "A838 west of Overscaig" }, "geometry": { "type": "Point", "coordinates": [-4.701588835707991, 58.171669177536153] } },
        { "type": "Feature", "properties": { "VP_No": 10, "VP_Name": "A838 Loch a' Ghriama" }, "geometry": { "type": "Point", "coordinates": [-4.735264460306788, 58.201342205962959] } },
        { "type": "Feature", "properties": { "VP_No": 11, "VP_Name": "A838 near West Merkland" }, "geometry": { "type": "Point", "coordinates": [-4.751310707420883, 58.253179370611022] } },
        { "type": "Feature", "properties": { "VP_No": 12, "VP_Name": "Ben Hee" }, "geometry": { "type": "Point", "coordinates": [-4.68377204618457, 58.26578594301477] } },
        { "type": "Feature", "properties": { "VP_No": 13, "VP_Name": "Cnoc an Alaskie" }, "geometry": { "type": "Point", "coordinates": [-4.562515411929614, 58.203904083319117] } },
        { "type": "Feature", "properties": { "VP_No": 14, "VP_Name": "West Shinness" }, "geometry": { "type": "Point", "coordinates": [-4.48926533625289, 58.100899550136376] } },
        { "type": "Feature", "properties": { "VP_No": 15, "VP_Name": "Achnairn" }, "geometry": { "type": "Point", "coordinates": [-4.458013303239216, 58.078369262867945] } },
        { "type": "Feature", "properties": { "VP_No": 16, "VP_Name": "A836 near Lairg" }, "geometry": { "type": "Point", "coordinates": [-4.424202406113277, 58.04250141658197] } },
        { "type": "Feature", "properties": { "VP_No": 17, "VP_Name": "A836 north Dalchork" }, "geometry": { "type": "Point", "coordinates": [-4.487886896006204, 58.154901500309926] } },
        { "type": "Feature", "properties": { "VP_No": 18, "VP_Name": "A836 Crask Viewpoint" }, "geometry": { "type": "Point", "coordinates": [-4.515932339611426, 58.179914611172116] } },
        { "type": "Feature", "properties": { "VP_No": 19, "VP_Name": "Ben Klibreck" }, "geometry": { "type": "Point", "coordinates": [-4.411131337951866, 58.235076089087336] } },
        { "type": "Feature", "properties": { "VP_No": 20, "VP_Name": "Lairg" }, "geometry": { "type": "Point", "coordinates": [-4.401012085460457, 58.023901414092222] } },
        { "type": "Feature", "properties": { "VP_No": 21, "VP_Name": "Rhian Breck, Lairg" }, "geometry": { "type": "Point", "coordinates": [-4.372849397322764, 58.010359076529987] } },
        { "type": "Feature", "properties": { "VP_No": 22, "VP_Name": "Quinag" }, "geometry": { "type": "Point", "coordinates": [-5.050168654218719, 58.215069719912556] } },
        { "type": "Feature", "properties": { "VP_No": 23, "VP_Name": "Arkle" }, "geometry": { "type": "Point", "coordinates": [-4.889256984121468, 58.360756164395809] } }
    ]
};

// make sidebar here
var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left'
});

// add sidebar to map
map.addControl(sidebar);

// using panTo offset function from :D https://gis.stackexchange.com/questions/218102/how-do-i-zoom-pan-to-a-leaflet-map-such-that-the-given-point-is-off-center
L.Map.prototype.panToOffset = function (latlng, offset, options) {
    var x = this.latLngToContainerPoint(latlng).x - offset[0]
    var y = this.latLngToContainerPoint(latlng).y - offset[1]
    var point = this.containerPointToLatLng([x, y])
    return this.setView(point, this._zoom, { pan: options })
}

// create updateIcon
var makeRed = L.Icon.extend({
    options: {
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }
});

// create updateIcon
var makeBlue = L.Icon.extend({
    options: {
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }
});

// init clicked marker var
var clickedMarker;

// define function for highlight (red)
function highlightFeature(e) {

    // make previously selected marker blue
    if (clickedMarker) {
        clickedMarker.setIcon(new makeBlue);
    }

    // make selected marker red
    var layer = e.target;

    // log the target?
    console.log("VP Number is: ", layer.feature.properties.VP_No);
    console.log("VP Name is: ", layer.feature.properties.VP_Name);

    // set target marker as red
    e.target.setIcon(new makeRed);

    // pan to the selected marker using offset!
    //map.panTo(e.latlng);
    map.panToOffset(e.latlng, [425, 0], { "animate": true });

    //update clickedMarker variable to latest
    clickedMarker = e.target;

    // attempt to open the sidebar
    sidebar.open('map-marker');

    // populate sidebar panel with relevant text
    // just returns all the text, not just header:
    h1_content = document.getElementById("markerHeader").innerHTML;

    console.log(h1_content)
    // split current header on <
    const h1_split = h1_content.split('<');
    //console.log(h1_split.length);
    //console.log(h1_split[0]);


    // use string replace rather than joins - replace heading with VP name!
    var newHTML = h1_content.replace(h1_split[0], layer.feature.properties.VP_Name);
    document.getElementById("markerHeader").innerHTML = newHTML;

    // remove 'no marker selected text'
    document.getElementById("markerPara").innerHTML = "";

    // add image to sidebar panel

    // string concat - C:\Users\Siobhan.Corbett\Downloads\sidebar-v2-master-WORKING
    var photoE = '<img src="/static/images/' + layer.feature.properties.VP_No + '_e.jpg" height="600px" width="700px"/>';
    
    var photoP = '<img src="/static/images/' + layer.feature.properties.VP_No + '_p.jpg" height="380px" width="700px"/>';

    document.getElementById("markerPara").innerHTML = photoE + "<br />" + photoP;

    //info.update(layer.feature.properties);

}

// use on each feature option to add listeners on our geojson layer
function onEachFeature(feature, layer) {
    layer.on({
        click: highlightFeature
    })
}

geojson = L.geoJson(viewpoints, {
    onEachFeature: onEachFeature
}).addTo(map);

// zoom map to bounds of group layer
map.fitBounds(geojson.getBounds());