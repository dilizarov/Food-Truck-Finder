FoodTruckFinder.Views.TruckView = Backbone.View.extend({
  
  //places a marker for each food truck within range
  initialize: function(options) {
    
    this.marker = new google.maps.Marker({
      map: options['map'],
      animation: google.maps.Animation.DROP,
      optimized: false, //stops marker from flashing,
      position: options['truckPos']//LatLng
    });
    
    this.map = options['map'];
    var infoWindow = options['infoWindow'];
    
    var self = this;
    
    google.maps.event.addListener(self.marker, 'mouseover', function () {
      //bounce once
      self.marker.setAnimation(google.maps.Animation.BOUNCE);
      self.marker.setAnimation(null);
      
      var content = '<strong>' + self.model.get('applicant') +
                    '</strong><p>' + self.model.get('address') +
                    '</p><p>' + self.model.get('fooditems') + '</p>';
                    
      infoWindow.setContent(content);
      infoWindow.open(this.map, self.marker);
    });
  },
  
  destroy: function() {
    this.marker.setMap(null); //delete from map
    
    //destroy view from our existence. Save memory :)
    google.maps.event.clearListeners(this.map, 'mouseover');
    this.$el.removeData().unbind();
    Backbone.View.prototype.remove.call(this);
  }
  
});