<script setup>
import { onMounted } from "vue";
import useQuotes from '../composables/random_qoute_generator.js'
const { currentquote, getRandomQuote } = useQuotes();
onMounted(currentquote)
</script>
<template>
  <button @click="getRandomQuote">random</button>
  <h1>{{ currentquote.text }}</h1>
  <h1>{{ currentquote.author }}</h1>
  <h1>{{ currentquote.meaning }}</h1>
</template>
