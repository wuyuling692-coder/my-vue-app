<template>
    <div class="news">
        <h3>📰 新闻列表</h3>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <span class="title">{{ item.title }}</span>
                <span class="time">{{ item.time }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue'
const newsList = reactive([
    { id: 1, title: 'Vue 3.5 正式发布，响应式系统全面升级', time: '2025-09-01' },
    { id: 2, title: 'TypeScript 5.6 带来更快的类型检查', time: '2025-09-05' },
    { id: 3, title: 'Vite 6 进入公测阶段，构建速度再翻倍', time: '2025-09-10' },
])
</script>

<style scoped>
.news { padding: 20px; }
h3 { color: #67c23a; }
ul { list-style: none; padding: 0; }
li {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
}
.title { color: #333; }
.time { color: #999; font-size: 14px; }
</style>
