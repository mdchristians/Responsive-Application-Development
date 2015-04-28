function init() {
	if ("undefined" != typeof markers && "array" == $.type(markers)) {
		for (var e = {
			city: {
				url: "images/map/MapPins-big-turqoise.png",
				size: new google.maps.Size(35, 58),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 0),
				scaledSize: new google.maps.Size(35, 344)
			},

			town: {
				url: "images/map/MapPins-big-turqoise.png",
				size: new google.maps.Size(35, 58),
				origin: new google.maps.Point(0, 58),
				anchor: new google.maps.Point(0, 0),
				scaledSize: new google.maps.Size(35, 344)
			}
		},

		i = {
			scrollwheel: !1,
			zoom: 12,
			panControl: !1,
			zoomControl: !0,
			mapTypeControl: !1,
			scaleControl: !1,
			streetViewControl: !1,
			overviewMapControl: !1
		}, 

		n = document.getElementById("map"), 
		o = new google.maps.Map(n, i), 
		a = new google.maps.InfoWindow, 
		t = new google.maps.LatLngBounds, 
		s = 0; s < markers.length; s++) {

			var l = new google.maps.Marker({
				position: new google.maps.LatLng(markers[s][1],
				markers[s][2]),
				map: o,
				icon: e[markers[s][3]],
				title: markers[s][0],
				infoContent: markers[s][4]
			});

			t.extend(l.position), google.maps.event.addListener(l, "click",
			
			function() {
				a.setContent('<div class="info_content"><h3>' + this.title + "</h3><p>" + this.infoContent + "</p></div>"), a.open(o, this)
			})
		}

		o.fitBounds(t)
	}
}
google.maps.event.addDomListener(window, "load", init);