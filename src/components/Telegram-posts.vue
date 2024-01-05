<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h2 class="card-title">Блог</h2>
            
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import {initAxios, getFile} from '../assets/axios';
import { onMounted, ref } from 'vue';
onMounted(async () => {
    await getPosts();
})
const posts = ref([])
const chatId = '-1002134268477'
const testChatId = '-1001350297337'
const token = '6846844188:AAFVf1CLEZGQ-IsZbkYo_tQo9UrGTm9tgO0'
const getPosts = async () => {
    await initAxios().get(`bot${token}/getUpdates`).then((response) => {
        const data = response.data.result
        const rowPosts = data.filter((item) => {
            if (Object.hasOwn(item, 'channel_post')) {
                //TODO used test id
                return item['channel_post']['chat']['id'] === Number.parseInt(testChatId)
            }
        })
        if (rowPosts.length !== 0) {
            posts.value = rowPosts.map(async(post) => {
                const result = {}
                if (post['channel_post']['text']) {
                    result.text = post['channel_post']['text']
                }
                if (post['channel_post']['caption']) {
                    result.caption = post['channel_post']['caption']
                }
                if (post['channel_post']['photo']) {
                    result.photoes = await getPhotoesFiles(post['channel_post']['photo']).then((response) => response)
                }
                console.log(result)
                return result
            })
        }
    })
        .catch((error) => {
            console.log(error, 'error')
        })
}
const getPhotoesFiles = async(photoes) => {
    //https://api.telegram.org/bot<bot_token>/getFile?file_id=the_file_id
        return photoes.map(async(photo) => {
            const response = await initAxios().get(`bot${token}/getFile?file_id=${photo['file_id']}`)
            const filePath = await getFile(initAxios(),response.data.result['file_path'])
            return filePath
            //https://api.telegram.org/file/bot<token>/<file_path>
        })
}
// getPosts();
</script>

<style lang="scss" scoped></style>