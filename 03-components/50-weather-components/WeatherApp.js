import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

import WeatherAlert from './WeatherAlert.js'
import WeatherCards from './WeatherCards.js'
import WeatherCardsItem from './WeatherCardsItem.js'
import WeatherCardsItemConditions from './WeatherCardsItemConditions.js'
import WeatherCardsItemHeader from './WeatherCardsItemHeader.js'
import WeatherDetails from './WeatherDetails.js'
import WeatherDetailsItem from './WeatherDetailsItem.js'
import WeatherTitle from './WeatherTitle.js'

import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherAlert,
    WeatherCards,
    WeatherCardsItem,
    WeatherDetails,
    WeatherDetailsItem,
    WeatherCardsItemConditions,
    WeatherCardsItemHeader,
    WeatherTitle,
  },

  setup() {
    const weatherData = getWeatherData()
    const weatherIcons = WeatherConditionIcons

    function isNight(current, sunrise, sunset) {
      return current < sunrise || current > sunset
    }

    return {
      weatherData,
      weatherIcons,

      isNight,
    }
  },

  template: /* html */`
    <div>
      <WeatherTitle title="Погода в Средиземье" />
      <WeatherCards>
        <WeatherCardsItem
          v-for="weather in weatherData"
          :key="weather.geographic_name"
          :is-night="isNight(weather.current.dt, weather.current.sunrise, weather.current.sunset)"
        >
          <WeatherAlert
            v-if="weather.alert"
            :sender-name="weather.alert.sender_name"
            :description="weather.alert.description"
          />
          <WeatherCardsItemHeader
            :name="weather.geographic_name"
            :time="weather.current.dt"
          />
          <WeatherCardsItemConditions
            :title="weather.current.weather.description"
            :icon-id="weatherIcons[weather.current.weather.id]"
            :temperature="(weather.current.temp - 273.15).toFixed(1)"
          />
          <WeatherDetails>
            <WeatherDetailsItem
              label="Давление, мм рт. ст."
              :value="(weather.current.pressure * 0.75).toFixed(0)"
            />
            <WeatherDetailsItem
              label="Влажность, %"
              :value="weather.current.humidity"
            />
            <WeatherDetailsItem
              label="Облачность, %"
              :value="weather.current.clouds"
            />
            <WeatherDetailsItem
              label="Ветер, м/с"
              :value="weather.current.wind_speed"
            />
          </WeatherDetails>
        </WeatherCardsItem>
      </WeatherCards>
    </div>
  `,
})
