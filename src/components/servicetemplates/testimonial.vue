<template>
<!-- Testimonial section -->
<section class="py-5" style="background-color: #1A1A1A;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <b-carousel id="carousel-1" v-model="slide" :interval="4000" indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                    <!-- Text slides with image -->
                    <b-carousel-slide>
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="brand-color poppinfont"><i>"This is Testimonial"</i></h2>
                                <p class="text-white poppinfont font-weight-normal">&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Maecenas sed
                                    diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada
                                    magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id
                                    elit non mi porta gravida at eget metus.&rdquo;</p>
                                <img class="mt-3" style="border-radius: 50%;width:70px" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar">
                                <p class="mt-3"><small class="brand-color poppinfont"><strong style="text-transform:uppercase;">Ehsan A., Vulputate
                                            Sit</strong></small></p>
                            </div>
                        </div>
                    </b-carousel-slide>

                    <!-- Text slides with image -->
                    <b-carousel-slide>
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="brand-color poppinfont"><i>"This is Testimonial 2"</i></h2>
                                <p class="text-white poppinfont font-weight-normal">&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Maecenas sed
                                    diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada
                                    magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id
                                    elit non mi porta gravida at eget metus.&rdquo;</p>
                                <img class="mt-3" style="border-radius: 50%;width:70px" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar">
                                <p class="mt-3"><small class="brand-color poppinfont"><strong style="text-transform:uppercase;">Ehsan A., Vulputate
                                            Sit</strong></small></p>
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
    name: "ServiceTestimonial"
};
</script>
