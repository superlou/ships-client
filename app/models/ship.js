import DS from 'ember-data';

export default DS.Model.extend({
  console: DS.hasMany('console')
});
