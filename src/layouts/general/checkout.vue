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
              <div class="form-group col-12">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.email.$error }"
                  v-model="form.email"
                  id="phone"
                  name="phone"
                  placeholder="Email "
                />
              </div>
              <div class="form-group col-12">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.phone.$error }"
                  v-model="form.phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <h1>Shipping Information</h1>
            </div>
            <div class="form-row mt-2">
              <div class="form-group col-6">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.fname.$error }"
                  v-model="form.fname"
                  id="fname"
                  name="fname"
                  placeholder="First Name "
                />
              </div>
              <div class="form-group col-6">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.lname.$error }"
                  v-model="form.lname"
                  id="lname"
                  name="lname"
                  placeholder="LOast Name "
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.address.$error }"
                  v-model="form.address"
                  id="address"
                  name="address"
                  placeholder="Address "
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.city.$error }"
                  v-model="form.city"
                  id="city"
                  name="city"
                  placeholder="City "
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.country.$error }"
                  v-model="form.country"
                  id="country"
                  name="country"
                  placeholder="Country "
                />
              </div>
              <div class="form-group col-4">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.province.$error }"
                  v-model="form.province"
                  id="province"
                  name="province"
                  placeholder="Province "
                />
              </div>
              <div class="form-group col-4">
                <input
                  type=" text"
                  class="form-control"
                  :class="{ hasError: $v.form.postalcode.$error }"
                  v-model="form.postalcode"
                  id="postalcode"
                  name="postalcode"
                  placeholder="Postal Code "
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="form-group col-6 text-left text-black">
                <router-link :to="'/shop/' + businessid"
                  ><span style="color: #000; text-decoration: underline">
                    Continue Shopping</span
                  >
                </router-link>
              </div>
              <div class="form-group col-6 text-right">
                <button
                  type="submit"
                  class="btn btn-outline-secondary text-black poppinfont"
                >
                  <b class="text-black">PROCEED</b>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-6">
          <div class="row mt-2" v-for="(item, index) in cart" :key="index">
            <div class="col-2">
              <img
                style="width: 100%"
                :src="api_url + item.photos[0].url"
                :alt="item.name"
              />
              <span class="count1">{{ item.quantity }}</span>
            </div>
            <div class="col-6 text-left m-auto">{{ item.name }}</div>
            <div class="col-3 text-center m-auto">${{ item.price }}</div>
            <div
              title="Remove from cart"
              style="cursor: pointer"
              class="col-1 text-right text-danger m-auto"
              @click="removeItem(index)"
            >
              X
            </div>
          </div>
          <div class="form-row mt-3 border-top"></div>
          <div class="form-row mt-2">
            <form
              @submit.prevent="applycoupon"
              style="width: 100%; display: inline-flex"
            >
              <div class="form-group col-8">
                <input
                  type=" text"
                  class="form-control"
                  v-model="coupon.code"
                  id="coupon"
                  name="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div class="form-group col-4 text-right">
                <button
                  type="submit"
                  class="btn btn-outline-secondary text-black poppinfont"
                >
                  <b class="text-black">APPLY</b>
                </button>
              </div>
            </form>
          </div>
          <div class="form-row mt-3 border-top"></div>
          <div class="form-row mt-2">
            <div class="form-group col-6 text-left">Sub Total</div>
            <div class="form-group col-6 text-right">${{ subtotal }}</div>
            <div class="form-group col-6 text-left">Shipping Cost</div>
            <div class="form-group col-6 text-right">
              Determine after wardsd
            </div>
          </div>
          <div class="form-row mt-3 border-top"></div>
          <div class="form-row mt-2">
            <div class="form-group col-6 text-left">Total</div>
            <div class="form-group col-6 text-right">${{ subtotal }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import axios from "axios";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "EcommerceProductcheckout",
  props: ["business"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      products: null,
      form: {
        phone: "",
        address: "",
        fname: "",
        lname: "",
        city: "",
        country: "",
        province: "",
        postalcode: "",
        email: "",
      },
      coupon: {
        code: "",
      },
    };
  },
  validations: {
    form: {
      phone: {
        required,
      },
      address: {
        required,
      },
      fname: {
        required,
      },
      lname: {
        required,
      },
      city: {
        required,
      },
      country: {
        required,
      },
      province: {
        required,
      },
      email: {
        required,
      },
      postalcode: {
        required,
      },
    },
    coupon: {
      code: {
        required,
      },
    },
  },
  computed: {
    businessid() {
      return this.$store.getters.BusinessId;
    },
    cart() {
      return this.$store.getters.CartItems;
    },
    subtotal() {
      let sum = 0;
      for (var items in this.cart) {
        sum =
          sum +
          Number(this.cart[items].price) * Number(this.cart[items].quantity);
      }
      return sum;
    },
  },
  methods: {
    removeItem(index) {
      return this.$store.dispatch("removeCartItem", index);
    },
    updatequantity(direction) {
      if (direction) {
        this.selected_quantity = this.selected_quantity + 1;
      } else {
        if (this.selected_quantity > 1) {
          this.selected_quantity = this.selected_quantity - 1;
        }
      }
    },
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      // to form submit after this
      let order = {
        phone: this.form.phone,
        email: this.form.email,
        name: this.form.fname + this.form.lname,
        shipping_address:
          this.form.address +
          ", " +
          this.form.city +
          ", " +
          this.form.country +
          ", " +
          this.form.postalcode,
        total: this.subtotal - 0,
        discount: 0,
        subtotal: this.subtotal,
        business: this.business.id,
      };
      //console.log(order);
      await axios
        .post(process.env.VUE_APP_STRAPI_API_URL + "/orders/", order, {})
        .then((response) => {
          this.additems(response.data.id);
          this.showSuccess({
            message: "Order information updated successfully",
          });
        })
        .catch((error) => {
          this.showError({
            message: error.message,
          });
        });
    },
    async additems(orderid) {
      for (var items in this.cart) {
        let _orderItem = {
          name: this.cart[items].name,
          price: this.cart[items].price,
          quantity: this.cart[items].quantity,
          order: orderid,
          product: this.cart[items].id,
        };
        this.senditemrequest(_orderItem);
      }
    },
    async senditemrequest(_orderItem) {
      await axios
        .post(
          process.env.VUE_APP_STRAPI_API_URL + "/order-items/",
          _orderItem,
          {}
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    async applycoupon() {
      this.$v.coupon.$touch();
      if (this.$v.coupon.$error) return;

      await axios
        .post(process.env.VUE_APP_STRAPI_API_URL + "/applycoupon/", null, {})
        .then((response) => {
          console.log(response.data);
        });
    },
  },
  notifications: {
    showError: {
      title: "Failed",
      message: "Failed",
      type: "error",
    },
    showSuccess: {
      title: "Success",
      message: "Success",
      type: "success",
    },
  },
};
</script>

<style>
.count1 {
  font-size: 12px;
  color: #000 !important;
  background: #ccc;
  border-radius: 10px;
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: 700;
  line-height: 18px;
  top: -5px;
  right: 5px;
}

.fixed-top {
  position: relative;
}

.smImage {
  width: 100px !important;
  height: 100px !important;
}
</style>
