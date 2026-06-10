<template>
    <div class="app">
       <h2>Vue路由测试</h2>
       <!-- 导航按钮 -->
       <div class="navigate">
        <RouterLink to="/home" active-class="pp">首页</RouterLink>
        <RouterLink to="/news" active-class="pp">新闻</RouterLink>
        <RouterLink to="/about" active-class="pp">关于</RouterLink>
       </div>
       <!-- 内容区 -->
       <div class="main-content">
        <RouterView></RouterView>
       </div>
    </div>
</template>

<script lang="ts" setup name="App">
        import {RouterView,RouterLink} from 'vue-router'



</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
/* 导航按钮区 */
.navigate {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.nav-btn {
  padding: 10px 30px;
  border: 2px solid #409eff;
  background: #fff;
  color: #409eff;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}
.nav-btn:hover {
  background: #409eff;
  color: #fff;
}
.nav-btn.active {
  background: #409eff;
  color: #fff;
}
/* 内容区 */
.main-content {
  width: 100%;
}
.input-area {
  width: 100%;
  height: 400px;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s;
}
.input-area:focus {
  border-color: #409eff;
}
.input-area::placeholder {
  color: #bbb;
}
</style>



