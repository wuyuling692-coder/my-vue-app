<template>
    <div class="about">
        <h3>ℹ️ 关于本项目</h3>
        <div class="info-card">
            <p><strong>技术栈：</strong>Vue 3 + TypeScript + Vue Router</p>
            <p><strong>构建工具：</strong>Vue CLI</p>
            <p><strong>请求库：</strong>Axios</p>
            <p><strong>作者：</strong>zhanglan</p>
        </div>
    </div>
</template>

<script lang="ts" setup name="About">
</script>

<style scoped>
.about { padding: 20px; }
h3 { color: #e6a23c; }
.info-card {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    margin-top: 15px;
    line-height: 2;
}
</style>
