define([
  "jquery",
  "underscore",
  "backbone",
  "app/eventsbb",
  "views/ZoneView"
], function(
  $,
  _,
  Backbone,
  EventsBB,
  ZoneView
){

	var BookmrksView = Backbone.View.extend({
		initialize: function(){
      // this.modal.open.bind(this);
      this.render();
		},
		render: function(){
      var template = _.template( $('#bookmrksTemplate').html(), {} );

      this.$el.html(template);
		},
    events: {
      "click a.newMrk": function (e){
        this.modal.open(this);
      },

      "click input.newLink": function(e){
        this.modal.close(this);
      },

      "click a.newZone": function(e){
        EventsBB.trigger('newZone');
      }
    },
    modal : {
      open: function(self){
        self.$el.find('.newModal').addClass('active');
      },
      close: function(self){
        self.$el.find('.newModal').removeClass('active');
      }
    }
	});

	return BookmrksView;

})