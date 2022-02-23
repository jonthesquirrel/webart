<script setup>
import Trail from './Trail.vue'
</script>

<template>
    <div class="rain">
        <Trail v-for="n in 200"></Trail>
    </div>
</template>

<style scoped>
.rain {
    overflow: hidden;
    width: auto;
}
</style>