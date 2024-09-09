const {default:axios} = require("axios")

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api'
})

//(?populate=*) if we add this in url it will show the icons
const getCategory=()=>axiosClient.get('/categories?populate=*')

const getSliders = () =>  axiosClient.get('/sliders?populate=*').then(resp => {
       return resp.data.data
    });

    const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(resp=>{
        return resp.data.data
    })

    const getAllProducts = () => axiosClient.get('/products?populate=*').then(resp=>{
        return resp.data.data
    })


export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts
}