<template>
<!-- description and images section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="capital poppinfont">Description</h1>
                <p class="poppinfont">{{description}}</p>
                <p><button type="button" class="btn btn-outline-secondary text-black poppinfont"><b>READ MORE</b></button></p>
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
