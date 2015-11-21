define([
	"jquery",
	"underscore",
	"backbone",
  "js.cookie",
  "app/eventsbb",
	"views/MrkView",
  "views/BookmrksView",
	"views/ColumnView",
], function(
	$,
	_,
	Backbone,
  Cookies,
  EventsBB,
	MrkView,
  BookmrksView,
	ColumnView
){
  // Cookies.remove('columns')

  var Columns = Cookies.get('columns');
  var data = {};

	EventsBB.on('go', function(){
		console.log('go')
	});

  // Creates the overall container
  var bookmrksView = new BookmrksView({ el: $('#bookmrks') });

  if(Columns === undefined){
    var title = "New"
    var columnView = new ColumnView({ el: $('.mrksHolder'), model: { title: title } });
    data.title = title;
    Cookies.set('columns', JSON.stringify(data) );
  } else {
    console.log( JSON.parse( Columns ) )
  }

});