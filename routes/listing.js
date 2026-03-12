const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage}= require("../cloudConfig.js");
const upload = multer({storage});

//index & create route
router
.route("/")
.get( wrapAsync(listingController.index))
.post(
     isLoggedIn,
     upload.single('listing[image]'),
     validateListing,
     wrapAsync ( listingController.createListing)
  );

// new route
router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
   );

  // category filter route
  router.get("/category/:cat", wrapAsync(async (req, res) => {
    let { cat } = req.params;
    const allListings = await Listing.find({ category: cat });
    res.render("listings/index", { allListings });
}));
 

//show , update & delete route
router.route("/:id")
.get( 
     wrapAsync(listingController.showListing)
   )
.put(
    isLoggedIn, 
    isOwner, 
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
   )
.delete(
     isLoggedIn,
     isOwner, 
     wrapAsync(listingController.deleteListing)
   );


//edit route
router.get(
    "/:id/edit",
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm)
  );

module.exports = router;