<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <ServiceHeader v-bind:business="business" />
    <ServiceSlider v-bind:business="business" />
    <ServiceDescription v-bind:business="business" />
    <ServiceTestimonial v-bind:testimonial="business.testimonials" />
    <ServiceInformation />
    <ServiceGallery v-bind:images="business.work_images" />
    <ServiceVisitUs v-bind:address="business.address" v-bind:email="business.email" v-bind:phone="business.phone" />
    <ServiceContactUs />
    <ServiceBlog v-bind:blogs="business.blogs" />
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
            user_id: this.$route.query.id,
        };
    },
    apollo: {
        business: {
            query: gql `
                query businesses($id: ID!) {
                    business(id: $id) {
                        id
                        name
                        tagline
                        description
                        address
                        email
                        phone
                        user {
                            username
                        }
                        logo {
                            formats 
                        }
                        work_images {
                            formats
                        }
                        testimonials {
                            id
                            title
                            description
                            sender
                            updated_at
                            sender_image {
                                formats
                            }
                        }
                        blogs {
                            title
                            description
                            image {
                                formats
                            }
                        }
                    }
                }
            `,
            variables() {
                return {
                    id: this.user_id,
                };
            },
        },
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
