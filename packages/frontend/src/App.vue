<script setup lang="ts"></script>

<template>
<header>
    <h1>TaskFlow</h1>
</header>
<FormView />
</template>

<script setup lang="ts">
import FormView from "./view/FormView.vue";
</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}
</style>
