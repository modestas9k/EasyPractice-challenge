<template>
  <div class="text-center shadow-md bg-white rounded-md p-4 ">
    <h2 class="font-bold text-xl my-2">{{ title }}</h2>
    <h1 class="font-bold text-3xl mb-4">{{ bigText}}</h1>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    title: String,
    bigText: String,
    description: String
  },
};
</script>