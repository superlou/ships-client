import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ship', {path: 'ship/:ship_code'});
  this.route('terminal', {path: 'ship/:ship_id/terminal/:terminal_id'});
});

export default Router;
