import Ember from 'ember';

const INIT = 'init'

export default Ember.Service.extend({
  id: null,

  setup: Ember.on('init', function() {
    fbq(INIT, this.id);
  }),

  track(event, params) {
    fbq('track', event, params);
  }
});
