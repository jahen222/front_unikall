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
                },
                {
                    path: "layout",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/Layout")
                },
                {
                    path: "card",
                    component: () => import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/card"),
                    redirect: "/dashboard/app/business/card/card",
                    children: [
                        {
                            path: "card",
                            component: () => import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/card/Card")
                        },
                        {
                            path: "print",
                            component: () => import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/business/card/Print")
                        }]
                }]
            },
            {
                path: "products",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/product"),
                redirect: "/dashboard/app/products/products",
                children: [{
                    path: "products",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/product/ProductList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/product/Details")
                }]
            },
            {
                path: "blog",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/blog"),
                redirect: "/dashboard/app/blog/blog",
                children: [{
                    path: "blog",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/blog/BlogList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/blog/Details")
                }]
            },
            {
                path: "galery",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/galery"),
                redirect: "/dashboard/app/galery/galery",
                children: [{
                    path: "galery",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/galery/GaleryList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/galery/Details")
                }]
            },
            {
                path: "service",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/service"),
                redirect: "/dashboard/app/service/service",
                children: [{
                    path: "service",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/service/ServiceList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/service/Details")
                }]
            },
            {
                path: "message",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/message"),
                redirect: "/dashboard/app/message/message",
                children: [{
                    path: "message",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/message/MessageList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/message/Details")
                }]
            },
            {
                path: "orders",
                component: () => import(/* webpackChunkName: "product" */ "./dashboard/views/unikall/orders"),
                redirect: "/dashboard/app/orders/orders",
                children: [{
                    path: "orders",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/orders/OrderList")
                },
                {
                    path: "details/:id",
                    component: () =>
                        import(/* webpackChunkName: "personal" */ "./dashboard/views/unikall/orders/Details")
                }]
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
        path: "/site/:id",
        components: require("./containers/Selector.vue"),
        children: [
            {
                path: "service/:sid",
                component: () => import(/* webpackChunkName: "personal" */ "./layouts/general/servicedetail")
            },
            {
                path: "product/:pid",
                component: () => import(/* webpackChunkName: "personal" */ "./layouts/general/productdetail")
            },
            {
                path: "checkout/:cid",
                component: () => import(/* webpackChunkName: "personal" */ "./layouts/general/checkout")
            }
        ]
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