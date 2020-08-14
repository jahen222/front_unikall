<template>
  <header class="site-header-one stricky site-header-one__fixed-top">
    <div class="container-fluid">
      <div class="site-header-one__logo">
        <a href="/">
          <img src="../../assets/unikall/images/unikall-logo-png (1).png" width="136" alt />
        </a>
        <span class="side-menu__toggler">
          <i class="fa fa-bars"></i>
        </span>
      </div>
      <div class="main-nav__main-navigation one-page-scroll-menu">
        <ul class="main-nav__navigation-box">
          <li class="scrollToLink">
            <a href="/">Home</a>
          </li>
          <li class="scrollToLink">
            <a href="#freeplan">Free Plan</a>
          </li>
          <li class="scrollToLink">
            <a href="#custonplan">Custom Plan</a>
          </li>
          <li class="scrollToLink">
            <a href="#templates">Templates</a>
          </li>
          <li class="scrollToLink">
            <a href="#support">Support</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#blog">Blog</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#legal">Legal</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#"></a>
          </li>
        </ul>
      </div>

      <div class="main-nav__main-navigation one-page-scroll-menu main-nav__right">
        <ul class="main-nav__navigation-box">
          <li class="dropdown scrollToLink" v-if="username">
            <a href="#" class="thm-btn main-nav__btn">
              <span class="spamwhite">{{ username }}</span>
            </a>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/" v-on:click="logout">Logout</a>
              </li>
            </ul>
          </li>
          <li v-else>
            <a href="/login" class="thm-btn main-nav__btn">
              <span class="spamwhite">Log-in</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import store from "../../store";
import Cookies from "js-cookie";

export default {
  name: "HeaderAlt",
  computed: {
    username() {
      let user = store.state.auth.user;

      if (Cookies.get("user") !== undefined) {
        user = JSON.parse(Cookies.get("user"));
        return user.username;
      }
      return user;
    }
  },
  methods: {
    logout: function() {
      this.logout();
    },
    ...mapMutations({
      logout: "logout"
    })
  }
};
</script>

<style scoped>
.main-nav__main-navigation {
  margin-left: auto;
}
.main-nav__right {
  margin-left: 0;
}
.thm-btn {
  background-image: linear-gradient(
    0deg,
    #ff5f5e 0%,
    #ffc52f 51%,
    #ff5f5e 100%
  );
}
.spamwhite{
  color: #fff !important;
}
</style>