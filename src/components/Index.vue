<template>
  <el-container class="index">
    <!-- 头部 -->
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="title">
        <h1>黑马50期电商管理</h1>
      </div>
      <div class="logout">
        欢迎光临~
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 添加router属性开启路由模式 -->
        <el-menu
          unique-opened
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <!-- 标题 -->
            <template v-slot:title>
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item index="users">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <!-- 标题 -->
            <template v-slot:title>
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>

            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="rights">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <!-- 准备路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // this.$confirm
      // 参数1: 提示消息
      // 参数2: 标题
      // 参数3: 配置对象
      this.$confirm('亲, 你确认要退出系统吗?', '温馨提示', {
        type: 'warning'
      })
        .then(() => {
          // 确认提示
          this.$message.success('恭喜, 退出成功')
          // 从本地清除 token
          localStorage.removeItem('token')
          // 跳转登录路由
          this.$router.push('/login')
        })
        .catch(() => {
          // 取消
          this.$message('取消退出')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  .el-header {
    background-color: #d8d8d8;
    display: flex;
    .logo {
      width: 180px;
      .img {
        height: 40px;
        margin: 10 auto;
      }
    }
    .title {
      flex: 1;
      h1 {
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #545c64;
      }
    }
    .logout {
      height: 60px;
      line-height: 60px;
      text-align: right;
      font-weight: 700;
      a {
        color: orange;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: #ecf0f1;
  }
}
</style>
