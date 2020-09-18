<template>
<!-- Blog section -->
<section class="py-5">
    <div class="container">
        <div class="row gallary">
            <div class="col-md-12 text-center">
                <h1 class="capital poppinfont">OUR <span class="brand-color poppinfont">BLOG</span></h1>
                <div class="row">
                    <div class="col-4 mt-3" v-for="(item,index) in blogs" :key="index">
                        <img class="d-block w-100" :src="api_url + item.image.formats.small.url" alt="Image">
                        <h1>{{item.title}}</h1>
                        <button v-on:click="openblogpopup(item.description)" type="button" class="btn btn-outline-primary brand-btn text-white poppinfont mt-2 d-block">READ MORE</button>
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
    name: "ServiceBlog",
    props: ['blogs'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            slide: 0,
            sliding: null,
            blogdesc: "",
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        openblogpopup: function (desc) {
            this.blogdesc = desc;
            console.log(desc);
        },
        closeblogpopup: function (dec) {
            this.blogdesc = dec;
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
