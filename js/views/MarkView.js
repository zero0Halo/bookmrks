define(['backbone'],function(Backbone){

	var MarkView = Backbone.View.extend({
		initialize: function(){
			require(['app/channel'], function(channel){
				channel.trigger('go')
			})
		},
		render: function(){

		}
	});

	return MarkView;

})