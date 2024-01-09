<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h2 class="card-title">Последние посты в Telegram канале 💬</h2>
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-for="(post, index) in posts" :key="index" class="card mb-2">
                <div class="card-body">
                    <div class="images">
                        <div v-for="(image, imgIndex) in post.photoes" :key="imgIndex" class="image">
                            <img v-if="image" :src="image" class="img-fluid">
                        </div>
                    </div>
                    <p v-if="post.text" class="card-text">
                        {{ post.text }}
                    </p>
                    <p v-if="post.caption">
                        {{ post.caption }}
                    </p>
                </div>
            </div>
            <p v-if="posts.length === 0 && !loading" class="card-text">Постов на данный момент нет. Но вы можете подписаться на блог 🫠
            </p>
        </div>
    </div>
</template>
<script setup>
import { initAxios, getFile } from '../assets/axios';
import { onMounted, ref } from 'vue';
onMounted(async () => {
    await getPosts();
})
const posts = ref([])
const chatId = '-1002134268477'
const testChatId = '-1001350297337'
const token = '6846844188:AAFVf1CLEZGQ-IsZbkYo_tQo9UrGTm9tgO0'
const loading = ref(false)
const getPosts = async () => {
    loading.value = true
    await initAxios().get(`bot${token}/getUpdates?`).then(async (response) => {
        const data = response.data.result
        const rowPosts = data.filter((item) => {
            if (Object.hasOwn(item, 'channel_post')) {
                //TODO used test id
                // return item['channel_post']['chat']['id'] === Number.parseInt(testChatId)
                return item['channel_post']['chat']['id'] === Number.parseInt(chatId)
            }
        })
        if (rowPosts.length !== 0) {
            const map = []
            for (let i = 0; i < rowPosts.length; i++) {
                const result = {}
                result.text = rowPosts[i]['channel_post']['text']
                if (rowPosts[i]['channel_post']['text']) {
                    result.text = rowPosts[i]['channel_post']['text']
                }
                if (rowPosts[i]['channel_post']['caption']) {
                    result.caption = rowPosts[i]['channel_post']['caption']
                }
                if (rowPosts[i]['channel_post']['photo']) {
                    const photoes = await getPhotoesFiles(rowPosts[i]['channel_post']['photo'])
                    result.photoes = photoes
                }
                map.push(result)
            }
            posts.value = map
        }
        loading.value = false
    })
        .catch((error) => {
            loading.value = false
            console.log(error, 'error')
        })
}
const getPhotoesFiles = async (photoes) => {
    const result = []
    for (let i = 0; i < photoes.length; i++) {
        const response = await initAxios().get(`bot${token}/getFile?file_id=${photoes[i]['file_id']}`)
        const filePath = getFile(initAxios(), response.data.result['file_path'])
        result.push(filePath)
    }
    return result
}
</script>

<style lang="scss" scoped>
.image {
    max-width: 250px;
}
</style>