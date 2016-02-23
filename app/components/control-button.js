import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-button'],
  tagName: 'button',

  click: function() {
    this.send('click');
  },

  actions: {
    click: function() {
      this.sendAction('cmd', this.get('config.action'));
    }
  }
});
