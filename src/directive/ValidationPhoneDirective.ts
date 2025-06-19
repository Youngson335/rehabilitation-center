import { type Directive, type DirectiveBinding } from 'vue';

export const vPhoneMask: Directive<HTMLInputElement, string> = {
  mounted(el: HTMLInputElement, binding: DirectiveBinding<string>) {
    const matrix = '+7 (___) ___-__-__'; // Маска
    let isInputActive = false; // Флаг для отслеживания фокуса

    function mask(event: Event) {
      if (event instanceof InputEvent || event instanceof FocusEvent || event instanceof KeyboardEvent) {
        const pos = el.selectionStart || 0; // Текущая позиция курсора
        const oldValue = el.value; // Текущее значение поля
        const val = el.value.replace(/\D/g, ''); // Убираем все нецифры

        let newValue = '+7 ('; // Начальное значение

        // Добавляем цифры в маску
        if (val.length > 1) {
          newValue += val.slice(1, 4); // Первые 3 цифры после +7
          if (val.length > 4) {
            newValue += ') ' + val.slice(4, 7); // Следующие 3 цифры
            if (val.length > 7) {
              newValue += '-' + val.slice(7, 9); // Следующие 2 цифры
              if (val.length > 9) {
                newValue += '-' + val.slice(9, 11); // Последние 2 цифры
              }
            }
          }
        }

        // Если ввод завершен, применяем маску
        if (event.type === 'blur') {
          if (val.length < 11) {
            el.value = ''; // Очищаем поле, если номер неполный
          }
        } else {
          el.value = newValue; // Применяем новое значение
        }

        // Корректируем позицию курсора
        let newCursorPos = pos;
        if (event instanceof InputEvent && event.inputType === 'deleteContentBackward') {
          // При удалении символа курсор не должен прыгать
          newCursorPos = Math.max(pos, 4); // Минимальная позиция — после "+7 ("
        } else {
          // При вводе курсор должен двигаться вперед
          newCursorPos = newValue.length;
        }

        // Восстанавливаем позицию курсора
        if (el.value !== oldValue) {
          el.setSelectionRange(newCursorPos, newCursorPos);
        }

        // Валидация
        validatePhone(el);
      }
    }

    function validatePhone(el: HTMLInputElement) {
      const phoneNumber = el.value.replace(/\D/g, ''); // Убираем все нецифры
      const isComplete = phoneNumber.length === 11 && phoneNumber.startsWith('7'); // Проверяем, что номер полный

      if (isComplete) {
        el.classList.remove('invalid-input');
      } else {
        el.classList.add('invalid-input');
      }
    }

    // Обработчики событий
    el.addEventListener('input', mask);
    el.addEventListener('focus', () => {
      if (!isInputActive) {
        el.value = '+7 ('; // Устанавливаем начальное значение при первом фокусе
        isInputActive = true;
      }
      mask(new Event('focus'));
    });
    el.addEventListener('blur', mask);
  },
};