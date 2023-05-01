import {createRouter, createWebHistory} from 'vue-router'
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import PostView from "../views/PostView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'signup',
            component: SignUpView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/post',
            name: 'post',
            component: PostView
        }
    ]
})

export default router
