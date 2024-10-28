import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardsItemHeader',

  props: {
    title: {
      type: String,
    },

    iconId: {
      type: String,
    },

    temperature: {
      type: String,
    },
  },

  template: /* html */ `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="title">
        {{ iconId }}
      </div>
      <div class="weather-conditions__temp">
        {{ temperature }} °C
      </div>
    </div>
  `,
})
