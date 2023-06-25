<script setup lang="js">
import { ref } from 'vue';
import axios from 'axios';

const message = ref("Hello");

function getMessage() {
    const path = "http://localhost:5000/ping";
    axios.get(path).then((response) => {
        message.value = response.data;
    }).catch((error) => {
        message.value = error;
    });
}
</script>

<template>
    <div>
        <p>{{ message }}</p>
        <button @click="getMessage">Get Message!</button>
    </div>
</template>

