import Ember from 'ember';

export default Ember.Controller.extend({
  shipCode: '',

  actions: {
    join: function() {
      this.send('joinShip', this.get('shipCode'));
    }
  }
});
