<template>
  <div class="main-wrapper" v-if="isLogined">
    <div class="">
      <nav class="navbar d-lg-none d-flex flex-row justify-content-start">
        <div class="sidebar-toggler" @click="togglerClick">
          <i data-feather="menu"></i>
        </div>
        <p class="ml-4" style="font-size: 24px">
          <span style="font-weight: 900">HMASERV</span
          ><span style="font-weight: 300; color: #ff4300">Servers</span>
        </p>
      </nav>

      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar">
        <div class="sidebar-header">
          <router-link to="/dashboard" class="sidebar-brand">
            <img src="/img/logo.png" style="width: 50px" alt="logo" />
            servers
          </router-link>

          <div
            class="sidebar-toggler not-active barToggler"
            @click="togglerClick"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            class="sidebar-toggler active d-none xToggler"
            @click="togglerClick"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="sidebar-body">
          <ul class="nav">
            <li class="nav-item nav-category">{{ $t("global.summary") }}</li>
            <!-- <li
              class="nav-item"
              :class="currentPath == '/dashboard' ? 'active' : ''"
            >
              <router-link to="/dashboard" class="nav-link">
                <i class="link-icon" data-feather="airplay"></i>
                <span class="link-title">
                  {{ $t("global.dashboard") }}
                </span>
              </router-link>
            </li> -->

            <li
              class="nav-item dedicated-sidebar-menu"
              :class="currentPath == '/dedicated' ? 'active' : ''"
            >
              <router-link to="/dedicated" class="nav-link">
                <i class="link-icon" data-feather="list"></i>
                <span class="link-title">
                  {{ $t("global.dedicated_servers") }}
                </span>
              </router-link>
            </li>

            <!-- <li
              class="nav-item codes-sidebar-menu"
              :class="currentPath.includes('/codes') ? 'active' : ''"
            >
              <router-link to="/codes" class="nav-link">
                <i class="link-icon" data-feather="code"></i>
                <span class="link-title">Active Codes</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item"
              :class="currentPath == '/packages' ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/packages" class="nav-link">
                <i class="link-icon" data-feather="package"></i>
                <span class="link-title">Packages</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item codes-sidebar-menu"
              :class="currentPath.includes('/bouquets') ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/bouquets" class="nav-link">
                <i class="link-icon" data-feather="bar-chart"></i>
                <span class="link-title">Bouquets</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item codes-sidebar-menu"
              :class="currentPath.includes('/policies') ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/policies" class="nav-link">
                <i class="link-icon" data-feather="target"></i>
                <span class="link-title">Policies</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item resellers-menu"
              :class="currentPath == '/resellers' ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/resellers" class="nav-link">
                <i class="link-icon" data-feather="user"></i>
                <span class="link-title">Resellers</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item sub-reseller-menu"
              :class="currentPath == '/subsellers' ? 'active' : ''"
              v-if="userType != 'subreseller'"
            >
              <router-link to="/subsellers" class="nav-link">
                <i class="link-icon" data-feather="users"></i>
                <span class="link-title">Sub Resellers</span>
              </router-link>
            </li> -->

            <!-- v-if="userType != 'subreseller'" -->
            <!-- <li
              class="nav-item reports-menu"
              :class="currentPath == '/reports' ? 'active' : ''"
            >
              <router-link to="/reports" class="nav-link">
                <i class="link-icon" data-feather="file-text"></i>
                <span class="link-title">Reports</span>
              </router-link>
            </li> -->

            <!-- <li
              class="nav-item"
              :class="currentPath == '/servers' ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/servers" class="nav-link">
                <i class="link-icon" data-feather="database"></i>
                <span class="link-title">Servers</span>
              </router-link>
            </li> -->
            <!-- <li
              class="nav-item logs-menu"
              :class="currentPath == '/logs' ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/logs" class="nav-link">
                <i class="link-icon" data-feather="file"></i>
                <span class="link-title">Logs</span>
              </router-link>
            </li> -->
            <!-- <li
              class="nav-item backup-menu"
              :class="currentPath == '/backup' ? 'active' : ''"
              v-if="userType == 'user'"
            >
              <router-link to="/backup" class="nav-link">
                <i class="link-icon" data-feather="hard-drive"></i>
                <span class="link-title">Backup</span>
              </router-link>
            </li> -->

            <!-- <li
                            class="nav-item settings-sidebar-menu"
                            :class="currentPath == '/settings' ? 'active' : ''"
                        >
                            <router-link to="/settings" class="nav-link">
                                <i
                                    class="link-icon"
                                    data-feather="settings"
                                ></i>
                                <span class="link-title">Settings</span>
                            </router-link>
                        </li> -->

            <!-- <li
                            class="nav-item logs-sidebar-menu"
                            :class="currentPath == '/logs' ? 'active' : ''"
                        >
                            <router-link to="/logs" class="nav-link">
                                <i
                                    class="link-icon"
                                    data-feather="file-text"
                                ></i>
                                <span class="link-title">Logs</span>
                            </router-link>
                        </li> -->

            <!-- <li
                            class="nav-item"
                            :class="currentPath == '/admins' ? 'active' : ''"
                        >
                            <router-link to="/admins" class="nav-link">
                                <i class="link-icon" data-feather="users"></i>
                                <span class="link-title">Admins</span>
                            </router-link>
                        </li>

                        <li
                            class="nav-item"
                            :class="currentPath == '/settings' ? 'active' : ''"
                        >
                            <router-link to="/settings" class="nav-link">
                                <i
                                    class="link-icon"
                                    data-feather="settings"
                                ></i>
                                <span class="link-title">Settings</span>
                            </router-link>
                        </li> -->

            <li class="nav-item nav-category">{{ $t("global.appearance") }}</li>

            <!-- LANGUAGES -->
            <li class="nav-item" v-if="!isDark">
              <div class="nav-link" @click="changeIsDark(1)">
                <i class="link-icon" data-feather="refresh-cw"></i>
                <span class="link-title"
                  >{{ $t("global.switch_to_dark") }}
                </span>
              </div>
            </li>

            <li class="nav-item" v-else>
              <div class="nav-link" @click="changeIsDark(0)">
                <i class="link-icon" data-feather="refresh-cw"></i>
                <span class="link-title"
                  >{{ $t("global.switch_to_light") }}
                </span>
              </div>
            </li>

            <li class="nav-item" v-if="this.$i18n.locale != 'ar'">
              <div class="nav-link" @click="changeSelectedLanguage('ar')">
                <i class="link-icon" data-feather="globe"></i>
                <span class="link-title">العربية</span>
              </div>
            </li>

            <li class="nav-item" v-if="this.$i18n.locale != 'en'">
              <div class="nav-link" @click="changeSelectedLanguage('en')">
                <i class="link-icon" data-feather="globe"></i>
                <span class="link-title">English</span>
              </div>
            </li>

            <!-- <li
              class="nav-item settings-sidebar-menu"
              :class="currentPath == '/settings' ? 'active' : ''"
            >
              <router-link to="/settings" class="nav-link">
                <i class="link-icon" data-feather="settings"></i>
                <span class="link-title">Settings</span>
              </router-link>
            </li> -->

            <li class="nav-item nav-category">{{ $t("global.account") }}</li>
            <!-- LOGOUT -->
            <li class="nav-item">
              <div class="nav-link" @click="logout">
                <i class="link-icon" data-feather="log-out"></i>
                <span class="link-title">{{ $t("global.logout") }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="page-wrapper">
      <!-- partial:partials/_navbar.html -->

      <div class="page-content margin-lg">
        <router-view></router-view>
      </div>
      <footer
        class="
          footer
          d-flex
          flex-column flex-md-row
          align-items-center
          justify-content-between
        "
      >
        <p class="text-muted text-center text-md-center">
          Powered By
          <a href="www.hmaserv.com" target="_blank">HMASERV</a>.
        </p>
      </footer>
    </div>
  </div>
  <div class="container" v-else>
    <div class="w-100 h-100 d-flex justify-content-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import "shepherd.js/dist/css/shepherd.css";

import { mapState, mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
import axios from "axios";
import $ from "jquery";
// import i18n from "vue-i18n";

export default {
  mounted() {
    console.log(this.$i18n.locale);

    $("body").addClass("ltr-style");
    this.isDark = $("meta[title=isDark]").length;
    let lastVisited = localStorage.getItem("hmaserv_serveses_lastVisitedRoute");
    this.selectedLanguage = $("#language").html().toLowerCase().trim();
    console.warn("this.selectedLanguage: ", this.selectedLanguage);
    this.changeSelectedLanguage(this.selectedLanguage);

    console.warn("this.selectedLanguage: ", this.selectedLanguage);
    if (
      lastVisited != null &&
      lastVisited != "/" &&
      lastVisited != "/dashboard"
    ) {
      if (
        this.currentPath != lastVisited &&
        this.currentPath != "/reseller/login" &&
        this.currentPath != "/dashboard-login" &&
        lastVisited != "/dashboard-login"
      ) {
        this.$router.push(`${lastVisited}`);
      } else {
      }
    }

    $(".sidebar-toggler").click();

    let allPorts = [];
    for (let i = 1; i <= 65535; i++) {
      allPorts.push(i);
    }

    this.ports = allPorts;
  },
  components: {},
  computed: {
    ...mapGetters("auth", [
      "getAdminToken",
      "getCurrentUserId",
      "isLogined",
      "userType",
    ]),
    // ...mapState("global", ["ports"]),

    ...mapFields("global", [
      "isDark",
      "selectedLanguage",
      "runChannelsInterval",
      "runDashboardInterval",
      "runCategoriesInterval",
      "tour",
      "isTourEnabled",
      "DedicatedServersPage",
      "ports",
    ]),
  },
  data() {
    return {
      currentPath: "/dashboard",
      areaExpanded: false,
    };
  },
  methods: {
    changeIsDark(value) {
      axios
        .post(
          "/api/changetheme",
          { is_dark_theme: value, user_id: this.getCurrentUserId },
          {
            headers: {
              Authorization: `Bearer ${this.getAdminToken}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            // this.isDark = value;
            localStorage.setItem("isDark", value);
            // refresh page with user id
            this.redirectWindowTo("/");
            // window.location.href =
            //   window.location.origin + `/${this.getCurrentUserId}`;
          }
        });
    },

    changeWizardState() {
      // let isTourEnabled = this.isTourEnabled;
      axios
        .post(
          "/api/changewizard",
          {
            wizard_watched: 0,
            user_id: this.getCurrentUserId,
          },
          {
            headers: {
              Authorization: `Bearer ${this.getAdminToken}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            // refresh page with user id
            this.isTourEnabled = true;
            this.redirectWindowTo("/");
          }
        });
    },
    toggleSettings() {
      if ($("body").hasClass("settings-open")) {
        $("body").removeClass("settings-open");
      } else {
        $("body").addClass("settings-open");
      }
    },
    togglerClick(e) {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $("body").toggleClass("sidebar-folded");
        if ($("body").hasClass("sidebar-folded")) {
          // show x toggler
          $(".xToggler").removeClass("d-none");
          $(".barToggler").addClass("d-none");
          $("body").removeClass("sidebar-responsive");
        } else {
          $(".xToggler").addClass("d-none");
          $(".barToggler").removeClass("d-none");
          $("body").addClass("sidebar-responsive");
        }
      } else if (window.matchMedia("(max-width: 991px)").matches) {
        $("body").toggleClass("sidebar-open");
      }
    },
  },
  watch: {
    $route(to, from) {
      this.currentPath = to.path;
      if (this.currentPath.includes("/dedicated")) {
        this.DedicatedServersPage = true;
      } else {
        this.DedicatedServersPage = false;
      }
      // if (this.currentPath == "/dashboard") {
      //     this.runDashboardInterval = true;
      //     this.runChannelsInterval = false;
      //     this.runCategoriesInterval = false;
      // } else if (this.currentPath == "/channels") {
      //     this.runChannelsInterval = true;
      //     this.runDashboardInterval = false;
      //     this.runCategoriesInterval = false;
      // } else if (this.currentPath == "/categories") {
      //     this.runDashboardInterval = false;
      //     this.runChannelsInterval = false;
      //     this.runCategoriesInterval = true;
      // } else {
      //     this.runChannelsInterval = false;
      //     this.runDashboardInterval = false;
      //     this.runCategoriesInterval = false;
      // }
    },
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

body.rtl-style {
  font-family: "Almarai", sans-serif;
}

body.ltr-style {
  font-family: "Cairo", sans-serif;
}

body.rtl-style .sidebar-folded .page-wrapper {
  margin-left: 0 !important;
}

body.rtl-style .sidebar-folded .page-wrapper {
  margin-right: 0 !important;
}

// handle
.alert-fill-primary {
  background-color: rgba(255, 67, 0, 0.1);
  border-color: rgba(255, 67, 0, 0.2);
  color: #ff4300;
  font-weight: bolder;
}
body {
  background-color: #fff !important;
}

.nav-item {
  cursor: pointer;
}

.table td img {
  border-radius: 0 !important;
}

.white-all-time .card .card-body {
  background-color: #fff !important;
}

.white-all-time .card {
  box-shadow: 0 0 10px 0 rgb(183 192 206 / 20%);
  border: 1px solid #f2f4f9;
}
.white-all-time .form-group label {
  color: #000;
}
.white-all-time .form-control {
  border: 1px solid #e8ebf1;
  background-color: #fff;
  color: #111;
}

.container {
  min-height: 100vh;
}
/* 992px => mt = 0 */
.main-wrapper .page-wrapper .page-content {
  margin-top: 60px !important;
}
@media screen and (min-width: 992px) {
  .main-wrapper .page-wrapper .page-content {
    margin-top: 0 !important;
  }
}
// Tour
.shepherd-content {
  .shepherd-text {
    font-size: 20px;
  }
  .shepherd-footer {
    .shepherd-button {
      font-size: 20px;
      color: #ffffff;
      padding: 5px 20px 0px 20px;
    }
  }
}

.vs__search {
  cursor: pointer;
}

// Handle RTL style Configuration
body.rtl {
  // bootstrap
  .text-right {
    text-align: left !important;
  }
  .text-left {
    text-align: right !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mr-2,
  .mx-2 {
    margin-left: 0.5rem !important;
  }
  .pr-0,
  .px-0 {
    padding-left: 0 !important;
  }

  //
  .fixed-actions {
    left: 0;
    right: unset;
    button {
      border-top-left-radius: unset !important;
      border-bottom-left-radius: unset !important;
      border-top-right-radius: 40px !important;
      border-bottom-right-radius: 40px !important;
    }
  }

  .nav-pills .nav-link.active::after {
    transform: translateY(-50%) rotateY(180deg) !important;
    right: unset;
    left: -19px;
    z-index: 1;
  }
  .col-auto ul {
    padding-inline-start: 0 !important;
  }
  .col-auto li[role="presentation"] {
    border-left: unset;
    border-right: 3px solid #ff4300;
  }
  .dashboard-card {
    padding-right: 15px;
  }
  .remove-port {
    padding-right: 6px;
    padding-left: unset;
  }

  // install script icons
  .fa-angle-left,
  .fa-angle-right {
    transform: rotateY(180deg);
  }
}

.btn.btn-secondary {
  color: #fff !important;
}

body.rtl .fa-eye {
  margin-left: 5px;
  cursor: pointer;
}

@media (max-width: 836px) {
  .nav-pills .nav-item {
    width: 95% !important;
  }

  .nav-pills .nav-link.active::after {
    left: 0 !important;
    right: 0 !important;
  }
}

@media (max-width: 500px) {
}
</style>
