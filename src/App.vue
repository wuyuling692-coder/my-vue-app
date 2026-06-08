<template>
    <div>
        <h2 ref="title2">牙齿p p</h2>  
        <button @click="showLog">点我输出h2这个元素</button>  
       <Person ref="ren"></Person>
    </div>
</template>

<script lang="ts" setup name="App">
// ref属性：在Vue3里，导入ref方法，直接用defineExpose
// 可以直接导出所有的值，主Vue里导入分支vue里的数据，通
// 过ref获取组件实例对象。
    import Person from './components/Person.vue'
    import {ref}from'vue'
    let title2=ref()
    let ren=ref()
    function showLog(){
        console.log('组件实例:', ren.value)
        console.log('a =',ren.value.showLog())
        console.log('b =')
        console.log('c =')
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


