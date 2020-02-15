//导入什么用什么接收
import $ from 'jquery'
import './css/index.css'
import Vue from 'vue'
import login from './login.vue'
import def, { obj1, obj2 } from './js/testexport.js'
import router from './js/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
$(function () {
  $('li:odd').css('backgroundColor', 'pink')
  $('li:even').css("backgroundColor", 'lightblue')
})
class Person {
  name = ''
}
var p = new Person()
p.name = "sdad"
console.log(p)
var vm = new Vue({
  el: "#app1",
  data: {
    msg: "父组件的msg"
  },
  render: createElements => createElements(login)
})
console.log(def)
console.log(obj1)

var vm1 = new Vue({
  el: "#app2",
  router
})