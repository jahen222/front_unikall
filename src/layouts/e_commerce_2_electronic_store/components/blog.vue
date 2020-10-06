<template>
<!-- Blog section -->
<section id="blog" class="py-5">
    <div class="container-fluid blog">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide v-for="(item,index) in blogs" :key="index">
                <div class="row text-left">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                        <img class="d-block w-100" :src="api_url + item.image.formats.small.url" alt="Image">
                    </div>
                    <div class="col-md-5 m-auto">
                        <h1 class="poppinfont" style="color:#000">{{item.title}}</h1>
                        <p style="color:#000" class="poppinfont font-weight-normal">{{item.description}}</p>
                        <p v-b-modal="'bd_'+item.id" style="color:#000;cursor:pointer;" class="text-right poppinfont">MORE...</p>
                    </div>
                    <div class="col-md-2"></div>
                    <EcommerceBlogDetails v-bind:blog="item" />
                </div>
            </b-carousel-slide>
        </b-carousel>
    </div>    
</section>
</template>

<script>
import EcommerceBlogDetails from "./blogdetails.vue";
export default {
    name: "EcommerceBlog",
    props: ['blogs'],
    components:{
        EcommerceBlogDetails
    },
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
