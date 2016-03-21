import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  shipId: DS.attr(),
  controls: DS.attr(),
  terminalData: DS.attr()
});
