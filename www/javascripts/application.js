// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("Bike Life");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#fff");


    document.addEventListener("deviceready", onDeviceReady, false);
var makeMap = function() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: -34.397, lng: 150.644},
        zoom: 12
    });
        
    var viewport_height = $(window).height() - 232;
    var viewport_width = $(window).width();

    $("#map_canvas").css("height", viewport_height);  //set the map canvas to have defined height and width of the device
    $("#map_canvas").css("width", viewport_width);

};
 
function onDeviceReady() {
    // makeMap();
}
