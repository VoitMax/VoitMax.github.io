/* Neuseelandreise Skript */
// einzeiliger Kommentar
let lat = -40.921;
let lng = 172.9609;
let zoom = 11;

let coords = [-40.921, 172.9609];
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat}`);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);


let popup = `
    <h3>${ETAPPEN[9].titel} (Etappe ${ETAPPEN[9].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[9].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[9].lat}</li>
        <li><a href="${ETAPPEN[9].wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="${ETAPPEN[9].github}">Link zur Etappenseite</a></li>
    </ul>
`;

let startLayer = L.tileLayer.provider("OpenStreetMap.Mapnik");

let map = L.map("map",{
    center: [lat, lng],
    zoom: 11,
    layers: [
        startLayer
    ]
});

let layerControl = L.control.layers({
    "OpenStreetMap.Mapnik": startLayer,
    "Esri.WorldTopoMap": L.tileLayer.provider("Esri.WorldTopoMap"),
    "Esri.WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
}).addTo(map);

// Maßstab hinzugefügt
L.control.scale({
    imperial: false,
}).addTo(map);

// Fullscreen hinzugefügt
L.control.fullscreen().addTo(map);

// Minimap hinzugefügt
let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("OpenStreetMap.Mapnik")
).addTo(map);

/*
let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/

for (let etappe of ETAPPEN) {
    let popup = `
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
    </ul>`;


    //console.log(etappe);
    let navClass = "etappenLink";
    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    if (etappe.nr == 10){
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell"
    }

    //Etappennavigation erweitern
    let link = `<a href="https://${etappe.github}.github.io/nz/index.html" class="${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link
}

// DOC Hütten anzeigen
for (let hut of HUTS) {
    let popup = `
        <h3>${hut.name}</h3>
        <h4>${hut.region}</h3>
        <hr>
        <p>${hut.info}</p>
        <img src="${hut.image}" alt="Vorschaubild">
        <hr>
        <a href="${hut.link}" target="Neuseeland">Link zur Hütte</a>`;

    let statusColor;
    if (hut.open == true) {
        statusColor = "green"
    } else {
        statusColor = "red";
    }
    L.circleMarker([hut.lat, hut.lng], {
        color: statusColor
    }).addTo(map).bindPopup(popup);
}

    
