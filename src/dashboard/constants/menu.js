const data = [
  {
    id: "dashboard",
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
    to: "/dashboard/app/personal",
    subs: [{
      icon: "simple-icon-user",
      label: "menu.profile",
      to: "/dashboard/app/personal/profile"
    },
    {
      icon: "simple-icon-share",
      label: "Blog",
      to: "/dashboard/app/blog"
    },
    /*{
      icon: "simple-icon-link",
      label: "menu.portfolio",
      to: "/dashboard/app/personal/portfolio"
    }*/]
  },
  {
    id: "business",
    icon: "iconsminds-digital-drawing",
    //label: "menu.pages",
    label: "Business",
    to: "/dashboard/app/business",
    subs: [{
      icon: "iconsminds-handshake",
      label: "Business",
      to: "/dashboard/app/business/business"
    },
    {
      icon: "simple-icon-picture",
      label: "Galery",
      to: "/dashboard/app/galery"
    },
    {
      icon: "simple-icon-layers",
      label: "Layout",
      to: "/dashboard/app/business/layout"
    },
    {
      icon: "iconsminds-id-card",
      label: "Business Card",
      to: "/dashboard/app/business/card"
    },
    {
      icon: "simple-icon-credit-card",
      label: "Orders",
      to: "/dashboard/app/orders"
    },
    {
      icon: "iconsminds-speach-bubble",
      label: "Inbox",
      to: "/dashboard/app/message"
    }]
  },
  {
    id: "product",
    icon: "simple-icon-pin",
    //label: "menu.applications",
    label: "Products or Services",
    subs: [{
      icon: "iconsminds-box-close",
      label: "Products",
      to: "/dashboard/app/products"
    },
    {
      icon: "iconsminds-affiliate",
      label: "Services",
      to: "/dashboard/app/service"
    }]
  },
  {
    id: "payment",
    icon: "iconsminds-gear",
    //label: "menu.applications",
    label: "Payment",
    to: "/dashboard/app/payment"
  },
  {
    id: "shipping",
    icon: "simple-icon-rocket",
    //label: "menu.applications",
    label: "Shipping",
    to: "/dashboard/app/shipping"
  },
  /*{
    id: "guaranty",
    icon: "iconsminds-clock",
    //label: "menu.applications",
    label: "Guaranty",
    to: "/dashboard/app/guaranty"
  },*/  {
    id: "sales",
    icon: "iconsminds-link-2",
    //label: "menu.applications",
    label: "Sales Channels",
    to: "/dashboard/app/sales"
  },
];
export default data;
