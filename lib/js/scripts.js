var gmStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

var app = new Vue({
  el: '#app',
  data: {
    origin: '',
    destination: '',
    distance: 0,
    mpg: 5,
    breaks: 0,
    speed: 55,
    cost: 0,
    pitstops: [],
    directions: [],
    time: 0,
    duration: 0,
    instructions: [],
    response: null
  },
  mounted: function() {
    this.initMap();
  },
  updated: function() {
    if (this.response != null) {
      this.calcDistance();
      this.calcCost();
      this.calcTime();
      this.getDirections();
    }
  },
  methods: {
    initMap: function() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 39.85, lng: -98.65},
        disableDefaultUI: true,
        styles: gmStyles
      });
      directionsDisplay.setMap(map);

      var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };

      document.getElementById('start').addEventListener('change', onChangeHandler);
      document.getElementById('end').addEventListener('change', onChangeHandler);
      document.getElementById('calc').addEventListener('click', onChangeHandler);
      document.getElementById('show-map').addEventListener('click', onChangeHandler);

      var that = this;

      var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
        var pitstops = document.querySelectorAll('.pitstop');
        var waypts = [];
        for (var i = 0; i < pitstops.length; i++) {
          pitstops[i].addEventListener('change', onChangeHandler);
          if (pitstops[i].value.length > 0) {
            waypts.push({
              location: pitstops[i].value,
              stopover: true
            });
          }
        }
        var pitstopsObj = [];
        for (var j = 0; j < waypts.length; j++){
          pitstopsObj.push({location: waypts[j].location})
        }
        that.pitstops = pitstopsObj;

        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            that.response = response;
          }
        });
      }
    },
    calcCost: function() {
      this.cost = Math.floor((this.duration / this.mpg) * ((this.mpg * 2) / this.mpg)) + 20;
    },
    calcTime: function() {
      let subTotal = 0;
      let legs = this.response.routes[0].legs;
      for(var i = 0; i < legs.length; i++){
        let time = legs[i].duration.text;
        subTotal += this.timeConvert(time);
      }
      this.time = this.min2string(subTotal);
    },
    calcDistance: function() {
      let subTotal = 0;
      let legs = this.response.routes[0].legs;
      for(var i = 0; i < legs.length; i++){
        let leg = legs[i].distance.text;
        var distance = leg.split(' ')[0];
        distance = parseInt(distance,10);
        subTotal += distance;
      }
      this.distance = subTotal;
    },
    timeConvert: function(string) {
      let time = string.split(/\D+/);
      let hours, min;
      if (time.length == 2){
        hours = 0;
        minutes = parseInt(time[0]);
      } else {
        hours = parseInt(time[0]);
        minutes = parseInt(time[1]);
      }
      time = (hours * 60 + minutes);
      time += (this.breaks * 15);
      time *= (55 / this.speed);
      return time;
    },
    min2string: function(minutes) {
      let hours = Math.floor(minutes / 60);
      let mins  = Math.floor(minutes % 60);
      this.duration = minutes;
      return `${hours}h ${mins}m`;
    },
    getDirections: function(){
      let directions = [];
      let allSteps;
      let legs = this.response.routes[0].legs;
      for(var i = 0; i < legs.length; i++){
        allSteps = (legs[i].steps);
      }
      allSteps.forEach(step => {
        directions.push(step.instructions);
      })
      this.directions = directions;
    }
  }
})
