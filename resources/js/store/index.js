import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./modules/auth.js";
import login from "./modules/login.js";
import global from "./modules/global.js";

const store = new Vuex.Store({
    modules: {
        auth,
        login,
        global
    }
});


export default store;
