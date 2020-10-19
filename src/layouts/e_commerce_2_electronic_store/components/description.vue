<template>
  <!-- description and images section -->
  <section id="about" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="capital poppinfont">Description</h1>
          <p class="poppinfont">{{ description }}</p>
          <p>
            <button
              v-b-modal="'my-booking'"
              type="button"
              class="btn btn-outline-secondary text-black poppinfont"
              v-on:click="gotoPage('contact')"
            >
              <b>CONTACT US</b>
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EcommerceDescription",
  props: ["description", "name", "work_images"],
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  methods: {
    gotoPage(tag) {
      if (tag != "contact") {
        var anchor = document.querySelector("#" + tag);
        window.scrollTo(anchor.offsetLeft, anchor.offsetTop - 150);
        //console.log(window);
      }
      return false;
    },
  },
};
</script>

<style scoped>
h1:before {
  content: none;
}
</style>
