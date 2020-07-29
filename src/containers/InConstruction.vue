<template>
  <div>
    <section class="banner-one social-banner-one" id="home">
      <div class="container container_socialBannerOne">
        <div class="row">
          <div class="col-lg-12 d-flex">
            <div class="my-auto">
              <div class="social-banner-one__content">
                <img src="../assets/unikall/images/unikall-logo-png (1).png" width="136" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-one" id="features">
      <div class="block-title text-center">
        <h3>Why We Exist</h3>
        <h5 class="text-justify">
          Youth in vulnerable conditions deserve to understand their individual power and potential.Our programs offer vital
          community and conversation for underserved communities to pursue a higher quality life, ending vast inequalities
          across the world. We engage individual talents to create this change, intiativing a worldwide movement toward social
          equality.
        </h5>
      </div>
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div class="service-one__single servicesocial-one__single text-left">
            <br />
            <h2>Our Vision</h2>
            <h5>
              A world where everyday heroes activate social equality
              and inspire purpose.
            </h5>
            <img src="../assets/unikall/images/social-center-png.png" width="400" alt />
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="100ms"
        >
          <div class="service-one__single servicesocial-one__single text-right">
            <br />
            <img src="../assets/unikall/images/social-center-dos-png.png" width="580" alt />
            <h2>Our Value</h2>
            <h5 class="text-justify">
              We shift the charitable experience to engage the professional
              community, enabling others to embrace their talents as an
              opportunity to serve. Our work creates social equality to give
              disadvantaged kids a better future. These simple acts of love
              inspire a sense of great purpose that makes the world a
              better place.
            </h5>
          </div>
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
                    <br />
                    <br />
                    <br />
                    <h2>Only by doing any purchase you are already</h2>
                    <h3>helping those who need it the most</h3>
                    <br />
                    <a
                      href="/journey"
                      class="thm-btn banner-one__btn thm-btn_baneerOne-btn footer-about__btn"
                    >
                      <span>START YOUR EXPERIENCE</span>
                    </a>
                    <br />
                    <br />
                    <br />
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
.social-banner-one {
  background-image: url("../assets/coming-soon/img/bg.jpg");
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
  font-size: 37px;
  font-weight: 900;
  margin: 0;
  color: #000000;
  letter-spacing: -0.02em;
}
.social-banner-one__content h4 {
  color: #000000;
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
  font-size: 58px;
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
  background-image: url("../assets/unikall/images/footerabout.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container_footetAboutfour {
  margin-bottom: 8%;
  margin-top: 5%;
  text-align: right;
}
.footer-about__content h3 {
  margin: 0;
  font-size: 37px;
  font-weight: 800;
  color: black;
  letter-spacing: -0.02em;
  text-align: right;
}
.footer-about__content h2 {
  color: black;
}
.footer-about__content p {
  margin: 0;
  font-size: 18px;
  line-height: 36px;
  color: black;
  margin-top: 31px;
  text-align: right;
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
</style>