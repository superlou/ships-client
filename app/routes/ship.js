import Ember from 'ember';

export default Ember.Route.extend({
    server: Ember.inject.service('serverConnection'),

    model: function(params) {
      this.get('store').unloadAll('consoleBrief');
      this.get('server').joinShip(params.ship_code);
      return this.get('store').peekAll('consoleBrief');
    }
});
