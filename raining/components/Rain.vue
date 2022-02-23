<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    for (let i = 0; i < 200; i++) {
        let trail = document.createElement('div')
        trail.classList.add('trail')
        document.querySelector('.rain').appendChild(trail)
        for (let i = 0; i < 100; i++) {
            let letter = document.createElement('span')
            letter.classList.add('letter')
            letter.innerText = 'L'
            trail.appendChild(letter)
        }
    }
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
}
</style>