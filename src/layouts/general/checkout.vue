<template>
<!-- Product Details section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form @submit.prevent="submit">
                    <div class="form-row">
                        <h1>Contact Information</h1>
                    </div>
                    <div class="form-row mt-2">
                        <div class="form-group col-md-6">
                            <input type=" text" class="form-control" :class="{ 'hasError': $v.form.phone.$error }" v-model="form.phone" id="phone" name="phone" placeholder="Phone / Email ">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-6">
                <div class="row mt-2" v-for="(item,index) in cart" :key="index">
                    <div class="col-4">
                        <img style="width:100px;" :src="api_url + item.photos[0].url" :alt="item.name" />
                    </div>
                    <div class="col-4">{{item.name}}</div>
                    <div class="col-4">${{item.price}}</div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
//import axios from "axios";
import {
    required
} from "vuelidate/lib/validators";
export default {
    name: "EcommerceProductcheckout",
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            products: null,
            form: {
                phone: "",
                address: "",
            }
        }
    },
    validations: {
        form: {
            phone: {
                required
            },
            address: {
                required,
            }
        }
    },
    computed: {
        cart() {
            return this.$store.getters.CartItems;
        }
    },
    methods: {
        updatequantity(direction) {
            if (direction) {
                this.selected_quantity = this.selected_quantity + 1;
            } else {
                if (this.selected_quantity > 1) {
                    this.selected_quantity = this.selected_quantity - 1;
                }
            }

        },
        submit() {
            this.$v.form.$touch();
            if (this.$v.form.$error) return
            // to form submit after this
            alert('Form submitted')
            alert(this.form.phone)
        }
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
