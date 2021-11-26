import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
