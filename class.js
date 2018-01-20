import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'

@Component({
  template: `
    <h1>{{ message }}</h1>
  `
})
class Base extends Vue {
  message = 'Hello!'
}

@Component
class Problem extends Base {
  message = 'Hello Problem! It should only one vue component was instanised'
}

let vm = new Vue({
  el: '#app',
  render: h => h(Problem)
})

vm.$destroy()
vm.$el.remove()

vm = null
Problem = null
Base = null
