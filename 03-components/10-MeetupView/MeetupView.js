import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import { defineComponent } from 'vue'

import MeetupAgenda from './MeetupAgenda.js'
import MeetupCover from './MeetupCover.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupInfo from './MeetupInfo.js'

import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  props: {
    meetup: {
      title: {
        type: String,
      },
      image: {
        type: String,
      },
      description: {
        type: String,
      },
      agenda: {
        type: Array,
      },
      organizer: {
        type: String,
      },
      place: {
        type: String,
      },
      date: {
        type: Number,
      },
    },
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
    MeetupInfo,
  },

  template: /* html */`
    <div>

      <!-- Обложка митапа -->
      <MeetupCover :image="meetup.image" :title="meetup.title" />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription :description="meetup.description" />

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />

            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
