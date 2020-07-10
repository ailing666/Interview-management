<template>
  <div class="login">
    <div class="left">
      <!-- 头部 -->
      <div class="header">
        <img src="@/assets/img/login_logo.png" alt />
        <h4 class="title">黑马面面</h4>
        <span class="line"></span>
        <h5 class="user_login">用户登录</h5>
      </div>
      <!-- 表单 -->
      <el-form :model="form">
        <!-- 手机号 -->
        <el-form-item>
          <el-input v-model="form.phone" placeholder="请输入手机号码" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-row>
            <!-- 验证码输入框 -->
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <!-- 图片区 -->
            <el-col :span="8">
              <img class="code_img" src="@/assets/img/code.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 协议 -->
        <el-form-item>
          <el-checkbox class="xx">
            我已同意并阅读
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 登录 -->
        <el-button type="primary" class="btn">登录</el-button>
        <br />
        <br />
        <!-- 注册 -->
        <el-button type="primary" class="btn">注册</el-button>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_right.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: ""
      }
    };
  }
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
    .xx {
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