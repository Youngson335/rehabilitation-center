<template>
  <div class="vue-phone-input">
    <input
      ref="inputRef"
      v-model="displayValue"
      type="text"
      @input="handleInput"
      @keydown.delete="handleDelete"
      @blur="handleBlur"
      @focus="handleFocus"
      placeholder="+7(___) ___ - __ - __"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);
const displayValue = ref("+7(___) ___ - __ - __");
const actualValue = ref("");

const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const cursorPos = input.selectionStart || 0;
  const newChar = input.value.slice(cursorPos - 1, cursorPos);

  // Проверяем, что введена цифра
  if (/\d/.test(newChar)) {
    // Находим следующую позицию для ввода
    const nextPos = findNextInputPosition(input.value, cursorPos - 1);

    if (nextPos !== -1) {
      // Заменяем символ подчеркивания на введенную цифру
      const valueArray = input.value.split("");
      valueArray[nextPos] = newChar;
      displayValue.value = valueArray.join("");

      // Перемещаем курсор
      setTimeout(() => {
        if (inputRef.value) {
          inputRef.value.selectionStart = nextPos + 1;
          inputRef.value.selectionEnd = nextPos + 1;
        }
      });
    }
  } else {
    // Если введен не цифровой символ, возвращаем предыдущее значение
    displayValue.value = actualValue.value;
  }
};

const handleDelete = (e: KeyboardEvent) => {
  const input = e.target as HTMLInputElement;
  const cursorPos = input.selectionStart || 0;

  if (cursorPos > 3) {
    // Не даем удалить +7
    const prevPos = findPrevInputPosition(input.value, cursorPos - 1);

    if (prevPos !== -1) {
      const valueArray = input.value.split("");
      // Заменяем цифру на подчеркивание
      if (/\d/.test(valueArray[prevPos])) {
        valueArray[prevPos] = "_";
        displayValue.value = valueArray.join("");

        // Перемещаем курсор
        setTimeout(() => {
          if (inputRef.value) {
            inputRef.value.selectionStart = prevPos;
            inputRef.value.selectionEnd = prevPos;
          }
        });
      }
    }
  }

  e.preventDefault(); // Предотвращаем стандартное поведение удаления
};

const handleFocus = () => {
  if (inputRef.value) {
    // При фокусе перемещаем курсор на первую доступную позицию
    const firstEmptyPos = findNextInputPosition(displayValue.value, 2);
    if (firstEmptyPos !== -1) {
      inputRef.value.selectionStart = firstEmptyPos;
      inputRef.value.selectionEnd = firstEmptyPos;
    }
  }
};

const handleBlur = () => {
  // При потере фокуса сохраняем актуальное значение
  actualValue.value = displayValue.value;
};

// Находит следующую позицию для ввода (где есть _)
const findNextInputPosition = (value: string, startPos: number): number => {
  const positions = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15]; // Позиции цифр в маске
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] >= startPos && value[positions[i]] === "_") {
      return positions[i];
    }
  }
  return -1;
};

// Находит предыдущую позицию с цифрой
const findPrevInputPosition = (value: string, startPos: number): number => {
  const positions = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15].reverse(); // Позиции цифр в обратном порядке
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] <= startPos && /\d/.test(value[positions[i]])) {
      return positions[i];
    }
  }
  return -1;
};

watch(displayValue, (newVal) => {
  // Извлекаем только цифры из значения
  const digits = newVal.replace(/\D/g, "");
  // Сохраняем только цифры после +7
  actualValue.value = digits.length > 1 ? `+7${digits.slice(1)}` : "+7";
});
</script>

<style scoped lang="scss">
.vue-phone-input input {
  font-family: monospace;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 250px;
  &:focus {
    outline: none;
    border-color: #646cff;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
  }
}
</style>
