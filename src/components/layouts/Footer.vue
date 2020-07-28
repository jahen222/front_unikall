<template>
  <footer class="site-footer">
    <div class="site-footer__upper">
      <div class="row">
        <div class="col-xl-2 col-lg-6">
          <a href="/" class="logo">
            <img
              class="logo-footer"
              src="../../assets/unikall/images/LogosUnikall perfil-01.jpg"
              width="136"
              alt
            />
          </a>
        </div>
        <div class="col-xl-2 col-lg-6">
          <div class="footer-widget footer-widget__about">
            <h3 class="footer-widget__title">CONTACT US</h3>
            <p>
              +44 345 678 903
              <br />unikall@mail.com
              <br />Find a Layout
              <br />
            </p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-6">
          <div class="footer-widget footer-widget__links">
            <h3 class="footer-widget__title">CUSTOMER RERVICE</h3>
            <ul class="list-unstyled footer-widget__links-list">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Ordering & Payment</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-6">
          <div class="footer-widget footer-widget__links">
            <h3 class="footer-widget__title">INFORMATION</h3>
            <ul class="list-unstyled footer-widget__links-list">
              <li>
                <a href="#">About Unikall</a>
              </li>
              <li>
                <a href="#">Work With US</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Press Enquiries</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="footer-widget footer-widget__newsletter">
            <h3 class="footer-widget__title">Newsletter</h3>
            <form action="#" class="footer-widget__newsletter-form">
              <input type="text" placeholder="Email address" name="email" />
              <button type="submit">
                <i class="fa fa-envelope"></i>
              </button>
            </form>
            <p>
              Excepteur sint occaecat cupidatat
              <br />non proident, sunt in culpa qui officia.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div class="container inner-container">
        <p>© copyright 2020 by unikall.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.site-footer {
  background-color: #e5e5e5;
}
.logo-footer {
  width: 70%;
  margin-top: -10%;
}
.footer-widget {
  text-align: left;
}
.footer-widget__links {
  text-align: left;
}
.footer-widget__newsletter-form button[type=submit] {
    background-image: linear-gradient( 0deg, #ff5f5e 0%, #ffc52f 51%, #ff5f5e 100% );
}
.footer-widget__title {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #1f2c4d;
    margin-bottom: 30px;
}
</style>