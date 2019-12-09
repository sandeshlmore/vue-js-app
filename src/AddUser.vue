<template>
  <div class="dash-cont">
    <div class="spinner" id="spinner" v-show="spinnerOn"></div>
    <div class="container-fluid">
      <div class="card dash-card">
        <div class="card-header d-block d-sm-flex flex-wrap justify-content-between">
          <h4 class="mb-sm-0">User List</h4>

          <div class="card-act d-flex flex-wrap">
            <!-- for search -harsh -->
            <input
              class="form-control search-bar"
              id="search_bar"
              placeholder="Search here"
              v-model="search_name"
              v-on:keyup="callsearch"
            />
            <a href="#" class="darkblue-btn" @click="search_product" id="search_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="14"
                height="14"
              >
                <path
                  d="M13.809011327100071,12.965505435601472 L9.30910012117823,8.49330664854199 C10.007392079586584,7.596111589605521 10.38512817619458,6.499157170138106 10.38512817619458,5.345374656726532 c0,-1.3810948891881802 -0.5423458634784514,-2.676086605733705 -1.523073527148749,-3.6524965835014083 c-0.9807276636702976,-0.9764099777677033 -2.287209392305289,-1.5136937750578685 -3.6751296371814526,-1.5136937750578685 s-2.6944019735111544,0.5390058607430178 -3.6751296371814526,1.5136937750578685 C0.5293349766245179,2.667565987539975 -0.011278152465820316,3.9642797675383576 -0.011278152465820316,5.345374656726532 c0,1.3793728257353273 0.5423458634784514,2.6778086691865575 1.523073527148749,3.6524965835014083 C2.492523038353222,9.974281217995648 3.7972720326001044,10.51156501528581 5.18692501186438,10.51156501528581 c1.160932040033745,0 2.2629511108717475,-0.37540983272197437 3.165705727077092,-1.0676793407689171 l4.499911205921844,4.470476723606628 a0.1420842198250257,0.14120920313395363 0 0 0 0.20099718902076805,0 l0.7554721932159904,-0.7490976019910955 a0.1420842198250257,0.14120920313395363 0 0 0 0,-0.19975936053095905 zM7.931576282630728,8.073123166045836 C7.196896902072058,8.80155600660269 6.2231001759542055,9.20279679111746 5.18692501186438,9.20279679111746 s-2.0099718902076775,-0.4012407845147706 -2.744651270766347,-1.1296736250716286 C1.709327094927478,7.342968262036121 1.3055999824978375,6.37516860153268 1.3055999824978375,5.345374656726532 s0.4037271124296458,-1.99931566876244 1.1366737586002036,-2.727748509319298 C3.1769531216567026,1.8891933068503817 4.150749847774562,1.4879525223356067 5.18692501186438,1.4879525223356067 s2.0117046245957884,0.3995187210619175 2.744651270766347,1.1296736250716286 S9.06825004123093,4.315580711920385 9.06825004123093,5.345374656726532 s-0.4037271124296458,1.99931566876244 -1.1366737586002036,2.727748509319298 z"
                  fill="#fff"
                />
              </svg>
            </a>

            <a
              href="#"
              class="darkblue-btn"
              data-toggle="modal"
              data-target="#usermodel"
              id="add_user_btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13.997"
                viewBox="0 0 14 13.997"
              >
                <path
                  id="Union_13"
                  data-name="Union 13"
                  d="M-12684,2058v-5h-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h5v-5a1,1,0,0,1,1-1,1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1,1,1,0,0,1-1,1h-5v5a1,1,0,0,1-1,1A1,1,0,0,1-12684,2058Z"
                  transform="translate(12690.001 -2045.002)"
                  fill="#fff"
                />
              </svg>
              Add User
            </a>
            <a
              href="javascript:void(0)"
              class="red-btn"
              @click="delete_user('all')"
              id="delete_user"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path
                  id="trash-can-outline"
                  d="M8.375,3v.778H4V5.333h.875V15.444A1.661,1.661,0,0,0,6.625,17h8.75a1.661,1.661,0,0,0,1.75-1.556V5.333H18V3.778H13.625V3H8.375M6.625,5.333h8.75V15.444H6.625V5.333m1.75,1.556v7h1.75v-7H8.375m3.5,0v7h1.75v-7Z"
                  transform="translate(-4 -3)"
                  fill="#fff"
                />
              </svg>
              Delete
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="table-box">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <div class="form-check checkbox checkbox-success">
                        <label class="form-check-label checkbox checkbox-success">
                          <input
                            class="form-check-input"
                            id="selectall"
                            type="checkbox"
                            @click="check_list_array('all')"
                          />
                          <span class="icn"></span>
                        </label>
                      </div>
                    </th>
                    <th scope="col" style="width: 50px;">ACTION</th>
                    <th scope="col">ROLE NAME</th>
                    <th scope="col">EMAIL ADDRESS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user,index) in users" :key="index">
                    <th scope="row">
                      <div class="form-check checkbox-success">
                        <label class="form-check-label checkbox checkbox-success">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            @click="check_list_array(index)"
                          />
                          <span class="icn"></span>
                        </label>
                      </div>
                    </th>
                    <td class="action">
                      <a href="#" @click="delete_user(index)" id="single_delete_user_id">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.682"
                          height="15.392"
                          viewBox="0 0 13.682 15.392"
                        >
                          <path
                            d="M8.276,3v.855H4v1.71h.855V16.682a1.71,1.71,0,0,0,1.71,1.71h8.551a1.71,1.71,0,0,0,1.71-1.71V5.565h.855V3.855H13.406V3H8.276M6.565,5.565h8.551V16.682H6.565V5.565m1.71,1.71v7.7h1.71v-7.7H8.276m3.42,0v7.7h1.71v-7.7Z"
                            transform="translate(-4 -3)"
                            fill="#f23d3d"
                          />
                        </svg>
                      </a>
                    </td>
                    <td>{{user.role}}</td>
                    <td>{{user.email}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagin-table">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" @click="page_require(page_no-1)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.667"
                        height="15.204"
                        viewBox="0 0 8.667 15.204"
                      >
                        <g
                          id="arrow-point-to-left"
                          transform="translate(105.806 15.204) rotate(180)"
                        >
                          <path
                            id="Path_1136"
                            data-name="Path 1136"
                            d="M105.493,8.354l-6.537,6.537a1.065,1.065,0,1,1-1.506-1.506L103.235,7.6,97.45,1.817A1.065,1.065,0,0,1,98.956.312l6.537,6.537a1.065,1.065,0,0,1,0,1.505Z"
                            transform="translate(0 0)"
                            fill="#9499ae"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li
                    :class="'page-item '+ pagination_class(pageno)"
                    v-for="pageno in page_array"
                    :key="pageno"
                  >
                    <a
                      v-if="pageno=='...s'||pageno=='...l'"
                      class="page-link"
                      href="#"
                      @click="page_require(pageno)"
                    >...</a>
                    <a
                      v-if="pageno!='...s'&&pageno!='...l'"
                      class="page-link"
                      href="#"
                      @click="page_require(pageno)"
                    >{{pageno}}</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" @click="page_require(page_no+1)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.667"
                        height="15.204"
                        viewBox="0 0 8.667 15.204"
                      >
                        <g id="arrow-point-to-right" transform="translate(-97.139 0)">
                          <path
                            id="Path_1136"
                            data-name="Path 1136"
                            d="M105.493,8.354l-6.537,6.537a1.065,1.065,0,1,1-1.506-1.506L103.235,7.6,97.45,1.817A1.065,1.065,0,0,1,98.956.312l6.537,6.537a1.065,1.065,0,0,1,0,1.505Z"
                            transform="translate(0 0)"
                            fill="#9499ae"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              class="modal fade dash-modal"
              id="usermodel"
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
                        <img src="/static/img/user-blue.png" alt />
                      </div>
                      <h3>Add User</h3>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <img src="/static/img/close-icn.png" alt />
                    </button>
                    <form @submit="add_user">
                      <div class="form-group">
                        <label>Role Name</label>
                        <select v-model="selected_role" class="form-control" id="select_role_name">
                          <option value disabled>Select Role Name</option>
                          <option v-for="(role, index) in portal_roles" :key="index">{{role}}</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <input
                          v-model="email"
                          style="padding: 21px 8px 14px 59px;"
                          type="email"
                          class="form-control email"
                          placeholder="E-Mail"
                          id="form_email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          v-model="password"
                          style="padding: 21px 8px 14px 59px;"
                          type="password"
                          id="form_password"
                          class="form-control pass"
                          placeholder="Password"
                        />
                        <a href="#" @click="password_toggle" class="view-pass">
                          <img src="/static/img/eye-icn.png" alt />
                        </a>
                      </div>
                      <span
                        style="color:#FF0000;"
                        v-if="validPassword!=true && password!=''"
                      >{{ validPassword }}</span>
                      <div class="btn-wrap text-right">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="darkblue-btn">Save & Close</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Swal from "sweetalert2";
// import api_calls from "@/api_calls";
export default {
  name: "add-user",
  data() {
    return {
      portal_roles: [],
      selected_role: "",
      check_list: [],
      emaillist: [],
      password: "",
      email: "",
      per_page: 10,
      total_pages: null,
      number_of_rows: null,
      page_no: 1,
      companyname: "",
      companyid: "",
      users: [],
      roles: [],
      role: "",
      reg_email: /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
      reg_pwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}/,
      show_loader: false,
      //harsh
      page_array: [],
      search_name: "",
      spinnerOn: false
    };
  },
  computed: {
    validPassword() {
      if (this.reg_pwd.test(this.password)) {
        return true;
      } else {
        return "Password must contain minimum 8 characters, atleast 1 UpperCase Alphabet, 1 LowerCase Alphabet, 1 Number and 1 Special Character";
      }
    },
    validEmail() {
      if (this.reg_email.test(this.email)) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if (
      !this.$session.has("CompanyId") &&
      this.$session.get("UserInformation").role == "SuperAdmin"
    ) {
      toastr.warning("Please select a company name from the dropdown");
    }
    if (this.$session.get("UserInformation").role == "SuperAdmin") {
      if (this.$session.has("CompanyId")) {
        this.companyid = this.$session.get("CompanyId");
        this.companyname = this.$session.get("CompanyName");
      } else {
        toastr.warning("Please select a company name from the dropdown");
      }
    } else {
      this.companyid = this.$session.get("UserInformation").company_id;
      this.companyname = this.$session.get("UserInformation").company_name;
    }
    axios
      .post(api_calls.load_users_url(), {
        companyid: this.companyid,
        companyname: this.companyname,
        license_key: this.$session.get("UserInformation").license_key,
        email: this.$session.get("UserInformation").email,
        token: this.$session.get("UserInformation").tokens,
        page_no: 1,
        per_page: this.per_page
      })
      .then(response => {
        this.number_of_rows = response.data[1].number_of_rows;
        this.total_pages = Math.ceil(this.number_of_rows / this.per_page);
        this.update_users(response.data[0].Email, response.data[0].Role);
        this.setpagination(this.page_no);
      });
    axios
      .post(api_calls.main_role_url(), {
        companyname: this.companyname,
        companyid: this.companyid,
        email: this.$session.get("UserInformation").email,
        license_key: this.$session.get("UserInformation").license_key,
        token: this.$session.get("UserInformation").tokens,
        isShow: true
      })
      .then(response => {
        if (response.data) {
          this.portal_roles = response.data.Portal;
        }
      });
  },
  mounted() {
    var vm = this;
    $("#selectall").click(function() {
      if ($(this).is(":checked")) {
        $("input:checkbox").prop("checked", true);
      } else {
        vm.checked_list = [];
        $("input:checkbox").prop("checked", false);
      }
    });
    $("#usermodel").on("hidden.bs.modal", () => {
      vm.clear_fields();
    });
  },
  methods: {
    pagination_class(index) {
      if (index == this.page_no) {
        return " active";
      } else {
        return "";
      }
    },
    check_list_array(index) {
      if (index == "all") {
        if (event.target.checked == true) {
          this.check_list = this.users;
        } else if (event.target.checked == false) {
          this.check_list = [];
        }
      } else {
        if (event.target.checked == true) {
          let val_index = this.check_list.indexOf(this.users[index]);
          var temp = this.users[index];
          if (val_index == -1) {
            this.check_list.push(temp);
          }
        } else if (event.target.check == false) {
          var selectall = document.querySelector("#selectall");
          if (selectall.check == true) {
            selectall.check = false;
          }
          var temp = this.check_list.filter(users => {
            return user.user !== index;
          });
          this.check_list = temp;
        }
      }
    },
    delete_user(index) {
      if (index == "all") {
        if (this.check_list.length == 0) {
          Swal.fire("No user selected!!", "", "error");
        } else if (this.check_list.length > 0) {
          for (var i in this.users) {
            this.emaillist.push(this.users[i].email);
          }
          this.delete_user_api();
        }
      } else {
        this.emaillist.push(this.users[index].email);
        this.delete_user_api();
      }
    },
    delete_user_api() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        this.spinnerOn = true;
        if (result.value) {
          axios
            .post(api_calls.delete_user_url(), {
              emaillist: this.emaillist,
              companyname: this.companyname,
              companyid: this.companyid,
              email: this.$session.get("UserInformation").email,
              license_key: this.$session.get("UserInformation").license_key,
              token: this.$session.get("UserInformation").tokens,
              subscription: this.$session.get("UserInformation").subscription
            })
            .then(response => {
              this.spinnerOn = false;
              var userlist = [];
              for (var i in this.emaillist) {
                userlist.push({
                  username: this.emaillist[i].email
                });
              }
              axios
                .post(api_calls.users_list_sync(), {
                  delete: userlist
                })
                .then(response => {
                  console.log(response.data);
                });
              this.check_list = [];
              if (response.data == "Query Executed Successfully") {
                toastr.success("User has been deleted successfully");
              }
              setTimeout(() => {
                this.$router.go();
              }, 1500);
            });
        }
      });
    },
    password_toggle(event) {
      event.preventDefault();
      var password = document.getElementById("form_password");
      if (password.type == "text") {
        password.type = "password";
      } else if (password.type == "password") {
        password.type = "text";
      }
    },
    update_users(message1, message2) {
      if (message1 == null || message2 == null) {
      } else {
        this.users = [];
        for (var i in message1) {
          this.users.push({
            email: message1[i],
            role: message2[i]
          });
        }
      }
    },
    page_require(page_no) {
      if (page_no == 0 || page_no == this.total_pages + 1) {
        event.preventDefault();
      } else if (this.search_name != "") {
        if (page_no == "...s") {
          this.page_no = Math.ceil((1 + this.page_no) / 2);
        } else if (page_no == "...l") {
          this.page_no = Math.ceil((this.total_pages + this.page_no) / 2);
        }
        this.spinnerOn = true;
        axios
          .post(api_calls.load_users_url(), {
            companyname: this.companyname,
            companyid: this.companyid,
            email: this.$session.get("UserInformation").email,
            license_key: this.$session.get("UserInformation").license_key,
            token: this.$session.get("UserInformation").tokens,
            issearch: true,
            key: this.search_name,
            per_page: this.per_page,
            page_no: page_no
          })
          .then(response => {
            this.spinnerOn = false;
            if (response.data.user_list.length != undefined) {
              this.number_of_rows = response.data.user_list.length;
              this.total_pages = response.data.page_count;
              this.users = [];
              for (var i = 0; i < this.number_of_rows; i++) {
                this.users.push({
                  email: response.data.user_list[i].Email,
                  role: response.data.user_list[i].Role
                });
              }
              this.page_no = page_no;
              this.setpagination(this.page_no);
            } else if (response.data.MSG == "No Results Found") {
              toastr.error("No users found");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            } else if (response.data.MSG == "Intrnal Server Error") {
              toastr.error("Intrnal Server Error");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            } else {
              toastr.error("Intrnal Server Error");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            }
          });
      } else {
        $("input:checkbox").prop("checked", false);
        if (page_no == "...s") {
          this.page_no = Math.ceil((1 + this.page_no) / 2);
        } else if (page_no == "...l") {
          this.page_no = Math.ceil((this.total_pages + this.page_no) / 2);
        } else {
          this.page_no = page_no;
        }
        axios
          .post(api_calls.load_users_url(), {
            intent: this.new_intents,
            companyname: this.companyname,
            companyid: this.companyid,
            email: this.$session.get("UserInformation").email,
            license_key: this.$session.get("UserInformation").license_key,
            token: this.$session.get("UserInformation").tokens,
            subscription: this.$session.get("UserInformation").subscription,
            page_no: this.page_no,
            per_page: this.per_page
          })
          .then(response => {
            this.number_of_rows = response.data[1].number_of_rows;
            this.total_pages = Math.ceil(this.number_of_rows / this.per_page);
            this.update_users(response.data[0].Email, response.data[0].Role);
            this.setpagination(this.page_no);
          });
      }
    },
    role_submit_api() {
      axios
        .post(api_calls.role_url(), {
          companyid: this.companyid,
          companyname: this.companyname,
          superadmincompanyname: this.$session.get("UserInformation")
            .company_name,
          superadmincompanyid: this.$session.get("UserInformation").company_id,
          role: this.$session.get("UserInformation").role,
          email: this.$session.get("UserInformation").email,
          license_key: this.$session.get("UserInformation").license_key,
          token: this.$session.get("UserInformation").tokens
        })
        .then(response => {
          this.roles = response.data.rolelist;
        });
    },
    add_user() {
      event.preventDefault();
      if (this.email == "" || this.validEmail != true) {
        toastr.error("Please Enter a Valid Email");
      } else if (this.password == "" || this.validPassword != true) {
        toastr.error("Please Enter a Valid Password");
      } else if (this.selected_role == "") {
        toastr.error("Please Select Role Name");
      } else {
        this.show_loader = true;
        this.spinnerOn = true;
        $("#usermodel").modal("hide");
        var current_date = new Date();
        axios
          .post(api_calls.add_user_url(), {
            role: this.selected_role,
            staffemail: this.email,
            email: this.$session.get("UserInformation").email,
            password: this.password,
            companyid: this.companyid,
            companyname: this.companyname,
            domain: this.$session.get("UserInformation").domain,
            license_key: this.$session.get("UserInformation").license_key,
            token: this.$session.get("UserInformation").tokens,
            date: current_date
          })
          .then(response => {
            this.spinnerOn = false;
            var response_api = response.data;
            if (response_api == "New user added") {
              Swal({
                title: "Added Successfully!!",
                type: "success",
                text:
                  "The verification link has been sent to the role's email that you have added now. Please verify before logging in"
              });
            } else if (response_api.includes("This email is a duplicate.")) {
              Swal({
                type: "error",
                text:
                  "This Email is already registered. Please try with another email"
              });
            }
            setTimeout(() => {
              this.$router.go();
            }, 1500);
          });
      }
    },
    clear_fields() {
      this.email = "";
      this.password = "";
    },
    callsearch() {
      if (event.keyCode === 13) {
        this.search_product();
      }
    },
    search_product() {
      if (this.search_name != "") {
        this.spinnerOn = true;
        axios
          .post(api_calls.load_users_url(), {
            companyname: this.companyname,
            companyid: this.companyid,
            email: this.$session.get("UserInformation").email,
            license_key: this.$session.get("UserInformation").license_key,
            token: this.$session.get("UserInformation").tokens,
            issearch: true,
            key: this.search_name,
            per_page: this.per_page,
            page_no: 1
          })
          .then(response => {
            this.spinnerOn = false;
            if (response.data.user_list.length != undefined) {
              this.number_of_rows = response.data.user_list.length;
              this.total_pages = response.data.page_count;
              this.users = [];
              for (var i = 0; i < this.number_of_rows; i++) {
                this.users.push({
                  email: response.data.user_list[i].Email,
                  role: response.data.user_list[i].Role
                });
              }
              this.page_no = 1;
              this.setpagination(this.page_no);
            } else if (response.data.MSG == "No Results Found") {
              toastr.error("No users found");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            } else if (response.data.MSG == "Intrnal Server Error") {
              toastr.error("Intrnal Server Error");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            } else {
              toastr.error("Intrnal Server Error");
              setTimeout(() => {
                this.$router.go();
              }, 2500);
            }
          });
      } else {
        toastr.error("Enter proper data for searching");
      }
    },
    setpagination(page_no) {
      this.page_array = [];
      if (this.total_pages <= 7) {
        for (let i = 0; i < this.total_pages; i++) {
          this.page_array.push(i + 1);
        }
      } else if (page_no == 1) {
        for (let i = 0; i < 4; i++) {
          this.page_array.push(i + 1);
        }
        this.page_array.push("...l");
        this.page_array.push(this.total_pages);
      } else if (page_no == this.total_pages) {
        this.page_array.push(1);
        this.page_array.push("...s");
        for (let i = this.total_pages - 4; i < this.total_pages; i++) {
          this.page_array.push(i + 1);
        }
      } else if (page_no <= 4) {
        for (let i = 0; i < page_no + 3; i++) {
          this.page_array.push(i + 1);
        }
        this.page_array.push("...l");
        this.page_array.push(this.total_pages);
      } else if (page_no >= this.total_pages - 4) {
        this.page_array.push(1);
        this.page_array.push("...s");
        for (let i = page_no - 4; i < this.total_pages; i++) {
          this.page_array.push(i + 1);
        }
      } else {
        this.page_array.push(1);
        this.page_array.push("...s");
        for (let i = page_no - 3; i <= page_no + 3; i++) {
          this.page_array.push(i);
        }
        this.page_array.push("...l");
        this.page_array.push(this.total_pages);
      }
    }
  }
};
</script>

<style lang="scss">
.swal-size {
  height: 20px !important;
}
</style>

