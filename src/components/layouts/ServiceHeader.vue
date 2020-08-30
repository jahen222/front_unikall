<template>
<!-- Navigation -->
<nav id="home" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a class="navbar-brand poppinfont" href="#">{{business.name}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('home')">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('about')">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('service')">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('blog')">Blog</a>
                </li>
                <li class="nav-item">
                    <a v-b-modal="'my-booking'" class="nav-link poppinfont font-weight-normal" href="Javascript:;" v-on:click="gotoPage('contact')">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "ServiceHeader",
    components: {},
    props: ['business'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            userdata: this.business,
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
    --brandColor: #EDBC61;
}

.poppinfont {
    font-family: 'poppinsregular' !important;
}

.sfooter p {
    font-family: 'poppinsregular' !important;
    font-weight: normal;
    font-size: .85rem;
    line-height: 1.3rem;
}

p {
    font-size: 1rem;
    line-height: 1.8rem;
    font-family: "poppinsregular", sans-serif;
    font-weight: normal;
}

.text-black {
    color: #000000 !important;
}

.modal-header {
    padding: .5rem !important;
    background: none !important;
}

.modal-dialog {
    max-width: 90%;
}

.font-weight-normal {
    font-weight: normal !important;
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
}

h1:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 0%;
    border-bottom-style: solid;
    border-bottom-color: var(--brandColor);
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
.brand-color {
    color: var(--brandColor);
}

.brand-gbcolor {
    background-color: var(--brandColor);
}

.brand-btn {
    border-color: var(--brandColor);
    ;
    -moz-border-radius: 20px 0px 20px 0px;
    -webkit-border-radius: 20px 0px 20px 0px;
    border-radius: 20px 0px 20px 0px;
}

.brand-btn:hover {
    background-color: var(--brandColor);
    border-color: var(--brandColor);
}

.brand-border {
    border: solid 1px !important;
    border-color: var(--brandColor) !important;
}

.p-0 {
    padding: 0 !important;
}

.mt-20 {
    margin-top: 20px !important;
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
</style>
