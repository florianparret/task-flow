<template>
  <header>
    <h1>Tasks</h1>
  </header>
  <div class="container">
    <div v-for="(todo, index) in tasks" :key="index" class="card-item">
      <h1 :id="todo._id" :class="{ done: todo }">{{ todo.title }}</h1>
      <p class ="description">Description : {{ todo.description }}</p>
      <p class ="status">Status : {{ todo.status }}</p>
      <div class="card-actions">
        <button @click="showModal(index)" class="btn btn-primary">Edit</button>
        <button @click="removeTodo(index)" class="btn btn-danger">Delete</button>
        <div>
          <div id="myModal" class="modal" :style="{ display: modalDisplay }">
            <div class="modal-content">
              <span class="close" @click="closeModal">&times;</span>
              <div class="form-style-2">
                <div class="form-style-2-heading">Edit Task</div>
                <form @submit.prevent="updateTodo(taskToUpdate)">
                  <label for="field1"><span>Title <span class="required">*</span></span><input v-model="taskToUpdate.title" type="text"
                      class="input-field" name="task" autocomplete="off" placeholder="Task title" /></label>
                  <label for="field2"><span>Status</span><select v-model="taskToUpdate.status" name="field2" class="select-field">
                      <option value="To do">To do</option>
                      <option value="In progress">In progress</option>
                      <option value="Done">Done</option>
                    </select></label>
                  <label for="field3"><span>Description</span><textarea v-model="taskToUpdate.description" name="field3" class="textarea-field"
                      placeholder="Task description..."></textarea>
                  </label>

                  <label><span> </span><input type="submit" value="Edit" /></label>
                </form>
              </div>
            </div>
          </div>
        </div>
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
  let isSure: boolean = window.confirm("Are you sure you want to delete this task?")
  if (isSure) {
    if (tasks) {
      console.log("data :", tasks.value[index]._id)
      const taskId = tasks.value[index]._id
      if (taskId) {
        await store.deleteData(taskId)
        await store.fetchData()
      }
    }
  }
}
const taskToUpdate = ref<Task>({
    _id: '',
    title: '',
    description: '',
    status: ''
  })

async function updateTodo(task: Task) {
  await store.updateData(taskToUpdate.value)
  await store.fetchData()
  closeModal()
}

const modalDisplay = ref("none");
function showModal(index: number) {
  console.log('showModal');
  modalDisplay.value = "block"
  taskToUpdate.value = tasks.value[index]
};
const closeModal = () => (modalDisplay.value = "none");
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}

.card-item {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 2rem;
  max-width: 20rem;
  max-height: 25rem;
  line-height: 3rem;
  background-color: black;
  color: aliceblue;
  position: relative;
}

.card-item:hover{ 
     box-shadow: 1px 8px 20px grey;
    -webkit-transition:  box-shadow .6s ease-in;
    transition:  box-shadow .6s ease-in;
  }

.card-actions {
  position: absolute;
  bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  color: black;
  border-radius: 2rem;
}

.status {
  margin-bottom: 3rem;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

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
  background: #0c0b09;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  -moz-box-shadow: 1px 1px 4px #dadada;
  -webkit-box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  cursor: pointer;
}

.form-style-2 input[type='submit']:hover,
.form-style-2 input[type='button']:hover {
  background: #007bff;
  color: #fff;
}
</style>