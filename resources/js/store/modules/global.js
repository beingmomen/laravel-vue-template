
import { getField, updateField } from 'vuex-map-fields';


const state = {

    isDark: false,
    selectedLanguage: 'en',
    isSubmitActive: true,
    isRequestNotFound: false,

}
const getters = {

    getIsSubmitActive(state) {
        return state.isSubmitActive
    },
    getIsRequestNotFound(state) {
        return state.isRequestNotFound
    },


    getField
}
const actions = {

    handleToggler(state) {
        if (window.matchMedia("(min-width: 992px)").matches) {
        } else if (window.matchMedia("(max-width: 991px)").matches) {
            $("body").toggleClass("sidebar-open");
            $("body").removeClass("sidebar-folded");
        }
    },


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
