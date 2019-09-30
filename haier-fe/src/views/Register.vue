<template>
  <div>
    <div class="header">
      <div class="reg">
        <img @click="prev" src="../assets/image/ic_back_white.png" />
        <div>顺逛用户注册</div>
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
      <div class="register-message">
        <span class="register-message-one">
          <input ref="phone" type="text" placeholder="请输入手机号码" />
        </span>
        <span class="register-message-two">
          <input ref="code" type="text" placeholder="请输入短信验证码" />
          <span @click="sendCode">获取验证码</span>
        </span>
      </div>
    </div>
    <div class="footer">
      <div class="btn-register" @click="login">登录</div>
    </div>
    <div ref="cRule" class="mask">
      <div>
        <div class="mask_content">
          <h3>注册协议及隐私政策</h3>
          <div class="mask_con">
            <div class="scroll">
              <ul>
                <li>【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容：</li>
                <li style="margin-top: 16px;">
                  <a style="color: #32BEFF;">《顺逛用户服务协议》</a>
                </li>
                <li class="topheight">1. 服务条款的接受、修订与补充；</li>
                <li>2. 您的顺逛账号注册；</li>
                <li>3. 知识产权及其他权利；</li>
                <li>4. 服务的使用；</li>
                <li>5. 您创建的内容及许可；</li>
                <li>6. 您的个人信息和隐私保护；</li>
                <li>7. 我们的责任限制；</li>
                <li>8. 不可抗力；</li>
                <li class="bottomheight">9. 其他；</li>
                <li>【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。</li>
                <li>
                  阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。
                  <br />
                </li>
                <li style="margin-top: 16px;">
                  <a style="color: #32BEFF;">《顺逛隐私权政策》</a>
                </li>
                <br />
                <li>为切实保护用户隐私权，优化用户体验，顺逛（“顺逛”或“我们”）根据现行法规及政策，制定本顺逛隐私权政策。顺逛了解个人信息对客户的重要性，我们力求明确说明我们获取、管理及保护用户个人信息的政策及措施。</li>
                <br />
                <li>本隐私权政策将帮助您了解以下内容：</li>
                <br />
                <li class="topheight">一、我们会收集哪些信息（无论其是否为个人信息）</li>
                <li>二、Cookie和网络Beacon等同类技术的使用</li>
                <li>三、我们如何使用信息</li>
                <li>四、我们如何共享信息</li>
                <li>五、我们如何转让信息</li>
                <li>六、我们如何公开披露信息</li>
                <li>七、一般储存期限</li>
                <li>八、我们如何确保您的信息安全</li>
                <li>九、您能做什么</li>
                <li>十、我们如何处理未成年人的个人信息</li>
                <li>十一、您的个人信息的存储地点</li>
                <li>十二、本隐私权政策不适用的范围</li>
                <li>十三、本隐私权政策如何更新</li>
                <li class="bottomheight">十四、联系我们</li>
                <li>
                  <a
                    style="color: #32BEFF"
                    href="http://account.haier.com/html/privacypolicy.html"
                  >《海尔家电隐私权政策》</a>
                </li>
                <br />
                <br />
              </ul>
            </div>
          </div>
          <dl>
            <dt @click="toLogin">取 消</dt>
            <dd @click="closeRule">同意并继续</dd>
          </dl>
        </div>
      </div>
    </div>
    <div ref="mask" class="mask" style="display:none">
      <div>
        <p ref="tip_number">请输入正确的手机号码！</p>
        <p ref="tip_message">请输入短信验证码！</p>
        <p ref="tip_err_code">验证码错误！</p>
        <p ref="tip_ok">登录成功</p>
      </div>
    </div>
  </div>
</template>

<script>
const phoneReg = /^1[3-9]\d{9}$/;
import axios from "axios";
export default {
  name: "Register",
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
    closeRule() {
      this.$refs.cRule.style.display = "none";
    },
    prev() {
      // console.log("返回上一页");
      this.$router.go(-1);
    },
    sendCode() {
      let phone = this.$refs.phone.value;
      if (phone == "" || !phoneReg.test(phone)) {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_number.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_number.style.display = "none";
        }, 3000);
      } else {
        axios
          .post("/login/sendVerifyCode", {
            phone: this.$refs.phone.value
          })
          .then(result => {
            alert("已发送验证码:"+ result.data.code);
            // alert(result.data.code);
            // console.log(result);
          })
          .catch(console.error);
      }
    },
    login() {
      let phone = this.$refs.phone.value;
      let code = this.$refs.code.value;
      if (phone == "" || !phoneReg.test(phone)) {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_number.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_number.style.display = "none";
        }, 3000);
      } else if (code == "") {
        this.$refs.mask.style.display = "block";
        this.$refs.tip_message.style.display = "block";
        setTimeout(() => {
          this.$refs.mask.style.display = "none";
          this.$refs.tip_message.style.display = "none";
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
    }
  },
  mounted() {
    this.$eventBus.$emit("showHideNav", false);
  }
};
</script>

<style src="../assets/css/base.css" scoped></style>
<style scoped>
/* ----------------header--------------- */

.header .reg > div {
  position: absolute;
  top: 0.53333rem;
  left: 33.3333%;
  right: 33.3333%;
  color: #ffffff;
  text-align: center;
  width: 33.3333%;
  font-size: 0.426667rem;
}

/* ----------------content--------------- */

.content .register-message .register-message-two {
  position: relative;
}
.content .register-message .register-message-two > input {
  width: 60%;
}
.content .register-message .register-message-two > span {
  position: absolute;
  top: 0.26667rem;
  right: 0;
  width: 2.6667rem;
  height: 0.8rem;
  text-align: center;
  border: 0.026667rem solid #2979ff;
  border-radius: 2.6667rem;
  line-height: 0.7733333rem;
  color: #2979ff;
  margin: 0.08rem;
  font-size: 0.32rem;
}

/* ----------------footer--------------- */

/* ----------------mask--------------- */

.mask > div .mask_content {
  bottom: 0;
  left: 0;
  right: 0;
  height: 13.12rem;
  background: #fff;
  position: absolute;
}
.mask > div .mask_content h3 {
  font-weight: 700;
  background-color: #fff;
  font-size: 0.373333rem;
  text-align: center;
  height: 1.333333rem;
  line-height: 1.333333rem;
}
.mask > div .mask_content .mask_con {
  position: absolute;
  bottom: 1.333333rem !important;
  top: 1.333333rem !important;
  background: #e3e3e3;
  /* user-select: auto !important; */
  overflow: hidden;
  margin-top: -1px;
  padding-top: 1px;
  margin-bottom: -1px;
  width: auto;
  height: auto;
}

.mask > div .mask_content .mask_con .scroll {
  /* transform: translate3d(0px, 0px, 0px) scale(1); */
  padding: 0.533333rem 0.4rem 0;
  background: #e3e3e3;
  font-size: 0.346667rem;
  height: 100%;
  /* transform-origin: left top; */
  overflow: auto;
}
.mask > div .mask_content .mask_con .scroll ul {
  list-style: none;
}
.mask > div .mask_content .mask_con .scroll ul .topheight {
  padding-top: 10px;
}
.mask > div .mask_content .mask_con .scroll ul .bottomheight {
  padding-bottom: 10px;
}

.mask > div .mask_content dl {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 1.333333rem;
  text-align: center;
  background-color: #fff;
  font-size: 0.426667rem;
}
.mask > div .mask_content dl dt {
  float: left;
  width: 50%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  font-weight: 700;
}
.mask > div .mask_content dl dd {
  float: left;
  width: 50%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  background-color: #5e9afe;
  color: #fff;
}
</style>
