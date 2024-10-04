import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref('')
    const secondOperand = ref('')

    const action = ref('')
    const result = ref('')

    watchEffect(() => {
      switch (action.value) {
        case 'sum':
          result.value = firstOperand.value + secondOperand.value
          break

        case 'subtract':
          result.value = (firstOperand.value - secondOperand.value) || ''
          break

        case 'multiply':
          result.value = (firstOperand.value * secondOperand.value) || ''
          break

        case 'divide':
          result.value = (firstOperand.value / secondOperand.value) || ''
          break

        default:
          break
      }
    })

    return {
      firstOperand,
      secondOperand,
      action,
      result,
    }
  },

  template: /* html */`
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="action"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="action"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="action"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="action"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
