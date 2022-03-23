// my-component.js
export default {
    data() {
      return { count: 0 }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    template: `
    <button @click="increment">Click me</button>
    <div>Count is {{ count }}</div>
    `
}