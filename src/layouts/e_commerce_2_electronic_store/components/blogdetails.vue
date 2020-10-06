<template>
<!-- contact us modal section -->
<b-modal :id="'bd_'+blog.id" hide-footer :title="blog.title">
    <div class="container">
       <div class="row">
            <div class="col-12">
                <img class="d-block w-100" :src="api_url + blog.image.formats.small.url" alt="Image">
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <p>
                    {{blog.description}}
                </p>
            </div>
        </div>
    </div>
</b-modal>
</template>

<script>
export default {
    name: "EcommerceBlogDetails",
    props: ['blog'],
    components: {
    },
    data() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL
        };
    },
    methods: {
        
    }
};
</script>

<style scoped>
.modal-header {
    background:none !important;
}
</style>