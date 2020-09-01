import Cookies from 'js-cookie';

const state = {
    state: {
        user: null,
        jwt: null
    },
}

const mutations = {
    setUser(state, data) {
        state.user = data.user;
        state.jwt = data.jwt;
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('user', data.user);
        Cookies.set('user', data.user);
        Cookies.set('jwt', data.jwt);
    },
    logout(state) {
        state.user = null;
        state.jwt = null;
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        Cookies.remove('user');
        Cookies.remove('jwt');
    }
}

const getters = {
    getUser: state => {
        return state.user;
    },
    getJwt: state => {
        return state.jwt;
    }
}

export default {
    state,
    getters,
    mutations
}
