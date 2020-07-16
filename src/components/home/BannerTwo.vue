<template>
  <section>
    <div class="row">
      <div class="col-lg-6 banner-two-a"></div>
      <div class="col-lg-6 banner-two-b">
        <div class="container container_bannerTwo">
          <div class="row">
            <div class="col-lg-12 d-flex">
              <div class="my-auto2">
                <div class="banner-two__content">
                  <h3>
                    How To Show Your Business
                    <br />To The Customers That Are
                    <br />Waiting for You?
                  </h3>

                  <div class="row">
                    <div
                      class="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div class="banner_two_icons">
                        <i class="fa fa-mouse-pointer"></i>
                        <br />
                        <br />
                        <h5>
                          1. Select your business
                          category and identity
                        </h5>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <div class="banner_two_icons">
                        <i class="fa fa-list-alt"></i>
                        <br />
                        <br />
                        <h5>
                          2. Sign Up
                          FOR FREE!
                        </h5>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="200ms"
                    >
                      <div class="banner_two_icons">
                        <i class="fa fa-desktop"></i>
                        <br />
                        <br />
                        <h5>We give you a web profile</h5>
                      </div>
                    </div>
                  </div>
                  <p>
                    We have built tools for you to outfit your business:
                    <br />
                    <br />Unique designs to excel your business
                    <br />Free Hosting
                    <br />Responsive Design
                    <br />Speed & Reliability
                  </p>
                  <a href="/journey" class="thm-btn banner-one__btn thm-btn_baneerOne-btn">
                    <span>START NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerTwo"
};
</script>

<style>
.banner-two-a {
  background-image: url("../../assets/unikall/images/fondo-seccion-tres-a.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-two-b {
  background-image: url("../../assets/unikall/images/fondo-seccion-tres-b.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container_bannerTwo {
  margin-bottom: 10%;
  margin-top: 10%;
  text-align: center;
}

.banner-two__content h3 {
  margin: 0;
  font-size: 37px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  text-align: left;
}
.banner-two__content p {
  margin: 0;
  font-size: 18px;
  line-height: 36px;
  color: whitesmoke;
  margin-top: 31px;
  text-align: left;
}
.my-auto2 {
  margin-bottom: auto !important;
  margin-left: 15%;
  margin-right: 15%;
}
.banner_two_icons {
  font-size: 60px;
  color: #fff;
  margin-top: 80px;
}
</style>



