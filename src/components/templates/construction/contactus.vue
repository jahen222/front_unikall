<template>
<!-- contact us modal section -->
<b-modal id="my-booking" hide-footer title="">
    <div class="container">
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p class="text-black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-5">
                <div class="col-6">
                    <p class="text-black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna al</p>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type=" text" class="form-control" :class="{ 'hasError': $v.form.fname.$error }" v-model="form.fname" id="fname" name="fname" placeholder="First Name">
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" :class="{ 'hasError': $v.form.lname.$error }" v-model="form.lname" id="lname" name="lname" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" placeholder="| E-MAIL" class="form-control brand-border" :class="{ 'hasError': $v.form.contact_email.$error }" v-model="form.contact_email" id="contact_email" name="contact_email">
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" placeholder="| PHONE NUMBER" class="form-control brand-border" :class="{ 'hasError': $v.form.contact_phone.$error }" v-model="form.contact_phone" id="contact_phone" name="contact_phone">
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="| ADDRESS" class="form-control brand-border" :class="{ 'hasError': $v.form.address.$error }" v-model="form.address" id="address" name="address">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="| MESSAGE" class="form-control brand-border" :class="{ 'hasError': $v.form.message.$error }" v-model="form.message" rows="3" id="message" name="message"></textarea>
                    </div>
                </div>
                <div class="col-6">
                    <datepicker :inline="true" v-model="form.dated" name="schedualed_data"></datepicker>
                </div>
            </div>
            <div class="row mt-5">
                <button type="submit" class="btn brand-gbcolor text-white poppinfont m-auto">BOOK MEETING</button>
            </div>
        </form>
    </div>
</b-modal>
</template>

<script>
import {
    required,
    email
} from "vuelidate/lib/validators";
import Datepicker from 'vuejs-datepicker';
export default {
    name: "ServiceContactUs",
    components: {
        Datepicker
    },
    data() {
        return {
            form: {
                fname: "",
                lname: "",
                contact_email: "",
                contact_phone: "",
                address: "",
                message: "",
                dated: ""
            }
        };
    },
    validations: {
        form: {
            fname: {
                required
            },
            lname: {
                required,
            },
            contact_email: {
                required,
                email
            },
            contact_phone: {
                required,
            },
            address: {
                required,
            },
            message: {
                required,
            },
            dated: {
                required,
            }
        }
    },
    methods: {
        submit() {
            this.$v.form.$touch();
            if (this.$v.form.$error) return
            // to form submit after this
            alert('Form submitted')
            alert(this.form.dated)
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
