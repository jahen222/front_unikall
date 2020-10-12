<template>
<!-- more information section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="capital poppinfont">Our <span class="brand-color">Services</span></h1>
            </div>
        </div>

        <div class="row services">
            <div class="col-4 mt-5 text-center" v-for="(item,index) in services" :key="index">
                <i :class="item.icon" class="brand-color" style="font-size: 5rem;" />
                <h5 class="brand-color poppinfont"><b>{{item.title}}</b></h5>
                <p class="mt-2 poppinfont">{{item.description}}</p>
            </div>

        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceInformation",
    props: ['services'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>

<style scoped>
.services img {
    max-width: 160px;
}

h1:before {
    content: none;
}
</style>
