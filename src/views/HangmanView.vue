<template>
    <ProjectContent :tech-stack="techStack" :images="images" :github-url="githubUrl" :title="title" :responsibilities="responsibilities" :achivments="achivments"/>
</template>

<script setup>
import ProjectContent from '../components/Project-content.vue';
const achivments = 'Создал игру "виселица". Изучил основы typescript. Разбил игру по компонентам. Воспроизвел все пользовательские сценарии, чтобы не было неожиданных ошибок или действий от пользователя'

const images = [
    '/src/assets/img/hangman/hangman1.jpeg',
    '/src/assets/img/hangman/hangman2.jpeg',
    '/src/assets/img/hangman/hangman3.jpeg',
]

const title = 'Виселица (hangman)'
const githubUrl = 'https://github.com/bobrov-site/todolistvue'

const techStack = [
    'Typescript',
    'Vue',
    'Vite',
    'Eslint',
    'Axios'
]
</script>

<style lang="scss" scoped>

</style>