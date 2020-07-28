import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

const auth = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            Cookies.set('user', user);
        },
        logout(state) {
            state.user = null;
            Cookies.remove('user');
        }
    },
    getters: {
        getUser: state => {
            return state.user;
        }
    }
});

export default auth
