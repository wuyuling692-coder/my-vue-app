<template>
    <div class="person">
                   
    </div>   
</template>

<script lang="ts" setup name="Person">
    import { type PersonInter, type Persons } from '@/types';

    let PersonList :Persons = [
        {id:'asyud7asfd01',name:'王一',age:18},
        {id:'asyud7asfd02',name:'王三',age:17},
        {id:'asyud7asfd03',name:'王五',age:88}
    ]

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
