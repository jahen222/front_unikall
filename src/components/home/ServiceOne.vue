<template>
  <section class="service-one" id="features">
    <div class="block-title text-center">
      <h3>Take Your Business To A Marketplace!</h3>
      <h3 class="subtitle">
        And Be Better Than
        <span>your competition</span>
      </h3>
    </div>
    <!-- /.block-title -->
    <div class="row">
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
      >
        <div class="service-one__single">
          <div class="service-one__icon">
            <i class="fa fa-cogs"></i>
          </div>
          <!-- /.service-one__icon -->
          <br />
          <h3>We give you a web profile</h3>
          <p>Activate your Online Presence easily for free.</p>
        </div>
        <!-- /.service-one__single -->
      </div>
      <!-- /.col-lg-3 col-md-6 col-sm-12 -->
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="100ms"
      >
        <div class="service-one__single">
          <div class="service-one__icon">
            <i class="fa fa-mouse-pointer"></i>
          </div>
          <!-- /.service-one__icon -->
          <br />
          <h3>Increase your incomes</h3>
          <p>Get more customers quickly.</p>
        </div>
        <!-- /.service-one__single -->
      </div>
      <!-- /.col-lg-3 col-md-6 col-sm-12 -->
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="200ms"
      >
        <div class="service-one__single">
          <div class="service-one__icon">
            <i class="fa fa-globe"></i>
          </div>
          <!-- /.service-one__icon -->
          <br />
          <h3>Save time & money</h3>
          <p>
            We help you quickly to be
            found by your customers and
            drive them to buy with you.
          </p>
        </div>
        <!-- /.service-one__single -->
      </div>
      <!-- /.col-lg-3 col-md-6 col-sm-12 -->
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div class="service-one__single">
          <div class="service-one__icon">
            <i class="fa fa-wrench"></i>
          </div>
          <br />
          <h3>We do the job for you</h3>
          <p>
            We provide you with the tools
            you need to drive your online
            business.
          </p>
          <!-- /.service-one__icon -->
        </div>
        <!-- /.service-one__single -->
      </div>
      <!-- /.col-lg-3 col-md-6 col-sm-12 -->
    </div>
    <!-- /.row -->

    <br />
    <a href="#" class="thm-btn thm-btn_service-btn service-one__btn">
      <span>CREATE MY WEB PROFILE</span>
    </a>
  </section>
  <!-- /.service-one -->
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