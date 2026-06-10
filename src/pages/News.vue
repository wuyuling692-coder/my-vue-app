<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->
                
                <!-- 第二种写法 -->
                 <RouterLink
                 :to="{
                    path:'/news/detail',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                 }"
            >{{news.title}}</RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
         <div class="news-content">
            <RouterView></RouterView>
         </div>
    </div>
</template>

<script lang="ts" setup name="News">
import {reactive} from 'vue'
import {RouterLink,RouterView} from 'vue-router'

const newList = reactive([
    {id:'ad01',title:'我有4条鱼',content:'鲤鱼'},
    {id:'ad02',title:'我有4头猪',content:'土猪'},
    {id:'ad03',title:'我有4只狗',content:'中华田园犬'},
    {id:'ad04',title:'我有4条裤子',content:'牛仔裤'}
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
