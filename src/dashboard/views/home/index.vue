<template>
  <div class="dash">
    <home-layout>
      <p>This is your dashboard landingpage.</p>
      <router-view />
    </home-layout>
  </div>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout";

export default {
  components: {
    "home-layout": HomeLayout,
  },
};
</script>
