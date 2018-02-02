function myMap() {
	// creating the map options
	var mapProp = {
	    center: new google.maps.LatLng(37.788866,-122.39821),
	    // setting the zoom to 15
	    zoom: 15,
	    // disabling the map controls
	    disableDefaultUI: true
		}
	// populating the map to the page
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp)
	// creating the marker on the map to show the location
	var marker = new google.maps.Marker({
		position: mapProp.center
	})
	marker.setMap(map)
	// making the map zoom when clicking on the marker
	google.maps.event.addListener(marker, "click", function() {
		// setting the zoom to 18
	map.setZoom(18)
	map.setCenter(marker.getPosition())
	})
}
google.maps.event.addDomListener(window, "load", myMap)
