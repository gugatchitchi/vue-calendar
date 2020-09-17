import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAWF7zi4yY-urlW44ENx3bCfU_vaEfwFfU",
  authDomain: "vue-calendar-36c4e.firebaseapp.com",
  databaseURL: "https://vue-calendar-36c4e.firebaseio.com",
  projectId: "vue-calendar-36c4e",
  storageBucket: "vue-calendar-36c4e.appspot.com",
  messagingSenderId: "685004062085",
  appId: "1:685004062085:web:53ef4b669521e0b3c258ec"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
