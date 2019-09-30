<template>
  <div>
    <div class="header">找回密码</div>
    <div class="content">
      <label class="phone">
        <img src="../assets/image/ic_phone.png" />
        <input ref="phone" type="tel" placeholder="请输入您的手机号" />
      </label>

      <div class="vertifycode">
        <label>
          <img src="../assets/image/ic_message.png" />
          <input type="text" placeholder="输入验证码" />
        </label>

        <span ref="yzm" @click="showYZM"></span>
      </div>

      <div class="vertifymessagecode">
        <label>
          <img src="../assets/image/ic_message.png" />
          <input type="text" placeholder="输入短信验证码" />
        </label>
        <button>获取验证码</button>
      </div>

      <div class="password">
        <label>
          <img src="../assets/image/ic_locker.png" />
          <input ref="password" type="password" placeholder="输入新密码" />
        </label>
        <button>
          <img class="img_pwd" src="../assets/image/ic_preview_w.png" />
          <img style="display:none" class="img_txt" src="../assets/image/ic_preview_x.png" />
        </button>
      </div>

      <div class="tips">提示: 密码为数字、字母、特殊符号中的两种组合，长度6位~20位(字母区分大小写)</div>
    </div>
    <div class="footer">
      <button @click="submitPassword">确认提交</button>
    </div>
  </div>
</template>

<script>
import {getYZM} from '../assets/js/public.js';
import axios from "axios";
export default {
  name: "requestPassword",
  methods: {
    showYZM() {
      this.$refs.yzm.innerHTML = getYZM(4);
    },
    submitPassword() {
      axios
          .post("/requestPassword/modifyPassword", {
            phone: this.$refs.phone.value,
            password: this.$refs.password.value
          })
          .then(result => {
            console.log(result.data)  
    }).catch(console.error);
  }
  },
  mounted() {
    this.$eventBus.$emit("showHideNav", false);
  }
}
</script>

<style scoped>
/* -----------------------header------------------ */
.header {
  width: 100%;
  height: 1.12rem;
  background-color: #f0f0f0;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.346667rem;
  /* border-bottom: 0.026667rem solid gray; */
}

/* -----------------------content------------------ */

.content {
  background: indianred;
  background-color: #fff;
  padding: 0.026667rem 0.4rem;
  position: relative;
  padding-top: 0.026667rem;
  margin-bottom: 0.533333rem;
}

.content .phone,
.content .vertifycode > label,
.content .vertifymessagecode > label,
.content .password > label {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: #444;
  z-index: 2;
  font-size: 0.426667rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.533333rem;
  border: none;
  border-bottom: 0.026667rem solid #ddd;
}

.content .phone > img,
.content .vertifycode > label > img,
.content .vertifymessagecode > label > img,
.content .password > label > img {
  height: 1.33333rem;
}
.content .phone > input,
.content .vertifycode > label > input,
.content .vertifymessagecode > label > input,
.content .password > label > input {
  width: 100%;
  display: block;
  padding-top: 0.0533333rem;
  padding-left: 0;
  padding-right: 0.64rem;
  height: 0.906667rem;
  color: #111;
  font-size: 0.3733333rem;
  line-height: 0.426667rem;
  -webkit-box-flex: 1;
  flex: 1 5.86667rem;
  border: none;
  outline: none;
}

.content .vertifycode,
.content .vertifymessagecode,
.content .password {
  position: relative;
}

.content .vertifycode > span {
  /* background:url(../assets/image/yzm.png) -10px -15px; */
  background: #eee;
  width: 1.92rem;
  height: 1.06667rem;
  position: absolute;
  top: 0.12rem;
  right: 0.8rem;
  font-style: italic;
  font-size: 0.48rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.06667rem;
  /* border: 1px solid red; */
  z-index: 10;
  /* transition: opacity 0.2s; */
}

.content .vertifymessagecode > button,
.content .password > button {
  color: #b2b2b2;
  padding: 0;
  text-align: center;
  z-index: 10;
  position: absolute;
  right: 0.8rem;
  top: 22%;
  transition: opacity 0.1s;
  max-height: 1.12rem;
  padding: 0.133333rem 0.08rem;
  border: none;
  outline: none;
}

.content .vertifymessagecode > button {
  background-color: #32beff;
  border-color: transparent;
  border-radius: 0.106667rem;
  color: #fff;
}

.content .password > button {
  /* border-color: transparent; */
  background-color: #fff;
  top: 19%;
  width: 1.33333rem;
  text-align: right;
  height: 1.06667rem;
  padding: 0;
  border: 0.106667rem solid transparent;
}
.content .password > button > img {
  width: 50%;
}

.content .tips {
  padding: 0 0.426667rem;
  margin: 0.26667rem 0.533333rem 0 0.533333rem;
  color: #333;
}

/* -----------------------footer------------------ */

.footer {
  /* background: palevioletred; */
  padding: 0.533333rem 0.26667rem;
}
.footer > button {
  color: #fff;
  padding: 0.133333rem 0;
  width: 100%;
  background-color: #32beff;
  border-color: transparent;
  border-radius: 0.106667rem;
  outline: none;
}
</style>