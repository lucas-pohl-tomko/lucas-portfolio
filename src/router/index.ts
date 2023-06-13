import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomeLayout',
            component: () => import('@/layouts/Home.vue'),
            children: [
                {
                    path: '',
                    name: 'articles',
                    component: () => import(/* webpackChunkName: "Home" */ '@/views/Content.vue')
                }
            ]
        }
    ]
})

export default router
