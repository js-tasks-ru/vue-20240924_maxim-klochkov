import { defineComponent, ref, watch } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне

    const counter = ref(props.count)

    watch(
      () => props.count,
      (newCount) => {
        counter.value = newCount
      },
      { immediate: true },
    )

    function updateCounter(action) {
      counter.value = action === 'increment'
        ? counter.value + 1
        : counter.value - 1

      emit('update:count', counter.value)
    }

    return {
      counter,

      updateCounter,
    }
  },

  template: /* html */`
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        :disabled="counter <= min"
        @click="updateCounter('decrement')"
      >
        ➖
      </UiButton>
      <span class="count" data-testid="count">{{ counter }}</span>
      <UiButton
        aria-label="Increment"
        :disabled="counter >= max"
        @click="updateCounter('increment')"
      >
        ➕
      </UiButton>
    </div>
  `,
})
