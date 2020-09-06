<template>
<!-- Gallery section -->
<section class="py-5" style="background-color: #1A1A1A;">
    <div class="container">
        <div class="row gallary">
            <div class="col-md-12 text-center">
                <h1 class="capital text-white poppinfont">OUR <span class="brand-color poppinfont">PROJECTS</span></h1>
                <div class="row">
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-md-3 mt-3">
                        <a href="#">
                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                </div>
                <!--.row-->
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

<style scoped>
h1:before {
    content: none;
}
</style>
