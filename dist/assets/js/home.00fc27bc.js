(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"498a":function(e,t,o){"use strict";var r=o("23e7"),n=o("58a8").trim,l=o("c8d2");r({target:"String",proto:!0,forced:l("trim")},{trim:function(){return n(this)}})},7689:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return c}));o("c975"),o("498a");var r=o("7198"),n=function(){var e=getComputedStyle(document.body);return{themeColor1:e.getPropertyValue("--theme-color-1").trim(),themeColor2:e.getPropertyValue("--theme-color-2").trim(),themeColor3:e.getPropertyValue("--theme-color-3").trim(),themeColor4:e.getPropertyValue("--theme-color-4").trim(),themeColor5:e.getPropertyValue("--theme-color-5").trim(),themeColor6:e.getPropertyValue("--theme-color-6").trim(),themeColor1_10:e.getPropertyValue("--theme-color-1-10").trim(),themeColor2_10:e.getPropertyValue("--theme-color-2-10").trim(),themeColor3_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor4_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor5_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor6_10:e.getPropertyValue("--theme-color-3-10").trim(),primaryColor:e.getPropertyValue("--primary-color").trim(),foregroundColor:e.getPropertyValue("--foreground-color").trim(),separatorColor:e.getPropertyValue("--separator-color").trim()}},l=function(){var e=r["f"];if(localStorage.getItem("direction")){var t=localStorage.getItem("direction");"rtl"!==t&&"ltr"!==t||(e=t)}return{direction:e,isRtl:"rtl"===e}},c=function(e){var t="ltr";"rtl"!==e&&"ltr"!==e||(t=e),localStorage.setItem("direction",t)}},c8d2:function(e,t,o){var r=o("d039"),n=o("5899"),l="​᠎";e.exports=function(e){return r((function(){return!!n[e]()||l[e]()!=l||n[e].name!==e}))}},db30:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"h-100"},[o("router-view"),e._v(" "),o("color-switcher")],1)},n=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{"theme-colors":!0,shown:e.isOpen},on:{mouseenter:function(t){e.isMenuOver=!0},mouseleave:function(t){e.isMenuOver=!1}}},[o("div",{staticClass:"p-4"},[o("p",{staticClass:"text-muted mb-2"},[e._v("Light Theme")]),e._v(" "),o("div",{staticClass:"d-flex flex-row justify-content-between mb-3"},e._l(e.colors.slice(0,5),(function(t,r){return o("a",{key:"light_"+r,class:e.getIconClass(t,"light"),attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),e.changeThemeColor("light."+t)}}})})),0),e._v(" "),o("div",{staticClass:"d-flex flex-row justify-content-between mb-4"},e._l(e.colors.slice(5,10),(function(t,r){return o("a",{key:"light_"+r,class:e.getIconClass(t,"light"),attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),e.changeThemeColor("light."+t)}}})})),0),e._v(" "),o("p",{staticClass:"text-muted mb-2"},[e._v("Dark Theme")]),e._v(" "),o("div",{staticClass:"d-flex flex-row justify-content-between mb-3"},e._l(e.colors.slice(0,5),(function(t,r){return o("a",{key:"dark_"+r,class:e.getIconClass(t,"dark"),attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),e.changeThemeColor("dark."+t)}}})})),0),e._v(" "),o("div",{staticClass:"d-flex flex-row justify-content-between"},e._l(e.colors.slice(5,10),(function(t,r){return o("a",{key:"dark_"+r,class:e.getIconClass(t,"dark"),attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),e.changeThemeColor("dark."+t)}}})})),0)]),e._v(" "),o("div",{staticClass:"pb-0 pl-4 pt-4"},[o("b-form-group",{attrs:{label:"Border Radius"}},[o("b-form-radio-group",{attrs:{name:"radius"},model:{value:e.radius,callback:function(t){e.radius=t},expression:"radius"}},[o("b-form-radio",{attrs:{value:"rounded"},on:{change:function(t){return e.changeRadius("rounded")}}},[e._v("Rounded")]),e._v(" "),o("b-form-radio",{attrs:{value:"flat"},on:{change:function(t){return e.changeRadius("flat")}}},[e._v("Flat")])],1)],1)],1),e._v(" "),o("a",{staticClass:"theme-button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[o("i",{staticClass:"simple-icon-magic-wand"})])])},c=[],i=(o("caad"),o("a15b"),o("ac1f"),o("2532"),o("1276"),o("7198")),a={data:function(){return{isOpen:!1,isMenuOver:!1,selectedColor:"",colors:i["c"],radius:localStorage.getItem(i["o"])||"rounded"}},methods:{getIconClass:function(e,t){var o=["theme-color","theme-color-"+e];return this.selectedColor===t+"."+e&&o.push("active"),o.join(" ")},addEvents:function(){document.addEventListener("click",this.handleDocumentClick),document.addEventListener("touchstart",this.handleDocumentClick)},removeEvents:function(){document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("touchstart",this.handleDocumentClick)},handleDocumentClick:function(){this.isMenuOver||this.toggle()},toggle:function(){this.isOpen=!this.isOpen},changeThemeColor:function(e){localStorage.setItem(i["p"],e),this.toggle(),setTimeout((function(){window.location.reload()}),500)},changeRadius:function(e){"flat"===e?document.body.classList.remove("rounded"):document.body.classList.add("rounded"),localStorage.setItem(i["o"],e)}},watch:{isOpen:function(e){e?this.addEvents():this.removeEvents()}},beforeDestroy:function(){this.removeEvents()},mounted:function(){var e=localStorage.getItem(i["p"]);null!=e&&i["c"].includes(e.split(".")[1])?this.selectedColor=e:this.selectedColor=i["e"],this.changeRadius(this.radius)}},s=a,u=o("2877"),d=Object(u["a"])(s,l,c,!1,null,null,null),m=d.exports,h=o("7689"),f={components:{"color-switcher":m},beforeMount:function(){var e=Object(h["b"])();e.isRtl?(document.body.classList.add("rtl"),document.dir="rtl",document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.dir="ltr",document.body.classList.remove("rtl"))}},v=f,g=Object(u["a"])(v,r,n,!1,null,null,null);t["default"]=g.exports}}]);