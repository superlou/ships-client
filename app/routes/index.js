import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newShip: function() {
      this.get('server').newShip()
    },

    joinShip: function(shipCode) {
      this.transitionTo('ship', shipCode);
    }
  }
});
