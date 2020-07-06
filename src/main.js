import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import VueYouTubeEmbed from 'vue-youtube-embed'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
