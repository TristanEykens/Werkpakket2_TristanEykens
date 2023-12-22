import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue'
import detail from '@/views/detail.vue'
import cart from '@/views/cart.vue'
import overzicht from '@/views/overzicht.vue'
import checkout from '@/views/checkout.vue'
import confirmation from "@/views/confirmation.vue"

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/detail/:id', component: detail, name: "product-detail", props: true},
        {path: '/cart', component: cart},
        {path: '/overzicht', component: overzicht, name: "product-list"},
        {path: '/checkout', component: checkout},
        {path: '/confirmation', component: confirmation},
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/thankyou',
            name: 'thankyou',
            component: () => import('@/views/ThankYou.vue')
        },

    ]
})
export default router