<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  textInput: "",
  selectInput: "",
  checkboxInput: false,
  checkboxInput2: false,
  checkboxInput3: false,
  textareaInput: "",
});

const emit = defineEmits(["formSubmitted"]);

const handleSubmit = () => {
  emit("formSubmitted", formData.value);
  formData.value = {
    textInput: "",
    selectInput: "",
    checkboxInput: false,
    checkboxInput2: false,
    checkboxInput3: false,
    textareaInput: "",
  };
};
</script>

<template>
  <form @submit.prevent="handleSubmit" data-testid="appForm">
    <div class="flex flex-col gap-8">
      <div class="">
        <input
          type="text"
          v-model="formData.textInput"
          class="w-full p-4 rounded-xl border border-slate-300 shadow-xl"
          placeholder="Enter something"
          data-testid="somethingTextInput"
        />
      </div>

      <div class="relative flex items-center justify-between">
        <div class="relative">
          <select
            name="selectInput"
            v-model="formData.selectInput"
            id="selectInput"
            data-testid="somethingSelect"
            class="w-64 p-4 rounded-xl border border-slate-300 shadow-xl"
          >
            <option value="">--Please choose an option--</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>

        <label for="checkboxInput" class="flex gap-4">
          <input
            type="checkbox"
            name="checkboxInput"
            v-model="formData.checkboxInput"
            id="checkboxInput"
            data-testid="somethingCheckbox1"
            class="w-8"
            placeholder="Enter something"
          />
          <div>Test me</div>
        </label>

        <label for="checkboxInput2" class="flex gap-4">
          <input
            type="checkbox"
            name="checkboxInput2"
            v-model="formData.checkboxInput2"
            id="checkboxInput2"
            data-testid="somethingCheckbox2"
            class="w-8"
            placeholder="Enter something"
          />
          <div>Test me again</div>
        </label>

        <label for="checkboxInput3" class="flex gap-4">
          <input
            type="checkbox"
            name="checkboxInput3"
            v-model="formData.checkboxInput3"
            id="checkboxInput3"
            data-testid="somethingCheckbox3"
            class="w-8"
            placeholder="Enter something"
          />
          <div>Test me more</div>
        </label>
      </div>

      <div>
        <textarea
          name="textareaInput"
          v-model="formData.textareaInput"
          data-testid="somethingTextarea"
          class="w-full p-4 rounded-xl border border-slate-300 shadow-xl"
          placeholder="Enter something"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          data-testid="formButton"
          class="bg-red-300 text-white font-bold p-4 rounded-xl shadow-xl border border-white hover:bg-red-400"
        >
          Form Me!
        </button>
      </div>
    </div>
  </form>
</template>
