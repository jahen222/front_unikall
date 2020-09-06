<template>
<!-- Navigation -->
<nav id="home" class=" menu navbar navbar-expand-lg navbar-dark bg-white fixed-top">
    <div class="container">
        <a class="navbar-brand poppinfont brand-color-menu" href="#">{{businessName}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link poppinfont brand-color-menu font-weight-normal" href="Javascript:;" v-on:click="gotoPage('home')">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont brand-color-menu font-weight-normal" href="Javascript:;" v-on:click="gotoPage('about')">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont brand-color-menu font-weight-normal" href="Javascript:;" v-on:click="gotoPage('service')">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont brand-color-menu font-weight-normal" href="Javascript:;" v-on:click="gotoPage('blog')">Blog</a>
                </li>
                <li class="nav-item">
                    <a v-b-modal="'my-booking'" class="nav-link brand-color-menu poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('contact')">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "ConstructionHeader",
    components: {},
    props: ['businessName'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
    computed: {},
    methods: {
        gotoPage(tag) {
            if (tag != 'contact') {
                var anchor = document.querySelector('#' + tag);
                window.scrollTo(anchor.offsetLeft, (anchor.offsetTop - 150));
            }
            return false;
        }
    },
    notifications: {},
};
</script>

<style>
:root {
    --brandConstructionColorMenu: #F02B29;
    --brandConstructionColor: #E94D1A;
    --brandConstructionColorBody: #E94D1A;
    --brandConstructionbtnColor: #E94D1A;
}

.bg-image-full {
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

h1 {
    display: inline-block;
    padding-bottom: 5px;
    position: relative;
    font-weight: 700;
}

.capital {
    text-transform: uppercase;
}

.h1v2 {
    padding-bottom: 20px;
}

.h1v2:before {
    content: "";
    position: absolute;
    width: 80% !important;
    height: 1px;
    bottom: 0;
    left: 10% !important;
    border-bottom: 2px solid #bb8c09;
}

/* carousel */
#quote-carousel {
    padding: 0 10px 30px 10px;
    margin-top: 30px;
    text-align: center;
}

/* indicator position */
#quote-carousel .carousel-indicators {
    right: 50%;
    top: auto;
    bottom: -10px;
    margin-right: -19px;
}

/* indicator color */
#quote-carousel .carousel-indicators li {
    background: #c0c0c0;
}

/* active indicator */
#quote-carousel .carousel-indicators .active {
    background: #333333;
    height: 10px;
    width: 10px;
    margin-bottom: 1px;
}

/* heading_color*/
.brand-color-menu {
    color: var(--brandConstructionColorMenu) !important;
}

.brand-color {
    color: var(--brandConstructionColor) !important;
}

.menu {
    background-color: rgba(242, 242, 242, .3) !important;
    border-bottom: var(--brandConstructionbtnColor) solid 5px;
}

.brand-color-body {
    color: var(--brandConstructionColorBody) !important;
}

.brand-gbcolor {
    background-color: var(--brandConstructionbtnColor) !important;
}

.brand-btn {
    border-color: var(--brandConstructionbtnColor);
    background-color: var(--brandConstructionbtnColor);
    border-radius: 0;
}

.brand-btn:hover {
    background-color: var(--brandConstructionbtnColor);
    border-color: var(--brandConstructionbtnColor);
}

.brand-border {
    border: solid 1px !important;
    border-color: var(--brandConstructionbtnColor) !important;
}

.p-0 {
    padding: 0 !important;
}

.mt-20 {
    margin-top: 20 !important;
}

.gallary .carousel-indicators {
    left: 0;
    top: auto;
    bottom: -40px;

}

/* The colour of the indicators */
.gallary .carousel-indicators li {
    background: #a3a3a3;
    border-radius: 50%;
    width: 8px;
    height: 8px;
}

.gallary .carousel-indicators .active {
    background: #707070;
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
    display: flex !important;
}

.font-12 {
    font-size: 12px;
}

.circle {
    background: rgba(232, 225, 225, .3);
    border-radius: 130px;
    color: white;
    height: 130px;
    font-weight: bold;
    width: 130px;
    display: table;
    margin: 20px auto;
}

.circle p {
    vertical-align: middle;
    display: table-cell;
}

.heading {
    font-weight: 700;
    font-size: 40px;
}

.font-12 {
    font-size: 12px;
}

.poppinfont {
    font-family: 'poppinsregular' !important;
}
</style>
