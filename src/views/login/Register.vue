<template>
  <div class="resgiter">
    <el-dialog class="dialog" :visible="isShow" width="40%" :show-close="false">
      <!-- 头部 -->
      <div slot="title" class="dialog_title">用户注册</div>
      <!-- 主体 -->
      <!-- 表单 -->
      <el-form :model="form" label-width="80px" :rules="rules" ref="form">
        <el-form-item prop="avatar" label="头像">
          <!-- action:接口地址   show-file-list:是否显示文件列表 -->
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item prop="username" label="昵称">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop="imgCode" label="图形码">
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.imgCode"></el-input>
            </el-col>
            <el-col :span="7" :offset="1">
              <img :src="codeImg" @click="changeImg" class="btn" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="rcode" label="验证码">
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.rcode"></el-input>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-button class="btn">获取用户验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <!-- 脚部 -->
      <div slot="footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      uploadUrl: process.env.VUE_APP_URL + "/uploads", //接口地址
      codeImg: process.env.VUE_APP_URL + "/captcha?type=sendsms",
      imageUrl: "", //上传头像接口返回的图片地址
      form: {
        avatar: "", //	头像地址
        username: "", //	用户名
        email: "", //	邮箱
        phone: "", //	手机号
        password: "", //	密码
        imgCode: "", // 图形验证码
        rcode: "" //	短信验证码
      },
      rules: {
        avatar: [{ required: true, message: "必填项", trigger: "change" }],
        username: [
          { required: true, message: "必填项", trigger: "change" },
          { min: 2, max: 8, message: "昵称长度为2-8", trigger: "change" }
        ],
        email: [{ required: true, message: "必填项", trigger: "change" }],
        phone: [
          { required: true, message: "必填项", trigger: "change" },
          { min: 11, max: 11, message: "请输入11位手机号", trigger: "change" }
        ],
        password: [
          { required: true, message: "必填项", trigger: "change" },
          { min: 6, max: 12, message: "请输入6-12位密码", trigger: "change" }
        ],
        imgCode: [
          { required: true, message: "必填项", trigger: "change" },
          { min: 4, max: 4, message: "请输入4位验证码", trigger: "change" }
        ],
        rcode: [
          { required: true, message: "必填项", trigger: "change" },
          { min: 4, max: 4, message: "请输入4位验证码", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    // 全局验证
    submit() {
      this.$refs.form.validate(result => {
        if (result) {
          this.$message.success("提交成功");
        } else {
          this.$message.error("提交失败");
        }
      });
    },
    // 点击图片,在图形码的接口后添加一个随机数改变图片
    changeImg() {
      this.codeImg =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&t=" + Date.now();
    },
    // 图片上传成功后的回调函数
    handleAvatarSuccess(res) {
      this.avatar = res.data.file_path;
      // 图片地址
      this.imageUrl = process.env.VUE_APP_URL + "/" + res.data.file_path;
      this.$refs.form.validateField(["avatar"]);
    },
    // 图片读取后,调用接口前的回调函数
    beforeAvatarUpload(file) {
      // 限制图片的格式
      const isJPG = file.type === "image/jpeg" || file.type === "image/jpg";
      // 限制图片的大小,小于2m
      const isLt2M = file.size / 1024 / 1024 < 2;

      // 如果不符合条件的提示信息
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      // 返回一个boolean值,只有限制条件都满足才返回true,正常上传,只要一个不满足就不会上传
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.dialog {
  margin: 0;
  padding: 0;
}
.el-dialog__header {
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 62px;
  font-size: 18px;
  font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
  font-weight: 400;
  text-align: center;
  color: #fefefe;
  letter-spacing: 0px;
  background: linear-gradient(90deg, #01c3fa, #1296fa);
}
.avatar-uploader {
  margin: 0 auto;
}
.el-form-item__label {
  text-align: left;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-dialog__footer {
  text-align: center;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.btn {
  width: 100%;
  height: 40px;
}
</style>