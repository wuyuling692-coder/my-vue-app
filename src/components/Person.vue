<template>
    <div class="person">
        <div>{{ fullname }}</div>
        
        <button @click="changeFullName">修改名字</button>
        
    </div>
    
</template>

<script lang="ts">
import { ref,computed } from 'vue'

export default {
    name: 'Person',
    setup() {
        let person=ref({
        })

        let firstname=ref('xing')
        let lastname=ref('mei')
        

        let fullname=computed({
            get(){
                return firstname.value+'-'+lastname.value
            },
            set(value:string){
                const [first, last] = value.split('-')
                firstname.value = first
                lastname.value = last
            }
        }
      
        )
        function changeFullName(){
            fullname.value ='ha-ha'
        }
    
        return {firstname,lastname,fullname,changeFullName }
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
