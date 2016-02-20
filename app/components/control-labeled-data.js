import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-labeled-data'],

  value: Ember.computed('config', 'data', function() {
    if (this.get('config.bind')) {
      return this.get('data.' + this.get('config.bind'));
    }

    return '-';
  })
});
