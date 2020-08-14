<template>
  <div class="h-100">
    <router-view />
    <color-switcher />
  </div>
</template>

<script>
import ColorSwitcher from "../dashboard/components/Common/ColorSwitcher";

import { getDirection } from "../dashboard/utils";

export default {
  components: {
    "color-switcher": ColorSwitcher
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
  }
};
</script>

<style scoped>
#app-container {
  text-align: left !important;
}
</style>