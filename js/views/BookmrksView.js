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
      "click a.newMrk": function (e){        
        EventsBB.trigger('modalOpen', { events:e });
      },

      "click input.newLink": function(e){
        EventsBB.trigger('modalClose', {events:e });
      }
    }
	});

	return BookmrksView;

})