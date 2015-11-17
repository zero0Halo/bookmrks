requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../",
      "views": "../views",
      "jquery": "jquery.min",
      "underscore": "underscore.min",
      "backbone": "backbone.min"
    },
    "shim": {
    	"backbone": {
    		"deps": ["underscore", "jquery"],
    		"exports": "Backbone"
    	}
    }
});

requirejs(["app/main"]);