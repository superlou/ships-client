import Ember from 'ember';

export default Ember.Route.extend({
  server: Ember.inject.service('serverConnection'),

  model: function(param) {
    this.get('server').subscribe(param.ship_id, param.console_id);
    return {};
  }
});
