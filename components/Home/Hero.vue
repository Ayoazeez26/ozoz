<script setup></script>

<template>
  <div class="bg-[#F9EDDF] scroll-smooth">
    <div class="relative isolate flex flex-col items-center pt-14">
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
        class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 xl:px-0 lg:py-40">
        <div class="mx-auto max-w-xl lg:mx-0 lg:flex-auto relative z-[1]">
          <h1
            class="mt-10 text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl md:text-[112px]">
            Chop Chop
          </h1>
          <div class="relative pl-40">
            <img
              src="/img/bowl.webp"
              alt="bowl of soup"
              class="absolute -top-5 -left-20" />
            <p
              class="mt-8 text-pretty text-lg text-brown sm:text-lg/[140%] max-w-[408px]">
              Immerse yourself in a world of captivating stories and profound
              insights. Ozoz Sokoh's newest book is a journey you won't want to
              miss. Save 30% when you preorder.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <nuxt-link
                to="/book"
                class="rounded-2xl bg-transparent border border-blue px-10 py-4 text-sm font-medium text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >More info</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <img src="/img/chop-book.webp" alt="chop book" />
        </div>
        <div class="flex flex-col gap-7 text-blue">
          <nuxt-link to="#" class="flex items-end gap-3"
            >Bookshop.org (US)<Icon
              name="material-symbols:arrow-outward"
              size="20"
          /></nuxt-link>
          <nuxt-link to="#" class="flex items-end gap-3"
            >Shop Local (Canada)<Icon
              name="material-symbols:arrow-outward"
              size="20"
          /></nuxt-link>
          <nuxt-link to="#" class="flex items-end gap-3"
            >Indigo (Canada)<Icon
              name="material-symbols:arrow-outward"
              size="20"
          /></nuxt-link>
          <nuxt-link to="#" class="flex items-end gap-3"
            >Amazon (US)<Icon name="material-symbols:arrow-outward" size="20"
          /></nuxt-link>
          <nuxt-link to="#" class="flex items-end gap-3"
            >Amazon (UK)<Icon name="material-symbols:arrow-outward" size="20"
          /></nuxt-link>
          <nuxt-link to="#" class="flex items-end gap-3"
            >Booktopia (Australia)<Icon
              name="material-symbols:arrow-outward"
              size="20"
          /></nuxt-link>
        </div>
      </div>
      <a
        href="#about"
        class="text-blue flex pb-8 font-medium gap-3 items-center"
        >SCROLL DOWN <Icon name="solar:arrow-down-linear" size="20"
      /></a>
      <div id="about" />
    </div>
  </div>
</template>

<style scoped>

</style>
