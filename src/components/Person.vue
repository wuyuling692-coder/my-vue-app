<template>
    <div class="person">
         <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}--{{ item.age }}
            </li>
         </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { type Persons } from '@/types';

    // 只接收list
    // const props = defineProps(['list'])
    // const personlist = props.list
    // console.log( personlist)

    // 只接收list+限制类型
    // const props=defineProps<{list:Persons}>()
    // const personlist = props.list
    // console.log( personlist)

    // 接收list+限制类型+限制必要性+指定默认值
    withDefaults(defineProps<{list?:Persons}>(),{
        list:()=>[{id:'ad05',name:"康师傅",age:8}]
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
