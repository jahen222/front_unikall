<template>
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
                    class="thm-btn banner-one__btn thm-btn_footersocial-btn"
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
</template>

<script>
export default {
  name: "FooterSocial"
};
</script>

<style scoped>
.footer-about {
  background-image: url("../../assets/unikall/images/footerabout.jpg");
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
.thm-btn_footersocial-btn {
  border: solid 3px #000;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
  color: #000000;
}
.thm-btn_footersocial-btn:hover {
    color: #ff864c;
    transition: all 500ms ease;
    background-position: bottom;
}
</style>