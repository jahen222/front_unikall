<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <ServiceHeader v-bind:businessName="business ? business.name : 'Business Title'" />
    <ServiceSlider v-bind:business="business" />
    <ServiceDescription v-bind:name="business ? business.name : 'Business Title'" v-bind:description="business ? business.description : 'Business Description goes here...'" v-bind:work_images="business ? business.work_images : ''" />
    <ServiceTestimonial v-bind:testimonial="business && business.testimonials.length > 0 ? business.testimonials : testimonial_sample" />
    <ServiceInformation />
    <ServiceGallery v-bind:images="business && business.work_images.length > 0 ? business.work_images : []" />
    <ServiceVisitUs v-bind:address="business ? business.address : 'your address goes here..'" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
    <ServiceContactUs />
    <ServiceBlog v-bind:blogs="business && business.blogs.length > 0 ? business.blogs : []" />
    <ServiceFooter />
</div>
</template>

<script>
import gql from "graphql-tag";
import ServiceHeader from "@/components/layouts/ServiceHeader.vue";
import ServiceSlider from "@/components/beautyandfashion/slider.vue";
import ServiceDescription from "@/components/beautyandfashion/description.vue";
import ServiceTestimonial from "@/components/beautyandfashion/testimonial.vue";
import ServiceInformation from "@/components/beautyandfashion/information.vue";
import ServiceGallery from "@/components/beautyandfashion/gallery.vue";
import ServiceVisitUs from "@/components/beautyandfashion/visitus.vue";
import ServiceContactUs from "@/components/beautyandfashion/contactus.vue";
import ServiceBlog from "@/components/beautyandfashion/blog.vue";
import ServiceFooter from "@/components/layouts/ServiceFooter.vue";
import InConstruction from "@/containers/InConstruction.vue";

export default {
    name: "BeautyandFashionTemplate",
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
            work_image: [],
            testimonial_sample: [{
                "title": "Your Title",
                "description": "Description goes here... Description goes here... Description goes here...",
                "sender": "Unikall",
                "sender_image": ""
            }]
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
