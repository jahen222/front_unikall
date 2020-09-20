<template>
<!-- Product Details section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-2">
                <div class="row" v-for="(item,index) in product.photos" :key="index">
                    <img v-on:click="updateImage(api_url + item.url)" class="d-block smImage mt-1" :src="api_url + item.url" alt="Small Image">
                </div>
            </div>
            <div class="col-5">
                <img class="d-block w-100" :src="selected_image" alt="Image">
            </div>
            <div class="col-5">
                <div class="row text-left">
                    <div class="col-12">
                        <h1>{{product.name}}</h1>
                    </div>
                    <div class="col-12">Availability: {{product.quantity}}</div>
                    <div class="col-12" style="font-size: 1rem;font-weight: normal;line-height: 2rem;">{{product.description}}</div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4" style="cursor:pointer"><i class="simple-icon-plus" @click="updatequantity(true)" /> {{this.selected_quantity}} <i class="simple-icon-minus" @click="updatequantity(false)" /></div>
                            <div class="col-4">
                                <button v-b-modal="'product-details'" @click="addToCart(product)" type="button" class="btn btn-outline-secondary text-black poppinfont mt-2"><b>ADD TO CART</b></button>
                            </div>
                            <div class="col-4">
                                <button v-b-modal="'product-details'" v-on:click="viewDetails(product)" type="button" class="btn btn-outline-secondary text-black poppinfont mt-2"><b>Buy Now</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";

export default {
    name: "EcommerceProductdetails",
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            selected_image: this.product ? this.api_url + this.product.photos[0].url : "",
            selected_quantity: 1,
            productid: this.$route.params.pid,
            product: null
        }
    },
    methods: {
        updateImage(url) {
            this.selected_image = url;
        },
        addToCart(item) {
            this.$store.dispatch("addCartItem", item);

        },
        updatequantity(direction) {
            if (direction) {
                this.selected_quantity = this.selected_quantity + 1;
            } else {
                if (this.selected_quantity > 1) {
                    this.selected_quantity = this.selected_quantity - 1;
                }
            }

        }
    },
    async mounted() {
        await axios
            .get(process.env.VUE_APP_STRAPI_API_URL + "/products/" + this.productid)
            .then((response) => {
                this.product = response.data;
                this.selected_image = this.product ? this.api_url + this.product.photos[0].url : ""
            })
            .catch(() => {
                this.product = "notFound";
            });
    }
};
</script>

<style>
.fixed-top {
    position: relative
}

.smImage {
    width: 100px !important;
    height: 100px !important;
}
</style>
