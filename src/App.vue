<template>
    <div>
       <Person a="哈哈" :list="personList"/>
    </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import {type Persons} from'@/types'

    let personList=reactive<Persons>([
        {id:'a01',name:'爱奇艺',age:30},
        {id:'a02',name:'优酷',age:20},
        {id:'a02',name:'北京',age:0}
    ])
    

</script>



