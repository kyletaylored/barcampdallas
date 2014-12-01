 
function showGoogleMaps() {
 
    var latLng = new google.maps.LatLng(32.782418, -96.797611);
 
    var mapOptions = {
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                draggable: false,
        zoom: 16, // initialize zoom level - the max value is 21
                streetViewControl: false, // hide the yellow Street View pegman
                scaleControl: false, // allow users to zoom the Google Map
                mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };
 
    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);
 
    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}
 
google.maps.event.addDomListener(window, 'load', showGoogleMaps);