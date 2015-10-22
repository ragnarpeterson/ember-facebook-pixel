import Ember from 'ember'

const PAGE_VIEW = 'PageView';

export function initialize() {
  Ember.Router.reopen({
    facebookPixel: Ember.inject.service(),

    facebookTrackPageView: Ember.on('didTransition', function () {
      this.get('facebookPixel').track(PAGE_VIEW);
    })
  });
}

export default {
  name: 'router',
  initialize: initialize
};
