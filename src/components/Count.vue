<template>
    <div class="count">
        <h2>我的数字是:{{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>    
        <button @click="add">增加</button>
        <button @click="minus">减少</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import {ref} from 'vue'
// 当前求得和
let sum = ref(1)
// 用户选择的数字
let n = ref(1)

// 方法
function add(){
    sum.value +=n.value
}

function minus(){
    sum.value -=n.value
}


</script>

<style scoped>
.count{
    background-color: aqua;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin:0 5px;
    height:30px;
}
</style>