define([
	"jquery",
	"underscore",
	"backbone",
  "js.cookie",
  "app/eventsbb",
	"views/MrkView",
  "views/BookmrksView",
	"views/ZoneView",
], function(
	$,
	_,
	Backbone,
  Cookies,
  EventsBB,
	MrkView,
  BookmrksView,
	ZoneView
){
  // Cookies.remove('zones');

  var BookMrks = function(){
    self=this;
    self.zones = self.c.get();

    self.init();
  }
  BookMrks.prototype.init = function(){
    var self=this;

    EventsBB.on('newZone', function(payload){
      self.newZone(payload);
    });

    EventsBB.on('update', function(payload){
      self.updateHeader(payload);
    }); 

    var bookmrksView = new BookmrksView({ el: $('#bookmrks') });
    self.makeZones();
  }
  BookMrks.prototype.makeZones = function(){ console.log('goz')
    var self=this;

    if(self.zones === undefined){
      EventsBB.trigger('newZone', { init: true });
    } else {
      var cookieData = self.c.get();

      for(var zone in cookieData ) {
        var data = {
          title: cookieData[zone].title,
          id: cookieData[zone].id
        }
        var zoneView = new ZoneView({ model: data });
      }
    }    
  }
  BookMrks.prototype.newZone = function(payload){
    var self=this;
    var id = "zone"+Math.floor(Math.random() * 10000);
    var data = { title: "New", id:id };
    var zoneView = new ZoneView({ model: data });
    var cookieData;

    if(payload && payload.init){
      cookieData = {};
    } else {
      cookieData = self.c.get();
    }
    
    cookieData[id] = data;
    self.c.set(cookieData);
  }
  BookMrks.prototype.updateHeader = function(payload){
    var title = payload.title;
    var id = payload.id;
    var cookieData = JSON.parse( Cookies.get('zones') );

    cookieData[id].title = title;

    self.c.set(cookieData);
  }  
  BookMrks.prototype.c = {
    get: function(){
      return JSON.parse( Cookies.get('zones') );
    },
    set: function(data){
      Cookies.set('zones', JSON.stringify(data) );
    }
  }

  var bookMrks = new BookMrks();

  // var Zones = Cookies.get('zones');
  // // Creates the overall container
  // var bookmrksView = new BookmrksView({ el: $('#bookmrks') });


  // EventsBB.on('newZone', function(payload){
  //   newZone(payload);
  // });


  // // Beginnings of loading data from the stored cookie
  // if(Zones === undefined){
  //   EventsBB.trigger('newZone', { init: true });
  // } else {
  //   var cookieData = JSON.parse( Zones );

  //   for(var zone in cookieData ) {
  //     var data = {
  //       title: cookieData[zone].title,
  //       id: cookieData[zone].id
  //     }
  //     var zoneView = new ZoneView({ model: data });
  //   }
  // }

  // EventsBB.on('update', function(payload){
  //   updateHeader(payload);
  // });




  // function newZone(payload){
  //   var id = "zone"+Math.floor(Math.random() * 10000);
  //   var data = { title: "New", id:id };
  //   var zoneView = new ZoneView({ model: data });
  //   var cookieData;

  //   if(payload && payload.init){
  //     cookieData = {};
  //   } else {
  //     cookieData = JSON.parse( Cookies.get('zones') );
  //   }
    
  //   cookieData[id] = data;
  //   Cookies.set('zones', JSON.stringify(cookieData) );
  // }


  // function updateHeader(payload){
  //   var title = payload.title;
  //   var id = payload.id;
  //   var cookieData = JSON.parse( Cookies.get('zones') );

  //   cookieData[id].title = title;

  //   Cookies.set('zones', JSON.stringify(cookieData) );


  // }

});