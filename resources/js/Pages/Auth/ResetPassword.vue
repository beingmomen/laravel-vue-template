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
    <div class="card w-50 mt-0 mx-auto">
      <div class="card-body">
        <div class="row">
          <div class="auth-form-wrapper px-4 py-0 w-100">
            <a href="#" class="noble-ui-logo d-block mb-2"
              >HMASERV<span>Servers</span></a
            >
            <h5 class="text-muted font-weight-normal mb-4">Add New Password</h5>

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

            <div v-if="successMessage" class="alert alert-fill-primary">
              {{ successMessage }}
            </div>

            <form class="forms-sample" @submit.prevent="submitResetPassword">
              <div class="form-group">
                <label for="exampleInputEmail1">New Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="new_password"
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
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Confirm New Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="new_password"
                  v-model="confirmPassword"
                  minlength="6"
                  required
                  @keyup="checkPasswords"
                  placeholder="Confirm your password"
                />

                <span
                  class="invalid-feedback"
                  :class="passwordMismatch ? 'd-block' : ''"
                  role="alert"
                >
                  <strong> Entered passwords are not the same </strong>
                </span>

                <span
                  class="invalid-feedback"
                  :class="confirmPasswordError.length > 0 ? 'd-block' : ''"
                  role="alert"
                >
                  <strong>
                    {{ confirmPasswordError }}
                  </strong>
                </span>
              </div>

              <div class="mt-3 text-right">
                <button
                  type="submit"
                  class="btn btn-primary mr-2 mb-2 mb-md-0 text-white mt-3"
                >
                  Confirm The Password
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
  mounted() {
    this.resetPasswordToken = this.$route.params.token;
    this.email = this.$route.query.email;
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      errorMessage: "",
      errors: [],
      resetPasswordToken: "",
      passwordMismatch: false,
      successMessage: "",
    };
  },
  methods: {
    submitResetPassword() {
      if (
        this.password &&
        this.confirmPassword &&
        this.password == this.confirmPassword
      ) {
        let data = {
          new_password: this.password,
          password_confirmation: this.confirmPassword,
          token: this.resetPasswordToken,
        };

        this.axiosRequest(
          "post",
          { url: "/api/reset-password", data },
          (res) => {
            if (res.data.success) {
              window.location.href =
                window.location.origin + "/dashboard-login";
              return;
            }
            this.errors = this.fillErrorsArray(res.data);
            this.successMessage = !this.errors.length ? res.data.message : "";
          }
        );
      }
    },
    checkPasswords() {
      if (this.password != this.confirmPassword) {
        this.passwordMismatch = true;
      } else {
        this.passwordMismatch = false;
      }
    },
    ...mapMutations("auth", ["saveResetPasswordToken"]),
  },
  watch: {
    $route(to, from) {},
  },
};
</script>

<style scoped>
.mt-lg-4 {
  margin-top: 100px !important;
}
.card {
  min-width: 300px;
}
</style>
