<template>
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
          <img src="../../assets/unikall/images/social-center-png.png" width="400" alt />
        </div>
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="100ms"
      >
        <div class="service-one__single servicesocial-one__single text-right">
          <br />
          <img src="../../assets/unikall/images/social-center-dos-png.png" width="580" alt />
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
.service-one__single {
  box-shadow: none;
}
.service-one__single:hover {
  background-color: black;
}
.service-one__single:hover i {
  color: white;
}
.servicesocial-one__single:hover h5, h2 {
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
</style>