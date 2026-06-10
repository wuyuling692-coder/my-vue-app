import {ref,reactive} from 'vue'
    import axios from 'axios'

    export default function (){
        let sum = ref(0)
    function add(){
        sum.value+=1
    }return{sum,add}
}
    
    