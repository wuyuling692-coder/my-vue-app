<template>
    <div class="home">
        <h3>🏠 欢迎来到首页</h3>
        <p>今天是 {{ today }}</p>
        <div class="card">
            <p>这是一个 Vue + TypeScript + Vue Router 的练习项目。</p>
            <p>点击上方导航切换页面。</p>
        </div>
    </div>
</template>

<script lang="ts" setup name="Home">
import { ref } from 'vue'
const today = ref(new Date().toLocaleDateString('zh-CN'))
</script>

<style scoped>
.home { padding: 20px; }
h3 { color: #409eff; }
.card {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    margin-top: 15px;
}
</style>
