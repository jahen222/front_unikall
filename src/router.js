import Vue from "vue";
import VueRouter from "vue-router";
//import AuthRequired from "./dashboard/utils/AuthRequired";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        components: require("./containers/Home.vue")
    },
    {
        path: "/login",
        components: require("./components/auth/Login.vue")
    },
    {
        path: "/register",
        components: require("./components/auth/Register.vue")
    },
    {
        path: "/journey",
        components: require("./containers/Journey.vue")
    },
    {
        path: "/aboutus",
        components: require("./containers/AboutUs.vue")
    },
    {
        path: "/social",
        components: require("./containers/Social.vue")
    },
    {
        path: "/articles",
        components: require("./containers/Articles.vue")
    },
    {
        path: "/article/:id",
        components: require("./containers/Article.vue")
    },
    {
        path: "/dashboard",
        component: () => import(/* webpackChunkName: "home" */ "./dashboard/views/home"),
        redirect: "/dashboard/app",
        meta: {
            requiresAuth: true
        },
        children: [{
            path: "app",
            component: () => import(/* webpackChunkName: "app" */ "./dashboard/views/app"),
            redirect: "/dashboard/app/index",
            children: [{
                path: "index",
                component: () => import(/* webpackChunkName: "dashboard" */ "./dashboard/views/unikall/home"),
                redirect: "/dashboard/app/index/default",
                children: [{
                    path: "default",
                    component: () =>
                        import(/* webpackChunkName: "dashboard" */ "./dashboard/views/unikall/home/Default")
                },
                {
                    path: "analytics",
                    component: () =>
                        import(/* webpackChunkName: "dashboard" */ "./dashboard/views/unikall/home/Analytics")
                }]
            },
            {
                path: "personal",
                component: () => import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/personal"),
                redirect: "/dashboard/app/personal/profile",
                children: [{
                    path: "profile",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/personal/Profile")
                },
                {
                    path: "portfolio",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/personal/Portfolio")
                },
                {
                    path: "social",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/personal/Social")
                }]
            },
            {
                path: "business",
                component: () => import(/* webpackChunkName: "business" */ "./dashboard/views/unikall/business"),
                redirect: "/dashboard/app/business/business",
                children: [{
                    path: "business",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/Business")
                },
                {
                    path: "chat",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/Chat")
                },
                {
                    path: "orders",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/Orders")
                }]
            },
            {
                path: "products",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/product/ThumbList"),
            },
            {
                path: "payment",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/payment/Payment"),
            },
            {
                path: "shipping",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/shipping/Shipping"),
            },
            {
                path: "guaranty",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/guaranty/Guaranty"),
            },
            {
                path: "sales",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/sales/Sales"),
            }]
        }]
    },
    {
        path: "/service-templates/beauty-and-fashion",
        components: require("./containers/ServiceTemplates.vue")
    },
    {
        path: "*",
        component: () => import(/* webpackChunkName: "error" */ "./dashboard/views/Error")
    }
];

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});

export default router;