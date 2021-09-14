import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

const globalData = new Vue({
  data: {
    $isNavOpened: false,
    $isModalOpened: false,
  },
});
Vue.mixin({
  computed: {
    $isNavOpened: {
      get: function () {
        return globalData.$data.$isNavOpened;
      },
      set: function (value) {
        globalData.$data.$isNavOpened = value;
      },
    },
    $isModalOpened: {
      get: function () {
        return globalData.$data.$isModalOpened;
      },
      set: function (value) {
        globalData.$data.$isModalOpened = value;
      },
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
