<script setup lang="ts">
const emit = defineEmits(["doSomething"]);

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const props = withDefaults(defineProps<Props>(), { image: 'https://via.placeholder.com/384x200'})

const doSomething = () => {
  emit("doSomething");
};
</script>

<template>
  <div data-testid="appCard" class="flex flex-col w-80 bg-gradient-to-t from-green-400 to-blue-500  text-black rounded-xl border border-slate-300 shadow-xl">
    <div>
      <figure>
        <img
          :src="props.image"
          alt="random image"
          class="rounded-t-xl"
          data-testid="card-image"
        />
      </figure>
    </div>

    <div class="flex flex-col gap-2 p-4 text-white">
      <div class="text-xl font-bold ">
        <h1>{{ props.title }}</h1>
      </div>

      <div class="">
        <p>
          {{ props.description }}
          {{ props.image }}
        </p>
      </div>
    </div>

    <div class="flex justify-end p-4">
      <button class="bg-red-300 text-white font-bold p-4 rounded-xl shadow-xl border border-white hover:bg-red-400" @click="doSomething" data-testid="card-button">
        Click Me!
      </button>
    </div>
  </div>
</template>
