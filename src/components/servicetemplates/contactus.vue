<template>
<!-- contact us modal section -->
<b-modal id="my-booking" hide-footer title="Book your Meeting">
    <div class="container">
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
                        <input type="text" class="form-control" id="fname" name="lname" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" placeholder="| E-MAIL" class="form-control brand-border" id="contact_email" name="contact_email">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" placeholder="| PHONE NUMBER" class="form-control brand-border" id="contact_phone" name="contact_phone">
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="| ADDRESS" class="form-control brand-border" id="address" name="address">
                </div>
                <div class="form-group">
                    <textarea placeholder="| MESSAGE" class="form-control brand-border" rows="3" id="message" name="message"></textarea>
                </div>
            </div>
            <div class="col-6">
                <datepicker :inline="true" name="schedualed_data"></datepicker>
            </div>
        </div>
        <div class="row mt-5">
            <button type="button" class="btn brand-gbcolor text-white poppinfont m-auto">BOOK MEETING</button>
        </div>
    </div>
</b-modal>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
    name: "ServiceContactUs",
    components: {
        Datepicker
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
