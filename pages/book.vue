<script setup lang="ts">
const data = useDataStore();
</script>
<template>
  <div>
     <BookHero />
     <Newsletter />
     <Modal v-if="data.clickedImg"/>
  </div>
</template>