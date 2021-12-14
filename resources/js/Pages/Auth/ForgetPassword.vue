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
            <h5 class="text-muted font-weight-normal mb-4">Reset Password</h5>

            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
              style="height: 100vh"
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

            <form class="forms-sample" @submit.prevent="submitForgetPassword">
              <div class="form-group">
                <label for="exampleInputEmail1">The Email</label>
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

              <div class="mt-3 text-right">
                <button
                  type="submit"
                  class="btn btn-primary mr-2 mb-2 mb-md-0 text-white mt-3"
                >
                  Reset Password
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
export default {
  data() {
    return {
      email: "",
      emailError: "",
      errorMessage: "",
      errors: [],
      successMessage: "",
    };
  },
  methods: {
    submitForgetPassword() {
      if (this.email) {
        let data = {
          email: this.email,
        };

        this.axiosRequest(
          "post",
          { url: "/api/forgot-password", data },
          (res) => {
            if (res.data.success) {
              return;
            }
            this.errors = this.fillErrorsArray(res.data);
            this.successMessage = !this.errors.length ? res.data.message : "";
          }
        );
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
  margin-top: 100px !important;
}
.card {
  min-width: 300px;
}
</style>
