
const mapDiv = document.getElementById("map");

console.log("mapDiv:", mapDiv);

if (!mapDiv) {
  console.error("❌ Map div not found");
}

const lat = parseFloat(mapDiv.dataset.lat);
const lng = parseFloat(mapDiv.dataset.lng);
const title = mapDiv.dataset.title;

console.log("LAT:", lat, "LNG:", lng);

if (isNaN(lat) || isNaN(lng)) {
  console.error("❌ Invalid coordinates");
}

const map = L.map("map").setView([lat, lng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([lat, lng])
  .addTo(map)
  .bindPopup(`<b>${title}</b><br>Exact Location provided after booking`)
  .openPopup();
