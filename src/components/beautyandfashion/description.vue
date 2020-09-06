<template>
<!-- description and images section -->
<section id="about" class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-4 text-left">
                <h1 class="brand-color poppinfont">{{name}}</h1>
                <p class="poppinfont font-weight-normal">{{description}}
                </p>
                <p><button type="button" class="btn btn-outline-primary brand-color brand-btn poppinfont">Primary</button></p>
            </div>
            <div class="col-2"></div>
            <div class="col-4">
                <div v-if="work_images && work_images.length > 0" class="row">
                    <div class="col-4" v-for="(image_item, index) in work_images" :key="image_item.formats.thumbnail.url">
                        <img v-bind:class="[index > 2 ? 'mt-3' : '' , '']" v-if="image_item.formats.thumbnail.url" class="img-fluid d-block" :src="api_url + image_item.formats.thumbnail.url" alt="">
                        <img v-bind:class="[index > 2 ? 'mt-3' : '' , '']" v-if="!image_item.formats.thumbnail.url" class="img-fluid d-block" :src="'http://placehold.it/200x200&text=image%201'" alt="">
                    </div>
                </div>
                <div v-if="!work_images && work_images.length == 0" class="row">
                    <div class="col-4" v-for="(image_item, index) in 6" :key="image_item">
                        <img v-bind:class="[index > 2 ? 'mt-3' : '' , '']" class="img-fluid d-block" :src="'http://placehold.it/200x200&text=image%20' + (index + 1)" alt="">
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
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
