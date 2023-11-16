<template>
    <ProjectContent :siteUrl="siteUrl" :title="title" :images="images" :responsibilities="responsibilities" :achivments="achivments"/>
</template>

<script setup>
import ProjectContent from '../components/Project-content.vue';
const achivments = 'Разработал сайт на Wordpress для компании Print-boom. Сайт получился работоспособен. Сайт приносит заявки на покупку кружек и сувенирной продукции.'
const responsibilities = [
    'Разработка сайта на Wordpress по ТЗ',
]
const images = [
    '/src/assets/img/printboom/printboom1.jpeg',
    '/src/assets/img/printboom/printboom2.jpeg',
    '/src/assets/img/printboom/printboom3.jpeg',
    '/src/assets/img/printboom/printboom4.jpeg',
]

const title = 'Печать фотографий на кружках'
const siteUrl = 'https://print-boom.ru/'
</script>

<style lang="scss" scoped>

</style>