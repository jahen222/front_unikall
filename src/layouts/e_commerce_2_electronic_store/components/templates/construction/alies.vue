<template>
<!-- Gallery section -->
<section class="py-5">
    <div class="container">
        <div class="row gallary">
            <div class="col-md-12 text-center">
                <h1 class="capital poppinfont">ALLIES AND <span class="brand-color poppinfont">COMPANIES</span></h1>
                <div class="row">
                    <div class="col-md-3 mt-3" v-for="(item,index) in alies" :key="index">
                        <a href="#">
                            <img v-if="item.url" :src="api_url + item.url" alt="Image" style="max-width:100%;">
                            <img v-if="!item.url" src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
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
    name: "ServiceAlies",
    props: ['alies'],
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
