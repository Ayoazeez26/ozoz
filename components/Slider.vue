<template>
  <div ref="container" class="keen-slider text-brown flex justify-center">
    <div class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
      <img src="/img/journey1.webp" alt="journey one img" class="max-w-[280px]">
      <p class="mt-5 text-lg/[140%]">Sokoh was born in <span class="font-bold text-red">1976</span><br /> in Warri, on the southern coast of Nigeria.</p>
    </div>
    <div class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
      <img src="/svg/link.svg" alt="link icon">
    </div>
    <div class="keen-slider__slide min-w-[280px!important] max-w-[280px!important] flex flex-col pt-20 justify-center items-center">
      <img src="/img/journey2.webp" alt="journey one img" class="max-w-[177px]">
      <p class="mt-5 text-lg/[140%]">She attended the Obafemi Awolowo University in Ile-Ife, Nigeria for 3 years, studying Urban and Regional Planning, and left in 1997. </p>
    </div>
    <div class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
      <img src="/svg/link.svg" alt="link icon">
    </div>
   <div class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
      <img src="/img/journey3.webp" alt="journey one img" class="max-w-[280px]">
      <p class="mt-5 text-lg/[140%]">She moved to the United Kingdom where she earned a degree in Geology from the University of Liverpool. </p>
    </div>
    <!-- <div class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
      <img src="/svg/link.svg" alt="link icon">
    </div> -->
  </div>
</template>

<script setup lang="ts">
const [container] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    perView: 5,
    spacing: 15,
  },
});
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
}

</style>