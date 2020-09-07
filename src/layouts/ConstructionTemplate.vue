<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <ConstructionHeader v-bind:businessName="business ? business.name : 'Business Title'" />
    <ServiceSlider v-bind:business="business" />
    <ServiceDescription v-bind:name="business ? business.name : 'Business Title'" v-bind:description="business ? business.description : 'Business Description goes here...'" v-bind:work_images="business ? business.work_images : ''" />
    <ServiceProjectsData />
    <ServiceInformation v-bind:services="business ? business.business_services : []" />
    <ServiceGallery v-bind:images="business && business.work_images.length > 0 ? business.work_images : []" />
    <ServiceAlies v-bind:alies="business && business.ally && business.ally.logo && business.ally.logo.length > 0 ? business.ally.logo : []" />
    <ServiceVisitUs v-bind:address="business ? business.address : 'your address goes here..'" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
    <ServiceContactUs />
    <ServiceBlog v-bind:businessName="business ? business.name : 'Business Title'" v-bind:blogs="business && business.blogs.length > 0 ? business.blogs : []" />
    <ServiceFooter />
</div>
</template>

<script>
import axios from "axios";
import gql from "graphql-tag";
import ConstructionHeader from "@/components/layouts/ConstructionHeader.vue";
import ServiceSlider from "@/components/templates/construction/slider.vue";
import ServiceDescription from "@/components/templates/construction/description.vue";
import ServiceProjectsData from "@/components/templates/construction/projectsdata.vue";
import ServiceInformation from "@/components/templates/construction/information.vue";
import ServiceGallery from "@/components/templates/construction/gallery.vue";
import ServiceAlies from "@/components/templates/construction/alies.vue";
import ServiceVisitUs from "@/components/templates/construction/visitus.vue";
import ServiceContactUs from "@/components/templates/construction/contactus.vue";
import ServiceBlog from "@/components/templates/construction/blog.vue";
import ServiceFooter from "@/components/layouts/ServiceFooter.vue";
import InConstruction from "@/containers/InConstruction.vue";

export default {
    name: "ConstructionTemplate",
    components: {
        ConstructionHeader,
        ServiceSlider,
        ServiceDescription,
        ServiceProjectsData,
        ServiceInformation,
        ServiceGallery,
        ServiceAlies,
        ServiceVisitUs,
        ServiceContactUs,
        ServiceBlog,
        ServiceFooter,
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
