import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-button'],
  classNameBindings: ['isActive'],
  tagName: 'button',

  isActive: Ember.computed('config', 'data', function() {
      if (this.get('data.' + this.get('config.bindActive'))) {
        return true;
      } else {
        return false;
      }
  }),

  click: function() {
    this.send('click');
  },

  actions: {
    click: function() {
      this.sendAction('cmd', this.get('config.action'));
    }
  }
});
