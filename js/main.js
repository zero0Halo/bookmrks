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
  BookMrks.prototype.makeZones = function(){
    var self=this;

    if(!_.size(self.zones)){
      EventsBB.trigger('newZone');
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
  BookMrks.prototype.newZone = function(){
    var self=this;
    var id = "zone"+Math.floor(Math.random() * 10000);
    var data = { title: "New", id:id };
    var zoneView = new ZoneView({ model: data });
    var cookieData = self.c.get();
    
    cookieData[id] = data;
    self.c.set(cookieData);
  }
  BookMrks.prototype.updateHeader = function(payload){
    var self = this;
    var title = payload.title;
    var id = payload.id;
    var cookieData = self.c.get();

    cookieData[id].title = title;

    self.c.set(cookieData);
  }  
  BookMrks.prototype.c = {
    get: function(){
      var zones = Cookies.get('zones');
      return  zones === undefined ? {} : JSON.parse( zones );
    },
    set: function(data){
      Cookies.set('zones', JSON.stringify(data) );
    }
  }

  var bookMrks = new BookMrks();

});