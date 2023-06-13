import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYtRLodZNx2EPjokjZHwTN9Wc1jkAahjA",
  authDomain: "lucas-portfolio-38006.firebaseapp.com",
  projectId: "lucas-portfolio-38006",
  storageBucket: "lucas-portfolio-38006.appspot.com",
  messagingSenderId: "317898963045",
  appId: "1:317898963045:web:77e8fc68c109f5899a2e8c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Vuetify
import 'vuetify/styles'
import 'boxicons'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  ssr:true
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)


app.mount('#app')
