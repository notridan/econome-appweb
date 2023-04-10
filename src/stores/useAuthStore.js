import { defineStore } from "pinia";
import axios from "../utils/api";
import route from "../router/index";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useAuthStore = defineStore({
    id: "useAuthStore",

    state: () => ({
        user: {
            userEmail: "",
            userPassword: "",
            userRememberLogin: false,
        },
        userCreate: {
            userName: null,
            userUsername: null,
            userEmail: null,
            userPassword: null,
        },
        userData: null,
        userAccessToken: null,
        userLogged: false,
    }),

    actions: {
        async getCsrfToken() {
            try {
                await axios.get(`/sanctum/csrf-cookie`);
            } catch (error) {
                toast.error(error.message);
            }
        },
        async onLogin() {
            await this.getCsrfToken();

            try {
                const response = await axios.post("/login", {
                    email: this.user.userEmail,
                    password: this.user.userPassword,
                });

                this.setUserData(response);
                route.push({ path: "/" });
            } catch (error) {
                toast.error(error.response.data.message);
                return false;
            }
        },
        isAuthenticated() {
            // window.location.reload(true);
            if (!this.userLogged) {
                window.sessionStorage.clear();
                window.localStorage.clear();
            }
        },
        async onLogout() {
            this.isAuthenticated();
            delete axios.defaults.headers.common["Authorization"];
            
            try {
                await axios.post("/logout");
                route.push({ path: "/login" });
              } catch (error) {
                toast.error(error.response.data.message);
              }
        },
        async onCreateAccount() {
            // await this.getCsrfToken();

            try {
                const response = await axios.post("/register", {
                    name: this.userCreate.userName,
                    username: this.userCreate.userUsername,
                    email: this.userCreate.userEmail,
                    password: this.userCreate.userPassword
                });

                this.setUserData(response);
                route.push({ path: "/" });
            } catch (error) {
                toast.error(error.response.data.message);
                return false;
            }
        },
        setUserData(response) {
            this.userAccessToken = response.data.token;
            this.userLogged = true;
            this.userData = response.data.user;
            window.localStorage.setItem("userData", JSON.stringify(this.userData));
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("userLogged", this.userLogged);
        },
    },

    getters: {
        getUserData() {
            const data = localStorage.getItem("userData");
            return JSON.parse(data);
        },
    },
});