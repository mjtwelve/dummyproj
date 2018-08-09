import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VuexPersistence from "vuex-persist";

import hello from "./hello.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

const vuexLocal = new VuexPersistence({
  strictMode: process.env.NODE_ENV !== "production",
  storage: window.localStorage,
  modules: ["persistence"]
});
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    drawer: null
  },
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
    updateDrawer(state, val) {
      state.drawer = val;
    }
  },
  modules: {
    persistence: {
      state: {
        user: { name: "dummy" }
      },
      mutations: {
        doSomething(state) {
          // 状態を変更する
          state.user.name = "changed3";
          console.log("mu");
        }
      }
    }
  },
  plugins: [vuexLocal.plugin]
});
const routes = [{ path: "/", component: hello }];
const router = new VueRouter({
  mode: "history",
  base: "/", //'GITHUB_PROJECT_NAME/'
  routes // `routes: routes` の短縮表記
});
const app = new Vue({
  store,
  router,
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("updateDrawer", val);
      }
    }
  }
});
app.$mount("#app");
console.log("hello world");
