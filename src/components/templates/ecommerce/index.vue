<template>
<div v-if="configs[0].builder_page">
    <InConstruction />
</div>
<div v-else>
    <EcommerceGeneralHeader v-bind:businessName="business ? business.name : 'Business Title'" />
    <router-view :business="this.business" :layout="this.layout" />
    <EcommerceGeneralFooter v-bind:logo="business && business.logo ? business.logo : null" v-bind:email="business ? business.email : 'email@yourbusiness.com'" v-bind:phone="business ? business.phone : '1231231234'" />
</div>
</template>

<script>
import axios from "axios";
import gql from "graphql-tag";

import EcommerceGeneralHeader from "@/components/layouts/EcommerceGeneralHeader.vue";
import EcommerceGeneralFooter from "@/components/layouts/EcommerceGeneralFooter.vue";
import InConstruction from "@/containers/InConstruction.vue";

export default {
    name: "EcommerceLayout",
    components: {
        "EcommerceGeneralHeader": EcommerceGeneralHeader,
        "EcommerceGeneralFooter": EcommerceGeneralFooter,
        "InConstruction": InConstruction
    },
    data() {
        return {
            configs: [0],
            user_id: this.$route.params.id,
            user: null,
            layout: null,
            business: null,
        };
    },
    async mounted() {
        this.$store.dispatch("setbusinessid", this.user_id);
        await axios
            .get(process.env.VUE_APP_STRAPI_API_URL + "/users/" + this.user_id)
            .then((response) => {
                this.user = response.data;
                this.layout = this.user.layout.name;
                axios
                    .get(process.env.VUE_APP_STRAPI_API_URL + "/businesses/" + this.user.business.id)
                    .then((response) => {
                        this.business = response.data;
                    })
                    .catch(() => {
                        this.layout = "notFound";
                    });
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
