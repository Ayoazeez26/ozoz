<script setup lang="ts">
const data = useDataStore();

const clickedAway = (e: any) => {
  console.log(e);
  data.clickedImg = "";
}
</script>

<template>
  <div class="bg-black/50 fixed top-0 z-[1000] w-full h-full flex items-center justify-center overflow-y-auto">
    <img :src="`/img/${data.clickedImg}.webp`" alt="first large" :class="` ${data.clickedImg === 'eleventh' ? 'h-full' : 'w-11/12 lg:w-7/12'} `" v-click-away="clickedAway">
  </div>
</template>

<style scoped></style>
