<template>
<!-- Projects section -->
<section class="py-5" style="background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),url('/assets/unikall/images/templates/barbar_p4.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-md-3 text-center">
                <div class="circle">
                    <p><span class="brand-color-body heading">350</span><br />Projects</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="circle">
                    <p><span class="brand-color-body heading">350</span><br />Staff</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="circle">
                    <p><span class="brand-color-body heading">350</span><br />Hours</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="circle">
                    <p><span class="brand-color-body heading">350</span><br />Awards</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceProjectsData",
    props: ['testimonial'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>

<style>
.carousel-caption {
    width: 100%;
}
</style>
