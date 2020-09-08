<template>
<section class="blog-one" id="blog">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 block-title text-left">
                <h3>{{name}}</h3>
            </div>
            <div class="col-lg-6 block-title text-right">
                <div>
                    <b-tabs content-class="mt-3" align="right">
                        <b-tab active>
                            <template v-slot:title>
                                <i class="fas fa-credit-card fl-icon-navar"></i>
                            </template>
                            <p>Landing pages 1</p>
                        </b-tab>
                        <b-tab>
                            <template v-slot:title>
                                <i class="fas fa-folder fl-icon-navar"></i>
                            </template>
                            <p>Landing pages 2</p>
                        </b-tab>
                        <b-tab>
                            <template v-slot:title>
                                <i class="fas fa-map fl-icon-navar"></i>
                            </template>
                            <p>Landing pages 3</p>
                        </b-tab>
                        <b-tab>
                            <template v-slot:title>
                                <i class="far fa-window-maximize fl-icon-navar"></i>
                            </template>
                            <p>Landing pages 4</p>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>

        <div v-if="layouts && layouts.length > 0" class="row">
            <div v-for="item in layouts" v-bind:key="item.id" class="col-lg-6">
                <div class="blog-one__single">
                    <div class="blog-one__image" v-if="item.preview && item.preview.url">
                        <img @click="showModal(item.id)" :src="api_url + item.preview.url" alt />
                    </div>
                    <div class="blog-one__image" v-else>
                        <img @click="showModal(item.id)" src="../../assets/unikall/images/default.jpg" alt />
                    </div>
                    <div class="blog-one__content">
                        <h3>
                            <a @click="showModal(item.id)">{{ item.name }}</a>
                        </h3>
                    </div>
                </div>

                <b-modal :ref="'modal'+item.id" hide-footer size="xl" class="text-center">
                    <template v-slot:modal-header="{ close }">
                        <b-button size="sm" variant="danger" @click="close()">Close</b-button>
                    </template>
                    <form>
                        <form-wizard @on-complete="onComplete" color="#343a40" title subtitle>
                            <tab-content title="Layout details" icon="fab fa-font-awesome" class="text-center" v-if="item.mockup && item.mockup.url">
                                <img :src="api_url + item.mockup.url" style="height:400px" alt />
                            </tab-content>
                            <tab-content title="Layout details" icon="fab fa-font-awesome" class="text-center" v-else>
                                <img src="../../assets/unikall/images/default.jpg" alt />
                            </tab-content>
                            <tab-content title="Personal details" icon="fas fa-user">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        How you wish your customers know the name
                                                        of your brand
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="text" name="businessname" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Business Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        It is optional to you to upload an image of your
                                                        business logo (jpg, png)
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Upload Logo</label>
                                                        <input name="logo" v-bind:style="{ 'background-image': 'url(' + logo_url + ')' }" type="file" @change="onLogoFileChange" class="form-control fl-input-form imgpreview" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        What Your Customer Wants : enter an attractive
                                                        title, a good title encourages buyers to see you! If
                                                        you want to use one of our suggested phrases
                                                        just click here
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input name="tagtitle" type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Tagline Title" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        In your own words, provide a brief description
                                                        about what do you offer or sell
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input name="yourwork" type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Your Work" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        Show your customers a visual example of your
                                                        work done, so, expose those ones options you
                                                        are most prod of!
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Photos of your work</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4"></div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <button type="submit" class="fl-btn-set-images-form">Click to upload file</button>
                                                            </div>
                                                            <div class="col-8">
                                                                <p class="fl-micro-text">
                                                                    Connect with your customers, using photos! Ensure the item
                                                                    is properly visible from multiple angles. <b>Upload MIN 3 and
                                                                        MAX 6 photos (jpg, .gif, .png.)</b>
                                                                </p>
                                                                <p class="fl-micro-text">
                                                                    *If you want to upload more photos, please <b>upgrade your
                                                                        plan*</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="col-4">
                                                                <input type="file" class="form-control fl-input-form" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        Write the name of the products or services,
                                                        features it includes and price for each one
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="row">
                                                                    <div class="col-4">
                                                                        <h3>Price</h3>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <button type="submit" class="fl-btn-set-images-form2">Add Item</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-8">
                                                                <p class="fl-micro-text">
                                                                    Upload MAX 3 products or services prices. Please
                                                                    select if the price is fixed or negotiable, as applicable
                                                                </p>
                                                            </div>
                                                            <p class="fl-micro-text">
                                                                *If you want to write more than 3 products or services prices,
                                                                please upgrade your plan*
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">
                                                        Tap city Name and select from list. If you can’t
                                                        find your city, contact customers support
                                                    </p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Add Location" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">Name helps buyers to trust you</p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Contact Me" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">Insert a valid phone number</p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">Insert a valid email</p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="text" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <p class="fl-micro-text">Insert a valid password</p>
                                                </div>
                                                <div class="col-8">
                                                    <div class="form-group">
                                                        <input type="password" style="border:0px !important;border-radius:0 !important;border-bottom:#000000 solid 1px !important;" class="form-control" placeholder="Password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tab-content>
                        </form-wizard>
                    </form>
                </b-modal>
            </div>
        </div>
        <div v-if="!layouts || layouts.length == 0" class="row text-danger">No Templates Found...</div>
    </div>
</section>
</template>

    width: 200px;
    height: 100px;

<script>
export default {
    name: "GenericLayouts",
    props: ['name', 'id', 'layouts'],
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            logo_url: ""
        };
    },
    apollo: {},
    methods: {
        showModal(i) {
            this.$refs["modal" + i][0].show();
        },
        onComplete: function () {
            alert("Yay. Done!");
        },
        onLogoFileChange(e) {
            const file = e.target.files[0];
            this.logo_url = URL.createObjectURL(file);
        }
    },
};
</script>

<style>
.blog-one {
    background-color: #ffffff;
    padding-top: 0px;
}

.blog-one__image {
    background-color: #504c54;
}

.blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
    height: 0px;
}

[class*="col-"]:nth-child(2) .blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(3) .blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(4) .blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(5) .blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

[class*="col-"]:nth-child(6) .blog-one__content::after {
    background-image: linear-gradient(90deg, #000 0%, #000 100%);
}

.blog-one__content h3 {
    color: #000;
}

.fl-icon-navar {
    margin-right: 5px;
    color: gray;
    font-size: xx-large;
}

.fl-input-form {
    width: 200px;
    height: 100px;
}

.fl-btn-set-images-form {
    background-color: white;
    border-color: black;
    color: black;
    width: 100%;
    border-width: 2px;
    border-radius: 6px;
}

.fl-btn-set-images-form2 {
    background-color: white;
    border-color: black;
    color: black;
    border-width: 2px;
    border-radius: 6px;
}

.fl-micro-text {
    font-size: 12px;
    line-height: 25px;
}

.special-input {
    border: 0px !important;
    border-bottom: #000000 solid 1px !important;
}
</style><style scoped>
.block-title h3 {
    font-size: 40px !important;
}

label {
    color: #000000;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #000000;
    opacity: 1;
    font-size: 18px;
    /* Firefox */
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #000000;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #000000;
}

.imgpreview {
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
