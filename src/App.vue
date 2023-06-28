<script setup lang="ts">
import AppCard from "./components/AppCard.vue";
import AppForm from "./components/AppForm.vue";
import { ref } from "vue";

const something = ref('');
const handleSomething = () => {
  something.value = "Card button clicked: Something happened!";
};

const handleForm = (data: any) => {
  something.value = `Form submitted: ${JSON.stringify(data)}`;
};
</script>

<template>
  <div class="flex flex-col gap-8 h-full bg-black px-8 py-32 ">
    <h1 class="text-3xl font-bold underline text-center text-pink-400">
      Testing with Playwright!
    </h1>

    <div v-if="something" class="flex justify-between items-center rounded-xl text-white bg-red-400 p-4">
      <p class="font-medium text-xl">
        {{ something }}
      </p>
      <button @click="something = ''" class="w-32 h-12 p-2 font-bold border border-white rounded-xl">Close</button>
    </div>  

    <section class="grid grid-cols-2 place-content-center place-items-center gap-8 bg-slate-200 rounded-lg p-8">
      <template v-for="n in 4" :key="n">
        <AppCard @doSomething="handleSomething" v-bind="{ title: `My title ${n}`, description: `This is my description ${n}`, image: `https://picsum.photos/id/${n}/384/200`}"/>
      </template>
      <AppCard @doSomething="handleSomething" v-bind="{ title: `My title XXX`, description: `This is my description XXX`}"/>
    </section>
    <section class=" bg-slate-200 rounded-lg p-8">
      <AppForm @formSubmitted="handleForm" />
    </section>
  </div>
</template>
