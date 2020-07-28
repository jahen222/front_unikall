<template>
  <section>
    <div class="row">
      <div class="col-lg-12 banner-four">
        <div class="container container_bannerfour">
          <div class="row">
            <div class="col-lg-12 d-flex">
              <div class="my-autofour">
                <div class="banner-four__content">
                  <div class="row">
                    <div
                      class="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div class="banner_four_icons">
                        <a href="/">
                          <img
                            src="../../assets/unikall/images/unikall-logo-white.png"
                            width="136"
                            alt
                          />
                        </a>
                        <br />
                        <br />
                      </div>
                    </div>
                    <h3>
                      The only one platform with
                      <br />Social Responsibility
                    </h3>
                  </div>
                  <br />
                  <p>
                    By purchasing in Unikall, you are helping
                    <br />vulnerable children to achieve their dreams.
                  </p>
                  <br />
                  <a
                    href="/social"
                    class="thm-btn banner-one__btn thm-btn_baneerOne-btn banner-four__btn"
                  >
                    <span>CENTRE FOR SOCIAL IMPACT</span>
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
  name: "BannerFour"
};
</script>

<style>
.banner-four {
  background-image: url("../../assets/unikall/images/fondo-ultima-seccion.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container_bannerfour {
  margin-bottom: 8%;
  margin-top: 5%;
  text-align: left;
}

.banner-four__content h3 {
  margin: 0;
  font-size: 37px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  text-align: left;
}
.banner-four__content p {
  margin: 0;
  font-size: 18px;
  line-height: 36px;
  color: whitesmoke;
  margin-top: 31px;
  text-align: left;
}
.my-autofour {
  margin-bottom: auto !important;
  margin-right: 15%;
}
.banner_four_icons {
  font-size: 60px;
  color: #fff;
  margin-top: 80px;
}
.banner-four__btn {
  color: #ffc20f;
  border-color: #ffc20f;
}
</style>

