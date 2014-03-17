FoodTruckFinder.Collections.FoodTrucks = Backbone.Collection.extend({
  url: 'http://data.sfgov.org/resource/rqzj-sfat.json',
  model: FoodTruckFinder.Models.FoodTruck
})