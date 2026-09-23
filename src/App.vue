<script setup>
import { ref } from 'vue'

// states and functions
const text_value = ref("")
const submitted_text = ref("")
const items = ref([{ message: 'Foo' }, { message: 'Bar' },])

function Add() {
 items.value.push({ message: text_value.value}) 
}
function reset() {
items.value = []
}

</script>

<template>
  
  <input v-model="text_value" type="text" placeholder="type here">
  <button @click="Add">submit</button>
  <button @click="reset">reset</button>
  <h2>{{ submitted_text}}</h2>
  <li v-for="item in items">
  {{ item.message }}
</li>
</template>
