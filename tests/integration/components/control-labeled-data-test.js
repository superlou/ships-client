import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('control-labeled-data', 'Integration | Component | control labeled data', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{control-labeled-data}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#control-labeled-data}}
      template block text
    {{/control-labeled-data}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
