import { createApp, defineComponent } from 'vue'

const app = createApp(defineComponent({
  name: 'App',

  setup() {
    const date = new Date().toLocaleDateString(navigator.language, {
      dateStyle: 'long',
    })

    return {
      date,
    }
  },

  template: /* html */`
    <div>Сегодня {{ date }}</div>
  `,
}))

app.mount('#app')
