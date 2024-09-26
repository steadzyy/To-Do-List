<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue';

</script>

<template>
    <section class="wrapper">
        <Card /> 
    </section>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
