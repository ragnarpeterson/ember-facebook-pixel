# Ember-facebook-pixel

This README outlines the details of collaborating on this Ember addon.

## Installation

````
ember install ember-facebook-pixel
````

## Usage

Set the Pixel's ID config/environment.js:

```js
if (environment === "production") {
  ENV["ember-facebook-pixel"] = {
    id: 'id-of-your-pixel'
  };
}
```

You can either set the Pixel only in one environment like in the above example, or globally. The Pixel will only be initiated if there is an ID found in your app's config.
