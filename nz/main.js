/* Neuseelandreise Script */
// einzeiliger Kommentar


var map = L.map("map").setView([-40.921, 172.9609], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-40.921, 172.9609]).addTo(map)
            .bindPopup('<h2>Abel-Tasman-Nationalpark</h2>')
            .openPopup();