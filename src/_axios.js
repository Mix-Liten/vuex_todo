import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const API_URL = process.env.VUE_APP_API_URL || 'https://jsonplaceholder.typicode.com'
const HTTP = axios.create({
  baseURL: API_URL
  // ,timeout: 30000
})

Vue.use(VueAxios, HTTP)

export default HTTP
