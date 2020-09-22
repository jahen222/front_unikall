import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
// apollo
import VueApollo from "vue-apollo";
import apolloClient from "./utils/vue-apollo";
// bootstrap & bootstrapvue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// notifications
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
// styles
import './assets/oapee/css/style.css';
import './assets/oapee/css/responsive.css';
// icons
import './assets/oapee/css/oapee-icons.css';
import './assets/oapee/css/fontawesome-all.min.css';
// poppins font style
import './assets/fonts/poppins/popin-stylesheet.css';
// wizard
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

//validator
import Vuelidate from "vuelidate";

// cookies
import Cookies from "js-cookie";
// stores
import store from './store'
// router
import router from './router'
// multi images
import VueLazyload from 'vue-lazyload'
/* piaf dashboard imports */
// Multi Language Add
import en from './dashboard/locales/en.json'
import es from './dashboard/locales/es.json'
import VueI18n from 'vue-i18n'
import { defaultLocale, localeOptions, firebaseConfig } from './dashboard/constants/config'
// Notification Component Add
import Notifications from './dashboard/components/Common/Notification'
// Breadcrumb Component Add
import Breadcrumb from './dashboard/components/Common/Breadcrumb'
// RefreshButton Component Add
import RefreshButton from './dashboard/components/Common/RefreshButton'
// Colxx Component Add
import Colxx from './dashboard/components/Common/Colxx'
// Perfect Scrollbar Add
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import contentmenu from 'v-contextmenu'
import VueLineClamp from 'vue-line-clamp'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase/app'
import 'firebase/auth'
// marked lenguaje
import marked from 'marked';
// metadata
import VueMeta from 'vue-meta';

// definitions
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

// auth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Cookies.get("user") !== undefined) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

// init
miniToastr.init({ types: toastTypes })
function toast({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb)
}

Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueFormWizard);
Vue.use(Vuelidate);
Vue.use(VueLazyload)
Vue.use(VueNotifications, options)

// dashboard
Vue.use(VueI18n);
const messages = { en: en, es: es };
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
});
Vue.use(Notifications);
Vue.use(require('vue-shortkey'));
Vue.use(contentmenu);
Vue.use(VueScrollTo);
Vue.use(VueLineClamp, {
  importCss: true
});

Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-refresh-button', RefreshButton);
Vue.component('b-colxx', Colxx);
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.use(VueMeta);

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

export default new Vue({
  i18n,
  store,
  router,
  apolloProvider,
  marked,
  render: h => h(App)
}).$mount("#app");