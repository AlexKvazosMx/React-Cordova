import { render } from 'react-dom';
import router from './router';

/**
 * Client entry point
 */

 if (global.cordova) {
   document.addEventListener('deviceready', init, false);
 } else {
   init();
 }

 function init() {
   const node = document.querySelector('#app');
   render(router, node);
 }
