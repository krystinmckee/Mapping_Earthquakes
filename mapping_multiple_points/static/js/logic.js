// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

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



// _______________________________________________

                // //  BASIC MARKER: Add a marker to the map for Los Angeles, California.
                // let marker = L.marker([34.0522, -118.2437]).addTo(map);

                // // CIRCLE MARKER: Place a circle on the map at the given coordinates using the circle() function
                    // // this function tracks radius in meters...
                // L.circle([34.0522, -118.2437], {
                //     radius: 100
                //  }).addTo(map);

// Alternatively, we can create a circle using the circleMarker() function. 
    // The circleMarker() function measures the radius of the circle in pixels
 L.circleMarker([34.0522, -118.2437], {
     radius: 300,
     color: "black",
     fillColor: "#ffffa1"
 }).addTo(map);
                

// ______________________________________________


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

            // To change the map's style, change the map id using the list of Mapbox ids below:

            //     mapbox/streets-v11
            //     mapbox/outdoors-v11
            //     mapbox/light-v10
            //     mapbox/dark-v10
            //     mapbox/satellite-v9
            //     mapbox/satellite-streets-v11


