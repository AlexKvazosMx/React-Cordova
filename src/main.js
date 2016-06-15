import { render } from 'react-dom';
import router from './router';

/**
 * Client entry point
 */

const node = document.querySelector('#app');
render(router, node);
