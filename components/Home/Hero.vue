<script setup lang="ts">
const about = ref(null);
const goToAbout = () => {
  // const element = document.querySelector(letter.to);
  const offset = 210; // Adjust this value to match the combined height of the navbar and search bar

  if (about.value) {
    const topPosition =
      about.value.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="bg-brown-3 scroll-smooth">
    <div class="relative isolate flex flex-col items-center md:pt-14">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-0" />
      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute top-40 left-0 z-0 rotate-z" />

      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute bottom-0 right-40 rotate-180 z-0" />
      <div
        class="mx-auto w-full max-w-7xl px-4 md:px-6 relative z-[1] py-20 sm:py-32 flex flex-col md:flex-row flex-wrap lg:justify-between lg:items-center lg:gap-x-2 xl:px-0 lg:py-40">
        <div
          class="mt-16 order-2 md:order-1 relative sm:mt-24 lg:mt-0 flex justify-start self-start">
          <img
            src="/img/chop-book.webp"
            alt="chop book"
            class="w-4/5 mx-auto md:mx-0 md:w-full md:max-w-[364px]" />
        </div>
        <div
          class="mx-auto w-full order-1 md:order-2 max-w-[585px] lg:mx-0 lg:flex-auto">
          <h1
            class="mt-10 lg:mt-0 text-pretty text-6xl font-medium tracking-tight text-red sm:text-7xl md:text-[112px]">
            Chop Chop
          </h1>
          <div class="">
            <p
              class="mt-6 md:mt-8 text-pretty text-base/[140%] text-brown sm:text-lg/[140%]">
              <span class="text-red font-bold">Signed copies available from <a href="https://www.bembrooklyn.com/products/chop-chop-cooking-the-food-of-nigeria-ozoz-sokoh" target="_blank" class="underline">BEM Brooklyn</a></span>  so you can Travel to Nigeria, by plate with <span class="text-red font-bold">Chop Chop, my debut cookbook!</span> The book is officially on sale <span class="text-red font-bold">March 18, 2025.</span> You’ll find all the details here including links for where you can pre-order in Nigeria, and around the world!
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <nuxt-link
                to="/book"
                class="rounded-2xl bg-transparent border border-blue px-10 py-4 font-medium text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >More info</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          class="flex flex-col order-3 gap-6 mt-10 lg:mt-0 text-lg font-medium text-blue">
          <h3 class="text-2xl text-red">United States</h3>
          <nuxt-link
            to="https://www.bembrooklyn.com/products/chop-chop-cooking-the-food-of-nigeria-ozoz-sokoh"
            target="_blank"
            class="flex items-center gap-3 p-2">
            BEM
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
          <nuxt-link
            to="https://www.hachettebookgroup.com/titles/ozoz-sokoh/chop-chop/9781648291890/?lens=artisan"
            target="_blank"
            class="flex items-center gap-3 p-2">
            HBG
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
          <nuxt-link
            to="https://www.barnesandnoble.com/w/chop-chop-ozoz-sokoh/1145934034;jsessionid=F8B6CB4B7D560C9E313FD3BEBD33A386.prodny_store01-atgap05?ean=9781648291890&st=AFF&2sid=Hachette%20Book%20Group_8040641_NA&sourceId=AFFHachette%20Book%20Group"
            target="_blank"
            class="flex items-center gap-3 p-2">
            Barnes & Noble
            <Icon name="material-symbols:arrow-outward" size="20" /> </nuxt-link
          ><nuxt-link
            to="https://www.booksamillion.com/p/9781648291890?cjdata=MXxOfDB8WXww&AID=11552245&PID=8040641&cjevent=94a30174721611ef8328b0cd0a82b820"
            target="_blank"
            class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
            Books-a-Million
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
          <h3 class="text-2xl text-red">Canada</h3>
          <nuxt-link
            to="https://www.adifferentbooklist.com/item/BXWUqR7ec6jvgFHW4zLVlQ"
            target="_blank"
            class="flex items-center gap-3 p-2 font-medium">
            A Different Booklist
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
          <nuxt-link
            to="https://anotherstory.ca/item/BXWUqR7ec6jvgFHW4zLVlQ"
            target="_blank"
            class="flex items-center gap-3 p-2 font-medium">
            Another Story Bookshop
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
          <nuxt-link
            to="https://shoplocal.bookmanager.com/isbn/9780525612544"
            target="_blank"
            class="flex items-center gap-3 p-2">
            Shop Local
            <Icon name="material-symbols:arrow-outward" size="20" />
          </nuxt-link>
        </div>
      </div>
      <button
        @click="goToAbout"
        class="text-blue hidden md:flex pb-8 font-medium gap-3 relative z-[1] cursor-pointer items-center">
        SCROLL DOWN <Icon name="solar:arrow-down-linear" size="20" />
      </button>
      <div ref="about" />
    </div>
  </div>
</template>

<style scoped></style>
