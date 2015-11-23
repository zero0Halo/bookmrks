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

	EventsBB.on('modalOpen', function(){
		$('.newModal').addClass('active');
	});

  EventsBB.on('modalClose', function(){
    $('.newModal').removeClass('active');
  });  

  // Creates the overall container
  var bookmrksView = new BookmrksView({ el: $('#bookmrks') });

  // Beginnings of loading data from the stored cookie
  if(Columns === undefined){
    var title = "New"
    var columnView = new ColumnView({ el: $('.mrksHolder'), model: { title: title } });
    data.title = title;
    Cookies.set('columns', JSON.stringify(data) );
  } else {
    var cookieData = JSON.parse( Columns );

    for(var column in cookieData ) {
      var paramaters = {};
      paramaters[column] = cookieData[column];
      var columnView = new ColumnView({ el: $('.mrksHolder'), model: paramaters });
    }
  }

});