import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  setupController: function() {
    this.get("session").set("isAuthenticated", true);
    this.get("session").set("user", 42);
  }
});
