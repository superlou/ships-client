import Ember from 'ember';

export default Ember.Route.extend({
  server: Ember.inject.service('serverConnection'),

  model: function(params) {
    this.get('server').subscribe(params.terminal_id);
    return this.get('store').createRecord('terminal', {id: params.terminal_id});
  },

  actions: {
    cmd: function(data) {
      this.get('server').command(data);
    }
  }
});
