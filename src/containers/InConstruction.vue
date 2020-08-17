<template>
  <div class="page-wrapper">
    <section class="banner-one social-banner-one" id="home">
      <div class="container container_socialBannerOne">
        <div class="row">
          <div class="col-lg-12 d-flex">
            <div class="my-auto">
              <div class="social-banner-one__content">
                <img
                  class="build_page_logo"
                  src="../assets/unikall/images/unikall-logo-png (1).png"
                  width="230"
                  alt
                />
                <br />
                <br />
                <br />
                <h3 class="contruch3">It is coming soon!</h3>
                <br />
                <h4 class="contruch4">
                  The best free marketplace to boost your business
                  <br />and reach out more clients!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-one text-center" id="features">
      <div class="row bannerone">
        <img class="imageService1" src="../assets/unikall/images/coming-soon-one.png" alt />
        <div class="block-title">
          <h3>With Unikall, you will have a complete and fabulous online presence</h3>
          <h4>that will make your products or services sell fast and better.</h4>
        </div>
      </div>
      <br />
    </section>

    <section>
      <div class="row">
        <div class="col-lg-12 footer-about">
          <div class="container container_footetAboutfour">
            <div class="row">
              <div class="col-lg-12">
                <div class="my-footersocial-autofour">
                  <div class="footer-about__content">
                    <br />
                    <br />
                    <br />
                    <img src="../assets/unikall/images/logo-white.png" width="230" alt />
                    <h2>Wait for It!</h2>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ConstructionPage",
};
</script>

<style scoped>
.bannerone {
  display: block;
}
.contruch3 {
  color: white;
  font-size: 37px;
}
.social-banner-one {
  background-image: url("../assets/unikall/images/coming-soon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.social-banner-one::before {
  background-image: none;
}
.social-banner-one::after {
  background-image: none;
}
.container_socialBannerOne {
  margin-right: 30%;
  margin-bottom: 0%;
  margin-top: 10%;
}
.social-banner-one__content {
  text-align: left;
}
.social-banner-one__content h3 {
  font-size: 47px;
  font-weight: 900;
  margin: 0;
  color: #ffff;
  letter-spacing: -0.02em;
}
.social-banner-one__content h4 {
  font-size: 27px;
  font-weight: 100;
  margin: 0;
  color: #ffff;
  letter-spacing: -0.02em;
}
.banner-one__image_tag {
  width: 200%;
  padding-right: 10%;
  margin-top: 15%;
}
.banner-one__btn {
  border: none;
  border: solid 2px #ffffff;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
}
.thm-btn_baneerOne-btn:hover {
  color: #ff864c;
  transition: all 500ms ease;
  background-position: bottom;
}
.block-title h3 {
  color: black;
  font-weight: 200;
  font-size: 38px;
}
.block-title h4 {
  color: black;
  font-weight: bold;
  font-size: 38px;
}
.subtitle {
  font-weight: 1 !important;
}
.service-one {
  margin-left: 10%;
  margin-right: 10%;
}
.service-one__single {
  box-shadow: none;
}
.service-one__single:hover {
  background-color: black;
}
.service-one__single:hover i {
  color: white;
}
.servicesocial-one__single:hover h5,
h2 {
  color: white;
}
.service-one__single::before {
  background-image: none;
}
.service-one__single h3 {
  color: black;
  font-size: 23px;
}
.service-one__single p {
  color: black;
  font-weight: normal;
}
.service-one__icon {
  background-image: none;
  margin: 0px auto;
}
[class*="col-"]:nth-child(2) .service-one__icon {
  background-image: none;
}
[class*="col-"]:nth-child(3) .service-one__icon {
  background-image: none;
}
[class*="col-"]:nth-child(4) .service-one__icon {
  background-image: none;
}
.service-one__icon i {
  color: black;
  transition: all 500ms ease;
}
.service-one__btn {
  border: none;
  border: solid 4px #000;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
  color: #000;
}
.service-btn::before {
  content: "";
  position: absolute;
  background-color: #000;
  border-radius: 50%;
  opacity: 0.2;
  width: 32px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}
.thm-btn_service-btn:hover {
  color: #ff864c;
  transition: all 500ms ease;
  background-position: bottom;
}
.footer-about {
  background-image: url("../assets/unikall/images/banner-fondo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container_footetAboutfour {
  margin-bottom: 8%;
  margin-top: 5%;
  text-align: center;
}
.footer-about__content h3 {
  margin: 0;
  font-size: 37px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  text-align: center;
}
.footer-about__content h2 {
  color: #fff;
  font-size: 47px;
  text-align: center;
}
.footer-about__content p {
  margin: 0;
  font-size: 18px;
  line-height: 36px;
  margin-top: 31px;
  color: #fff;
  text-align: center;
}
.my-footersocial-autofour {
  margin-bottom: auto !important;
}
.footer-about_icons {
  font-size: 60px;
  color: #fff;
  margin-top: 80px;
}
.footer-about__btn {
  color: #000000;
  border-color: #000000;
}
@media only screen and (max-width: 720px) {
  .build_page_logo {
    margin-top: -95%;
    width: 30%;
  }
  .social-banner-one__content h3 {
    font-size: 35px;
    font-weight: 900;
    margin: 0;
    color: #ffff;
    letter-spacing: -0.02em;
  }
  .social-banner-one__content h4 {
    display: none;
  }
  .service-one {
    margin-top: -15%;
  }
  .block-title h3 {
    color: black;
    font-weight: 200;
    font-size: 20px;
  }
  .block-title h4 {
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>