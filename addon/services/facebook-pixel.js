import Ember from 'ember';

const INIT = 'init'

export default Ember.Service.extend({
  id: null,

  isEnabled: Ember.computed.notEmpty('id'),

  setup: Ember.on('init', function() {
    if (this.get('isEnabled')) {
      fbq(INIT, this.id);
    }
  }),

  track(event, params) {
    if (this.get('isEnabled')) {
      fbq('track', event, params);
    }
  }
});
