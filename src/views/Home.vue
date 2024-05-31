<script setup>
import {db} from "../firebase";
import {getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import {ref, onMounted} from "vue";
import ModalForm from '../components/ModalForm.vue';


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
  <div class="container">
    <div class="box">

      <h1>Usuarios</h1>
      <ModalForm @close="toggleComponent" v-if="show" :data="data" :isNew="isNew"></ModalForm>
      <!-- <ModalForm  /> -->
      <button @click="toggleComponent()">Adicionar novo</button>
     <div class="task-board">
       <div class="task" v-for="task in tasks" :key="task.id">
          <div class="nome" >Nome: {{ task.nome }}</div>
          <div class="nome" >Idade: {{ task.idade }}</div>
          <button @click="toggleComponent(docData=task, isNewDoc=false)">Editar</button>
          <button @click.stop="deleteData(task.id)">Deletar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.container {
  width: 92vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.box {
  margin-left: -30px;
  margin-top: -20px;
  width: 500px;
  height: 500px;
  background: linear-gradient(45deg, royalblue, rgb(186, 130, 238)) ;
  /* background: #fff; */
  padding: 20px;
  border: 5px #fff solid;
}

.task-board{
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  padding: 0 5% 0 5%;
  width: 90%;
  height: 450px;
  margin-bottom: 25px;
  overflow-y: scroll;
}

.task{ 
  height: 100px;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1.5px #fff solid;
}


</style>