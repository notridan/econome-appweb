import { defineStore } from "pinia";
import axios from "../utils/api";
import route from "../router/index";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useAuthStore = defineStore({
    id: "useAuthStore",
    state: () => ({
        userAccessToken: localStorage.getItem('userAccessToken'),
    }),

    actions: {
        async onLogin(email, password) {
            
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
            }
        },
        async onLogout() {
            if(this.userAccessToken){
                try {
                    await axios.post("/api/v1/logout");
    
                    this.userAccessToken = null;
                    localStorage.removeItem('userAccessToken');
    
                    delete axios.defaults.headers.common["Authorization"];
    
                    route.push({ path: "/login" });
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            }
            
        },
        async onCreateAccount(name, email, password, password_confirmation) {
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