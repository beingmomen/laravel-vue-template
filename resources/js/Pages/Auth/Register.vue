<template>
  <div
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
    <div
      class="card w-100 mt-4 mx-auto"
      style="margin-top: 150px !important; max-width: 500px"
    >
      <div class="card-body">
        <div class="row">
          <div class="auth-form-wrapper px-4 py-0 w-100">
            <a href="#" class="noble-ui-logo d-block mb-2"
              >HMASERV<span>Servers</span></a
            >
            <h5 class="text-muted font-weight-normal mb-4">
              Register new account
            </h5>

            <div v-if="successMessage" class="alert alert-success">
              {{ successMessage }}
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
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="client_name"
                  v-model="clientName"
                  required
                  autofocus
                  placeholder="Enter your name"
                />

                <span
                  class="invalid-feedback"
                  :class="clientNameError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> {{ clientNameError }} </strong>
                </span>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  name="client_name"
                  @keyup="passCharactersAndNumbers"
                  v-model="clientUsername"
                  required
                  autofocus
                  placeholder="Enter your username"
                />

                <span
                  class="invalid-feedback"
                  :class="clientUsernameError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> {{ clientUsernameError }} </strong>
                </span>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="client_email_address"
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
                  name="client_password"
                  v-model="password"
                  minlength="6"
                  required
                  placeholder="Enter your password"
                />

                <p class="text-danger small mt-1">
                  Password must contains
                  <span class="font-weight-bold">
                    Min 6 Number, Chars, Special Chars
                  </span>
                </p>

                <span
                  class="invalid-feedback"
                  :class="passwordError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> {{ passwordError }} </strong>
                </span>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="client_password"
                  v-model="passwordConfirm"
                  minlength="6"
                  required
                  placeholder="Confirm your password"
                />

                <span
                  class="invalid-feedback"
                  :class="passwordConfirmError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong>
                    {{ passwordConfirmError }}
                  </strong>
                </span>

                <span
                  class="invalid-feedback"
                  :class="
                    passwordConfirm.length > 0 && password != passwordConfirm
                      ? 'd-block'
                      : ''
                  "
                  role="alert"
                >
                  <strong> Password didn't match </strong>
                </span>
              </div>
              <div class="mt-3 text-right">
                <router-link
                  class="btn mt-3 mr-2 mb-2 mb-md-0 mt-3 text-primary"
                  to="/dashboard-login"
                >
                  <span class="link-title">Go to Login</span>
                </router-link>

                <button
                  type="submit"
                  class="btn btn-primary mr-2 mb-2 mb-md-0 text-white mt-3"
                >
                  Register
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

export default {
  mounted() {},
  data() {
    return {
      username: "",
      clientName: "",
      clientUsername: "",
      country: null,
      countries: [],
      email: "",
      password: "",
      passwordConfirm: "",

      activeCodeError: "",
      clientNameError: "",
      clientUsernameError: "",
      countryError: "",
      emailError: "",
      passwordError: "",
      passwordConfirmError: "",

      successMessage: "",
      errorMessage: "",
      errors: [],
    };
  },
  methods: {
    submitLogin() {
      // not needed if condition
      if (this.email && this.password) {
        let data = {
          name: this.clientName,
          username: this.clientUsername,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirm,
        };

        this.axiosRequest("post", { url: "/api/register", data }, (res) => {
          if (res.data.success) {
            this.saveToken(res.data);
            this.redirectWindowTo("/dashboard");
            return;
          }
          this.errors = this.fillErrorsArray(res.data);
          this.successMessage = this.errors.length ? res.data.message : "";
        });
      }
    },

    ...mapMutations("auth", ["saveToken"]),

    passCharactersOnly(e) {
      let val = $(e.target).val();
      if (val.match(/[^a-zA-Z]/g)) {
        $(e.target).val(val.replace(/[^a-zA-Z]/g, ""));
      }
    },
    passCharactersAndSpaces(e) {
      let val = $(e.target).val();
      if (val.match(/[^a-zA-Z ]/g)) {
        $(e.target).val(val.replace(/[^a-zA-Z ]/g, ""));
      }
    },
    passCharactersAndNumbers(e) {
      let val = $(e.target).val();
      if (val.match(/[^a-zA-Z0-9]/g)) {
        $(e.target).val(val.replace(/[^a-zA-Z0-9]/g, ""));
      }
    },
    passNumbersAndDot(e) {
      let val = $(e.target).val();
      if (val.match(/[^0-9.]/g)) {
        $(e.target).val(val.replace(/[^0-9.]/g, ""));
      }
    },
    passNumbersOnly(e) {
      let val = $(e.target).val();
      if (val.match(/[^0-9]/g)) {
        $(e.target).val(val.replace(/[^0-9]/g, ""));
      }
    },
  },
  watch: {
    $route(to, from) {},
  },
};
</script>

<style scoped>
.mt-lg-4 {
  margin-top: 60px !important;
}
.card {
  min-width: 300px;
}
</style>
