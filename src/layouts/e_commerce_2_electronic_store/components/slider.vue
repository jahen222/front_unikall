<template>
<!-- Header - set the background image for the header in the line below -->
<header class="py-5 bg-image-full tex-left" v-bind:style="{ 'background-image': 'url(' + sliderimage + ')' }" style="text-allign:left;min-height:500px;position:relative">
    <div class="sliderCaption tex-left" style="max-width:500px;">
        <h3 class="text-white poppinfont bold" style="font-size:3rem;">{{tagline}}</h3>
    </div>
</header>
</template>

<script>
export default {
    name: "ServiceSlider",
    props: ['businessbanner', 'tagline'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        }
    },
    computed: {
        sliderimage(){
            if(this.businessbanner && this.businessbanner.length > 0){
                return this.api_url + this.businessbanner[0].topbannerimage.url
            } else {
                return "https://unsplash.it/1900/1080?image=1076";
                //return process.env.VUE_APP_URL+"/";

            }
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
