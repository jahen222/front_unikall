<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <ServiceHeader />
    <ServiceSlider />
    <ServiceDescription />
    <ServiceTestimonial />
    <ServiceInformation />
    <ServiceGallery />
    <ServiceVisitUs />
    <ServiceContactUs />
    <ServiceBlog />
    <ServiceFooter />
</div>
</template>

<script>
import gql from "graphql-tag";
import ServiceHeader from "@/components/layouts/ServiceHeader.vue";
import ServiceSlider from "@/components/servicetemplates/slider.vue";
import ServiceDescription from "@/components/servicetemplates/description.vue";
import ServiceTestimonial from "@/components/servicetemplates/testimonial.vue";
import ServiceInformation from "@/components/servicetemplates/information.vue";
import ServiceGallery from "@/components/servicetemplates/gallery.vue";
import ServiceVisitUs from "@/components/servicetemplates/visitus.vue";
import ServiceContactUs from "@/components/servicetemplates/contactus.vue";
import ServiceBlog from "@/components/servicetemplates/blog.vue";
import ServiceFooter from "@/components/layouts/ServiceFooter.vue";
import InConstruction from "@/containers/InConstruction.vue";

export default {
    name: "ServiceTemplates",
    components: {
        ServiceHeader,
        ServiceSlider,
        ServiceDescription,
        ServiceTestimonial,
        ServiceInformation,
        ServiceGallery,
        ServiceVisitUs,
        ServiceContactUs,
        ServiceBlog,
        ServiceFooter,
        InConstruction,
    },
    data() {
        return {
            configs: [0],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
        };
    },
    apollo: {
        configs: gql `
      query getInitConfig($where: JSON = { name: "init" }) {
        configs(where: $where) {
          id
          name
          builder_page
        }
      }
    `,
    },
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
