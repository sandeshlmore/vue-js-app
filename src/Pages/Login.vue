<template>
  <div>
    <div id="body" class="log-wrap d-flex align-items-center">
      <div class="container" id="login_card" style="margin-top:4px">
        <div class="log-blk">
          <div class="row no-gutters">
            <div class="col-lg-6" style="height:500px">
              <div class="title-sec d-flex align-items-center">
                <div class="inner-title">
                  <div class="sec-logo">
                    <!-- <img src="/static/img/logo.png" alt /> -->
                  </div>
                  <h2>Welcome Back!</h2>
                  <p>Cense develops powerful AI solutions for your business</p>
                  <a href="/bot/register" class="white-btn">Sign Up</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6" style="height:500px">
              <div class="log-sec d-flex align-items-center">
                <div class="log-frm">
                  <h2>Log in</h2>
                  <br />
                  <center>
                    <div class="radio" style="margin-top:-30px">
                      <label>
                        <input type="radio" value="Portal" v-model="login_type" />
                        <span class="icn"></span> Portal
                      </label>
                      <label>
                        <input type="radio" value="Bot" v-model="login_type" />
                        <span class="icn"></span> Bot
                      </label>
                    </div>
                  </center>
                  <form @submit.prevent="create">
                    <div class="form-group" style="margin-top:30px">
                      <input
                        type="email"
                        v-model="user.email"
                        class="form-control email"
                        placeholder="E-Mail"
                        id="login_username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="user.password"
                        id="form_password"
                        class="form-control pass"
                        placeholder="Password"
                      />
                      <a href="javascript:void(0)" @click="password_toggle" class="view-pass">
                        <!-- <img src="/static/img/eye-icn.png" alt /> -->
                      </a>
                    </div>
                    <div class="checkbox">
                      <a
                        href="#"
                        class="forgot"
                        data-toggle="modal"
                        data-target="#usermodal"
                      >Forgot password?</a>
                    </div>
                    <div class="btn-wrap">
                      <button type="submit" class="darkblue-btn">
                        <span style="margin-left:7%">
                          Log In
                          <i class="fa fa-spinner fa-spin" id="spinner" style="opacity:0"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer>
            <p style="margin-top: 6px;">
              Ⓒ 2019 CodeArray Technologies Pvt Ltd. All rights reserved.
              <a
                href="https://cense.ai/privacy-policy"
              >Privacy Policy</a>
            </p>
          </footer>
        </div>
      </div>
      <div
        class="modal fade dash-modal"
        id="usermodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="usermodeltitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal-head d-flex align-items-center">
                <div class="head-icn">
                  <!-- <img src="/static/img/user-blue.png" alt /> -->
                </div>
                <h3>Forgot Password</h3>
              </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="clear_fields"
              >
                <!-- <img src="/static/img/close-icn.png" alt /> -->
              </button>
              <form @submit="forgot_password">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    id="email_forgot_pwd"
                    type="email"
                    class="form-control"
                    v-model="forgot_password_email"
                    placeholder="Enter Your Email Here"
                    @input="email_validate"
                  />
                </div>
                <div
                  style="color:red"
                  v-if="show_validation_string && forgot_password_email!=''"
                >Please enter a valid email address</div>
                <div class="btn-wrap text-right">
                  <button
                    type="button"
                    class="btn btn-link"
                    data-dismiss="modal"
                    @click="clear_fields"
                  >Cancel</button>
                  <button type="submit" class="darkblue-btn">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
// import swal from "sweetalert2";
// import sidebaritems from "../Layout/SideBarItem";
// import { setTimeout } from "timers";
// import api_calls from "@/api_calls";
// import { bus } from "@/main";
// import Cookies from "js-cookie";

export default {
  beforeCreate() {
    // if (this.$session.has("UserInformation")) {
    //   this.$router.push("/bot/dashboard");
    // }
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        date: ""
      },
      open_modal: false,
      validation_email: /email=([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*[@|%40]([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})/g,
      validation_token: /token=([0-9a-zA-Z._-]+)$/g,
      forgot_password_email: "",
      reg_email: /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
      show_validation_string: false,
      login_type: "Portal"
    };
  },
  created() {
    // if (Cookies.get("login_type") !== undefined) {
    //   this.login_type = Cookies.get("login_type");
    // }
  },
  methods: {
    email_validate() {
      if (this.reg_email.test(this.forgot_password_email)) {
        this.show_validation_string = false;
      } else {
        this.show_validation_string = true;
      }
    },
    //  toggle_domain(event) {
    //   if (event.target.value == "Portal") {
    //     document.getElementById("domain_input").style.display = "";
    //   } else if (event.target.value == "Bot") {
    //     document.getElementById("domain_input").style.display = "none";
    //   }},
    clear_fields() {
      this.forgot_password = "";
      $("#usermodal").modal("hide");
    },
    forgot_password() {
      event.preventDefault();
      if (
        this.show_validation_string == false &&
        this.forgot_password_email != ""
      ) {
        // axios
        //   .post(api_calls.forgot_password(), {
        //     email: this.forgot_password_email
        //   })
        //   .then(response => {
        //     if (response.data.includes("email address")) {
        //       swal({
        //         html: response.data,
        //         type: "error"
        //       });
        //     } else if (response.data == "A mail has been sent to your email") {
        //       swal({
        //         html:
        //           "<h6>We have sent a link to reset your password. Kindly check your e-mail</h6>"
        //       });
        //       $("#usermodal").modal("hide");
        //     }
        //   });
      }
    },
    password_toggle() {
      var password = document.getElementById("form_password");
      if (password.type == "text") {
        password.type = "password";
      } else if (password.type == "password") {
        password.type = "text";
      }
    },
    create() {
      if (this.user.name == "" || this.user.password == "") {
        swal({
          type: "warning",
          title: "<h4>Kindly enter the email and password</h4>"
        });
      } else {
        document.getElementById("spinner").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", true);
        this.call_api();
      }
    },
    redir(message) {
      document.getElementById("spinner").style.opacity = "0";
      document.getElementById("body").style.opacity = "0.5";
      if (message == "Email hasn't been verified.") {
        swal({
          html:
            "<h6>Your account has not been validated for login.<br>Please visit your e-mail</h6>",
          type: "error"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message == "Internal Server Error") {
        swal({
          type: "error",
          html: "<h6>There was an internal server error. Please try again.</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message == "User has not been approved yet.") {
        swal({
          type: "warning",
          html:
            "<h6>Your registration has not been approved or it has been declined by Admin. Kindly check your mail</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message == "You are already logged in!") {
        swal({
          type: "error",
          html: "<h6>This user is already logged in</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message == "Invalid Credentials") {
        swal({
          type: "error",
          html: "<h6>Invalid Credentials!</h6>",
          showConfirmButton: false,
          timer: 1000
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message == "API LIMIT EXCEEDED") {
        swal({
          type: "error",
          html:
            "<h6>Your monthly api requests has exceeded. Please Upgrade your plans to login</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (message.MSG == "Password should be Renewed") {
        swal({
          type: "error",
          html:
            "<h6>Your password has been expired. Please Renew your password</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else if (this.login_type == "Bot") {
        Cookies.remove("login_type");
        Cookies.set("login_type", this.login_type, { expires: 365 });
        this.$session.start();
        this.$session.set("UserInformation", message.userinformation);
        this.$router.push("/bot/directresponsebot");
      } else if (message.MSG == "User Is Locked") {
        swal({
          type: "error",
          html: "<h6>This user has been locked</h6>"
        });
        document.getElementById("body").style.opacity = "1";
        $('button[type="submit]"').prop("disabled", false);
      } else {
        Cookies.remove("login_type");
        Cookies.set("login_type", this.login_type, { expires: 365 });
        this.$session.start();
        this.$session.set("UserInformation", message.userinformation);
        // axios
        //   .post(api_calls.bot_response_token(), {
        //     license_key: this.$session.get("UserInformation").license_key,
        //     username: this.$session.get("UserInformation").email
        //   })
        //   .then(response => {
        //     this.$session.set("BotToken", response.data);
        //     this.$session.remove("TemporaryBotToken");
        //     bus.$emit("Token changed", "True");
        //   });
        this.$session.set("UserFirstName", message.userinformation.first_name);
        this.$session.set("UserLastName", message.userinformation.last_name);
        document.cookie =
          "company_id=" + this.$session.get("UserInformation").company_id;
        document.getElementById("spinner").style.opacity = "1";
        // setTimeout(() => {
        //   this.update_menu_list(message.menubind);
        // }, 3500);
      }
      // axios
      //   .post(api_calls.chat_user_login_url(), {
      //     username: this.$session.get("UserInformation").email,
      //     token: this.$session.get("UserInformation").tokens
      //   })
      //   .then(response => {
      //     if (response.data.loggedin == "failed") {
      //     } else if (response.data.logged_in == "success") {
      //       this.$session.set("GroupChatLoginToken", response.data.token);
      //     }
      //   });
      this.user.email = "";
      this.user.password = "";
    },
    call_api() {
      var d = new Date();
      this.user.date = d;
    //   axios
    //     .post(api_calls.login(), this.user)
    //     .then(response => {
    //       this.redir(response.data);
    //     })
    //     .catch(e => {
    //       document.getElementById("spinner").style.opacity = "0";
    //       // toastr.error("There is an internal server error.");
    //     });
    },
    update_menu_list(message) {
      var menu = [];
      var main_menu = [];
      let submenus = [];
    //   for (var i in message) {
    //     if (
    //       message[i].HasSubMenus == false &&
    //       message[i].Enabled &&
    //       message[i].IsSubMenu === undefined &&
    //       message[i].IsMasterMenu
    //     ) {
    //       for (var j in sidebaritems) {
    //         if (sidebaritems[j].name === message[i].MenuItem) {
    //           main_menu = sidebaritems[j];
    //         }
    //       }
    //     } else if (
    //       message[i].HasSubMenus == true &&
    //       message[i].Enabled &&
    //       message[i].IsMasterMenu
    //     ) {
    //       for (var j in sidebaritems) {
    //         if (sidebaritems[j].name === message[i].MenuItem) {
    //           main_menu = sidebaritems[j];
    //         }
    //       }
    //     } else if (
    //       message[i].HasSubMenus == false &&
    //       message[i].Enabled &&
    //       message[i].IsSubMenu
    //     ) {
    //       for (var j in sidebaritems) {
    //         if (sidebaritems[j].name === message[i].MenuItem) {
    //           submenus.push(sidebaritems[j]);
    //         }
    //       }
    //     }
    //     if (
    //       i == message.length - 1 ||
    //       (message[i].IsMasterMenu == true &&
    //         message[i].HasSubMenus === false &&
    //         message[i].IsSubMenu === undefined)
    //     ) {
    //       menu.push({
    //         main_menu: main_menu,
    //         sub_menu_list: submenus
    //       });
    //       main_menu = [];
    //       submenus = [];
    //     } else if (
    //       i < message.length - 1 &&
    //       (message[Number(i) + 1].IsMasterMenu &&
    //         (message[Number(i) + 1].IsSubMenu === undefined ||
    //           message[Number(i) + 1].HasSubMenus == true))
    //     ) {
    //       menu.push({
    //         main_menu: main_menu,
    //         sub_menu_list: submenus
    //       });
    //       main_menu = [];
    //       submenus = [];
    //     }
    //   }
      this.$session.set("ChatbotMenu", menu);
      this.$router.push("/bot/dashboard");
    }
  },
  beforeMount() {
    var link = window.location.href;
    var email, token_id;

    email = String(link.match(this.validation_email)).replace("email=", "");
    token_id = String(link.match(this.validation_token)).replace("token=", "");
    if (email != "null" && token_id != "null") {
    //   axios
    //     .post(api_calls.validate_login(), {
    //       email: email,
    //       token: token_id
    //     })
    //     .then(response => {
    //       if (response.data == "Email already verified") {
    //         swal({
    //           html:
    //             "<h6>This Email verification link is Expired. You already Verified your account. Kindly login</h6>"
    //         });
    //       } else if (response.data == "Email verification successful") {
    //         swal({
    //           type: "success",
    //           html:
    //             "<h6>Your email verification is successfully done . Please use Email id as your username and password for login</h6>"
    //         });
    //       } else if (response.data == "User Doesn't Exist") {
    //         swal({
    //           html: "<h6>User Doesn't Exist</h6>",
    //           type: error
    //         });
    //       }
    //     });
    }
  }
};
</script>
<style>
</style>