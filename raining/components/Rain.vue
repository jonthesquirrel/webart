<script setup>
import { onMounted } from 'vue'
import randomArrayItem from '../../functions/randomArrayItem'
onMounted(() => {
    const characterPossibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
    for (let i = 0; i < 200; i++) {
        let trail = document.createElement('div')
        trail.classList.add('trail')
        document.querySelector('.rain').appendChild(trail)
        for (let i = 0; i < 50; i++) {
            let character = document.createElement('span')
            character.classList.add('character')
            character.innerText = randomArrayItem(characterPossibilities)
            trail.appendChild(character)
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