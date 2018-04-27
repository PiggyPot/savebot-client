import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io';
import VueChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false

Vue.use(VueSocketio, 'http://localhost:3000');
Vue.use(VueChatScroll);

new Vue({
  render: h => h(App)
}).$mount('#app')
