import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCards',

  template: /* html */ `
    <ul class="weather-list unstyled-list">
      <slot />
    </ul>
  `,
})
