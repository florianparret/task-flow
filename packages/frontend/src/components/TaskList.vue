<template>
  <div class="container">
    <h2>Task List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{ todo.content }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list.</h4>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const defaultData = [
  {
    done: false,
    content: 'Write a blog post'
  }
]
const todosData = defaultData
const todos = ref(todosData)

function doneTodo(todo: any) {
  todo.done = !todo.done
  saveData()
}
function removeTodo(index: any) {
  todos.value.splice(index, 1)
  saveData()
}
function saveData() {
  const storageData = JSON.stringify(todos.value)
  localStorage.setItem('todos', storageData)
}
console.log(import.meta.env.VITE_BASE_URL)
</script>

<style scoped>
.container {
  margin: 20px;
  padding: auto;
}
</style>
