<template>
  <div class="login">
    <div class="left">
      <!-- 头部 -->
      <div class="header">
        <img src="@/assets/img/login_logo.png" alt />
        <h4 class="title">面试管理</h4>
        <span class="line"></span>
        <h5 class="user_login">用户登录</h5>
      </div>
      <!-- 表单 -->
      <!-- rules:表单 -->
      <el-form :model="form" :rules="rules" ref="form">
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号码" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <!-- prefix-icon:头部图标   show-password:是否显示密码切换 -->
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-row>
            <!-- 验证码输入框 -->
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <!-- 图片区 -->
            <el-col :span="8">
              <img class="code_img" @click="changeCode" :src="codeImgCode" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 协议 -->
        <el-form-item prop="isPass">
          <el-checkbox class="check" v-model="form.isPass">
            我已同意并阅读
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 登录 -->
        <!-- 全局校验 -->
        <el-button type="primary" class="btn" @click="submit">登录</el-button>
        <br />
        <br />
        <!-- 注册 -->
        <el-button type="primary" class="btn" @click="showRegister">注册</el-button>
        <!-- 导入子组件 -->
        <Register ref="register"></Register>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_right.png" alt />
    </div>
  </div>
</template>

<script>
// 导入子组件
import Register from "@/views/login/Register.vue";
export default {
  data() {
    return {
      codeImgCode: process.env.VUE_APP_URL + "/captcha?type=login",
      form: {
        phone: "",
        password: "",
        code: "",
        isPass: ""
      },
      rules: {
        phone: [
          { required: true, message: "必填项", trigger: "blur" },
          { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "必填项", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6-12位密码", trigger: "blur" }
        ],
        code: [
          { required: true, message: "必填项", trigger: "blur" },
          { min: 4, max: 4, message: "请输入4位验证码", trigger: "blur" }
        ],
        isPass: [{ required: true, message: "必填项", trigger: "change" }]
      }
    };
  },
  methods: {
    // 提交全局验证
    submit() {
      this.$refs.form.validate(result => {
        if (result) {
          this.$message.success("提交成功");
        } else {
          this.$message.error("提交失败");
        }
      });
    },
    changeCode() {
      this.codeImgCode =
        process.env.VUE_APP_URL + "/captcha?type=login&t=" + Date.now();
    },
    // 点击触发事件修改子组件的isShow为true
    showRegister() {
      this.$refs.register.isShow = true;
    }
  },
  components: { Register }
};
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    padding: 44px 41px 44px 43px;

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        margin-right: 10px;
      }
      .title {
        font-size: 24px;
        font-family: SourceHanSansCN Regular, SourceHanSansCN Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
      }
      .line {
        width: 1px;
        height: 28px;
        background: #c7c7c7;
        margin: 0 20px;
      }
      .user_login {
        font-size: 22px;
        font-family: PingFangSC Regular, PingFangSC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
      }
    }
    .code_img {
      width: 110px;
      height: 42px;
    }
    .check {
      height: 16px;
      font-size: 14px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: 400;
      text-align: left;
      color: #999999;
      line-height: 16px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>