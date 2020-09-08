<template>
<!-- Simple selector by the layout name :) -->
<div>
    <div v-if="layout == 'notFound'">
        <ConstructionPage />
    </div>
    <div v-if="layout == 'Beauty and Fashion'">
        <BeautyandFashionTemplate />
    </div>
    <div v-if="layout == 'Construction'">
        <ConstructionTemplate v-bind:businessid="user && user.business ? user.business.id : null" />
    </div>
</div>
</template>

<script>
import axios from "axios";
import BeautyandFashionTemplate from "../layouts/BeautyandFashionTemplate";
import ConstructionTemplate from "../layouts/ConstructionTemplate";
import ConstructionPage from "./InConstruction";

export default {
    name: "Selector",
    components: {
        ConstructionPage,
        BeautyandFashionTemplate,
        ConstructionTemplate,
    },
    data() {
        return {
            user_id: this.$route.params.id,
            user: null,
            layout: null,
        };
    },
    async mounted() {
        await axios
            .get(process.env.VUE_APP_STRAPI_API_URL + "/users/" + this.user_id)
            .then((response) => {
                this.user = response.data;
                this.layout = this.user.layout.name;
            })
            .catch(() => {
                this.layout = "notFound";
            });
    },
};
</script>
