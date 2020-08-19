const data = [{
  id: "dashboards",
  icon: "iconsminds-shop-4",
  label: "menu.app",
  to: "/dashboard/app/index",
  subs: [{
    icon: "simple-icon-briefcase",
    label: "menu.default",
    to: "/dashboard/app/index/default"
  },
  {
    icon: "simple-icon-pie-chart",
    label: "menu.analytics",
    to: "/dashboard/app/index/analytics"
  }]
},
{
  id: "personal",
  icon: "simple-icon-user",
  label: "Personal",
  //to: "/dashboard/app/ui/forms",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.profile",
    to: "/dashboard/app/ui/forms/components"
  },
  {
    icon: "simple-icon-share",
    label: "menu.social",
    to: "/dashboard/app/pages/profile/social"
  },
  {
    icon: "simple-icon-link",
    label: "menu.portfolio",
    to: "/dashboard/app/pages/profile/portfolio"
  }]
},
{
  id: "pages",
  icon: "iconsminds-digital-drawing",
  //label: "menu.pages",
  label: "Business",
  to: "/dashboard/app/pages",
  subs: [{
    id: "pages-authorization",
    label: "menu.authorization",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    },
    {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    },
    {
      icon: "simple-icon-user-following",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    },
    {
      icon: "simple-icon-user-following",
      label: "menu.reset-password",
      to: "/user/reset-password",
      newWindow: true
    }
    ]
  },
  {
    id: "pages-product",
    label: "menu.product",
    to: "/dashboard/app/pages/product",
    subs: [{
      icon: "simple-icon-credit-card",
      //label: "menu.data-list",
      label: "Orders",
      to: "/dashboard/app/pages/product/data-list"
    },
    {
      icon: "simple-icon-list",
      //label: "menu.thumb-list",
      label: "Products list",
      to: "/dashboard/app/pages/product/thumb-list"
    },
    {
      icon: "simple-icon-grid",
      //label: "menu.image-list",
      label: "Products list",
      to: "/dashboard/app/pages/product/image-list"
    },
    {
      icon: "simple-icon-picture",
      label: "menu.details",
      to: "/dashboard/app/pages/product/details"
    },
    {
      icon: "simple-icon-book-open",
      label: "menu.details-alt",
      to: "/dashboard/app/pages/product/details-alt"
    },
    ]
  },
  {
    id: "pages-profile",
    label: "menu.profile",
    to: "/dashboard/app/pages/profile",
    subs: [{
      icon: "simple-icon-share",
      label: "menu.social",
      to: "/dashboard/app/pages/profile/social"
    },
    {
      icon: "simple-icon-link",
      label: "menu.portfolio",
      to: "/dashboard/app/pages/profile/portfolio"
    },

    ]
  },
  {
    id: "pages-blog",
    label: "menu.blog",
    to: "/dashboard/app/pages/blog",
    subs: [{
      icon: "simple-icon-share",
      label: "menu.blog-list",
      to: "/dashboard/app/pages/blog/blog-list"
    },
    {
      icon: "simple-icon-link",
      label: "menu.blog-detail",
      to: "/dashboard/app/pages/blog/blog-detail"
    },

    ]
  },
  {
    id: "pages-miscellaneous",
    label: "menu.miscellaneous",
    to: "/dashboard/app/pages/miscellaneous",
    subs: [
      {
        icon: "simple-icon-question",
        label: "menu.faq",
        to: "/dashboard/app/pages/miscellaneous/faq"
      },
      {
        icon: "simple-icon-graduation",
        label: "menu.knowledge-base",
        to: "/dashboard/app/pages/miscellaneous/knowledge-base"
      },
      {
        icon: "simple-icon-diamond",
        label: "menu.prices",
        to: "/dashboard/app/pages/miscellaneous/prices"
      },
      {
        icon: "simple-icon-magnifier",
        label: "menu.search",
        to: "/dashboard/app/pages/miscellaneous/search"
      },
      {
        icon: "simple-icon-envelope-open",
        label: "menu.mailing",
        to: "/dashboard/app/pages/miscellaneous/mailing"
      },
      {
        icon: "simple-icon-bag",
        label: "menu.invoice",
        to: "/dashboard/app/pages/miscellaneous/invoice"
      }
    ]
  },
  ]
},
{
  id: "applications",
  icon: "iconsminds-air-balloon-1",
  //label: "menu.applications",
  label: "Personal",
  to: "/dashboard/app/applications",
  subs: [{
    icon: "simple-icon-check",
    //label: "menu.todo",
    label: "Profile",
    to: "/dashboard/app/applications/todo"
  },
  {
    icon: "simple-icon-calculator",
    label: "menu.survey",
    to: "/dashboard/app/applications/survey"
  },
  {
    icon: "simple-icon-bubbles",
    label: "menu.chat",
    to: "/dashboard/app/applications/chat"
  }
  ]
},
{
  id: "ui",
  icon: "iconsminds-pantone",
  label: "menu.ui",
  to: "/dashboard/app/ui",
  subs: [
    {
      id: "ui-forms",
      label: "menu.forms",
      to: "/dashboard/app/ui/forms",
      subs: [{
        icon: "simple-icon-notebook",
        label: "menu.layouts",
        to: "/dashboard/app/ui/forms/layouts"
      },
      {
        icon: "simple-icon-puzzle",
        label: "menu.components",
        to: "/dashboard/app/ui/forms/components"
      },
      {
        icon: "simple-icon-check",
        label: "menu.validations",
        to: "/dashboard/app/ui/forms/validations"
      },
      {
        icon: "simple-icon-magic-wand",
        label: "menu.wizard",
        to: "/dashboard/app/ui/forms/wizard"
      }
      ]
    },
    {
      id: "ui-datatables",
      label: "menu.datatables",
      to: "/dashboard/app/ui/datatables",
      subs: [
        {
          icon: "simple-icon-screen-desktop",
          label: "menu.divided-table",
          to: "/dashboard/app/ui/datatables/divided-table"
        },
        {
          icon: "simple-icon-mouse",
          label: "menu.scrollable",
          to: "/dashboard/app/ui/datatables/scrollable"
        },
        {
          icon: "simple-icon-grid",
          label: "menu.default",
          to: "/dashboard/app/ui/datatables/default"
        }
      ]
    },
    {
      id: "ui-components",
      label: "menu.components",
      to: "/dashboard/app/ui/components",
      subs: [{
        icon: "simple-icon-bell",
        label: "menu.alerts",
        to: "/dashboard/app/ui/components/alerts"
      },
      {
        icon: "simple-icon-badge",
        label: "menu.badges",
        to: "/dashboard/app/ui/components/badges"
      },
      {
        icon: "simple-icon-control-play",
        label: "menu.buttons",
        to: "/dashboard/app/ui/components/buttons"
      },
      {
        icon: "simple-icon-layers",
        label: "menu.cards",
        to: "/dashboard/app/ui/components/cards"
      },
      {
        icon: "simple-icon-picture",
        label: "menu.carousel",
        to: "/dashboard/app/ui/components/carousel"
      },
      {
        icon: "simple-icon-chart",
        label: "menu.charts",
        to: "/dashboard/app/ui/components/charts"
      },
      {
        icon: "simple-icon-arrow-up",
        label: "menu.collapse",
        to: "/dashboard/app/ui/components/collapse"
      },
      {
        icon: "simple-icon-arrow-down",
        label: "menu.dropdowns",
        to: "/dashboard/app/ui/components/dropdowns"
      },
      {
        icon: "simple-icon-book-open",
        label: "menu.editors",
        to: "/dashboard/app/ui/components/editors"
      },

      {
        icon: "simple-icon-star",
        label: "menu.icons",
        to: "/dashboard/app/ui/components/icons"
      },
      {
        icon: "simple-icon-note",
        label: "menu.input-groups",
        to: "/dashboard/app/ui/components/input-groups"
      },
      {
        icon: "simple-icon-screen-desktop",
        label: "menu.jumbotron",
        to: "/dashboard/app/ui/components/jumbotron"
      },
      {
        icon: "simple-icon-map",
        label: "menu.maps",
        to: "/dashboard/app/ui/components/maps"
      },
      {
        icon: "simple-icon-docs",
        label: "menu.modal",
        to: "/dashboard/app/ui/components/modal"
      },
      {
        icon: "simple-icon-cursor",
        label: "menu.navigation",
        to: "/dashboard/app/ui/components/navigation"
      },
      {
        icon: "simple-icon-pin",
        label: "menu.popover-tooltip",
        to: "/dashboard/app/ui/components/popover-tooltip"
      },
      {
        icon: "simple-icon-shuffle",
        label: "menu.sortable",
        to: "/dashboard/app/ui/components/sortable"
      },
      {
        icon: "simple-icon-grid",
        label: "menu.tables",
        to: "/dashboard/app/ui/components/tables"
      }
      ]
    }
  ]
},
{
  id: "menu",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.menu",
  to: "/dashboard/app/menu",
  subs: [{
    icon: "simple-icon-logout",
    label: "menu.types",
    to: "/dashboard/app/menu/types"
  },
  {
    icon: "simple-icon-layers",
    label: "menu.levels",
    to: "/dashboard/app/menu/levels",
    subs: [{
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-1",
      to: "/dashboard/app/menu/levels/third-level-1"
    },
    {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-2",
      to: "/dashboard/app/menu/levels/third-level-2"
    },
    {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-3",
      to: "/dashboard/app/menu/levels/third-level-3"
    }
    ]
  }
  ]
},
{
  id: "blank-page",
  icon: "iconsminds-bucket",
  label: "menu.blank-page",
  to: "/dashboard/app/blank-page"
},
{
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
