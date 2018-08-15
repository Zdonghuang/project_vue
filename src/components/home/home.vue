<template>
  <el-container>
    <el-header>
      <div class="logo-box">
        <img src="../../assets/images/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :style="collapse ? 'width: 64px;' : 'width: 200px;'">
        <div class="toggle_bar" @click="collapse=!collapse">|||</div>
        <!-- 左侧的menu菜单 开始 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" :unique-opened="true" :collapse="collapse" :collapse-transition="false" :router="true">
          <!-- 子菜单 -->
          <el-submenu :index="item.id + ''" v-for="(item, i) in menuList" :key="item.id" :style="collapse ? 'width: 64px;' : 'width: 200px;'">
            <template slot="title">
              <i :class="['iconfont', iconList[i]]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 子菜单的 Item 项 -->
            <!-- 如果要为 el-menu-item 开启路由模式,需要 通过 index 属性,作为路由要跳转的地址 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <i class="el-icon-menu"></i>
              <span>{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 左侧menu菜单 结束 -->
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import min from './home-mix.js'

export default {
  mixins: [min]
}
</script>
<style lang="less" scoped>
.el-container{
  height: 100%;
  .el-header{
    height: 60px;
    background-color: #373d41;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 0;
    .logo-box {
      display: flex;
      color: white;
      font-size: 22px;
      align-items: center;
      user-select: none;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
  }
  }
  .el-aside{
    background-color: #333744;
  }
  .iconfont{
    margin-right: 6px;
  }
  .el-menu span{
    font-size: 13px;
    user-select: none;
  }
  .toggle_bar{
    text-align: center;
    color: #fff;
    cursor: pointer;
    background-color: #4a5064;
    letter-spacing: 0.1em;
    user-select: none;
  }
}
</style>
