import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from "vue-router";
// apollo
import VueApollo from "vue-apollo";
import apolloClient from "./utils/vue-apollo";
// bootstrap & bootstrapvue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// styles
import './assets/oapee/css/style.css';
import './assets/oapee/css/responsive.css';
// icons
import './assets/oapee/css/oapee-icons.css';
import './assets/oapee/css/fontawesome-all.min.css';
// wizard
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
// cookies
import Cookies from "js-cookie";
// stores
import store from './store/auth'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueFormWizard);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Home.vue")
    },
    {
      path: "/login",
      components: require("./components/auth/Login.vue")
    },
    {
      path: "/register",
      components: require("./components/auth/Register.vue")
    },
    {
      path: "/journey",
      components: require("./containers/Journey.vue")
    },
    {
      path: "/aboutus",
      components: require("./containers/AboutUs.vue")
    },
    {
      path: "/social",
      components: require("./containers/Social.vue")
    },
    {
      path: "/articles",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/dashboard",
      components: require("./containers/Dashboard.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Cookies.get("user") !== undefined) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");