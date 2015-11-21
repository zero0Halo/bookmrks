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

	var BookmrksView = Backbone.View.extend({
		initialize: function(){ 
      this.render();
		},
		render: function(){
      var template = _.template( $('#bookmrksTemplate').html(), {} );
      
      this.$el.html(template);
		},
    events: {
      "click a.newMrk": function (){        
        EventsBB.trigger('go');
      },

      "click input.newLink": function(){
        EventsBB.trigger('')
      }
    }
	});

	return BookmrksView;

})