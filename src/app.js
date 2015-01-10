// App namespace

var App = new Backbone.Marionette.Application.extend({

	Models: {},
	Collections: {},
	Views: {},

	init: function() {
		this.appView = new this.Views.AppView({ el: '#app' });
		this.users = new this.Collections.Users();
	},
	start: function() {
		Backbone.history.start();
		var usersView = new this.Views.UsersView({collection: this.users});
		this.appView.show(usersView);
	}

});

// Models
App.Models.User = Backbone.Model.extend({
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
App.Collections.Users = Backbone.Collection.extend({
	url: '/api/users'
});

// View for the app container
App.Views.AppView = Backbone.View.extend({
	show: function(view) {
		this.$el.append(view.el);
	}
});

// Users CollectionView
App.Views.UsersView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		this.collection.on('sync', this.render, this);
	},
	render: function() {
		var el = this.$el;
		el.empty();

		this.collection.each(function(item) {
			var userView = new UserView({ model: item });
			var rendered = userView.render();
			el.append(rendered);
		});
		return el;
	}
});

// Users ItemView
App.Views.UserView = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		this.$el.append(this.model.get('email'));
		return this.$el;
	}
});

//App.addRegions({
//	main: "#main",
//	sub: "#sub"
//});
//
//App.on('my-event',callback); // Handle Event
//App.trigger('my-event'); // Fire event
//
