<script setup>
import { ref, defineComponent, onMounted } from 'vue';
import {db} from "../firebase";
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";

const props = defineProps({
    data: Object,
    isNew: Boolean
})

defineComponent({
    name: 'ModalForm'
})

const emits = defineEmits(['close'])

const task = ref({
    nome: '',
    idade: ''
})

onMounted(() => {
    task.value = {...task.value, ...props.data}
})


async function ModalForm(){
    console.log('a verdade é qu e é ' + props.isNew)
    if(props.isNew){
        await addDoc(collection(db, 'tasks'), task.value).then((res) => {
            emits('close')
        })   
    } else{
        await updateDoc(doc(db, 'tasks', props.data.id), task.value).then((res) => {
            emits('close')
        })
    }

   
}
</script>

<template>
    <transition name="modal">
        <div class="model-overlay">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <input type="text" placeholder="Coloca teu nome" name="" id="" v-model="task.nome">
                    <input type="text" placeholder="Coloca tua idade" name="" id="" v-model="task.idade">
                <button @click="emits('close')">Close</button>
                <button @click="ModalForm()">{{ isNew ? 'Add' : 'Update'}}</button>
                    
            </div>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    transition: opacity .3 ease;
}

.modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.modal-container {
    background-color: #fff;
    width: 300px;
}

input,
textarea {
    width: 90%;
    margin: auto;
    margin: 20px;
    overflow: hidden;
}

template{
    overflow-y: hidden;
}
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 35px;
    margin-bottom: -1rem;
    margin-top: 75px;
    height: 45rem;
    background-color: rgb(84, 209, 0);
    width: 100vw;
    animation-name: show;
    animation-duration: .5s;
}

#titulo{
    margin-top: 1rem;
    margin-left: .5rem;
    width: 16rem;
    font-size: 34px;
}

#texto{
    font-size: 18px;
    margin-top: 1rem;
    width: 20rem;
    height: 37rem;
    margin-bottom: 18rem;
}

@keyframes show {
  from { margin-top: 1350px; }

  to { margin-bottom: -2rem; }
}
</style>