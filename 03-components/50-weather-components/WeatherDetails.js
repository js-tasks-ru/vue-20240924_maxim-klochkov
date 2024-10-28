import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',

  template: /* html */ `
    <div class="weather-details">
      <slot />
    </div>
  `,
})
