<script setup>
import { ref } from 'vue'

// states and functions
const text_value = ref("")
const submitted_text = ref("")
const items = ref([{ message: 'Foo' }, { message: 'Bar' },{ message: submitted_text }])

// function Add() {
//   submitted_text.value = text_value.value
// }
function Add() {
 items.value.push({ message: text_value.value}) 
}

</script>

<template>
  
  <input v-model="text_value" type="text" placeholder="type here">
  <button @click="Add">submit</button>
  <h2>{{ submitted_text}}</h2>
  <li v-for="item in items">
  {{ item.message }}
</li>
</template>
