<script setup>
import { onMounted } from 'vue'
import { sample } from 'lodash-es'
onMounted(() => {
    const characterPossibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')

    const getViewportWidthInCharacters = () => Math.ceil(window.innerWidth / parseFloat(window.getComputedStyle(document.body).fontSize) * 2.05)
    const getViewportHeightInCharacters = () => Math.ceil(window.innerHeight / parseFloat(window.getComputedStyle(document.body).fontSize) * 1.1)
    // not completely accurate but close enough

    let trails = []

    const addTrail = () => {
        let trail = {
            element: document.createElement('div')
        }
        trail.element.classList.add('trail')
        document.querySelector('.rain').appendChild(trail.element)
        for (let i = 0; i < getViewportHeightInCharacters(); i++) {
            let character = document.createElement('span')
            character.classList.add('character')
            character.innerText = sample(characterPossibilities)
            trail.element.appendChild(character)
        }
        trails.push(trail)
    }

    const removeTrail = () => {
        let trail = trails.pop()
        trail.element.remove()
    }

    const updateTrails = () => {
        const currentWidth = trails.length
        const viewportWidth = getViewportWidthInCharacters()
        if (currentWidth < viewportWidth) {
            for (let i = currentWidth; i < viewportWidth; i++) {
                addTrail()
            }
        } else if (currentWidth > viewportWidth) {
            for (let i = currentWidth; i > viewportWidth; i--) {
                removeTrail()
            }
        }
    }

    updateTrails()
    setInterval(updateTrails, 1000)
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