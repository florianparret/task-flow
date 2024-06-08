<template>
  <div class="container">
    <div class="form-style-2">
      <div class="form-style-2-heading">Task List</div>
      <ul id="list">
        <li v-for="(todo, index) in tasks" :key="index">
          <span :id="todo._id" :class="{ done: todo }">{{ todo.title }}</span>
          <button @click="updateTodo(index)">Update</button>
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
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
.form-style-2 {
  max-width: 500px;
  padding: 20px 12px 10px 20px;
  font:
    13px Arial,
    Helvetica,
    sans-serif;
}

.form-style-2-heading {
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
  font-size: 15px;
  padding-bottom: 3px;
}

.span {
  width: 100px;
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
}

#list>li>span {
  padding-right: 1rem;
}

#list>li>button {
  margin-right: 1rem;
}

.container {
  margin: 20px;
  padding: auto;
}
</style>
