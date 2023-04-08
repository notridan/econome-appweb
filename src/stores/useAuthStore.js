import { defineStore } from "pinia";
import axios from "../utils/api";
import route from '../router/index'

export const useAuthStore = defineStore({
    id: 'useAuthStore',

    state: () => ({
        user: {
            userEmail: 'teste@gmail.com',
            userPassword: '123456',
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
        userLogged: false
    }),

    actions: {
        async getCsrfToken() {
            try {
                await axios.get(`/sanctum/csrf-cookie`);
            } catch (error) {
                console.error('Error getting CSRF token: ', error);
            }
        },
        async onLogin() {
            this.getCsrfToken();
            try {
                await axios.post(`/api/login`, {
                    email: this.user.userEmail,
                    password: this.user.userPassword
                }, this.userAccessToken).then((response) => {
                    this.userAccessToken = response.data.token
                    this.userLogged = true;
                    this.userData = response.data.user;
                    window.localStorage.setItem('userData', JSON.stringify(this.userData));
                    window.localStorage.setItem('token', response.data.token);
                    window.localStorage.setItem('userLogged', this.userLogged);
                    route.push({ path: '/' })
                }).then()
            } catch (error) {
                console.error("Error ao tentar fazer login:", error);
                return false;
            }
        },
        isAuthenticated() {
            this.userLogged = false;
            window.location.reload(true)
            if (!this.userLogged) {
                window.sessionStorage.clear();
                window.localStorage.clear();
            }
        }
        ,
        async onLogout() {
            this.isAuthenticated();
            delete axios.defaults.headers.common['Authorization'];
            await axios.post(`/api/logout`, this.userAccessToken).then((response) => {
                route.push({ path: '/login' });
            });
        },
        async onCreateAccount() {
            this.getCsrfToken();
            try {
                await axios.post(`/api/register`, {
                    name: this.userCreate.userName,
                    username: this.userCreate.userUsername,
                    email: this.userCreate.userEmail,
                    password: this.userCreate.userPassword
                }).then((response) => {
                    this.userAccessToken = response.data.token
                    this.userLogged = true;
                    this.userData = response.data.user;
                    window.localStorage.setItem('userData', JSON.stringify(this.userData));
                    window.localStorage.setItem('token', response.data.token);
                    window.localStorage.setItem('userLogged', this.userLogged);
                    window.localStorage.setItem('token', response.data.token);
                    route.push({ path: '/' })
                }).then()
            } catch (error) {
                console.error("Error ao tentar fazer login:", error);
                return false;
            }
        },
    },

    getters: {
        getUserData() {
            const data = localStorage.getItem('userData');
            return JSON.parse(data);
        }
    }


});