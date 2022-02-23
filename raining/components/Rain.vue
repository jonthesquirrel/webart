<script setup>
import { onMounted } from 'vue'
import { sample } from 'lodash-es'
onMounted(() => {
    const characterPossibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')

    const getViewportWidthInCharacters = () => window.innerWidth / parseFloat(window.getComputedStyle(document.body).fontSize) * 2.05
    const getViewportHeightInCharacters = () => window.innerHeight / parseFloat(window.getComputedStyle(document.body).fontSize) * 1.1
    // not completely accurate but close enough

    let trails = []

    const addTrail = () => {
        let trail = {
            element: document.createElement('div')
        }
        trail.element.classList.add('trail')
        document.querySelector('.rain').appendChild(trail.element)
        trails.push(trail)

        for (let i = 0; i < getViewportHeightInCharacters(); i++) {
            let character = document.createElement('span')
            character.classList.add('character')
            character.innerText = sample(characterPossibilities)
            trail.element.appendChild(character)
        }
    }

    const removeTrail = () => {
        let trail = trails.pop()
        trail.element.remove()
    }

    for (let i = 0; i < getViewportWidthInCharacters(); i++) {
        addTrail()
    }

    // const updateTrails = () => {
    //     addTrail()
    // }

    // setInterval(updateTrails, 1000)
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