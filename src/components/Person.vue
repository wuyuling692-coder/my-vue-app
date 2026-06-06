<template>
    <div class="person">
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <button @click="changeName">修改汽车的价格</button>
        <button @click="changeAge">修改汽车</button>
        <button @click="changeAge">修改汽车2</button>
        
    </div>
    
</template>

<script lang="ts">
import { reactive,toRefs } from 'vue'

export default {
    name: 'Person',
    setup() {
        let person=reactive({
            name:'张三',
            age:18
        })

        let{name,age}=toRefs(person)
        

        function changeName() {
            name.value += '~'
        }
        function changeAge(){
            age.value += 1
        }
    
        return { name,age,changeName,changeAge }
    }
}
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
