import { getData, saveData, deleteData } from '@/api/task.api'
import type { Task } from '@/types/task.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  async function fetchData() {
    const reponse = await getData()
    if (reponse) {
      tasks.value = reponse
    }
  }

  return { fetchData, saveData, getData, deleteData, tasks }
})
