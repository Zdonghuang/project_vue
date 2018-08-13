<template>
  <div class="login-container">
    <div class="login-box">
      <div class="image-box">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <el-form :model="loginForm" :rules="loginFormrul" ref="loginFormref">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="iconfont icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password">
            <i slot="prefix" class="iconfont icon-3702mima"></i>
          </el-input>
        </el-form-item>
        <el-row>
          <el-col :offset="15">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormrul: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请您输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormref.validate(async flag => {
        if (!flag) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) {
          window.sessionStorage.removeItem('token')
          return this.$message.error('登录失败')
        } else {
          this.$message.success('登录成功')
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        }
      })
    },
    resetForm () {
      this.$refs.loginFormref.resetFields()
    }
  }
}
</script>
<style lang="less" scope>
.login-container {
  height: 100%;
  background-color: #2d4d6d;
  overflow: hidden;
  .login-box {
    width: 450px;
    height: 304px;
    border-radius: 4px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .image-box {
      width: 130px;
      height: 130px;
      box-shadow: 0 0 10px #eee;
      border-radius: 50%;
      background-color: #fff;
      padding: 8px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .el-form {
      position: absolute;
      bottom: 0;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
