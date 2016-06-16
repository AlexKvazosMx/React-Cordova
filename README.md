# React - Cordova
[React](https://facebook.github.io/react/) boilerplate featuring [React-Router](https://github.com/reactjs/react-router), [Baobab](https://github.com/Yomguithereal/baobab), [Less](http://lesscss.org/), [Webpack](https://webpack.github.io/docs/) & [Hot Reloading](https://github.com/gaearon/react-hot-loader). Built for [ES6](https://github.com/lukehoban/es6features)/[7](https://github.com/hemanth/es7-features) Cordova applications.

[![David-DM](https://david-dm.org/AlexKvazosMx/React-Cordova.svg)](https://david-dm.org/AlexKvazosMx/React-Cordova)
[![CircleCI](https://circleci.com/gh/AlexKvazosMx/React-Cordova/tree/master.svg?style=svg)](https://circleci.com/gh/AlexKvazosMx/React-Cordova/tree/master)


## Getting Started
Be sure that you have [Cordova](https://cordova.apache.org/) >=6.0.0 installed on your computer. Secondly, you will need [ImageMagick](http://www.imagemagick.org/script/index.php) for the bundle task to process your icon and splashscreen into the proper size for each platform's requirements.

Cordova can be installed with `npm install -g cordova`.

ImageMagick can be installed using `brew install imagemagick` on mac or with `sudo apt-get install imagemagick` on Debian/Ubuntu systems.

## Development
This project uses purely Webpack to bundle your javascript and css files. Resources like images, fonts, audio, or anything else will be copied from the `resources/` folder to the `www/` folder. The javascript and css bundles will be created on the `www/` folder. This folder will be the one used by Cordova to create your iOS/Android bundles. During development, the `www/` folder will not be created, Webpack will serve this imaginary folder on the specified host and port, default to `http://0.0.0.0:8080`. You can use the Cordova app to access this URL and test your app's responsiveness on different devices. To test features it is strongly recommended that you test with real iOS/Android bundles on real devices.

```bash
$ npm run dev
```

This task will serve the application in `development` mode. This command will basically serve the imaginary `www/` folder so that you can access from your browser or other devices.

Webpack & [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) will prepare your javascript and css bundles and serve them from memory. Changes to the less stylesheets will trigger an automatic compile and a livereload on the browser. Changes to React components will also trigger hot reloads which will refresh the component logic on the browser without doing a full reload. All this functionality works with the already installed modules, no browser extensions are required. Source maps are generated for the javascript bundle.

## Building
Building the application is easier than you expect. A single command will bundle both javascript and css and output them on the `www/` folder, and then it will use the `icon.png` and `splash.png` files located at the root directory to create all the sizes for each platform you have installed. Once that command is done executing, use the cordova build command to package your app to the platform of your choice.

```bash
$ npm run bundle
$ cordova build <platform>
```

Both files will be compressed and applicable javascript variables will be mangled. No source maps will be generated.

If you want to exclude some code from development/production javascript bundles, you can easily do so like this:

```javascript
if (process.env.NODE_ENV === 'development') {
  // Anything inside this if statement, INCLUDING the statement, will be removed
  // completely from bundles that are not created by the development task.
  // You can go as far as requiring a file in here, knowing that it wont be
  // required in production builds.
}
```
