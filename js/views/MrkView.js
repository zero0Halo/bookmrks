define(['backbone'],function(Backbone){

	var MrkView = Backbone.View.extend({
		initialize: function(){
			require(['app/channel'], function(channel){
				channel.trigger('go')
			})
		},
		render: function(){

		}
	});

	return MrkView;

})