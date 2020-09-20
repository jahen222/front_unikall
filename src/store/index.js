import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import menu from './modules/menu'
import user from './modules/user'
import chat from './modules/chat'
import todo from './modules/todo'
import survey from './modules/survey'
import auth from './modules/auth'

Vue.use(Vuex)
let cart = window.localStorage.getItem('CartItems');

export default new Vuex.Store({
  state: {
    CartItems: cart ? JSON.parse(cart) : []
  },
  getters: {
    CartItems: (state) => state.CartItems,
  },
  mutations: {
    changeLang (state, payload) {
      app.$i18n.locale = payload
      localStorage.setItem('currentLanguage', payload)
    },
    ADD_Cart_Item(state, item) {
      state.CartItems.push(item);
    },
    REMOVE_Cart_Item(state, index) {
      state.CartItems.splice(index, 1);
    },
    SAVE_Cart(state) {
      window.localStorage.setItem('CartItems', JSON.stringify(state.CartItems));
    } 
  },
  actions: {
    setLang ({ commit }, payload) {
      commit('changeLang', payload)
    },
    addCartItem(context, item) {
      context.commit("ADD_Cart_Item", item);
      this.commit('SAVE_Cart');
    },
    removeCartItem(context, index) {
      context.commit("REMOVE_Cart_Item", index);
      this.commit('SAVE_Cart');
    }
  },
  modules: {
    auth,
    menu,
    user,
    chat,
    todo,
    survey
  }
})