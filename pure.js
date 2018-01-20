import Vue from 'vue'

let Base = Vue.extend({
  name: 'Base',
	template: `
    <h1>{{ message }}</h1>
  `,
  data () {
    return { message: 'Hello!' }
  }
})

let Problem = Base.extend({
  name: 'Problem',
  data () {
	  return {
      message: 'Hello Problem! It should only one vue component was instanised'
    }
  }
})


let vm = new Vue({
  el: '#app',
  render: h => h(Problem)
})

vm.$destroy()
vm.$el.remove()

vm = null
Problem = null
Base = null
