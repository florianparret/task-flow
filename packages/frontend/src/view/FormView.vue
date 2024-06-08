<template>
    <TaskCreate />
    <hr>
    <Suspense>
        <TaskCardComponent />
        <template #fallback>
            <p>Loading...</p>
        </template>
    </Suspense>
    
</template>

<script setup lang="ts">
import TaskCreate from '@/components/TaskCreate.vue';
import TaskList from '@/components/TaskList.vue';
import TaskCardComponent from '@/components/TaskCardComponent.vue';
</script>

<style></style>