import { reactive, toRefs } from "vue";


const formStore = reactive ({
    IsFormShow: 1,
})

export function useForm() {

    const viewForm = async () => {
        if(formStore.IsFormShow < 20){
            formStore.IsFormShow++
        }
        else{
            console.log("limit reach");
        }
        
    }

    const hideForm = async () => {
        if(formStore.IsFormShow > 1){
            formStore.IsFormShow--
        }
        else{
            console.log('too low');
        }
    }


    return {
        ...toRefs(formStore),
        viewForm,
        hideForm
    }
}