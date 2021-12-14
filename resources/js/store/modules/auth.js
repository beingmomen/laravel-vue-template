import { getField, updateField } from 'vuex-map-fields';
// import router from '../../router'

const state = {
    token: localStorage.getItem("max_ott_token"),
    hasLogined: localStorage.getItem("max_ott_token") ? true : false,
    userId: localStorage.getItem("max_ott_user_id"),
    resetToken: localStorage.getItem("max_ott_reset_password_token"),
}


const getters = {
    isLogined(state) {
        return state.hasLogined
    },
    getAdminToken(state) {
        return state.token;
    },
    getCurrentUserId(state) {
        return state.userId;
    },
    getIsCurrentUserAdmin(state) {
        return !state.isCurrentUserAdmin;
    },
    userType(state) {
        return state.userType
    },
    getCurrentCredit(state) {
        return state.currentCredit + ""
    },
    getField
}

const actions = {

}
const mutations = {
    saveToken(state, data) {
        if (data.token) {

            state.token = data.token;
            state.userId = data.id;
        }
        state.hasLogined = true;

        localStorage.setItem("max_ott_token", data.token);
        localStorage.setItem("max_ott_user_id", data.id)
        localStorage.setItem("max_ott_user_email", data.email);
        localStorage.setItem("max_ott_user_name", data.name);
        localStorage.setItem("max_ott_username", data.username);
    },
    saveResetPasswordToken(state, data) {
        if (data.token) {
            localStorage.setItem("max_ott_reset_password_token", data.token);
            state.resetToken = data.token;
        }
    },
    updateField
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
