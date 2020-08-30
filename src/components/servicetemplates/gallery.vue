<template>
<!-- Gallery section -->
<section class="py-5" style="background-color: #1A1A1A;">
    <div class="container">
        <div class="row gallary">
            <div class="col-md-12 text-center">
                <h2 class="brand-color poppinfont"><i>&ldquo;Gallery View&rdquo;</i></h2>
                <p class="text-white poppinfont font-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <!-- Text slides with image -->
                    <b-carousel-slide>
                        <div class="row">
                            <div class="col-md-3">
                                <a href="#">
                                    <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">
                                    <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">
                                    <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">
                                    <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                </a>
                            </div>
                        </div>
                        <!--.row-->
                    </b-carousel-slide>

                </b-carousel>

                <p class="mt-20"><button type="button" class="btn btn-outline-primary brand-color brand-btn mt-20 poppinfont">View All</button></p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceGallery",
    props: ['images'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            slide: 0,
            sliding: null
        };
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
