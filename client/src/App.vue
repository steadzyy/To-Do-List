<script setup>
import Navbar from './components/Navbar.vue';
import {ref} from 'vue';

const todo = ref([]);
</script>

<template>
  <Navbar />
  <RouterView /> 
</template>


