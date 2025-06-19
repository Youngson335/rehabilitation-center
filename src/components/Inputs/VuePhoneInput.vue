<template>
  <input
    class="vue-phone-input"
    type="phone"
    v-phone-mask
    v-model="internalValue"
    placeholder="+7 - (___)-___-__-__"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { vPhoneMask } from "../../directive/ValidationPhoneDirective";

const props = defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

const onInput = (val: string) => {
  emits("update:modelValue", internalValue.value);
};
</script>
<style lang="scss">
.vue-phone-input {
  background: none;
  border: none;
  outline: none;
}
</style>
