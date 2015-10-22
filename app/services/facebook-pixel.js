import FacebookPixel from 'ember-facebook-pixel/services/facebook-pixel';
import config from '../config/environment';

export default FacebookPixel.extend({
  id: config['ember-facebook-pixel'].id
});
