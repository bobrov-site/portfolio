<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h2 class="card-title">Последние посты в Telegram канале 💬</h2>
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-for="(post, index) in getLastPosts" :key="index" class="card mb-2">
                <div class="card-body">
                    <div class="card-content card-content-telegram" v-html="post.content_html"></div>
                    <a :href="post.url" class="btn btn-primary mt-2">Перейти к посту</a>
                </div>
            </div>
            <a v-if="posts.length !==0" href="https://t.me/bobrov_frontend" target="_blank" class="btn btn-lg btn-primary">Перейти в
                канал</a>
            <div v-if="posts.length === 0 && !loading">
                <p class="card-text">Ошибка загрузки. Попробуйте позже. Но вы можете подписаться на блог 🫠</p>
                <a href="https://t.me/bobrov_frontend" target="_blank" class="btn btn-lg btn-primary">Перейти в канал</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';
onMounted(async () => {
    await getPosts();
    addClassToImages();
})
const posts = ref([])
const loading = ref(false)
const getLastPosts = computed(() => {
    return posts.value.slice(0, 5)
})
const getPosts = async () => {
    const url = 'https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40bobrov_frontend&format=Json';
    loading.value = true;

    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Timeout after 3 seconds')), 3000);
    });

    try {
        const response = await Promise.race([
            axios.get(url),
            timeoutPromise
        ]);
        posts.value = response.data.items;
    } catch (e) {
        console.error(e.message); // Отобразить сообщение об ошибке, если нужно
    } finally {
        loading.value = false;
    }
};
const addClassToImages = () => {
    const cardContent = document.getElementsByClassName('card-content');
    const arrayCardContent = Array.from(cardContent)
    arrayCardContent.map((item) => {
        const img = item.querySelector('img')
        if (img !== null) {
            img.classList.add('card-img')
        }
    })
}
</script>

<style lang="scss">
.card-content-telegram {
    img {
        max-height: 250px;
        object-fit: cover;
        width: 100%;
    }
}
</style>