import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-labeled-data'],

  value: Ember.computed('config', 'data', function() {
    if (this.get('config.bind')) {
      var value = this.get('data.' + this.get('config.bind'));
      if (value !== undefined) {
        return value;
      }
    }

    return '-';
  })
});
