import type { Task } from "@/types/task.type"


async function saveData(task: Task): Promise<void> {
    console.log('Task to send:', JSON.stringify(task))
    try {
      const result: Response | void = await fetch(import.meta.env.VITE_BASE_URL + "/tasks", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }).then((response) => {
        console.info('response', response)
/*         if (response.ok) {
          getData()
        } */
      })
  
      console.log('Result: ', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function getData(): Promise<Task[] | undefined> {
    try {
      const result = await fetch(import.meta.env.VITE_BASE_URL + "/tasks", {
        method: 'GET',
      })
      console.log('Result from API received:', result)
      return result.json();
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function deleteData(id: String): Promise<void> {
    console.log('Task id to delete :', id)
    try {
      const result: Response | void = await fetch(import.meta.env.VITE_BASE_URL + "/tasks/" + id, {
        method: 'DELETE',
      }).then((response) => {
        console.info('response', response)
      })
  
      console.log('Result: ', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  export { saveData, getData, deleteData }