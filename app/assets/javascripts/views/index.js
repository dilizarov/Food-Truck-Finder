FoodTruckFinder.Views.Index = Backbone.View.extend({
  template: JST['index'],
  
  className: "form-container",
  
  initialize: function(options) {
    this.trucksInRange = []; //markers we show
    this.container = options['container']
    this.infoWindow = new google.maps.InfoWindow({}); //marker popup box
  },
  
  events: {
    'click button': 'validateInput',
    'click .back-arrow': 'replay',
    'mouseenter .back-arrow': 'showNewSearch'
  },
  
  render: function() {
    this.createMap();
    this.$el.html(this.template);
    return this;
  },
  
  // create map centered on SF
  createMap: function() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(37.7577, -1224376) //SF
    };
    
    var canvas = $('#map-canvas')//.get(0);
    this.map = new google.maps.Map(canvas, mapOptions);
  },
  
  //autocomplete search box
  searchArea: function() {
    var self = this;
    //Create search box and link to input field
    var input = $('#address')//.get(0);
  }
  
})