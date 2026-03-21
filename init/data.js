const sampleListings = [

{
title:"Goa Beach Villa",
description:"Beautiful villa near Baga beach perfect for relaxing vacations.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
},
price:3200,
location:"Goa",
country:"India",
category:"Trending",
geometry:{type:"Point",coordinates:[73.8567,15.2993]}
},

{
title:"Luxury Room in Delhi",
description:"Comfortable private room in central Delhi.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
},
price:1200,
location:"Delhi",
country:"India",
category:"Rooms",
geometry:{type:"Point",coordinates:[77.1025,28.7041]}
},

{
title:"Mumbai Skyline Apartment",
description:"Modern apartment with amazing skyline view.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
},
price:2800,
location:"Mumbai",
country:"India",
category:"Iconic Cities",
geometry:{type:"Point",coordinates:[72.8777,19.0760]}
},

{
title:"Manali Mountain Cabin",
description:"Peaceful wooden cabin surrounded by mountains.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
},
price:1900,
location:"Manali",
country:"India",
category:"Mountains",
geometry:{type:"Point",coordinates:[77.1892,32.2432]}
},

{
title:"Jaipur Heritage Castle Stay",
description:"Experience royal life in a historic palace.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1582719508461-905c673771fd"
},
price:4500,
location:"Jaipur",
country:"India",
category:"Castles",
geometry:{type:"Point",coordinates:[75.7873,26.9124]}
},

{
title:"Udaipur Pool Villa",
description:"Luxury villa with private pool and lake view.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1613977257363-707ba9348227"
},
price:5000,
location:"Udaipur",
country:"India",
category:"Amazing Pools",
geometry:{type:"Point",coordinates:[73.7125,24.5854]}
},

{
title:"Rishikesh Camping Tent",
description:"Riverside camping experience with bonfire.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
},
price:900,
location:"Rishikesh",
country:"India",
category:"Camping",
geometry:{type:"Point",coordinates:[78.2676,30.0869]}
},

{
title:"Punjab Farm Stay",
description:"Enjoy village life on a traditional farm.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1500382017468-9049fed747ef"
},
price:1000,
location:"Ludhiana",
country:"India",
category:"Farms",
geometry:{type:"Point",coordinates:[75.8573,30.9010]}
},

{
title:"Ladakh Snow Retreat",
description:"Snow covered mountain stay in Ladakh.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1519681393784-d120267933ba"
},
price:2200,
location:"Leh",
country:"India",
category:"Arctic",
geometry:{type:"Point",coordinates:[77.5770,34.1526]}
},

{
title:"Himalayan Dome Stay",
description:"Unique glass dome under the stars.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
},
price:2400,
location:"Spiti",
country:"India",
category:"Domes",
geometry:{type:"Point",coordinates:[78.0623,32.2460]}
},

{
title:"Kerala Houseboat",
description:"Luxury houseboat stay in backwaters.",
image:{
filename:"listingimage",
url:"https://images.unsplash.com/photo-1526779259212-756e6f40d7a3"
},
price:3500,
location:"Alleppey",
country:"India",
category:"Boats",
geometry:{type:"Point",coordinates:[76.3388,9.4981]}
},
{
title:"Shimla Snow Cottage",
description:"Cozy cottage with snow mountain view.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1519681393784-d120267933ba"},
price:2000,
location:"Shimla",
country:"India",
category:"Mountains",
geometry:{type:"Point",coordinates:[77.1734,31.1048]}
},

{
title:"Goa Beach Hut",
description:"Small beach hut just steps from the sea.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
price:1500,
location:"Goa",
country:"India",
category:"Trending",
geometry:{type:"Point",coordinates:[73.8567,15.2993]}
},

{
title:"Kashmir Lake House",
description:"Beautiful house near Dal Lake.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
price:2600,
location:"Srinagar",
country:"India",
category:"Amazing Pools",
geometry:{type:"Point",coordinates:[74.7973,34.0837]}
},

{
title:"Varanasi Heritage Room",
description:"Traditional stay near ghats.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"},
price:1000,
location:"Varanasi",
country:"India",
category:"Rooms",
geometry:{type:"Point",coordinates:[83.0104,25.3176]}
},

{
title:"Spiti Valley Camp",
description:"Adventure camping in the Himalayas.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"},
price:1200,
location:"Spiti",
country:"India",
category:"Camping",
geometry:{type:"Point",coordinates:[78.0623,32.2460]}
},

{
title:"Jaisalmer Desert Camp",
description:"Luxury tents in Thar desert.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
price:1800,
location:"Jaisalmer",
country:"India",
category:"Camping",
geometry:{type:"Point",coordinates:[70.9083,26.9157]}
},

{
title:"Hyderabad City Apartment",
description:"Modern apartment in city center.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"},
price:2100,
location:"Hyderabad",
country:"India",
category:"Iconic Cities",
geometry:{type:"Point",coordinates:[78.4867,17.3850]}
},

{
title:"Kerala Backwater Villa",
description:"Peaceful villa with water view.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
price:3400,
location:"Kerala",
country:"India",
category:"Boats",
geometry:{type:"Point",coordinates:[76.2711,10.8505]}
},

{
title:"Coorg Coffee Farm Stay",
description:"Stay inside a coffee plantation.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1500382017468-9049fed747ef"},
price:1700,
location:"Coorg",
country:"India",
category:"Farms",
geometry:{type:"Point",coordinates:[75.8069,12.3375]}
},

{
title:"Ooty Hill House",
description:"Quiet hill house with scenic views.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
price:2000,
location:"Ooty",
country:"India",
category:"Mountains",
geometry:{type:"Point",coordinates:[76.6950,11.4064]}
},

{
title:"Andaman Beach Resort",
description:"Luxury stay near crystal clear water.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
price:4200,
location:"Andaman",
country:"India",
category:"Trending",
geometry:{type:"Point",coordinates:[92.7265,11.7401]}
},

{
title:"Delhi Dome Stay",
description:"Unique glass dome experience.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
price:2300,
location:"Delhi",
country:"India",
category:"Domes",
geometry:{type:"Point",coordinates:[77.1025,28.7041]}
},

{
title:"Uttarakhand Forest Cabin",
description:"Cabin surrounded by forest.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
price:2100,
location:"Nainital",
country:"India",
category:"Mountains",
geometry:{type:"Point",coordinates:[79.4542,29.3919]}
},

{
title:"Alleppey Luxury Houseboat",
description:"Private houseboat with chef.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"},
price:3800,
location:"Alleppey",
country:"India",
category:"Boats",
geometry:{type:"Point",coordinates:[76.3388,9.4981]}
},

{
title:"Rajasthan Royal Palace",
description:"Live like a king in palace stay.",
image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1582719508461-905c673771fd"},
price:5000,
location:"Udaipur",
country:"India",
category:"Castles",
geometry:{type:"Point",coordinates:[73.7125,24.5854]}
}

];
module.exports = sampleListings;