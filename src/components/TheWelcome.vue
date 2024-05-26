<script setup>
import {db} from "../firebase";
import {getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import {ref, onMounted} from "vue";
import ModalForm from './ModalForm.vue';


const tasks = ref([])

const show = ref(false)

const data = ref({})

const isNew = ref(true)

onMounted(async() => {
  let tasksCollection = await getDocs(collection(db, "tasks"));
  tasksCollection.forEach((task) => {
    console.log(task.data())
    tasks.value.push({...task.data(), id: task.id});
  });
})

function toggleComponent(docData = {}, isNewDoc= true){
  console.log(isNewDoc)
  console.log(isNew)
  show.value = !show.value
  data.value = docData
  isNew.value = isNewDoc
  console.log(isNew._value)
  console.log(isNew.value)
}

async function deleteData(id) {
  await deleteDoc(doc(db, 'tasks', id))
}
</script>

<template>
  <div>
    <ModalForm @close="toggleComponent" v-if="show" :data="data" :isNew="isNew"></ModalForm>
    <!-- <ModalForm  /> -->
    <button @click="toggleComponent()">Adicionar novo</button>
    <div v-for="task in tasks" :key="task.id">
      

      <div class="nome" >Nome:{{ task.nome }}</div>
      <button @click="toggleComponent(docData=task, isNewDoc=false)">Editar</button>
      
      <button @click.stop="deleteData(task.id)">Deletar</button>
    </div>
  </div>
</template>
