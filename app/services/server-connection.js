import Ember from 'ember';

export default Ember.Service.extend({
  socketService: Ember.inject.service('websockets'),
  store: Ember.inject.service('store'),

  url: 'ws://localhost:8081',
  isConnected: false,
  socket: undefined,

  connect: function() {
    var socket = this.get('socketService').socketFor(this.get('url'));
    this.set('socket', socket);

    socket.on('close', (event) => {
      this.set('isConnected', false);

      Ember.run.later(this, () => {
        socket.reconnect();
      }, 1000);
    });

    socket.on('message', this.onMessage.bind(this));

    return new Ember.RSVP.Promise((resolve, reject) => {
      socket.on('open', (event) => {
        this.set('isConnected', true);
        resolve();
      });
    });
  },

  subscribe: function(ship_id, console_id) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('socket').send({
        cmd: 'subscribe',
        ship_id: ship_id,
        console_id: console_id
      }, true);
    });
  },

  onMessage: function(msg) {
    var data = JSON.parse(msg.data);

    if (data.response_type == 'console_config') {
      var model = this.get('store').peekRecord('console', data.console_id);
      model.set('controls', data.controls);
    } else if (data.response_type == 'data_update') {
      var model = this.get('store').peekRecord('console', data.console_id);
      model.set('consoleData', data.console_data);
    }
  }
});
