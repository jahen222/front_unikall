<template>
<div class="page-wrapper">
    <Header />
    <BannerOne />
    <Navbar v-bind:categories="categories ? categories : []" />
    <Footer />
</div>
</template>

<script>
import gql from "graphql-tag";
import Header from "@/components/layouts/Header.vue";
import BannerOne from "@/components/journey/BannerOne.vue";
import Navbar from "@/components/journey/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
    name: "Journey",
    components: {
        Header,
        BannerOne,
        Navbar,
        Footer
    },
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
        };
    },
    apollo: {
        categories: gql `query getCategories {
        categories {
          id
          name
          icon
          layouts {
            id
            name
            preview {
              url
            }
            mockup {
              url
            }
          }
        }
      }
    `,
    }
};
</script>
