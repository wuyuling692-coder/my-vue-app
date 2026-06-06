<template>
    <div class="person">
        <div>{{ person.name }}</div>
        <div>{{ person.age }}</div>
        <button @click="changeName">姓名更改</button>
        <button @click="changeAge">年龄更改</button> 
        <button @click="changeAll">更改整个人</button>                 
    </div>   
</template>

<script lang="ts" setup>
import { reactive,watch,computed } from 'vue'
const person=reactive({
    name:'张伟',
    age:28
})
const changeName=()=>{
    person.name+='~'
}
const changeAge=()=>{
    person.age+=1
}
const changeAll=()=>{
    Object.assign(person,{name:'陈赫',age:30})
}
watch(person,(newValue,oldValue)=>{
    console.log('陈赫来了',newValue,oldValue)
})


</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

.game-list {
    margin-top: 20px;
}

button {
    margin: 5px;
    padding: 6px 12px;
    cursor: pointer;
}
</style>
