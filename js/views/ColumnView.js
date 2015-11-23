define([
  "jquery",
  "underscore",
  "backbone",
  "app/eventsbb"
], function(
  $,
  _,
  Backbone,
  EventsBB
){

  var ColumnView = Backbone.View.extend({
    initialize: function(){ 
      this.render();
    },
    render: function(){
      var template = _.template( $('#columnTemplate').html());
      var rendered = template(this.model); 
      
      this.$el.html( rendered );
    }
  });

  return ColumnView;

})