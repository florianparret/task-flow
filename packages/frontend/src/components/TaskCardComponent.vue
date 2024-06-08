<template>
  <header>
    <h1>Tasks</h1>
  </header>
  <div class="container">
    <div v-for="(todo, index) in tasks" :key="index" class="card-item">
      <h1 :id="todo._id" :class="{ done: todo }">{{ todo.title }}</h1>
      <p>Description : {{ todo.description }}</p>
      <p>Status : {{ todo.status }}</p>
      <div class="card-actions">
        <button @click="updateTodo(index)"  class="btn btn-primary">Edit</button>
        <button @click="removeTodo(index)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTaskStore } from '@/stores/task.store'
import type { Task } from '@/types/task.type';

const store = useTaskStore()

await store.fetchData()

const tasks = computed<Task[]>(() => store.tasks)

async function removeTodo(index: number) {
  if (tasks) {
    console.log("data :", tasks.value[index]._id)
    const taskId = tasks.value[index]._id
    if (taskId) {
      await store.deleteData(taskId)
      await store.fetchData()
    }
  }


  /*   console.log('index to remove:', index)
    console.log(dat)
  
    const taskId = todos.value[index]._id
    todos.value.splice(index, 1)
  
    deleteData(taskId) */
}
function updateTodo(index: number) {
  //TO DO
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  max-width: 20rem;
  max-height: 25rem;
}

.card-actions {
  display: flex;
  justify-content: space-between;
}
</style>