import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

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
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li
          v-for="weather in weatherData"
          :key="weather.geographic_name"
          class="weather-card"
          :class="
            {
              'weather-card--night': isNight(weather.current.dt, weather.current.sunrise, weather.current.sunset),
            }
          "
        >
        <div v-if="weather.alert" class="weather-alert">
          <span class="weather-alert__icon">⚠️</span>
          <span class="weather-alert__description">
            {{ weather.alert.sender_name }} : {{ weather.alert.description }}
          </span>
        </div>
        <div>
          <h2 class="weather-card__name">{{ weather.geographic_name }}</h2>
          <div class="weather-card__time">{{ weather.current.dt }}</div>
        </div>
        <div class="weather-conditions">
          <div class="weather-conditions__icon" :title="weather.current.weather.description">
            {{ weatherIcons[weather.current.weather.id] }}
          </div>
          <div class="weather-conditions__temp">
            {{ (weather.current.temp - 273.15).toFixed(1) }} °C
          </div>
        </div>
        <div class="weather-details">
          <div class="weather-details__item">
            <div class="weather-details__item-label">Давление, мм рт. ст.</div>
            <div class="weather-details__item-value">{{ (weather.current.pressure * 0.75).toFixed(0) }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Влажность, %</div>
            <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Облачность, %</div>
            <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
          </div>
          <div class="weather-details__item">
            <div class="weather-details__item-label">Ветер, м/с</div>
            <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
          </div>
        </div>
        </li>
      </ul>
    </div>
  `,
})
