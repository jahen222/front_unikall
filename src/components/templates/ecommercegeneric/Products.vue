<template>
<!-- Blog section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row gallary">
            <div class="col-md-12 text-center">
                <h1 class="capital poppinfont">NEW ARRIVALS</h1>
                <div class="row">
                    <div class="col-3 mt-3 text-center" v-for="(item,index) in products" :key="index">
                        <img class="d-block w-100" style="width:268px;height:268px;border:#ccc solid 1px;" :src="api_url + item.photos[0].url" alt="Image">
                        <div style="text-transform:capital">{{item.name}}</div>
                        <div style="font-weight:normal">${{item.price}}</div>
                        <router-link :to="'product/'+item.id">
                            <button v-b-modal="'product-details'" type="button" class="btn btn-outline-secondary text-black poppinfont mt-2"><b>Buy Now</b></button>
                        </router-link>
                    </div>
                </div>
                <!--.row-->
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "EcommerceProducts",
    props: ['products'],
    components: {},
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            slide: 0,
            sliding: null,
            blogdesc: "",
        }
    },
    methods: {
        hideModal() {
            this.selected_product = null;
            return this.showModal();
        },
        showModal() {
            return this.selected_product ? true : false;
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        openblogpopup: function (desc) {
            this.blogdesc = desc;
        },
        closeblogpopup: function (dec) {
            this.blogdesc = dec;
        }
    }
};
</script>

<style>
.carousel-caption {
    position: relative !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
}
</style>
