<script setup lang="js">
import { ref, onMounted } from 'vue';
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

onMounted(() => {
    getMessage();
});
</script>

<template>
    <div class="container">
        <p>{{ message }}</p>
        <button type="button" class="btn btn-primary" @click="getMessage">
            Get Message!
        </button>
    </div>
</template>
