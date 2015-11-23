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

  // Creates the overall container
  var bookmrksView = new BookmrksView({ el: $('#bookmrks') });

  // Beginnings of loading data from the stored cookie
  if(Columns === undefined){
    var data = { title: "New" };
    var columnView = new ColumnView({ el: $('.mrksHolder'), model: data });
    Cookies.set('columns', JSON.stringify(data) );
  } else {
    var cookieData = JSON.parse( Columns );

    for(var column in cookieData ) {
      var data = {
        title: column,
        theRest: cookieData[column]
      }
      var columnView = new ColumnView({ el: $('.mrksHolder'), model: data });
    }
  }

  EventsBB.on('update', function(payload){
    updateHeader(payload)
  });

  function updateHeader(payload){
    var oldH = payload.oldHeader;
    var newH = payload.newHeader;
    var cookieData = JSON.parse( Columns );

    console.log(oldH, newH)

    if( cookieData.hasOwnProperty(oldH) ){
      cookieData[newH] = cookieData[oldH];
      delete cookieData[oldH];

      Cookies.set('columns', JSON.stringify(cookieData) );
    }

  }

});