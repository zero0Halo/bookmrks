define([
	"jquery",
	"underscore",
	"backbone",
	"views/MarkView",
	"views/BookmrksView",
], function(
	$,
	_,
	Backbone,
	MarkView,
	BookMrksView
){


	var MarkModel = Backbone.Model.extend({});

	var markModel = new MarkModel();


	require(['app/channel'], function(channel){
		channel.on('go', function(){
			console.log('go')
		})
	})

	var markView = new MarkView({model: markModel});

});