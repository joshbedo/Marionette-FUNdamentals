// App namespace

var App = Marionette.Application.extend({

	Models: {},
	Collections: {},
	Views: {}
	// init: function() {
	// 	this.appView = new this.Views.AppView({ el: '#app' });
	// 	this.users = new this.Collections.Users();
	// },
	// start: function() {
	// 	Backbone.history.start();
	// 	var usersView = new this.Views.UsersView({collection: this.users});
	// 	this.appView.show(usersView);
	// }

});

MyApp = new App();

// Models
MyApp.Models.User = Backbone.Model.extend({
	url: '/api/users',
	defaults: {
		firstName: 'Josh',
		lastName: 'Bedo'
	},

	initialize: function() {
		this.on('invalid', function(m) {
			console.error(m.validationError);
		});
	},

	validate: function(attrs, opts) {
		if (!(attrs.email && attrs.userName)) {
			return "Need an email AND a username";
		}
	},

	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}
});

// Collections
MyApp.Collections.Users = Backbone.Collection.extend({
	url: '/api/users'
});

// View for the app container
MyApp.Views.AppView = Backbone.View.extend({
	show: function(view) {
		this.$el.append(view.el);
	}
});


// Users ItemView
MyApp.Views.UserView = Marionette.ItemView.extend({
	template: _.template('testing'),
	tagName: 'li'
});

// Users CollectionView
MyApp.Views.UsersView = Marionette.CollectionView.extend({
	tagName: 'ul',
	childView: MyApp.Views.UserView,
	initialize: function() {
		this.collection.on('sync', this.render, this);
	}
});

// MyApp.start();

Backbone.history.start();

//App.addRegions({
//	main: "#main",
//	sub: "#sub"
//});
//
//App.on('my-event',callback); // Handle Event
//App.trigger('my-event'); // Fire event
//
