<script setup>
import { onMounted } from "vue";
import useQuotes from "../composables/random_qoute_generator.js";
const { currentquote, getRandomQuote } = useQuotes();
onMounted(currentquote);
</script>
<template>
  <div class="eventtriggerd">
    <h1>
      random
      <button @click.prevent="getRandomQuote">dose</button>
      of motivation
    </h1>
  </div>
  <div class="container">
    <h1>quote: {{ currentquote.text }}</h1>
    <h1>giver:{{ currentquote.author }}</h1>
    <h1>what it mean:{{ currentquote.meaning }}</h1>
  </div>
</template>
