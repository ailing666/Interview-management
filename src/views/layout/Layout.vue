<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <ul>
          <li class="el-icon-s-fold f20"></li>
          <li>
            <img src="@/assets/img/layout-logo.png" class="logo" alt />
          </li>
          <li>面试后台管理系统</li>
          <li class="empty"></li>
          <li>
            <img src="@/assets/img/layout-avatar.png" alt />
          </li>
          <li>艾玲,您好</li>
          <li>
            <el-button type="primary" class="btn">退出</el-button>
          </li>
        </ul>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="0">
              <i class="el-icon-setting"></i>
              <span slot="title">数据概览</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">题库列表</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">企业列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">学科列表</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.layout {
  .header {
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 2px 5px -2px rgba(63, 63, 63, 0.35);
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      .f20 {
        font-size: 20px;
      }
      .logo {
        margin: 0 10px;
      }
      .empty {
        flex: 1;
      }
      .btn {
        text-align: center;
        padding: 0;
        width: 57px;
        height: 28px;
        margin-left: 15px;
      }
    }
  }
  .aside {
    width: 201px;
    height: 769px;
    background: #ffffff;
    box-shadow: 0px 9px 5px -1px rgba(63, 63, 63, 0.35);
  }
  .main {
    background-color: #e8e9ec;
  }
}
</style>