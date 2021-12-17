// Add console.log to check to see if our code is working.
console.log("working");

// CREATING THE MAP --------------------------------------------------------------------------------------------------------------------------------

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

                // ALTERNATE to using the setView() method is to modify each attribute 
                // in the map object using the curly braces notation as follows:
                // Create the map object with a center and zoom level.
                    // let map = L.map("mapid", {
                    //     center: [
                    //     40.7, -94.5
                    //     ],
                    //     zoom: 4
                    // });
                // This method is useful when we need to add multiple tile layers, or a background image of our map(s)

// CREATING LINES --------------------------------------------------------------------------------------------------------------------------------

// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);


// CREATING MARKERS ON THE MAP --------------------------------------------------------------------------------------------------------------------

                // //  BASIC MARKER: Add a marker to the map for Los Angeles, California.
                        // let marker = L.marker([34.0522, -118.2437]).addTo(map);

                // // CIRCLE MARKER: Place a circle on the map at the given coordinates using the circle() function
                // // this function tracks radius in meters...
                        // L.circle([34.0522, -118.2437], {
                        //     radius: 100
                        //  }).addTo(map);

                        // //  ALTERNATIVELY: we can create a circle using the circleMarker() function. 
                        // // The circleMarker() function measures the radius of the circle in pixels
                                //  L.circleMarker([34.0522, -118.2437], {
                                //      radius: 300,
                                //      color: "black",
                                //      fillColor: "#ffffa1"
                                //  }).addTo(map);

// MULTIPLE MARKERS: To add a marker for each location, we have to iterate through the array and add each latitude and longitude to the map.
// replace the marker variable (which we used to map one location) with the cities variable that references the five most populous cities array 
//(located in the new cities.js file)

// // Get data from cities.js
// let cityData = cities;
                

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     // L.marker(city.location)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         weight: 4 })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// });


// CREATING GEO JSON POINTS --------------------------------------------------------------------------------------------------------------------

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// GeoJSON objects are added to the map through a GeoJSON layer. Create the GeoJSON layer and add it to our map
// L.geoJSON(geojsonFeature).addTo(map);

    // // Grabbing our GeoJSON data.
    // L.geoJSON(sanFranAirport).addTo(map);


// Our options to add data to a marker are to use the pointToLayer or onEachFeature callback functions. 
// With either of these functions, we can add data to a map from each GeoJSON object. 
// The major difference between the two functions is that the pointToLayer callback function adds markers to a map, 
// whereas the onEachFeature callback function allows you to add styling and bind data to a popup marker.

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {

//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }
//   }).addTo(map);

// // When we use the onEachFeature callback function we can add a popup marker for each feature and add data from the properties of the JavaScript object.
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" +"</n>" + "<hr>" + "<h2>" + "Airport Name: " + feature.properties.name + "</h2>");
//      }
// }).addTo(map);




// CREATING TILE LAYER FOR MAP --------------------------------------------------------------------------------------------------------------------


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

            // To change the map's style, change the map id using the list of Mapbox ids below:

            //     mapbox/streets-v11
            //     mapbox/outdoors-v11
            //     mapbox/light-v10
            //     mapbox/dark-v10
            //     mapbox/satellite-v9
            //     mapbox/satellite-streets-v11

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

  
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});  // An alternative to using the setView()method is to modify each attribute in the map object using the curly braces


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);





// --------------------------------------------------------------------------------------------------------------------

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/krystinmckee/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
    // NOTE: Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" +"</n>" + "<hr>" + "<h2>" + "Airport Name: " + feature.properties.name + "</h2>");
        }
    }).addTo(map);

});

