<template>
    <div class="person">
        <div >姓名：{{ person.name }}</div>
        <button @click="changeName">更换姓名</button>
        <div >年纪：{{ person.age }}</div>    
        <button @click="changeAge">增加年纪</button>    
        <button @click="changeNewPerson">换人</button>       
    </div>
    
    
</template>

<script lang="ts" setup>
import { ref,watch,computed } from 'vue'
const person=ref({
    name:'张三',
    age:18
})

const changeName=()=>{
    person.value.name+='~'
}
const changeAge=()=>{
    person.value.age+=1
}

const changeNewPerson=()=>{
    person.value={name:'里斯',age:44}
}
// watch监听中如果要深度监视到对象里的数据需要在其后面添加deep:true;
// 立即监视用immeditate:true。
watch(person,(newValue,oldValue)=>{
    console.log('person换人了',newValue,oldValue)
},{deep:true,immediate:true})

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
