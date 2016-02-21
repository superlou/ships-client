import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['control-labeled-data'],

  value: Ember.computed('config', 'data', function() {
    if (this.get('config.bindValue')) {
      var value = this.get('data.' + this.get('config.bindValue'));
      if (value !== undefined) {
        return value;
      }
    }

    return '-';
  })
});
