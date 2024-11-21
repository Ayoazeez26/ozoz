<script setup lang="ts">
const data = useDataStore();

const clickedAway = (e: any) => {
  console.log(e);
  data.clickedImg = "";
}
</script>

<template>
  <div class="bg-black/50 fixed top-0 z-[1000] w-full h-full flex items-center justify-center">
    <img :src="`/img/${data.clickedImg}.webp`" alt="first large" class="w-11/12 lg:w-7/12 2xl:w-5/6" v-click-away="clickedAway">
  </div>
</template>

<style scoped></style>
