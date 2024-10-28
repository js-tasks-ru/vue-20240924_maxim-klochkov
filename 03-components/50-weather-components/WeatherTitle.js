import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherTitle',

  props: {
    title: {
      type: String,
    },
  },

  template: /* html */ `
    <h1 class="title">{{ title }}</h1>
  `,
})
