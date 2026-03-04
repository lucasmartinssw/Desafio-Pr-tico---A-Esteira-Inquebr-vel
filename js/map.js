const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const places = [
  ["Machu Picchu", -13.1631, -72.5450],
  ["Kyoto", 35.0116, 135.7681],
  ["Santorini", 36.3932, 25.4615],
  ["Petra", 30.3285, 35.4444],
  ["Banff", 51.1784, -115.5708],
  ["Ilha de Páscoa", -27.1127, -109.3497],
  ["Angkor Wat", 13.4125, 103.8670],
  ["Capadócia", 38.6431, 34.8286],
  ["Bora Bora", -16.5004, -151.7415],
  ["Salar de Uyuni", -20.1338, -67.4891]
];

places.forEach(p => {
  L.marker([p[1], p[2]])
    .addTo(map)
    .bindPopup(`<b>${p[0]}</b>`);
});
