<script setup lang="ts">
import type { Meetup } from './meetup.ts'

import { UiRadioGroup } from '@shgk/vue-course-ui'
import { computed, ref } from 'vue'

import meetups from './meetups.fixture.ts'
import MeetupView from './MeetupView.vue'

const meetupIndex = ref(0)
const meetup = computed(() => meetups[meetupIndex.value] as Meetup)
const options = meetups.map((_, index) => ({ label: index + 1, value: index }))
</script>

<template>
  <div style="display: flex; justify-content: center; gap: 1em; padding: 1em 0">
    <UiRadioGroup v-model="meetupIndex" :options="options" />
  </div>
  <div class="page-meetup">
    <MeetupView :meetup="meetup" />
  </div>
</template>
