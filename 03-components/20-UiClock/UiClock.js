import { computed, defineComponent, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date())

    const timer = setInterval(() => {
      time.value = new Date()
    }, 1000)

    const timeStyle = new Intl.DateTimeFormat(navigator.language, { timeStyle: 'medium' })
    const formattedTime = computed(() => timeStyle.format(time.value))

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    return {
      time,
      formattedTime,
    }
  },

  template: /* html */`<div class="clock">{{ formattedTime }}</div>`,
})
