<template>
<!-- Header - set the background image for the header in the line below -->
<header class="py-5 bg-image-full tex-left" v-bind:style="{ 'background-image': 'url(' + api_url + businessbanner[0].topbannerimage.url + ')' }" style="text-allign:left;min-height:500px;position:relative">
    <div class="sliderCaption tex-left" style="max-width:500px;">
        <h3 class="text-white poppinfont bold" style="font-size:3rem;">Lorum Lipsum Lorum</h3>
        <button type="button" class="btn btn-outline-primary brand-btn text-white poppinfont">Details</button>
    </div>
</header>
</template>

<script>
export default {
    name: "ServiceSlider",
    props: ['businessbanner'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        }
    }
};
</script>

<style scoped>
.sliderCaption {
    position: absolute;
    top: 40%;
    left: 45%;
}
</style>
