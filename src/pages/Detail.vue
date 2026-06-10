<template>
    <ul class="new-list">
        <li>编号：{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}3</li>
    </ul>          
</template>

<script lang="ts" setup name="Detail">
import {useRoute} from 'vue-router'
let route = useRoute()


</script>

<style scoped>
.new-list {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

h3 {
    color: #409eff;
    font-size: 22px;
    margin-bottom: 20px;
}

.news-section {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 24px;
}

.news-section h4 {
    color: #333;
    font-size: 18px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid #409eff;
}

.news-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.news-list li {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s ease;
}

.news-list li:last-child {
    border-bottom: none;
}

.news-list li:hover {
    background: #f9fbff;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
}

.news-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    background: #409eff;
    color: #fff;
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 2px;
}

.news-body {
    flex: 1;
}

.news-title {
    color: #303133;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 6px 0;
}

.news-content {
    color: #606266;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
}
</style>
