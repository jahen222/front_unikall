<template>
<div v-if="layout == 'ecommerce generic'">
    <EcommerceSlider v-bind:businessbanner="business && business.top_banners && business.top_banners.length > 0 ? business.top_banners : []" />
    <EcommerceDescription v-bind:name="business ? business.name : 'Business Title'" v-bind:description="business ? business.description : 'Business Description goes here...'" v-bind:work_images="business ? business.work_images : ''" />
    <EcommerceCollections v-bind:images="business && business.work_images.length > 0 ? business.work_images : []" />
    <EcommerceFeaturedProducts v-bind:products="business && business.products.length > 0 ? business.products.filter(x=>x.featured).reverse() : []" />
    <EcommerceProducts v-bind:products="business && business.products.length > 0 ? business.products.filter(x=>!x.featured).reverse() : []" />
    <EcommerceVisitUs v-bind:businessName="business ? business.name : 'Business Title'" v-bind:address="business ? business.address : 'your address goes here..'" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
    <EcommerceBlog v-bind:blogs="business && business.blogs.length > 0 ? business.blogs : []" />
    <EcommerceContactUs />
</div>
</template>

<script>
import EcommerceSlider from "@/components/templates/ecommercegeneric/slider.vue";
import EcommerceDescription from "@/components/templates/ecommercegeneric/description.vue";
import EcommerceCollections from "@/components/templates/ecommercegeneric/collections.vue";
import EcommerceFeaturedProducts from "@/components/templates/ecommercegeneric/featuredproducts.vue";
import EcommerceProducts from "@/components/templates/ecommercegeneric/products.vue";
import EcommerceVisitUs from "@/components/templates/ecommercegeneric/visitus.vue";
import EcommerceBlog from "@/components/templates/ecommercegeneric/blog.vue";
import EcommerceContactUs from "@/components/templates/ecommercegeneric/contactus.vue";

export default {
    name: "EcommerceGeneral",
    components: {
        EcommerceSlider,
        EcommerceDescription,
        EcommerceCollections,
        EcommerceFeaturedProducts,
        EcommerceProducts,
        EcommerceVisitUs,
        EcommerceBlog,
        EcommerceContactUs
    },
    props: ['business', 'layout'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            user_id: this.$route.query.id,
            work_image: [],
            testimonial_sample: [{
                "title": "Your Title",
                "description": "Description goes here... Description goes here... Description goes here...",
                "sender": "Unikall",
                "sender_image": ""
            }]
        };
    }
};
</script>

<style scoped>
.page-wrapper {
    position: inherit;
}

.imageHome1 {
    width: 90%;
}
</style>
