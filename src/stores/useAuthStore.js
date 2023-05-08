import { defineStore } from "pinia";
import axios from "../utils/api";
import route from "../router/index";
import { useToast } from "vue-toastification";
import {useLoading} from 'vue-loading-overlay';

const toast = useToast();
const $loading = useLoading({
    // options
    isFullPage: true,
    backgroundColor: "#000000"
});

export const useAuthStore = defineStore({
    id: "useAuthStore",
    state: () => ({
        userAccessToken: localStorage.getItem('userAccessToken'),
        userProfile: null,
    }),

    actions: {
        async onLogin(email, password) {
            let loader = $loading.show();
            try {
                const response = await axios.post("/api/v1/login", {
                    email: email,
                    password: password,
                });

                this.userAccessToken = response.data.token;
                localStorage.setItem('userAccessToken', response.data.token);

                route.push({ path: "/" });
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
                return false;
            } finally {
                loader.hide();
            }
        },
        async onForgotPassword(email) {
            let loader = $loading.show();
            try {
                const response = await axios.post("/api/v1/forgot-password", {
                    email: email,
                });

                route.push({ path: "/login" });
                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.message);
                return false;
            } finally {
                loader.hide();
            }
        },
        async onResetPassword(email, password, password_confirmation, token){
            // let loader = $loading.show();
            try {
                const response = await axios.post("/api/v1/reset-password", {
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation,
                    token: token
                });

                route.push({ path: "/login" });
                toast.success(response.data.message)
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message);
                return false;
            } finally {
                // loader.hide();
            }
        },
        async onLogout() {
            if(this.userAccessToken){
                let loader = $loading.show();
                try {
                    await axios.post("/api/v1/logout");
    
                    this.userAccessToken = null;
                    localStorage.removeItem('userAccessToken');
    
                    delete axios.defaults.headers.common["Authorization"];
    
                    route.push({ path: "/login" });
                } catch (error) {
                    toast.error(error.response.data.message);
                } finally {
                    loader.hide();
                }
            }
            
        },
        async onCreateAccount(name, email, password, password_confirmation) {
            let loader = $loading.show();
            try {
                const response = await axios.post("/api/v1/register", {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation,
                });

                this.userAccessToken = response.data.token;
                localStorage.setItem('userAccessToken', response.data.token);

                route.push({ path: "/" });
            } catch (error) {
                toast.error(error.response.data.message);
                return false;
            } finally {
                loader.hide();
            }
        },
        async onGetUserInfo(){
            try {
                const response = await axios.get("/api/v1/user-profile");
                this.userProfile = response.data.data;

            } catch (error) {
                this.userAccessToken = null;
                localStorage.removeItem('userAccessToken');
    
                delete axios.defaults.headers.common["Authorization"];
    
                route.push({ path: "/login" });
                toast.error(error.response.data.message);
            }
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.userAccessToken,
    },
    
});

export const isAuthenticated = () => {
    const authStore = useAuthStore();
    return authStore.isLoggedIn;
};