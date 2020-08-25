import Cookies from 'js-cookie';

export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const defaultStartPath = '/dashboard/app/index/default'
export const searchPath = '/dashboard/app/pages/miscellaneous/search'
export const buyUrl = 'https://1.envato.market/nEyZa'

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'en'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
  authDomain: "piaf-vue-login.firebaseapp.com",
  databaseURL: "https://piaf-vue-login.firebaseio.com",
  projectId: "piaf-vue-login",
  storageBucket: "piaf-vue-login.appspot.com",
  messagingSenderId: "557576321564",
  appId: "1:557576321564:web:bc2ce73477aff5c2197dd9"
};


export const apiUrl = 'https://api.coloredstrategies.com'

var aux = {
  id: 1,
  title: 'undefined',
  img: '/assets/img/profile-pic-l.jpg',
  date: 'Last seen today'
}
if (Cookies.get("user") !== undefined) {
  var user = JSON.parse(Cookies.get("user"));
  aux = {
    id: user.id,
    title: user.username,
    img: '/assets/img/profile-pic-l.jpg',
    date: 'Last seen today'
  }
}

export const currentUser = aux;

export const isAuthActive = true
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'theme_selected_color'
export const defaultColor = 'light.blueolympic'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']
