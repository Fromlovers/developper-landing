import devtools from '@vue/devtools';
import Vue from 'vue';
import App from './App';
import './sass/index.scss';
import router from './routes/index.js';

function onDeviceReady() {
  devtools.connect('http://localhost:3000');
}
if (window.location.protocol === 'http:') {
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  onDeviceReady();
}

const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});

export default app;
