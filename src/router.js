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
        children: [
            {
                path: "app",
                component: () => import(/* webpackChunkName: "app" */ "./dashboard/views/app"),
                redirect: "/dashboard/app/index",
                children: [
                    {
                        path: "index",
                        component: () => import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards"),
                        redirect: "/dashboard/app/index/default",
                        children: [
                            {
                                path: "default",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Default")
                            },
                            {
                                path: "analytics",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Analytics")
                            },
                            {
                                path: "ecommerce",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Ecommerce")
                            },
                            {
                                path: "content",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Content")
                            }
                        ]
                    },
                    {
                        
                        path: "dashboards",
                        component: () => import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards"),
                        redirect: "/dashboard/app/dashboards/default",
                        children: [
                            {
                                path: "default",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Default")
                            },
                            {
                                path: "analytics",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Analytics")
                            },
                            {
                                path: "ecommerce",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Ecommerce")
                            },
                            {
                                path: "content",
                                component: () =>
                                    import(/* webpackChunkName: "dashboards" */ "./dashboard/views/app/dashboards/Content")
                            }
                        ]
                    },
                    {
                        path: "pages",
                        component: () =>
                            import(/* webpackChunkName: "pages" */ "./dashboard/views/app/pages"),
                        redirect: "/dashboard/app/pages/product",
                        children: [
                            {
                                path: "product",
                                component: () =>
                                    import(/* webpackChunkName : "product" */ "./dashboard/views/app/pages/product"),
                                redirect: "/app/pages/product/data-list",
                                children: [
                                    {
                                        path: "data-list",
                                        component: () =>
                                            import(/* webpackChunkName: "product" */ "./dashboard/views/app/pages/product/DataList")
                                    },
                                    {
                                        path: "thumb-list",
                                        component: () =>
                                            import(/* webpackChunkName: "product" */ "./dashboard/views/app/pages/product/ThumbList")
                                    },
                                    {
                                        path: "image-list",
                                        component: () =>
                                            import(/* webpackChunkName: "product" */ "./dashboard/views/app/pages/product/ImageList")
                                    },
                                    {
                                        path: "details",
                                        component: () =>
                                            import(/* webpackChunkName: "product" */ "./dashboard/views/app/pages/product/Details")
                                    },
                                    {
                                        path: "details-alt",
                                        component: () =>
                                            import(/* webpackChunkName: "product" */ "./dashboard/views/app/pages/product/DetailsAlt")
                                    }
                                ]
                            },
                            {
                                path: "profile",
                                component: () =>
                                    import(/* webpackChunkName : "profile" */ "./dashboard/views/app/pages/profile"),
                                redirect: "/dashboard/app/pages/profile/social",
                                children: [
                                    {
                                        path: "social",
                                        component: () =>
                                            import(/* webpackChunkName: "profile" */ "./dashboard/views/app/pages/profile/Social")
                                    },
                                    {
                                        path: "portfolio",
                                        component: () =>
                                            import(/* webpackChunkName: "profile" */ "./dashboard/views/app/pages/profile/Portfolio")
                                    }
                                ]
                            },
                            {
                                path: "blog",
                                component: () =>
                                    import(/* webpackChunkName : "blog" */ "./dashboard/views/app/pages/blog"),
                                redirect: "/dashboard/app/pages/blog/blog-list",
                                children: [
                                    {
                                        path: "blog-list",
                                        component: () =>
                                            import(/* webpackChunkName: "blog" */ "./dashboard/views/app/pages/blog/BlogList")
                                    },
                                    {
                                        path: "blog-detail",
                                        component: () =>
                                            import(/* webpackChunkName: "blog" */ "./dashboard/views/app/pages/blog/BlogDetail")
                                    }
                                ]
                            },
                            {
                                path: "miscellaneous",
                                component: () =>
                                    import(/* webpackChunkName : "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous"),
                                redirect: "/dashboard/app/pages/miscellaneous/faq",
                                children: [
                                    {
                                        path: "faq",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/Faq")
                                    },
                                    {
                                        path: "knowledge-base",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/KnowledgeBase")
                                    },
                                    {
                                        path: "search",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/Search")
                                    },
                                    {
                                        path: "prices",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/Prices")
                                    },
                                    {
                                        path: "mailing",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/Mailing")
                                    },
                                    {
                                        path: "invoice",
                                        component: () =>
                                            import(/* webpackChunkName: "miscellaneous" */ "./dashboard/views/app/pages/miscellaneous/Invoice")
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: "applications",
                        component: () =>
                            import(/* webpackChunkName: "applications" */ "./dashboard/views/app/applications"),
                        redirect: "/dashboard/app/applications/todo",
                        children: [
                            {
                                path: "todo",
                                component: () =>
                                    import(/* webpackChunkName: "applications" */ "./dashboard/views/app/applications/Todo")
                            },
                            {
                                path: "survey",
                                component: () =>
                                    import(/* webpackChunkName: "applications" */ "./dashboard/views/app/applications/Survey")
                            },
                            {
                                path: "survey/:id",
                                component: () =>
                                    import(/* webpackChunkName: "applications" */ "./dashboard/views/app/applications/SurveyDetail"),
                                props: true
                            },
                            {
                                path: "chat",
                                component: () =>
                                    import(/* webpackChunkName: "applications" */ "./dashboard/views/app/applications/Chat")
                            }
                        ]
                    },
                    {
                        path: "ui",
                        component: () => import(/* webpackChunkName: "ui" */ "./dashboard/views/app/ui"),
                        redirect: "/dashboard/app/ui/forms",
                        children: [
                            {
                                path: "forms",
                                component: () =>
                                    import(/* webpackChunkName : "forms" */ "./dashboard/views/app/ui/forms"),
                                redirect: "/app/ui/forms/layouts",
                                children: [
                                    {
                                        path: "layouts",
                                        component: () =>
                                            import(/* webpackChunkName: "forms" */ "./dashboard/views/app/ui/forms/Layouts")
                                    },
                                    {
                                        path: "components",
                                        component: () =>
                                            import(/* webpackChunkName: "forms" */ "./dashboard/views/app/ui/forms/Components")
                                    },
                                    {
                                        path: "validations",
                                        component: () =>
                                            import(/* webpackChunkName: "forms" */ "./dashboard/views/app/ui/forms/Validations")
                                    },
                                    {
                                        path: "wizard",
                                        component: () =>
                                            import(/* webpackChunkName: "forms" */ "./dashboard/views/app/ui/forms/Wizard")
                                    },
                                ]
                            },
                            {
                                path: "datatables",
                                component: () =>
                                    import(/* webpackChunkName : "datatables" */ "./dashboard/views/app/ui/datatables"),
                                redirect: "/dashboard/app/ui/datatables/divided-table",
                                children: [
                                    {
                                        path: "divided-table",
                                        component: () =>
                                            import(/* webpackChunkName: "datatables" */ "./dashboard/views/app/ui/datatables/DividedTable")
                                    },
                                    {
                                        path: "scrollable",
                                        component: () =>
                                            import(/* webpackChunkName: "datatables" */ "./dashboard/views/app/ui/datatables/Scrollable")
                                    },
                                    {
                                        path: "default",
                                        component: () =>
                                            import(/* webpackChunkName: "datatables" */ "./dashboard/views/app/ui/datatables/Default")
                                    }
                                ]
                            },
                            {
                                path: "components",
                                component: () =>
                                    import(/* webpackChunkName : "components" */ "./dashboard/views/app/ui/components"),
                                redirect: "/dashboard/app/ui/components/alerts",
                                children: [
                                    {
                                        path: "alerts",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Alerts")
                                    },
                                    {
                                        path: "badges",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Badges")
                                    },
                                    {
                                        path: "buttons",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Buttons")
                                    },
                                    {
                                        path: "cards",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Cards")
                                    },
                                    {
                                        path: "carousel",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Carousel")
                                    },
                                    {
                                        path: "charts",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Charts")
                                    },
                                    {
                                        path: "collapse",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Collapse")
                                    },
                                    {
                                        path: "dropdowns",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Dropdowns")
                                    },
                                    {
                                        path: "editors",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Editors")
                                    },
                                    {
                                        path: "icons",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Icons")
                                    },
                                    {
                                        path: "input-groups",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/InputGroups")
                                    },
                                    {
                                        path: "jumbotron",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Jumbotron")
                                    },
                                    {
                                        path: "maps",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Maps")
                                    },
                                    {
                                        path: "modal",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Modal")
                                    },
                                    {
                                        path: "navigation",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Navigation")
                                    },
                                    {
                                        path: "popover-tooltip",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/PopoverTooltip")
                                    },
                                    {
                                        path: "sortable",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Sortable")
                                    },
                                    {
                                        path: "tables",
                                        component: () =>
                                            import(/* webpackChunkName: "components" */ "./dashboard/views/app/ui/components/Tables")
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: "menu",
                        component: () =>
                            import(/* webpackChunkName: "menu" */ "./dashboard/views/app/menu"),
                        redirect: "/dashboard/app/menu/types",
                        children: [
                            {
                                path: "types",
                                component: () =>
                                    import(/* webpackChunkName : "menu-types" */ "./dashboard/views/app/menu/Types")
                            },
                            {
                                path: "levels",
                                component: () =>
                                    import(/* webpackChunkName : "menu-levels" */ "./dashboard/views/app/menu/levels"),
                                redirect: "/dashboard/app/menu/levels/third-level-1",
                                children: [
                                    {
                                        path: "third-level-1",
                                        component: () =>
                                            import(/* webpackChunkName: "menu-levels" */ "./dashboard/views/app/menu/levels/Third-level-1")
                                    },
                                    {
                                        path: "third-level-2",
                                        component: () =>
                                            import(/* webpackChunkName: "menu-levels" */ "./dashboard/views/app/menu/levels/Third-level-2")
                                    },
                                    {
                                        path: "third-level-3",
                                        component: () =>
                                            import(/* webpackChunkName: "menu-levels" */ "./dashboard/views/app/menu/levels/Third-level-3")
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                path: "blank-page",
                component: () =>
                    import(/* webpackChunkName: "blank-page" */ "./dashboard/views/app/blank-page")
            }
        ]
    },

    {
        path: "/error",
        component: () => import(/* webpackChunkName: "error" */ "./dashboard/views/Error")
    },
    {
        path: "/user",
        component: () => import(/* webpackChunkName: "user" */ "./dashboard/views/user"),
        redirect: "/dashboard/user/login",
        children: [
            {
                path: "login",
                component: () =>
                    import(/* webpackChunkName: "user" */ "./dashboard/views/user/Login")
            },
            {
                path: "register",
                component: () =>
                    import(/* webpackChunkName: "user" */ "./dashboard/views/user/Register")
            },
            {
                path: "forgot-password",
                component: () =>
                    import(/* webpackChunkName: "user" */ "./dashboard/views/user/ForgotPassword")
            },
            {
                path: "reset-password",
                component: () =>
                    import(/* webpackChunkName: "user" */ "./dashboard/views/user/ResetPassword")
            },

        ]
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