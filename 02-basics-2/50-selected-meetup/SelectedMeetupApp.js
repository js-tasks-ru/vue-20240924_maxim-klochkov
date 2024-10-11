import { defineComponent, onBeforeMount, ref } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const MEETUP_IDS = [1, 2, 3, 4, 5]

    const meetupData = ref({})
    const currentMeetup = ref(1)

    async function fetchMeetup(id) {
      meetupData.value = await getMeetup(id)
      currentMeetup.value = id
    }

    async function handlePrev() {
      if (currentMeetup.value > 1) {
        currentMeetup.value -= 1
        await fetchMeetup(currentMeetup.value)
      }
    }

    async function handleNext() {
      if (currentMeetup.value < 5) {
        currentMeetup.value += 1
        await fetchMeetup(currentMeetup.value)
      }
    }

    onBeforeMount(async () => {
      await fetchMeetup(currentMeetup.value)
    })

    return {
      MEETUP_IDS,

      meetupData,
      currentMeetup,

      handlePrev,
      handleNext,
      fetchMeetup,
    }
  },

  template: /* html */`
    <div class="meetup-selector">
      <div class="meetup-selector__control">

        <button
          class="button button--secondary"
          type="button"
          :disabled="MEETUP_IDS[0] === currentMeetup"
          @click="handlePrev()"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div
            v-for="id in MEETUP_IDS"
            :key="id"
            class="radio-group__button"
          >
            <input
              type="radio"
              name="meetupId"
              class="radio-group__input"
              :checked="id === currentMeetup"
              :value="id"
              :id="'meetup-id-' + id"
              @click="fetchMeetup(id)"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="MEETUP_IDS[MEETUP_IDS.length - 1] === currentMeetup ? true : false"
          @click="handleNext()"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupData.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
