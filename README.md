# Ember-facebook-pixel

This README outlines the details of collaborating on this Ember addon.

This package appears to be unmaintained.

## Installation

````
ember install ember-facebook-pixel --save-dev
````

## Setup

Set the Pixel's ID `config/environment.js`:

```js
if (environment === "production") {
  ENV["ember-facebook-pixel"] = {
    id: 'id-of-your-pixel'
  };
}
```

You can either set the Pixel only in one environment like in the above example or globally. The Pixel will only be initiated if there is an ID found in your app's config.

## Usage

By default 'PageView' events will be called on each transition.

To track a standard event or custom action anywhere in your app inject the `facebookPixel` service and call the desired event.

For example `app/controllers/registration.js`:

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  facebookPixel: Ember.inject.service(),
  actions: {
    registerUser: function () {
      // normal registration calls and check
    
      // add facebook action
      this.get('facebookPixel').track('CompleteRegistration');
    }
  }
});
```



