import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ship');
  this.route('console', {path: 'ship/:ship_id/console/:console_id'});
});

export default Router;
