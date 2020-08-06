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
      </div>
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
            <a href="/articles">Blog</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#legal">Legal</a>
          </li>
          <li class="dropdown scrollToLink">
            <a href="#"></a>
          </li>
        </ul>
      </div>

      <div class="main-nav__main-navigation one-page-scroll-menu main-nav__right">
        <ul class="main-nav__navigation-box">
          <li class="dropdown scrollToLink" v-if="username">
            <a href="#" class="thm-btn main-nav__btn">
              <span class="spamwhite">{{ username }}</span>
            </a>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/" v-on:click="logout">Logout</a>
              </li>
            </ul>
          </li>
          <li v-else>
            <a class="thm-btn main-nav__btn">
              <span class="spamwhite">Log-in</span>
            </a>
            <ul>
              <li>
                <a v-b-modal.login>Log-in</a>
              </li>
              <li>
                <a v-b-modal.regiter>Register</a>
              </li>
            </ul>
            <b-modal id="login" hide-footer title="Log-in" size="xl" class="text-center">
              <form-wizard @on-complete="handleSubmitLogin" shape="tab" color="#000" title subtitle>
                <tab-content title="Personal details">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Insert a valid email</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email</label>
                              <input
                                type="email"
                                class="form-control"
                                aria-describedby="emailHelp"
                                v-model="login_email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <p class="fl-micro-text">Insert a valid password</p>
                          </div>
                          <div class="col-8">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input
                                type="password"
                                class="form-control"
                                aria-describedby="passwordHelp"
                                v-model="login_password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
            </b-modal>
            <b-modal id="regiter" hide-footer title="Register" size="xl" class="text-center">
              <form action>
                <form-wizard
                  color="#000"
                  title="Fill the information just in 3 steps"
                  subtitle="to get your Web Profile done!"
                >
                  <tab-content title="Business details">
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                How you wish your customers knows the name
                                of your brand
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Business Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                It is optional to you to upload an image of your
                                business logo (jpg, png)
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputPassword1">Upload Logo</label>
                                <input
                                  type="file"
                                  class="form-control fl-input-form"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                What Your Customer Wants : enter an attractive
                                title, a good title encourages buyers to see you! If
                                you want to use one of our suggested phrases
                                just click here
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Tagline Title</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                In your own words, provide a brief description
                                about what do you offer or sell
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">You Work</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content title="Additional Info">
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                Show your customers a visual example of your
                                work done, so, expose those ones options you
                                are most prod of!
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Photos of your work</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4"></div>
                            <div class="col-8">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-4">
                                    <button
                                      type="submit"
                                      class="fl-btn-set-images-form"
                                    >Click to upload file</button>
                                  </div>
                                  <div class="col-8">
                                    <p class="fl-micro-text">
                                      Connect with your customers, using photos! Ensure the item
                                      is properly visible from multiple angles. Upload MIN 3 and
                                      MAX 6 photos (jpg, .gif, .png.)
                                    </p>
                                    <p class="fl-micro-text">
                                      *If you want to upload more photos, please upgrade your
                                      plan*I
                                    </p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                                <br />
                                <div class="row">
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="col-4">
                                    <input
                                      type="file"
                                      class="form-control fl-input-form"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                Write the name of the products or services,
                                features it includes and price for each one
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <div class="row">
                                  <div class="col-4">
                                    <div class="row">
                                      <div class="col-4">
                                        <h3>Price</h3>
                                      </div>
                                      <div class="col-8">
                                        <button
                                          type="submit"
                                          class="fl-btn-set-images-form2"
                                        >Add Item</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-8">
                                    <p class="fl-micro-text">
                                      Upload MAX 3 products or services prices. Please
                                      select if the price is fixed or negotiable, as applicable
                                    </p>
                                  </div>
                                  <p class="fl-micro-text">
                                    *If you want to write more than 3 products or services prices,
                                    please upgrade your plan*
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content title="Personal details">
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">
                                Tap city Name and select from list. If you can’t
                                find your city, contact customers support
                              </p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Add Location</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">Name helps buyers to trust you</p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Contact Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">Insert a valid phone number</p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">Insert a valid email</p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <p class="fl-micro-text">Insert a valid password</p>
                            </div>
                            <div class="col-8">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                </form-wizard>
              </form>
            </b-modal>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import strapi from "../../utils/strapi";
import store from "../../store/auth";
import Cookies from "js-cookie";

export default {
  name: "Header",
  data() {
    return {
      login_email: "",
      login_password: ""
    };
  },
  computed: {
    username() {
      let user = store.state.user;

      if (Cookies.get("user") !== undefined) {
        user = JSON.parse(Cookies.get("user"));
        return user.username;
      }
      return user;
    }
  },
  methods: {
    async handleSubmitLogin() {
      try {
        const response = await strapi.login(
          this.login_email,
          this.login_password
        );
        this.setUser(response.user);
        this.$router.push("/");
      } catch (err) {
        alert(err.message || "An error occurred.");
      }
    },
    logout: function() {
      this.logout();
    },
    ...mapMutations({
      setUser: "setUser",
      logout: "logout"
    })
  }
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
.spamwhite {
  color: #fff !important;
}
</style>