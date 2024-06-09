<template>
    <TaskCreateComponent />
    <hr>
    <Suspense>
        <TaskListComponent />
        <template #fallback>
            <p>Loading...</p>
        </template>
    </Suspense>
    
</template>

<script setup lang="ts">
import TaskCreateComponent from '@/components/TaskCreateComponent.vue';
import TaskListComponent from '@/components/TaskListComponent.vue';
</script>

<style></style>