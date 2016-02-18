import DS from 'ember-data';

export default DS.Model.extend({
  ship: DS.belongsTo('ship'),
  controls: DS.attr()
});
