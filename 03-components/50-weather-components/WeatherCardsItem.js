import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardsItem',

  props: {
    isNight: {
      type: Boolean,
    },
  },

  template: /* html */ `
  <li
    class="weather-card"
    :class="
      {
        'weather-card--night': isNight,
      }
    "
  >
    <slot />
  </li>
  `,
})
