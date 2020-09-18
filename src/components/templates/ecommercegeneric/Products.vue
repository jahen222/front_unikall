<template>
<!-- Blog section -->
<section id="blog" class="py-5" style="background-color: #1A1A1A;">
    <div class="container-fluid blog">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide v-for="(item,index) in products" :key="index">
                <div class="row text-left">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                        <img class="d-block w-100" :src="api_url + item.photos[0].url" alt="Image">
                    </div>
                    <div class="col-md-5 m-auto">
                        <h1 class="brand-color poppinfont">{{item.name}}</h1>
                        <p class="text-white poppinfont font-weight-normal">{{item.description}}</p>
                        <p class="text-white poppinfont font-weight-normal">{{item.price}}$</p>
                        <p class="text-white text-right poppinfont">MORE...</p>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </b-carousel-slide>
        </b-carousel>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceProducts",
    props: ['products'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    }
};
</script>

<style>
.carousel-caption {
    position: relative !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
}
</style>
