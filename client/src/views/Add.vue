<script setup>
import { ref } from 'vue';

const todo = ref("");

function clear() {
    todo.value = "";
}
</script>

<template>
    <section class="wrapper">
        <form v-on:submit.prevent="$emit('addTodo', { todo: todo.value, clear })">
            <h1 class="title">Input Your To-Do </h1>
            <div class="form-control">
                <label for="todo">To-Do : </label>
                <input 
                    type="text" 
                    v-model="todo" 
                    id="todo" 
                    placeholder="Your to-do..." 
                    style="margin-left: 5px;"
                    required 
                />
            </div>
            <button type="submit" class="btn btn-primary">Add Your To-Do</button>
        </form>
    </section>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-control {
    margin-bottom: 15px; 

}

.title {
    margin-bottom: 20px; 
    text-align: center; 
}

.btn {
    width: 100%; 
}
</style>
