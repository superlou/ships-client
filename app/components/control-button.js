import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-button'],

  actions: {
    click: function() {
      this.sendAction('cmd', this.get('config.action'));
    }
  }
});
