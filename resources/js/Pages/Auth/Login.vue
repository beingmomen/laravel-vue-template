<template >
  <div
    ref="loginParent"
    class="
      white-all-time
      d-flex
      flex-column
      justify-content-center
      w-100
      align-items-center
    "
    style="height: 100vh"
  >
    <div class="card w-50 mt-0 mx-auto">
      <div class="card-body">
        <div class="row">
          <div class="auth-form-wrapper px-4 py-0 w-100">
            <a href="#" class="noble-ui-logo d-block mb-2"
              >HMASERV<span>Servers</span></a
            >
            <h5 class="text-muted font-weight-normal mb-4">Welcome Back</h5>

            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
            </div>

            <div
              v-for="(error, index) in errors"
              :key="index"
              class="alert alert-danger"
            >
              {{ error }}
            </div>

            <form class="forms-sample" @submit.prevent="submitLogin">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="email"
                  required
                  autofocus
                  placeholder="Enter your email"
                />

                <span
                  class="invalid-feedback"
                  :class="emailError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> {{ emailError }} </strong>
                </span>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="password"
                  minlength="6"
                  required
                  placeholder="Enter your password"
                />

                <span
                  class="invalid-feedback"
                  :class="passwordError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> {{ passwordError }} </strong>
                </span>

                <router-link class="d-block mt-2" to="/forget-password">
                  <span class="link-title">Forget your password?</span>
                </router-link>
              </div>
              <div class="mt-3 text-right">
                <router-link
                  class="btn mt-3 mr-2 mb-2 mb-md-0 mt-3 text-primary"
                  to="/dashboard-register"
                >
                  <span class="link-title">Go to Register</span>
                </router-link>

                <button
                  type="submit"
                  class="btn btn-primary mr-2 mb-2 mb-md-0 text-white mt-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  mounted() {},
  data() {
    return {
      errorMessage: "",
      errors: [],
    };
  },
  computed: {
    ...mapFields("global", ["isDark", "selectedLanguage", "isTourEnabled"]),
    ...mapFields("auth", [
      "userType",
      "userName",
      "userEmail",
      "currentCredit",
    ]),
    ...mapFields("login", ["email", "emailError", "password", "passwordError"]),
  },
  components: {},
  methods: {
    submitLogin() {
      if (this.email && this.password) {
        let data = {
          email: this.email,
          password: this.password,
        };

        this.axiosRequest("post", { url: "/api/login", data }, (res) => {
          if (res.data.success) {
            this.saveToken(res.data.data);

            this.isDark = res.data.data.is_dark_theme;
            this.selectedLanguage = res.data.data.language;

            // redirect to dashboard
            let expireDate = new Date("2100").toUTCString();
            document.cookie = `hmaserv_servers_user_id=${res.data.data.id}; expires=${expireDate}`;

            // this.redirectWindowTo("/");
            this.redirectWindowTo("/dedicated");
            return;
          }
          this.errors = this.fillErrorsArray(res.data);
          this.successMessage = this.errors.length ? res.data.message : "";
        });
      }
    },
    ...mapMutations("auth", ["saveToken"]),
  },
  watch: {
    $route(to, from) {},
  },
};
</script>

<style>
.mt-lg-4 {
  margin-top: 60px !important;
}
.card {
  min-width: 300px;
}
</style>
