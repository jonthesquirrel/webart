<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const characterPossibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
})
</script>

<template>
    <div class="rain">
    </div>
</template>

<style scoped>
.rain {
    color: limegreen;
    font-family: monospace;
    user-select: none;
}
</style>