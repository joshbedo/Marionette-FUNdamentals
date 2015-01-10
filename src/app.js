// App namespace
var App = {
	init: function() {
		this.appView = new AppView({ el: '#app' });
		this.users = new Users();
	},
	start: function() {
		Backbone.history.start();
		var usersView = new UsersView({ collection: this.users });
		this.appView.show(usersView);
	}
};

// Models
var User = Backbone.Model.extend({
	url: '/api/users',
	initialize: function() {
		this.on('invalid', function(m) {
			alert(m.validationError);
		});
	},
	validate: function(attrs, opts) {
		if (!(attrs.email && attrs.userName)) {
			return "Need an email AND a username";
		}
	}
});

// Collection
var Users = Backbone.Collection.extend({ 
	url: '/api/users'
});

// View for the app container
var AppView = Backbone.View.extend({
	show: function(view) {
		this.$el.append(view.el);
	}
});

// Users CollectionView
var UsersView = Backbone.View.extend({
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
var UserView = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		this.$el.append(this.model.get('email'));
		return this.$el;
	}
});