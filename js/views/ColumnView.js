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
      console.log(this.model)
      var rendered = template(this.model);

      this.$el.html( rendered );
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
        var payload = { oldHeader: this.model.title, newHeader: $target.val() };

        $target
          .removeClass('active')
          .siblings()
          .addClass('active')
          .html($target.val());

        EventsBB.trigger('update', payload);
      }
    }
  });

  return ColumnView;

})