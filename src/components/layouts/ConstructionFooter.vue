<template>
<!-- Footer section -->
<section class="py-5 sfooter" style="background-color: #1D1D1B;">
    <div class="container">
        <div class="row pl-2 pr-2 text-white font-12">
            <div class="col-3">
                <img style="max-width:100%;" :src="api_url + logo.url" />
            </div>

            <div class="col-2">
                <p><b>FOLLOW US</b></p>
                <i class="fab fa-facebook" style="font-size:2.5rem"></i>
                <i class="fab fa-instagram ml-3" style="font-size:2.5rem"></i>
            </div>

            <div class="col-4">
                <p><b>Subscribe Newsletter</b></p>
                <p>
                    <input type="text" style="width:60%;background-color:#534F4E;border:0px !important;" class="form-control d-inline" placeholder="Email" />
                    <button type="button" style="margin-bottom:4px;" class="btn-sm btn-light d-inline">SUBSCRIBE</button>
                </p>
            </div>
            <div class="col-1"></div>
            <div class="col-2 text-left">
                <p><b>Contact</b></p>
                <div class="mt-20">
                    <i class="fa fa-envelope text-white" aria-hidden="true"></i>
                    <span calss="poppinfont font-weight-normal text-white" style="color:#fff;font-weight:normal">{{email}}</span>
                </div>
                <div class="mt-2">
                    <i class="fa fa-phone-square text-white" aria-hidden="true"></i>
                    <span class="poppinfont font-weight-normal text-white">{{phone}}</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "ConstructionFooter",
    props: ['logo', 'email', 'phone'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
};
</script>
