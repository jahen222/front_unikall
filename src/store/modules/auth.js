import Cookies from 'js-cookie';

const state = {
    state: {
        user: null
    },
}

const mutations = {
    setUser(state, user) {
        state.user = user;
        Cookies.set('user', user);
    },
    logout(state) {
        state.user = null;
        Cookies.remove('user');
    }
}

const getters = {
    getUser: state => {
        return state.user;
    }
}

export default {
    state,
    getters,
    mutations
}
