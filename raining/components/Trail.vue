<script setup>
import Character from './Character.vue'
</script>

<template>
    <div class="trail">
        <Character v-for="n in 100"></Character>
    </div>
</template>

<style scoped>
.trail {
    display: inline-block;
}
</style>