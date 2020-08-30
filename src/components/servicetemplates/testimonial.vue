<template>
<!-- Testimonial section -->
<section class="py-5" style="background-color: #1A1A1A;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <b-carousel id="carousel-1" v-model="slide" :interval="4000" indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <!-- Text slides with image -->
                    <b-carousel-slide v-for="item in testimonial" :key="item.id">
                        <div class=" row">
                            <div class="col-sm-12">
                                <h2 class="brand-color poppinfont"><i>"{{item.title}}"</i></h2>
                                <p class="text-white poppinfont font-weight-normal">&ldquo;{{item.description}}.&rdquo;</p>
                                <img class="mt-3" style="border-radius: 50%;width:70px" :src="api_url + item.sender_image.formats.thumbnail.url" alt="Avatar">
                                <p class="mt-3"><small class="brand-color poppinfont"><strong style="text-transform:uppercase;">{{item.sender}}</strong></small></p>
                            </div>
                        </div>
                    </b-carousel-slide>

                </b-carousel>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceTestimonial",
    props: ['testimonial'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>
