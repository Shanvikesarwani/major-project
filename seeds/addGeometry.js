const mongoose = require("mongoose");
const Listing = require("../models/listing");


mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

const addGeometry = async () => {
  const listings = await Listing.find({ geometry: { $exists: false } });

  for (let listing of listings) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        listing.location
      )}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "Major-Project-College",
        },
      }
    );

    const data = await res.json();

    if (data.length > 0) {
      listing.geometry = {
        type: "Point",
        coordinates: [
          Number(data[0].lon),
          Number(data[0].lat),
        ],
      };

      await listing.save();
      console.log("✅ Updated:", listing.location);
    } else {
      console.log("❌ Not found:", listing.location);
    }
  }

  mongoose.connection.close();
};

addGeometry();
