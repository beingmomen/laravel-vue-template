require('./bootstrap');

import Vue from "vue";
import App from "./App.vue";
import store from './store/index'
import router from './router/router'

import axios from 'axios'

import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

import StepProgress from 'vue-step-progress';
Vue.component('step-progress', StepProgress)

const ActionButton = () => import('./Components/ActionButton.vue')
Vue.component('ActionButton', ActionButton)

const DeleteConfirm = () => import('./Components/DeleteConfirm.vue')
Vue.component('DeleteConfirm', DeleteConfirm)



console.warn("store: ", store);
// Bootstrap VUE

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Translations
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import translation from './translations/index'

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: translation, // set locale messages
})

const mixins = {
    methods: {
        updateArrayObject(oldObject, updatedObject) {
            for (let i in oldObject) {
                oldObject[i] = updatedObject[i];
            }
            return oldObject;
        },
        handleResponseError(catchError) {
            if (catchError.response?.status == 404) {
                this.showRequestNotFoundError();
            }
            if (catchError.response?.status == 401) {
                // Unauthenticated
                this.logout();
            }
        },
        checkResposeErrorMessage(responseObject) {
            // there is an error
            if (responseObject.data.message == "Token error") {
                this.logout();
            }
            if (responseObject.data.message == "expired") {
                this.goToDashboard();
            }
        },

        fillErrorsArray(responseData) {
            let errorsArray = []
            if (typeof responseData.errors == "string") {
                errorsArray.push(responseData.errors);
            } else {
                for (const [key, value] of Object.entries(responseData.errors)) {
                    errorsArray.push(...value);
                }
            }
            return errorsArray
        },

        logout() {
            localStorage.removeItem("hmaserv_token");
            localStorage.removeItem("hmaserv_lastVisitedRoute");

            this.token = null;
            this.redirectWindowTo("/dashboard-login")

        },
        showRequestNotFoundError() {
            store._modules.root.context.state.global.isRequestNotFound = true
            setTimeout(() => {
                store._modules.root.context.state.global.isRequestNotFound = false
            }, 5000);
        },
        redirectWindowTo(url) {
            window.location.href = window.location.origin + url;
        },
        // AXIOS handled requests
        axiosRequest(type, request, successCallback) {
            let canRequest = true

            if (type != 'get') {

                canRequest = store._modules.root.context.state.global.isSubmitActive
                console.warn("canRequest: ", canRequest);
            }
            if (canRequest) {
                store._modules.root.context.state.global.isSubmitActive = false
                axios({
                    method: type,
                    url: request.url,
                    data: request.data,
                    headers: {
                        Authorization: `Bearer ${store.getters["auth/getAdminToken"]}`,
                    },
                }).then(res => {
                    successCallback(res);
                }).catch((catchError) => {
                    this.handleResponseError(catchError)
                }).finally(() => {
                    store._modules.root.context.state.global.isSubmitActive = true
                })
            }
        },
        getObjectKeys(object) {
            return Object.keys(object);
        },
        getObjectValues(object) {
            return Object.values(object);
        },
        changeSelectedLanguage(language) {
            // /api/changelang
            if (this.$i18n.locale == language) return
            let currentUserId = store._modules.root.context.state.auth.userId
            axios({
                method: "post",
                url: '/api/changelang',
                data: {
                    language: language,
                    user_id: currentUserId
                },
                headers: {
                    Authorization: `Bearer ${store.getters["auth/getAdminToken"]}`,
                },
            }).then(res => {
                console.warn("res: ", res.data);
                if (language == 'ar') {
                    $('body').addClass('rtl rtl-style')
                    $('body').removeClass('ltr-style')
                    $('.card-body').removeClass('pr-0')
                } else {
                    $('body').removeClass('rtl rtl-style')
                    $('body').addClass('ltr-style')
                    $('.card-body').addClass('pr-0 ')
                }
                this.$i18n.locale = language;

                // this.redirectWindowTo("/"); 

                // window.location.href = window.location.origin
                // this.$router.push("/dedicated")

            }).catch((catchError) => {
                // this.handleResponseError(catchError)
            })


        },


    },
}
Vue.mixin(mixins)

new Vue({
    i18n,
    router,
    store,
    render: (h) => h(App),

}).$mount("#app");
