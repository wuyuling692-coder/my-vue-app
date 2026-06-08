<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <button @click="showLog">点我输出h2这个元素</button>                
    </div>   
</template>
// ref属性：在Vue3里，导入ref方法，直接用defineExpose
// 可以直接导出所有的值，主Vue里导入分支vue里的数据，通
// 过ref获取组件实例对象。

<script lang="ts" setup name="Person">
    import { ref } from 'vue'
    let title2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showLog(){
        console.log(title2.value)
    }
    defineExpose({a,b,c,showLog})


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
