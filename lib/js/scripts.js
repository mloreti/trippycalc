var app = new Vue({
  el: '#app',
  data: {
    origin: '',
    destination: '',
    distance: 0,
    mpg: 0,
    breaks: 0,
    speed: 55,
    cost: 0,
    time: 0
  },
  updated: function() {
    if (this.distance > 0 && this.mpg > 0){
      this.cost = Math.floor((this.distance / this.mpg) * 2);
      this.time = Math.floor(this.distance * (55 / this.speed) % 60);
    }
  },
  methods: {
    initMap: function() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 39.85, lng: -98.65},
        disableDefaultUI: true
      });
      directionsDisplay.setMap(map);

      var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };
      document.getElementById('start').addEventListener('change', onChangeHandler);
      document.getElementById('end').addEventListener('change', onChangeHandler);
      var that = this;
      var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var responseData = response.routes[0].legs[0];
            var distance = responseData.distance.text.split(' ')[0];
            distance = parseInt(distance.replace(/,/g, ''));
            that.distance = distance;
          }
        });
      }
    }
  }
})
