import Ember from 'ember';
/* global fbq */

const INIT = 'init';

export default Ember.Service.extend({
  id: null,

  isEnabled: Ember.computed.notEmpty('id'),

  fbq(...args) {
    if (typeof fbq === 'undefined') {
      return null;
    }
    return fbq(args);
  },

  setup: Ember.on('init', function setup() {
    if (this.get('isEnabled')) {
      this.fbq(INIT, this.id);
    }
  }),

  track(event, params) {
    if (this.get('isEnabled')) {
      this.fbq('track', event, params);
    }
  },
});
