<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一条土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
        
    </div>
</template>

<script setup lang="ts" name="Count">
import {reactive} from 'vue'
import axios from 'axios'
import {nanoid} from 'nanoid'
let talkList = reactive([
    {id:'tw01',title:'从前有个女娃叫小芳，'},
    {id:'tw02',title:'小芳长得貌美如花，'},
    {id:'tw02',title:'但是小芳喜欢抠脚。'}
])

async function getLoveTalk(){
    let result=await axios.get('https://v1.hitokoto.cn/')
    let obj = {id:nanoid(),title:result.data.hitokoto}
    talkList.unshift(obj)
}


</script>

<style scoped>
    .talk{
    background-color: orangered;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin:0 5px;
    height:30px;
}
</style>
