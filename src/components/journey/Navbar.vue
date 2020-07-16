<template>
  <div>
    <div class="row">
      <div class="col-12">
        <b-card no-body class="journey-tab-bar">
          <b-tabs pills card vertical>
            <b-tab active>
              <template v-slot:title class="journey-navar-top">
                <i class="fas fa-medal journey-icon-navar"></i>
                <strong>Featured layouts</strong>
              </template>
              <FeatureLayouts />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-tags journey-icon-navar"></i>
                <strong>E Commerce</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-briefcase journey-icon-navar"></i>
                <strong>Marketing & Sales</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-sticky-note journey-icon-navar"></i>
                <strong>Lessons</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-network-wired journey-icon-navar"></i>
                <strong>Household Services</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-home journey-icon-navar"></i>
                <strong>Construction & Home Improvements</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-camera journey-icon-navar"></i>
                <strong>Events</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-laptop journey-icon-navar"></i>
                <strong>Technology & Design</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="fas fa-gem journey-icon-navar"></i>
                <strong>Beauty & Fashion</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
            <b-tab class="journey-navar-botton">
              <template v-slot:title>
                <i class="fas fa-calendar-alt journey-icon-navar"></i>
                <strong>Consulting</strong>
              </template>
              <p class="p-3">Tab Contents 1</p>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureLayouts from "@/components/journey/FeatureLayouts.vue";

export default {
  name: "Navbar",
  components: {
    FeatureLayouts
  }
};
</script>

<style>
.journey-tab-bar {
  text-align: left;
}
.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: black;
  line-height: 70px;
  font-weight: 200;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: black;
}
.journey-icon-navar {
  margin-right: 5px;
  color: gray;
}
.col-auto {
  background-color: white;
  border-right-style: groove;
}
[id*="__BVID__8__BV_tab_controls_"] {
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 10%;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
</style>