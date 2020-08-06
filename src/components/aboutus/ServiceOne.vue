<template>
  <section class="service-one serviceabout-one" id="features">
    <div class="block-title text-center">
      <h5 class="text-center">
        Customers needs to connect a color, a phrase or an image with your Brand.
        <br />To give you an idea, this is how your web profile could look like!
      </h5>
      <br />
      <br />
    </div>
    <div class="row">
      <div
        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
      >
        <img src="../../assets/unikall/images/learn-more-png-complete.png" width="100%" alt />
      </div>
    </div>
    <a href="/journey" class="thm-btn banner-one__btn thm-btn_footerabout-btn">
      <span>GET YOURS</span>
    </a>
    <br />
  </section>
</template>

<script>
export default {
  name: "ServiceOne"
};
</script>

<style>
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
.serviceabout-one {
  margin-left: 0% !important;
  margin-right: 0% !important;
  background-image: url("../../assets/unikall/images/fondo-learn-more.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
.serviceabout-one__single:hover h5,
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
.thm-btn_footerabout-btn {
  border: solid 3px #000;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
  color: #000000;
}
.thm-btn_footerabout-btn:hover {
    color: #ff864c;
    transition: all 500ms ease;
    background-position: bottom;
}
</style>