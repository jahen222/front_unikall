<template>
<!-- description and images section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-6 text-left">
                <h1 class="capital poppinfont">Description <span class="brand-color">About Us</span></h1>
                <p class="poppinfont">{{description}}</p>
                <p><button type="button" class="btn btn-outline-primary brand-btn text-white poppinfont">READ MORE</button></p>
            </div>
            <div class="col-2"></div>
            <div class="col-4">
                <img v-if="work_images && work_images.length > 0" class="img-fluid d-block" :src="api_url + work_images[0].formats.thumbnail.url" alt="">
                <img v-if="!work_images || work_images.length == 0" class="img-fluid d-block" :src="'http://placehold.it/200x200&text=image%201'" alt="">
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceDescription",
    props: ['description', 'name', 'work_images'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>

<style scoped>
h1:before {
    content: none;
}
</style>
