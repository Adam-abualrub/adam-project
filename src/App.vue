<script setup>
import { ref } from 'vue'

// states and functions
const text_value = ref("")
const submitted_text = ref("")
const school_items = ref([])
const chore_items = ref([])

function Add_school() {
 school_items.value.push({ message: text_value.value}) 
}
 function Add_chore() {
 chore_items.value.push({ chore_message: text_value.value}) 
}
function school_reset() {
school_items.value = []
}
function chore_reset() {
chore_items.value = []
}

</script>

<template>
  
  <input v-model="text_value" type="text" placeholder="type here">
  <button @click="Add_school">add school</button>
  <button @click="Add_chore">add chore</button>
  
  <button @click="reset">reset</button>
  <h2>school</h2> 
  <li v-for="item in school_items">
  {{ item.message }}
</li>

<h2>chore</h2>
  
  <li v-for="item_chore in chore_items">
   {{ item_chore.chore_message }} 
</li>

</template>
