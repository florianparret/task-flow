import type { Task } from "@/types/task.type"


async function saveData(task: Task): Promise<void> {
    try {
      const result: Response | void = await fetch(import.meta.env.VITE_BASE_URL + "/tasks", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function getData(): Promise<Task[] | undefined> {
    try {
      const result = await fetch(import.meta.env.VITE_BASE_URL + "/tasks", {
        method: 'GET',
      })
      return result.json();
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function deleteData(id: String): Promise<void> {
    try {
      const result: Response | void = await fetch(import.meta.env.VITE_BASE_URL + "/tasks/" + id, {
        method: 'DELETE',
      }).then((response) => {
        console.info('response', response)
      })
  
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function updateData(task: Task): Promise<void> {
    try {
      const result: Response | void = await fetch(import.meta.env.VITE_BASE_URL + "/tasks/" + task._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }).then((response) => {
        console.info('response', response)
      })

    } catch (error) {
      console.error('Error:', error)
    }
  }

  export { saveData, getData, deleteData, updateData }