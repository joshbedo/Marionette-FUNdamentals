// App namespace
var App = {
  Models: {},
  Collections: {},
  Views: {},

<<<<<<< Updated upstream
	init: function() {
		this.appView = new this.Views.AppView({ el: '#app' });
		this.users = new this.Collections.Users();
	},
	start: function() {
		Backbone.history.start();
		var usersView = new this.Views.UsersView({ collection: this.users });
		this.appView.show(usersView);
	}
=======
  init: function() {
    this.appView = new this.Views.AppView({ el: '#app' });
    this.users = new this.Collections.Users();
  },
  start: function() {
    Backbone.history.start();
    var usersView = new this.Views.UsersView({ collection: this.users });
    this.appView.show(usersView);
  }
>>>>>>> Stashed changes
};

// Models
App.Models.User = Backbone.Model.extend({
<<<<<<< Updated upstream
	url: '/api/users',
	defaults: {
		firstName: 'Josh',
		lastName: 'Bedo'
	},

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
=======
  url: '/api/users',
  defaults: {
    firstName: 'Josh',
    lastName: 'Bedo'
  },

  initialize: function() {
    this.on('invalid', function(m) {
      alert(m.validationError);
    });
  },

  validate: function(attrs, opts) {
    if (!(attrs.email && attrs.userName)) {
      return "Needs a username and email";
    }
  },

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }

>>>>>>> Stashed changes
});

// Collections
App.Collections.Users = Backbone.Collection.extend({
<<<<<<< Updated upstream
	url: '/api/users',
	initialize: function() {
		this.on('change', onChange);
	},
	onChange: function(model) {
		console.info('Model in App.Collections.Users has changed', model);
	}
=======
  url: '/api/users',
  initialize: function() {
    this.on('change', this.onChange);
  },
  onChange: function(model) {
    console.info('Model in App.Collections.Users has changed', model);
  }
>>>>>>> Stashed changes
});

// View for the app container
App.Views.AppView = Backbone.View.extend({
<<<<<<< Updated upstream
	show: function(view) {
		this.$el.append(view.el);
	}
=======
  show: function(view) {
    this.$el.append(view.el);
  }
>>>>>>> Stashed changes
});

// Users CollectionView
App.Views.UsersView = Backbone.View.extend({
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
});

// Users ItemView
App.Views.UserView = Backbone.View.extend({
<<<<<<< Updated upstream
	tagName: 'li',
	render: function() {
		this.$el.append(this.model.get('email'));
		return this.$el;
	}
=======
  tagName: 'li',
  render: function() {
    this.$el.append(this.model.get('email'));
    return this.$el;
  }
>>>>>>> Stashed changes
});