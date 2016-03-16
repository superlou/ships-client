import Ember from 'ember';
import PIXI from 'pixi';
import PixiCanvas from 'ember-cli-pixijs/components/pixi-canvas';

export default PixiCanvas.extend({
  world: undefined,
  pxPerKm: 100,

  draw() {
    const renderer = this.get('pixiRenderer');
    const stage = new PIXI.Container();

    var pxPerKm = this.get('pxPerKm');
    var world = new PIXI.Container();
    this.set('world', world);

    var grid = this.drawGrid(pxPerKm);
    world.addChild(grid);
    world.x = -this.get('data.position_x') / 1000.0 * pxPerKm;
    world.y = -this.get('data.position_y') / 1000.0 * pxPerKm;

    var ship = this.drawShip();

    stage.addChild(world);

    renderer.render(stage);
  },

  drawShip: function(x, y, heading) {
    var ship = new PIXI.Container();
    var graphics = new PIXI.Graphics();

    graphics.lineStyle(1, 0xffffff, 1);

    graphics.moveTo(x - 5, y - 5);
    graphics.lineTo(x + 5, y - 5);
    graphics.lineTo(x, y + 10);
    graphics.endFill();

    ship.addChild(graphics);
    ship.rotation = heading;
    return ship;
  },

  drawGrid: function(pxPerKm) {
    var heightKm = 100;
    var widthKm = 100;
    var gridSpacingKm = 1;

    var height = heightKm * pxPerKm;
    var width = widthKm * pxPerKm;
    var gridSpacing = gridSpacingKm * pxPerKm;

    var grid = new PIXI.Container();
    const graphics = new PIXI.Graphics();

    graphics.lineStyle(1, 0x222222, 1);

    for (var y = 0; y < height; y += gridSpacing / 4) {
      graphics.moveTo(0, y);
      graphics.lineTo(width, y);
      graphics.endFill();
    }

    for (var x = 0; x < width; x += gridSpacing / 4) {
      graphics.moveTo(x, 0);
      graphics.lineTo(x, height);
      graphics.endFill();
    }

    graphics.lineStyle(1, 0x888888, 1);

    for (var y = 0; y < height; y += gridSpacing) {
      graphics.moveTo(0, y);
      graphics.lineTo(width, y);
      graphics.endFill();
    }

    for (var x = 0; x < width; x += gridSpacing) {
      graphics.moveTo(x, 0);
      graphics.lineTo(x, height);
      graphics.endFill();
    }

    grid.addChild(graphics);

    return grid;
  }
});
