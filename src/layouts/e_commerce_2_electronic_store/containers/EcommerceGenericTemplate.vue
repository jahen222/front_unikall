<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <EcommerceGeneralHeader v-bind:businessName="business ? business.name : 'Business Title'" />
    <EcommerceSlider v-bind:tagline="business.tagline" v-bind:businessbanner="business && business.top_banners && business.top_banners.length > 0 ? business.top_banners : []" />
    <EcommerceDescription v-bind:name="business ? business.name : 'Business Title'" v-bind:description="business ? business.description : 'Business Description goes here...'" v-bind:work_images="business ? business.work_images : ''" />
    <EcommerceCollections v-bind:images="business && business.galeries.length > 0 ? business.galeries : []" />
    <EcommerceFeaturedProducts v-bind:products="business && business.products.length > 0 ? business.products.filter(x=>x.featured).reverse() : []" />
    <EcommerceProducts v-bind:businessId="business ? business.id : null" v-bind:products="business && business.products.length > 0 ? business.products.filter(x=>!x.featured).reverse() : []" />
    <EcommerceVisitUs v-bind:businessName="business ? business.name : 'Business Title'" v-bind:address="business ? business.address : 'your address goes here..'" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
    <EcommerceBlog v-bind:blogs="business && business.blogs.length > 0 ? business.blogs : []" />
    <EcommerceContactUs />
    <EcommerceGeneralFooter v-bind:logo="business && business.logo ? business.logo : null" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
</div>
</template>

<script>
import axios from "axios";
import gql from "graphql-tag";
import EcommerceGeneralHeader from "../components/layouts/EcommerceGeneralHeader.vue";
import EcommerceSlider from "../components/slider.vue";
import EcommerceDescription from "../components/description.vue";
import EcommerceCollections from "../components/collections.vue";
import EcommerceFeaturedProducts from "../components/featuredproducts.vue";
import EcommerceProducts from "../components/products.vue";
import EcommerceVisitUs from "../components/visitus.vue";
import EcommerceBlog from "../components/blog.vue";
import EcommerceContactUs from "../components/contactus.vue";
import EcommerceGeneralFooter from "../components/layouts/EcommerceGeneralFooter.vue";
import InConstruction from "@/containers/InConstruction.vue";

export default {
    name: "EcommerceGenericTemplate",
    components: {
        EcommerceGeneralHeader,
        EcommerceSlider,
        EcommerceDescription,
        EcommerceCollections,
        EcommerceFeaturedProducts,
        EcommerceProducts,
        EcommerceVisitUs,
        EcommerceBlog,
        EcommerceContactUs,
        EcommerceGeneralFooter,
        InConstruction,
    },
    props: ['businessid'],
    data() {
        return {
            configs: [0],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            user_id: this.$route.query.id,
            work_image: [],
            business: null,
            testimonial_sample: [{
                "title": "Your Title",
                "description": "Description goes here... Description goes here... Description goes here...",
                "sender": "Unikall",
                "sender_image": ""
            }]
        };
    },
    async mounted() {
        await axios
            .get(process.env.VUE_APP_STRAPI_API_URL + "/businesses/" + this.businessid)
            .then((response) => {
                this.business = response.data;
                console.log("risas", this.business );
            })
            .catch(() => {
                this.layout = "notFound";
            });
    },
    apollo: {
        configs: gql `query getInitConfig($where: JSON = { name: "init" }) {
        configs(where: $where) {
          id
          name
          builder_page
        }
      }
    `,

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
