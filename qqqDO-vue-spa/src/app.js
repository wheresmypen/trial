import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

console.log(AppLayout)

const app = new Vue({
  // ...AppLayout
  render: h => h(AppLayout)
})

export { app }
