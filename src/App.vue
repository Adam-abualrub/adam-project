?
<!-- problem:"when we click on hide Completed the selicted item will be hidden until we click on show all." -->
<script setup>
import { ref,computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  // read items from todos
  // then remove items with `done:true`
  // then return it
  // return filtered todos based on
  // `todos.value` & `hideCompleted.value`
  console.log("filteredTodos function",todos.value[0])
  console.log(hideCompleted.value)
  
  if (hideCompleted.value == false) {
    return todos.value
  }
   if (hideCompleted.value == true) {
     return todos.value.filter(hidetodo)
   }
})
function hidetodo(t){
  return ( t.done == false)
  }

function addTodo(t) {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''

}


function removeTodo(todo) {
  console.log("removeTodo function",todo)
  todos.value = todos.value.filter((todo_item) => todo_item !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholSder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? ' Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>