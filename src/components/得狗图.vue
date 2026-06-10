<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
    <hr>
    <!-- 循环狗图片数组，每张图片的地址动态绑到 src 上，用 index 做唯一编号 -->
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一只狗</button>
</template>

<script lang="ts" setup name="Person">
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

// 打开 useSum 工具箱，把里面的 sum 和 add 拿出来直接用。
const{sum,add}=useSum()
// 拿到狗相关的：狗图片列表、获取函数
const{dogList,getDog}=useDog()


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
img{
    width:200px
}
</style>
