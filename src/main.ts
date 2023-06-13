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
  apiKey: "AIzaSyBSjvJ1_tCjQGK8cgIPse-kFjEi7HbTaKA",
  authDomain: "lucas-pohl-tomko.firebaseapp.com",
  projectId: "lucas-pohl-tomko",
  storageBucket: "lucas-pohl-tomko.appspot.com",
  messagingSenderId: "332424198554",
  appId: "1:332424198554:web:92a048a724b92361c46223"
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
