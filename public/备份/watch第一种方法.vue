<template>
    <div class="person">
        <div>sum:{{ sum }}</div>
        <br>
        <div>number:{{ number }}</div>
        <br>
        <div>仆人:{{ king }}</div>

        
        <button @click="changeSum">修改总和</button>
        <button @click="deleteSum">减法</button>
        <br>
        <button @click="changeNumber">修改总和</button>
        <button @click="deleteNumber">减法</button>
        
    </div>
    
</template>

<script lang="ts" setup>
import { ref,watch,computed } from 'vue'
const sum=ref(0)
function changeSum(){
    sum.value+=1
}

function deleteSum(){
    sum.value-=1
}

const number=ref(0)
function changeNumber(){
    number.value+=1
}

function deleteNumber(){
    number.value-=1
}

const king=computed(()=>{
    return sum.value+number.value
})
watch(king,()=>{
    console.log('king变化了')
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
