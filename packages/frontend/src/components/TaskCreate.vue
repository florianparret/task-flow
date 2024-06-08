<template>
  <div class="container">
    <div class="form-style-2">
      <div class="form-style-2-heading">Add a Task</div>
      <form @submit.prevent="addTodo()">
        <label for="field1"
          ><span>Title <span class="required">*</span></span
          ><input
            v-model="newTask.title"
            type="text"
            class="input-field"
            name="newTask"
            autocomplete="off"
        /></label>
        <label for="field4"
          ><span>Status</span
          ><select v-model="newTask.status" name="field4" class="select-field">
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select></label
        >
        <label for="field5"
          ><span>Description <span class="required">*</span></span
          ><textarea v-model="newTask.description" name="field5" class="textarea-field"></textarea>
        </label>

        <label><span> </span><input type="submit" value="Create" /></label>
      </form>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Task = {
  title: string
  status: string
  description: string
}

const defaultTask: Task = {
  title: 'Default title',
  status: 'Done',
  description: 'Default description'
}

const newTask = ref<Task>(defaultTask)
const task = ref<Task>(newTask.value)

function addTodo(): void {
  if (newTask.value) {
    const taskToCreate: Task = {
      title: task.value.title,
      status: task.value.status,
      description: task.value.description
    }
    saveData(taskToCreate)
  }
}

async function saveData(task: Task): Promise<void> {
  console.log('Task to send:', JSON.stringify(task))
  try {
    const result: Response | void = await fetch('http://localhost:3000/api/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then((response) => {
      console.info('response', response)
    })

    console.log('Result: ', result)
  } catch (error) {
    console.error('Error:', error)
  }
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

.form-style-2 label {
  display: block;
  margin: 0px 0px 15px 0px;
}

.form-style-2 label > span {
  width: 100px;
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
}

.form-style-2 span.required {
  color: red;
}

.form-style-2 .tel-number-field {
  width: 40px;
  text-align: center;
}

.form-style-2 input.input-field,
.form-style-2 .select-field {
  width: 48%;
}

.form-style-2 input.input-field,
.form-style-2 .tel-number-field,
.form-style-2 .textarea-field,
.form-style-2 .select-field {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  -moz-box-shadow: 1px 1px 4px #ebebeb;
  -webkit-box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 7px;
  outline: none;
}

.form-style-2 .input-field:focus,
.form-style-2 .tel-number-field:focus,
.form-style-2 .textarea-field:focus,
.form-style-2 .select-field:focus {
  border: 1px solid #0c0;
}

.form-style-2 .textarea-field {
  height: 100px;
  width: 55%;
}

.form-style-2 input[type='submit'],
.form-style-2 input[type='button'] {
  border: none;
  padding: 8px 15px 8px 15px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  -moz-box-shadow: 1px 1px 4px #dadada;
  -webkit-box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
}

.form-style-2 input[type='submit']:hover,
.form-style-2 input[type='button']:hover {
  background: #ea7b00;
  color: #fff;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>
