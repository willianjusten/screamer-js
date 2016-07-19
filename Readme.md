## Screamer.JS
[![Build Status](https://travis-ci.org/willianjusten/screamer-js.svg)](https://travis-ci.org/willianjusten/screamer-js)

![Minion using Megaphone](screamer.jpg)

> Screamer.js is a Vanilla Javascript plugin to provide simple yet fully customisable web notifications using [Web Notifications API](http://www.w3.org/TR/notifications/).

## Demo

![screenshot of notifications](screenshot.png)

If you want to see how it works, take a look at the [DEMO](http://willianjusten.com.br/screamer-js/example/).

## Installation

1. Download the [zip](https://github.com/willianjusten/screamer-js/archive/master.zip)
2. Paste the [screamer.js](https://github.com/willianjusten/screamer-js/blob/master/screamer.js) at your `js` assets folder.
3. If you want to use same images, get them on [https://github.com/willianjusten/screamer-js/tree/master/example] and paste to your `img` assets folder.

## How to Use

### CommonJS

```js

var Screamer = require('screamer');
var notification = new Screamer(options);
```

### AMD

```js
define([ 'Screamer' ], function( Screamer ) {
  var notification = new Screamer(options);
});
```

To create the Notification you have to create a new instance of `Screamer`, set some options that you wish and use the `notify` method to start the notification. Take a look at this snippet:

```js

// create an instance of Screamer with some options
var scream = new Screamer({
    'title': 'Success!',
    'body': 'Lorem ipsum dolor sit amet.',
    'icon': 'icon_success.png',
    'fade': 1000
});

// adding an eventListener to call the Notification
var button = document.querySelector('#fade');
button.addEventListener('click', function(){
    scream.notify();
});
```

You can attach this to different events, like `onload`, `ready` or anything else that allows to call the `notify` method.

## Options

- `title` (string) - notification title. (**REQUIRED**)
- `body` (string) - notification message.
- `icon` (string) - path to the notification icon.
- `tag` (string) - unique identifier to stop duplicate notifications.
- `lang` (string) - language of the notification. (default: en).
- `timeout` (integer) - time in miliseconds to fade the notification.
- `before` (function) - A callback function called before show the notification.
- `after` (function) - A callback function called before show the notification.

## Static Methods

- `Screamer.verifySupport()` - Function to test for Web Notifications API browser support.
- `Screamer.checkPermission()` - Verify if permission exists, if not, request a permission and verify if granted.

## Testing

First of all, install the [NodeJS](https://nodejs.org/) and deppendencies.

```sh
npm install
```

Later, you can run all tests running:

```sh
npm test
```

This should be open a Firefox instance and do a single run of tests.

## Run Demo locally

Because the Web Notification require some permissions, you have to run this on a single server. An easy way to run this is:

```sh
python -m SimpleHTTPServer
```

*Pay attention if your port is not in use.* 

## Browser Support

This library relies on [Web Notifications API](http://www.w3.org/TR/notifications/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
31+ ✔ | 38+ ✔ | 32+ ✔ | 8+ ✔ | Nope ✘ |

## Thanks

This project would be nothing without this guys:

- [Paulo Oliveira](https://github.com/paulopotter) - he create all the stuff with me.
- [Natália Medina](https://github.com/ntmedina) - our designer and a lovely girl. (Coelhinha da Duracell!!)
- [Rodrigo Machado](https://github.com/rcmachado) - he gave me the idea.
- [All contributors](https://github.com/willianjusten/screamer-js/graphs/contributors)

## License 

This plugin is free and open source software, distributed under the The MIT License. So feel free to use this to create notifications for your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to @willian_justen, that would be pretty sweet.
