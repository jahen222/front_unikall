<template>
<!-- visit us section -->
<section style="background-color:#000;" class="py-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="capital text-white poppinfont">VISIT US</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4 text-left py-5">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <h1 class="text-white poppinfont">{{businessName}}</h1>
                        <div class="mt-20">
                            <i class="fa fa-map-marker text-white" aria-hidden="true"></i>
                            <span class="poppinfont font-weight-normal text-white">{{address}}</span>
                        </div>
                        <div>
                            <i class="fa fa-envelope text-white" aria-hidden="true"></i>
                            <span calss="poppinfont font-weight-normal text-white" style="color:#fff;font-weight:normal">{{email}}</span>
                        </div>
                        <div>
                            <i class="fa fa-phone-square text-white" aria-hidden="true"></i>
                            <span class="poppinfont font-weight-normal text-white">{{phone}}</span>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <div class="col-4">
                <!-- lat & long -->
                <iframe style="border: 0px;width: 100%;height: -webkit-fill-available;height:100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848543.231324789!2d52.30316620772391!3d25.188515071652926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1598078021804!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-60">
            <div class="col-4"></div>
            <div class="col-4">
                <h2 class="text-white poppinfont"><b>Contact me by:</b></h2>
                <div class="row text-center">
                    <div class="col-5"><i class="fa fa-phone-square text-white" style="font-size: 4rem;" aria-hidden="true"></i>
                        <p class="text-white">{{phone}}</p>
                    </div>
                    <div class="col-2 text-center text-white m-auto">or</div>
                    <div class="col-5">
                        <img src="/assets/unikall/images/templates/const_p3.jpg" />
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "EcommerceVisitUs",
    props: ['businessName', 'address', 'email', 'phone'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>
