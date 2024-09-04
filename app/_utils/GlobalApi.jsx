const {default:axios} = require("axios")

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api'
})

//(?populate=*) if we add this in url it will show the icons
const getCategory=()=>axiosClient.get('/categories?populate=*')

export default {
    getCategory
}