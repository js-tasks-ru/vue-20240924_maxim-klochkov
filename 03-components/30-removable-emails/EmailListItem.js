import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  emits: ['remove-email-item'],

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  template: /* html */`
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="$emit('remove-email-item')">❌</button>
    </li>
  `,
})
