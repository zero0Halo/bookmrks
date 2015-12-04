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

  var ZoneView = Backbone.View.extend({
    className: "zone",
    initialize: function(){
      this.render();
    },
    render: function(){
      var template = _.template( $('#columnTemplate').html());
      var rendered = template(this.model);

      this.$el
        .append( rendered )
        .appendTo('.mrksHolder');
    },
    events: {
      "click h2 .text": function(e){
        $(e.target)
          .removeClass('active')
          .siblings()
          .addClass('active')
          .select()
      },
      "focusout h2 .edit": function(e){
        var $target = $(e.target);
        console.log($target)
        var payload = { title: $target.val(), id: this.model.id };

        $target
          .removeClass('active')
          .siblings()
          .addClass('active')
          .html($target.val());

        EventsBB.trigger('update', payload);
      }
    }
  });

  return ZoneView;

})