import { getField, updateField } from 'vuex-map-fields';

const state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
}


const getters = {
    getField
}

const actions = {
}
const mutations = {
    updateField
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
