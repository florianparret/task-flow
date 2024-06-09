<template>
  <div class="container">
    <div class="form-style-2">
      <div class="form-style-2-heading">Create a new Task</div>
      <form @submit.prevent="addTask()">
        <label for="field1"><span>Title <span class="required">*</span></span><input v-model="task.title" type="text"
            class="input-field" name="task" autocomplete="off" placeholder="Task title" /></label>
        <label for="field2"><span>Status</span><select v-model="task.status" name="field2" class="select-field">
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select></label>
        <label for="field3"><span>Description</span><textarea v-model="task.description" name="field3"
            class="textarea-field" placeholder="Task description..."></textarea>
        </label>

        <label><span> </span><input type="submit" value="Create" /></label>
      </form>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTaskStore } from '@/stores/task.store'
import type { Task } from '@/types/task.type';

const store = useTaskStore()

const defaultTask: Task = {
  title: '',
  status: 'Done',
  description: ''
}

const task = ref<Task>(defaultTask)

async function addTask(): Promise<void> {
  if (task.value.title) {
    const taskToCreate: Task = {
      title: task.value.title,
      status: task.value.status,
      description: task.value.description
    }
    await store.saveData(taskToCreate)
    await store.fetchData()
  }
}

watch(task.value, (newTask) => {
  console.log(`x is ${newTask}`)
})
</script>

<style scoped>
.form-style-2 {
  padding: 20px 12px 10px 20px;
  font:
    13px Arial,
    Helvetica,
    sans-serif;
    border-radius: 2rem;
    background-color: black;
    color: aliceblue;
    width: 100%;
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

.form-style-2 label>span {
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
  background: #aba597;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  -moz-box-shadow: 1px 1px 4px #dadada;
  -webkit-box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  cursor: pointer;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
