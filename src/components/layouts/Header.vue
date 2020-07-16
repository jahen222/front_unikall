<template>
  <header class="site-header-one stricky site-header-one__fixed-top">
    <div class="container-fluid">
      <div class="site-header-one__logo">
        <a href="/">
          <img src="../../assets/unikall/images/unikall-logo-white.png" width="136" alt />
        </a>
        <span class="side-menu__toggler">
          <i class="fa fa-bars"></i>
        </span>
        <!-- /.side-menu__toggler -->
      </div>
      <!-- /.site-header-one__logo -->
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
        <!-- /.main-nav__navigation-box -->
      </div>
      <!-- /.main-nav__main-navigation -->
      <div class="main-nav__right">
        <!-- /.main-nav__cta -->
        <a href="#" class="thm-btn main-nav__btn">
          <span>Log-in</span>
        </a>
      </div>
      <!-- /.main-nav__right -->
    </div>
    <!-- /.container-fluid -->
  </header>
  <!-- /.site-header-one -->
</template>

<script>
export default {
  name: "Header"
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
</style>