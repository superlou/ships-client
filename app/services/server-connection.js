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

  subscribe: function(terminal_id) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('socket').send({
        cmd: 'subscribe',
        terminal_id: terminal_id
      }, true);
    });
  },

  onMessage: function(msg) {
    var data = JSON.parse(msg.data);
    // console.log(data);
    console.log(data)

    if (data.terminalBriefs) {
      this.get('store').pushPayload(data);
    } else if (data.terminal) {
      this.get('store').pushPayload(data);
    } else if (data.terminal_update) {
      var model = this.get('store').peekRecord('terminal', data.terminal_update.id);
      model.set('terminalData', data.terminal_update.terminal_data);
    }
  },

  command: function(data) {
    this.get('socket').send({
      cmd: 'command',
      data: data
    }, true);
  },

  joinShip: function(shipCode) {
    this.get('socket').send({
      cmd: 'joinShip',
      shipCode: shipCode
    }, true);
  }
});
