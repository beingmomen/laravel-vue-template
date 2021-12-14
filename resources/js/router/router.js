import Vue from 'vue'
// Router
import VueRouter from "vue-router";
Vue.use(VueRouter);


// AUTH
const Login = () => import('../Pages/Auth/Login.vue')
// const Register = () => import('../Pages/Auth/Register.vue')
const ForgetPassword = () => import('../Pages/Auth/ForgetPassword.vue')
const ResetPassword = () => import('../Pages/Auth/ResetPassword.vue')

const Dashboard = () => import('../Pages/Dashboard.vue')

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Login,
            beforeEnter: (to, from, next) => {

                if (localStorage.getItem("max_ott_token")) {
                    next('/dashboard');
                } else {
                    next('/dashboard-login');
                }
            }
        },
        {
            path: '/dashboard-login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("max_ott_token")) {
                    next('/dashboard');
                } else {
                    next();
                }
            }
        },

        {
            path: "/forget-password",
            component: ForgetPassword,
            beforeEnter: (to, from, next) => {
                localStorage.removeItem("max_ott_token")
                next();
            }
        },

        {
            path: "/reset-password/:token?",
            component: ResetPassword,
            beforeEnter: (to, from, next) => {
                localStorage.removeItem("max_ott_token")
                next();
            }
        },
        //  Pages
        {
            path: '/dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {

                if (localStorage.getItem("max_ott_token")) {

                    next();
                } else {
                    next('/dashboard-login');
                }
            }
        },

    ]
});


export default router
