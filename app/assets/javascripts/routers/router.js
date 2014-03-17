FoodTruckFinder.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options['$rootEl'];
    this.allTrucks = options['allTrucks'];
  },
  
  routes: {
    "": "index"
  },
  
  index: function() {
    var indexView = new FoodTruckFinder.Views.Index({
      collection: this.allTrucks,
      'container': this.$rootEl });
      
    this._swapView(indexView);
    indexView.searchArea(); //set up search box
  },
  
  _swapView: function(newView) {
    if(this._prevView) this._prevView.remove();
    
    this._prevView = newView;
    this.$rootEl.html(newView.render().$el);
  }
})