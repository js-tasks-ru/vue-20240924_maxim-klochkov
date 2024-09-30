import { createApp, defineComponent } from 'vue'

const app = createApp(defineComponent({
  setup() {
    const date = new Date().toLocaleDateString(navigator.language, {
      dateStyle: 'long',
    })

    return {
      date,
    }
  },

  name: 'App',

  template: /* html */`
    <div>Сегодня {{ date }}</div>
  `,
}))

app.mount('#app')
