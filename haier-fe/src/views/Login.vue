<template>
  <div>
    <div v-if="isLogin">
      <div class="personal">
        <img @click="prev" src="../assets/image/ic_back_white.png" />
      </div>欢迎 ...
    </div>
    <div v-else>
      <div class="header">
        <div class="reg">
          <img @click="prev" src="../assets/image/ic_back_white.png" />
          <div @click="toRegister">注册</div>
        </div>

        <div class="logo">
          <div class="pic">
            <img src="../assets/image/sg_logo_white.png" />
          </div>
          <div class="txt">
            <div>海尔官方社群交互平台</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="login-number" ref="login_number">
          <span class="login-number-one">
            <input ref="login_number_phone" type="text" placeholder="请输入手机号码/店铺码" />
          </span>
          <span class="login-number-two">
            <input ref="login_number_pwd" type="password" placeholder="请输入密码" />
            <label @click="eyesControl">
              <img ref="eye_close" src="../assets/image/eye_close@2x.png" />
              <img ref="eye_open" style="display:none;" src="../assets/image/eye_open@2x.png" />
            </label>
          </span>
          <span ref="login_number_three" class="login-number-three" style="display:none">
            <input ref="login_number_code" type="txt" placeholder="请输入验证码" />
            <label>
              <span ref="yzm" @click="showYZM"></span>
            </label>
          </span>
          <div @click="toFetchpw">忘记密码?</div>
        </div>
        <div class="login-message" style="display:none" ref="login_message">
          <span class="login-message-one">
            <input @blur="phone_con" ref="phone" type="text" placeholder="请输入手机号码" />
          </span>
          <span class="login-message-two">
            <input @blur="code_con" ref="code" type="text" placeholder="请输入短信验证码" />
            <span @click="sendCode">获取验证码</span>
          </span>
        </div>
      </div>
      <div class="footer">
        <div ref="btn_login1" class="btn-login btn-login1" @click="login_number">登录</div>
        <div
          ref="btn_login2"
          class="btn-login btn-login2"
          style="display:none"
          @click="login_message"
        >登录</div>
        <div class="btn-login-message" @click="tologin_message" ref="btn_login_message">短信验证码登录</div>
        <div
          class="btn-login-number"
          style="display:none"
          @click="tologin_number"
          ref="btn_login_number"
        >账号密码登录</div>
      </div>

      <div ref="mask" class="mask" style="display:none">
        <div>
          <p ref="tip_number">请输入手机号</p>
          <p ref="tip_number_format">请输入正确的手机号格式</p>
          <p ref="tip_message_length">短信验证码长度必须是 6 位</p>
          <p ref="tip_err_code">验证码错误！</p>
          <p ref="tip_ok">登录成功</p>
          <p ref="tip_account">请输入用户名</p>
          <p ref="tip_password">
            密码为数字、字母、特殊符号中的两种组合，
            长度为6~20位(字母区分大小写)
          </p>
          <p ref="tip_no">系统开小差了，稍后再试一下吧</p>
          <p ref="tip_error">用户名或密码错误！</p>
          <p ref="tip_code">请输入验证码</p>
          <p ref="tip_exist">手机号不存在</p>
          <p ref="tip_pic_code">请输入正确的图形验证码</p>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
const phoneReg = /^1[3-9]\d{9}$/;
const pwdReg = /\S{6,20}/;
var q3Reg1 = /[a-z]/;
var q3Reg2 = /[A-Z]/;
var q3Reg3 = /[0-9]/;
let loginTimes = 0;
import { getYZM } from "../assets/js/public.js";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      isLogin: existCookie("token")
    };
  },
  methods: {
    toFetchpw() {
      this.$router.push({ name: "requestPassword" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
    eyesControl() {
      if (
        !(this.$refs.eye_close.style.display == "none") &&
        this.$refs.eye_open.style.display == "none"
      ) {
        this.$refs.eye_close.style.display = "none";
        this.$refs.eye_open.style.display = "inline-block";
        this.$refs.login_number_pwd.type = "text";
      } else {
        this.$refs.eye_close.style.display = "inline-block";
        this.$refs.eye_open.style.display = "none";
        this.$refs.login_number_pwd.type = "password";
      }
    },
    prev() {
      this.$router.go(-1);
    },
    tologin_message() {
      this.$refs.login_message.style.display = "block";
      this.$refs.login_number.style.display = "none";
      this.$refs.btn_login_message.style.display = "none";
      this.$refs.btn_login_number.style.display = "block";
      this.$refs.btn_login1.style.display = "none";
      this.$refs.btn_login2.style.display = "block";
      this.$refs.btn_login2.disabled = "true";
    },
    tologin_number() {
      this.$refs.login_message.style.display = "none";
      this.$refs.login_number.style.display = "block";
      this.$refs.btn_login_message.style.display = "block";
      this.$refs.btn_login_number.style.display = "none";
      this.$refs.btn_login2.style.display = "none";
      this.$refs.btn_login1.style.display = "block";
    },
    showYZM() {
      this.$refs.yzm.innerHTML = getYZM(6);
    },
    phone_con() {
      let phone = this.$refs.phone.value;
      let code = this.$refs.code.value;
      if (phone == "" || code == "") {
        this.$refs.btn_login2.style.background = "#75A8FF";
      } else {
        this.$refs.btn_login2.style.background = "#2979FF";
      }
    },
    code_con() {
      let phone = this.$refs.phone.value;
      let code = this.$refs.code.value;
      if (phone == "" || code == "") {
        this.$refs.btn_login2.style.background = "#75A8FF";
      } else {
        this.$refs.btn_login2.style.background = "#2979FF";
      }
    },
    sendCode() {
      let phone = this.$refs.phone.value;
      if (phone == "") {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_number.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_number.style.display = "none";
        }, 3000);
      } else if (!phoneReg.test(phone)) {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_number_format.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_number_format.style.display = "none";
        }, 3000);
      } else {
        axios
          .post("/login/sendVerifyCode", {
            phone: this.$refs.phone.value
          })
          .then(result => {
            alert("已发送验证码:" + result.data.code);
          })
          .catch(console.error);
      }
    },
    login_message() {
      let phone = this.$refs.phone.value;
      let code = this.$refs.code.value;
      let background = this.$refs.btn_login2.style.background;
      if (phone == "" || code == "") {
        this.$refs.mask.style.display = "none";
      } else if (!phoneReg.test(phone)) {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_number_format.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_number_format.style.display = "none";
        }, 3000);
      } else if (code.length != 6) {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_message_length.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_message_length.style.display = "none";
        }, 3000);
      } else {
        axios
          .post("/login/loginByCode", {
            phone: this.$refs.phone.value,
            code: this.$refs.code.value
          })
          .then(result => {
            console.log(result.data);
            if (result.data.ok) {
              this.$refs.mask.style.display = "block";
              this.$refs.tip_ok.style.display = "block";
              setTimeout(() => {
                this.$refs.mask.style.display = "none";
                this.$refs.tip_ok.style.display = "none";
                this.$router.push({ name: "home" });
              }, 3000);
            } else {
              this.$refs.mask.style.display = "block";
              this.$refs.tip_err_code.style.display = "block";
              setTimeout(() => {
                this.$refs.mask.style.display = "none";
                this.$refs.tip_err_code.style.display = "none";
              }, 3000);
            }
          })
          .catch(console.error);
      }
    },
    login_number() {
      let login_number_phone = this.$refs.login_number_phone.value;
      let login_number_pwd = this.$refs.login_number_pwd.value;
      let login_number_code = this.$refs.login_number_code.value;
      let yzm = this.$refs.yzm.innerHTML;

      if (loginTimes <= 6) {
        if (login_number_phone == "") {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_account.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_account.style.display = "none";
          }, 3000);
        } else if (login_number_pwd == "") {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_password.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_password.style.display = "none";
          }, 3000);
        } else if (login_number_phone.length <= 3) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_no.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_no.style.display = "none";
          }, 3000);
        } else if (
          login_number_phone.length != 11 ||
          !phoneReg.test(login_number_phone)
        ) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_error.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_error.style.display = "none";
          }, 3000);
        } else if (
          !(
            pwdReg.test(login_number_pwd) &&
            ((login_number_pwd.search(q3Reg1) != -1 &&
              login_number_pwd.search(q3Reg2) != -1) ||
              (login_number_pwd.search(q3Reg1) != -1 &&
                login_number_pwd.search(q3Reg3) != -1) ||
              (login_number_pwd.search(q3Reg2) != -1 &&
                login_number_pwd.search(q3Reg3) != -1))
          )
        ) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_password.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_password.style.display = "none";
          }, 3000);
        } else {
          axios
            .post("/login/loginByPhone", {
              phone: this.$refs.login_number_phone.value
            })
            .then(result => {
              if (result.data.ok) {
                console.log("用户:" + result.data.phone + "存在");
                this.$refs.mask.style.display = "block";
                this.$refs.tip_ok.style.display = "block";
                setTimeout(() => {
                  this.$refs.mask.style.display = "none";
                  this.$refs.tip_ok.style.display = "none";
                  this.$router.push({ name: "home" });
                }, 3000);
              } else {
                this.$refs.mask.style.display = "block";
                this.$refs.tip_exist.style.display = "block";
                setTimeout(() => {
                  this.$refs.mask.style.display = "none";
                  this.$refs.tip_exist.style.display = "none";
                }, 3000);
              }
            })
            .catch(console.error);
        }
      } else {
        //第七次登录
        this.$refs.login_number_three.style.display = "block";

        if (login_number_phone == "") {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_account.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_account.style.display = "none";
          }, 3000);
        } else if (login_number_pwd == "") {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_password.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_password.style.display = "none";
          }, 3000);
        } else if (login_number_code == "") {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_code.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_code.style.display = "none";
          }, 3000);
        } else if (login_number_phone.length <= 3) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_no.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_no.style.display = "none";
          }, 3000);
        } else if (
          login_number_phone.length != 11 ||
          !phoneReg.test(login_number_phone)
        ) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_error.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_error.style.display = "none";
          }, 3000);
        } else if (
          !(
            pwdReg.test(login_number_pwd) &&
            ((login_number_pwd.search(q3Reg1) != -1 &&
              login_number_pwd.search(q3Reg2) != -1) ||
              (login_number_pwd.search(q3Reg1) != -1 &&
                login_number_pwd.search(q3Reg3) != -1) ||
              (login_number_pwd.search(q3Reg2) != -1 &&
                login_number_pwd.search(q3Reg3) != -1))
          )
        ) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_password.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_password.style.display = "none";
          }, 3000);
        } else if (login_number_code != yzm) {
          this.$refs.mask.style.display = "block";
          this.$refs.tip_pic_code.style.display = "block";
          setTimeout(() => {
            this.$refs.mask.style.display = "none";
            this.$refs.tip_pic_code.style.display = "none";
          }, 3000);
        } else {
          axios
            .post("/login/loginByPhone", {
              phone: this.$refs.login_number_phone.value
            })
            .then(result => {
              if (result.data.ok) {
                console.log("用户:" + result.data.phone + "存在");
                this.$refs.mask.style.display = "block";
                this.$refs.tip_ok.style.display = "block";
                setTimeout(() => {
                  this.$refs.mask.style.display = "none";
                  this.$refs.tip_ok.style.display = "none";
                  this.$router.push({ name: "home" });
                }, 3000);
              } else {
                this.$refs.mask.style.display = "block";
                this.$refs.tip_exist.style.display = "block";
                setTimeout(() => {
                  this.$refs.mask.style.display = "none";
                  this.$refs.tip_exist.style.display = "none";
                }, 3000);
              }
            })
            .catch(console.error);
        }
      }

      return loginTimes++;
    }
  },
  mounted() {
    this.$eventBus.$emit("showHideNav", false);
  }
};

function existCookie(name) {
  let parts = document.cookie.split("; ");
  for (let part of parts) {
    if (name === part.split("=")[0]) {
      return true;
    }
  }
  return false;
}
</script>

<style src="../assets/css/base.css" scoped></style>
<style scoped>
/* ----------------header--------------- */

.header .reg > div {
  color: #fff;
  font-size: 0.426667rem;
  position: absolute;
  right: 0.426667rem;
  top: 0.426667rem;
}

/* ----------------content--------------- */

.content .login-number .login-number-two,
.content .login-number .login-number-three {
  position: relative;
}
.content .login-number .login-number-two > label > img {
  width: 0.64rem;
  height: 0.64rem;
  position: absolute;
  top: 0.3733333rem;
  right: 0;
}
.content .login-number .login-number-three > label > span {
  background: url(../assets/image/yzm.png) -10px -15px;
  width: 2.346667rem;
  height: 1.06667rem;
  position: absolute;
  top: 0.2rem;
  right: 0;
  font-style: italic;
  font-size: 0.48rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.06667rem;
  border: 1px solid red;
}
.content .login-number > div {
  font-size: 0.3733333rem;
  color: #666;
  margin: 0.586667rem 0.4rem 0.8533333rem;
}
.content .login-message .login-message-two {
  position: relative;
}
.content .login-message .login-message-two > input {
  width: 60%;
}
.content .login-message .login-message-two > span {
  display: inline-block;
  font-size: 0.3733333rem;
  position: absolute;
  top: -0.106667rem;
  right: 0;
  color: rgb(41, 121, 255);
}

/* ----------------footer--------------- */
.footer .btn-login-number,
.footer .btn-login-message {
  border: 0.026667rem solid #2979ff;
  color: #2979ff;
}
.footer .btn-login2 {
  /* background: #2979FF; */
  background: #75a8ff;
}
</style>
