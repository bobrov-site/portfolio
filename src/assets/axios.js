import axios from 'axios'
const token = '6846844188:AAFVf1CLEZGQ-IsZbkYo_tQo9UrGTm9tgO0'
const initAxios = () => {
    return axios.create({
        baseURL: `https://api.telegram.org/`,
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    })
}

const getFile = async(api, filePath) => {
    return await api.get(`file/bot${token}/${filePath}`)
}
export  {initAxios, getFile}