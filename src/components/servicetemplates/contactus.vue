<template>
<!-- contact us section -->
<section class="py-5" style="background-color: #E6E6E6;">
    <div id="contact" class="container">
        <form class="mt-20" action="/action_page.php">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="brand-color">CONTACT US</h1>
                        </div>
                        <div class="col-6 mt-20">
                            <div class="form-group">
                                <input type="email" placeholder="| NAME" class="form-control brand-border" id="contact_name">
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="| E-MAIL" class="form-control brand-border" id="contact_email">
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="| PHONE NUMBER" class="form-control brand-border" id="contact_phone">
                            </div>
                        </div>
                        <div class="col-6 mt-20">
                            <div class="form-group">
                                <textarea style="height:90%;" class="form-control brand-border" placeholder="MESSAGE" id="contact_message"></textarea>
                            </div>
                        </div>
                        <div class="col-12 mt-20">
                            <div class="row">
                                <div class="col-3"></div>
                                <div class="col-1">
                                    <input type="checkbox" class="form-control brand-border cust_checked" id="conatct_acceptterms">
                                </div>
                                <div class="col-7 text-left">
                                    <p><label for="conatct_acceptterms">I give permission to contact me</label></p>
                                    <p>Company would like to stay in touch to provide you with marketting related
                                        content. By ticking you agree to consent to recieve educational, company and
                                        promotional information from COMPANY and accept COmpany's privacy policy.
                                    </p>
                                </div>
                                <div class="col-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center"><button type="button" class="btn btn-outline-primary brand-color brand-btn">Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </form>
    </div>
</section>
</template>

<script>
export default {
    name: "ServiceContactUs"
};
</script>
