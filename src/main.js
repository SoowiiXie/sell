// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import app3 from './components/app3'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#app3',
  components: { app3 },
  template: '<app3/>'
})
new Vue({
  el: '#app2', 
  data: {
    height: 0, 
    weight: 0
  },
  computed: {
    bmi(){
      let h = this.height / 100;
      let w = this.weight;
      if ((h > 0) && (w > 0)){
        let result = w / (h*h)
        return Math.round(result * 100) / 100;
      }else{
        return 0;
      }
    }
  },
})
// let board = document.querySelector('#board');
new Vue({
  el: '#board', 
  data: {
    lists:JSON.parse(document.querySelector('#board').dataset.lists123)
  }
})
// document.addEventListener("turbolinks:load", function(event) {
//   let el = document.querySelector('#board');
//   console.log("im in")
//   if(el){
//     new Vue({
//       el,
//       data :{
//         lists123:JSON.parse(el.dataset.lists123)
//       }
//     });
//   }
// })