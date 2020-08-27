<template>
<!-- Blog section -->
<section id="blog" class="py-5" style="background-color: #1A1A1A;">
    <div class="container-fluid">
        <div class="row blog">
            <div class="col-md-12">
                <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <!-- Text slides with image -->
                    <b-carousel-slide>
                        <div class="row text-left">
                            <div class="col-md-2"></div>
                            <div class="col-md-3">
                                <img class="d-block w-100" src="../../assets/unikall/images/templates/barbar_p10.jpg" alt="Image">
                            </div>
                            <div class="col-md-5 m-auto">
                                <h1 class="brand-color poppinfont">Blog 1</h1>
                                <p class="text-white poppinfont font-weight-normal">Ehsan test here Ehsan test here Ehsan test here Ehsan test
                                    here
                                    Ehsan test here
                                    Ehsan test here Ehsan test here Ehsan test here Ehsan test here </p>
                                <p class="text-white text-right poppinfont">MORE...</p>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </b-carousel-slide>

                    <!-- Text slides with image -->
                    <b-carousel-slide>
                        <div class="row text-left">
                            <div class="col-md-2"></div>
                            <div class="col-md-3">
                                <img class="d-block w-100" src="../../assets/unikall/images/templates/barbar_p10.jpg" alt="Image">
                            </div>
                            <div class="col-md-5 m-auto">
                                <h1 class="brand-color poppinfont">Blog 2</h1>
                                <p class="text-white poppinfont font-weight-normal">Ehsan test here Ehsan test here Ehsan test here Ehsan test
                                    here
                                    Ehsan test here
                                    Ehsan test here Ehsan test here Ehsan test here Ehsan test here </p>
                                <p class="text-white text-right poppinfont">MORE...</p>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </b-carousel-slide>
                </b-carousel>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceBlog",
    data() {
        return {
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
