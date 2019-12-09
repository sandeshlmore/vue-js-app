<template>
    <div>
       <div class="log-wrap d-flex align-items-center">
        <div class="container">
            <div class="log-blk">
            <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2">
                <div class="title-sec d-flex align-items-center" style="width:584px;">
                    <div class="inner-title" style="max-width: 380px;">
                    <div class="sec-logo">
                        <img style="margin-left:-19px;" src="/static/img/logo.png" alt />
                    </div>
                    <h2>Get Started Now !</h2>
                    <p>
                        Simplify & Automate your business process with AI.
                        <br />Sign Up to discover how AI can help your Business
                    </p>
                    <!-- <u>
                        <a href="https://cense.ai/pricing" style="color: #fff;">Subscription Package</a>
                    </u>-->
                    <br />
                    <a style="margin-top:15px" href="/bot/login" class="white-btn">Log In</a>
                    <br />
                    </div>
                </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                <div class="log-sec d-flex align-items-center">
                    <div class="log-frm">
                    <h2>Sign Up</h2>
                    <form @submit="create">
                        <div class="radio">
                        <label>
                            <input
                            type="radio"
                            @change="toggle_domain"
                            value="Customer"
                            v-model="user.registration_type"
                            />
                            <span class="icn"></span> Customer
                        </label>
                        <label>
                            <input
                            type="radio"
                            @change="toggle_domain"
                            value="Partner"
                            :disabled="input_disable"
                            v-model="user.registration_type"
                            />
                            <span class="icn"></span> Partner
                        </label>
                        </div>
                        <div class="form-group">
                        <input
                            id="CompanyName"
                            type="text"
                            v-model="user.company_name"
                            class="form-control company"
                            placeholder="Company Name"
                        />
                        </div>
                        <div class="form-group" id="domain_input">
                        <select
                            v-model="user.domain"
                            class="form-control domain custom-select"
                            id="select_domain_input"
                        >
                            <option value>Select Domain</option>
                            <option
                            :value="company_name"
                            v-for="company_name in companies"
                            :key="company_name"
                            >{{ company_name }}</option>
                        </select>
                        </div>

                        <div class="form-group">
                        <input
                            id="hostname"
                            type="text"
                            v-model="user.host_name"
                            class="form-control key"
                            placeholder="Host Name (e.g, https://cense.ai)"
                        />
                        </div>

                        <div class="form-group">
                        <input
                            type="text"
                            style="display:none"
                            v-model="user.license_key"
                            disabled
                            class="form-control key"
                            placeholder="License Key"
                        />
                        </div>
                        <div class="form-group">
                        <input
                            type="email"
                            v-model="user.email"
                            :disabled="input_disable"
                            class="form-control email"
                            placeholder="Email"
                        />
                        </div>
                        <div class="form-group">
                        <input
                            type="password"
                            id="form_password"
                            @input="check_value"
                            v-model="user.password"
                            class="form-control pass"
                            placeholder="Password"
                        />
                        <!-- <div
                            class="is-invalid"
                            v-if="validPassword!=true && user.password!=''"
                        >{{ validPassword }}</div>-->
                        <a href="#" @click="password_toggle_1" class="view-pass">
                            <img src="/static/img/eye-icn.png" alt />
                        </a>
                        </div>
                        <div id="message">
                        <h6>Password must contain the following:</h6>
                        <p id="letter" class="invalid" style="margin-left: 10%;">A lower case letter</p>
                        <p
                            id="capital"
                            class="invalid"
                            style="margin-left: 10%;"
                        >A capital (uppercase) letter</p>
                        <p id="number" class="invalid" style="margin-left: 10%;">A number</p>
                        <p id="length" class="invalid" style="margin-left: 10%;">Minimum 8 characters</p>
                        </div>
                        <div class="form-group">
                        <input
                            v-model="confirm_password"
                            type="password"
                            class="form-control pass"
                            placeholder="Confirm password"
                            id="confirm_password"
                        />
                        <div
                            class="is-invalid"
                            style="color:red"
                            v-if="validConfirmPassword!=true && confirm_password!=''"
                        >{{ validConfirmPassword }}</div>
                        <a href="#" @click="password_toggle_2" class="view-pass">
                            <img src="/static/img/eye-icn.png" alt />
                        </a>
                        </div>
                        <div class="btn-wrap">
                        <button type="submit" class="darkblue-btn">Sign Up</button>
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
</template>

<script>
import axios from "axios";
// import swal from "sweetalert2";
// import api_calls from "@/api_calls";
export default {
    data(){
        return{
            
        }
    },
}
</script>