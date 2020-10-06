<template>
<!-- contact us modal section -->
<b-modal id="my-cart" hide-footer title="Book your Meeting">
    <div class="container">
        <div class="row" v-for="(item, index) in cart">
            <div class="col-3">{{ item.name }}</div>
            <div class="col-3">{{ item.price }}</div>
            <div class="col-3">{{ item.quantity }}</div>
            <div class="col-3">{{ item.price * item.quantity }}</div>
        </div>
    </div>
</b-modal>
</template>

<script>
export default {
    name: "EcommerceContactUs",
    components: {},
    data() {},
    computed: {
        StoreCart() {
            return this.$store.getters.StoreCart;
        },
        cartCount() {
            return this.StoreCart.length;
        },
        cart() {
            return this.$store.getters.StoreCart.map(cartitems => {
                return this.$store.getters.products.find(itemForSale => {
                    return cartitems === itemForSale.id;
                });
            });
        }
    },
    method: {
        removeItem(index) {
            this.$store.dispatch("removeItem", index);
        }
    }
};
</script>

<style>
.vdp-datepicker__calendar {
    width: 100% !important;
}

.cell.day {
    border: 1px solid #d7d7d7 !important;
    padding: 1px;
}

.vdp-datepicker .vdp-datepicker__calendar,
.form-control {
    border: 1px solid #000000 !important;
    border-radius: 0.5rem !important;
}

.vdp-datepicker .vdp-datepicker__calendar .cell.day-header {
    color: #000000 !important;
}
</style>
