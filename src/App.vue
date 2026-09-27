<script setup>
import { ref } from 'vue'

// states and functions
const text_value = ref("")
const submitted_text = ref("")
const school_items = ref([])
const chore_items = ref([])
const hobby_items = ref([])

function Add_school() {
  school_items.value.push({ message: text_value.value })
}
function Add_chore() {
  chore_items.value.push({ chore_message: text_value.value })
}
function Add_hobby() {
  hobby_items.value.push({ hobby_message: text_value.value })
}
function reset() {
  school_items.value = []
  chore_items.value = []
  hobby_items.value = []
}

</script>

<template>

  <input v-model="text_value" type="text" placeholder="type here">
  <button @click="Add_school">add school</button>
  <button @click="Add_chore">add chore</button>
  <button @click="Add_hobby">add hobby</button>

  <button @click="reset">reset</button>
  <div class="output">
    <div class="output-boxes">
      <h2>school</h2>
      <li v-for="item in school_items">
        {{ item.message }}
      </li>
    </div>



    <div class="output-boxes">
      <h2>chore</h2>

      <li v-for="item_chore in chore_items">
        {{ item_chore.chore_message }}
      </li>
    </div>
    <div class="output-boxes">
      <h2>hobby</h2>

      <li v-for="item_hobby in hobby_items">
        {{ item_hobby.hobby_message }}
      </li>
    </div>
  </div>
</template>
<style>
.output {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.output-boxes {
  display: flex;
  flex-direction: column;
}
</style>