import Ember from 'ember';

export default Ember.Route.extend({
  server: Ember.inject.service('serverConnection'),

  model: function(params) {
    this.get('server').subscribe(params.ship_id, params.console_id);
    return this.get('store').createRecord('console', {id: params.console_id});
  },

  actions: {
    cmd: function(data) {
      this.get('server').command(data);
    }
  }
});
