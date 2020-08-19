<template>
  <div class="h-100">
    <div class="dash">
      <home-layout>
        <p>This is your dashboard landingpage.</p>
        <router-view />
      </home-layout>
    </div>
    <color-switcher />
  </div>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout";
import ColorSwitcher from "../../components/Common/ColorSwitcher";
import { getDirection } from "../../utils";

export default {
  components: {
    "home-layout": HomeLayout,
    "color-switcher": ColorSwitcher,
  },
  beforeMount() {
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.dir = "rtl";
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.dir = "ltr";
      document.body.classList.remove("rtl");
    }
  },
};
</script>

<style scoped>
.dash {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
    padding-bottom: 80px !important;
}
</style>