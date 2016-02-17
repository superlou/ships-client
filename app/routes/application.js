import Ember from 'ember';

export default Ember.Route.extend({
  server: Ember.inject.service('serverConnection'),

  beforeModel: function() {
    return this.get('server').connect();
  }
});
