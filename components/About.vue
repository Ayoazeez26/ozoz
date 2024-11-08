<script setup lang="ts"></script>

<template>
  <div class="bg-white">
    <div class="relative isolate pt-14">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0" />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div
        class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 xl:px-0 lg:py-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h2
            class="mt-10  text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl">
            Ozoz Sokoh
          </h2>
          <p
            class="mt-8 text-pretty text-lg font-medium text-brown sm:text-xl/8">
            Ozoz Sokoh is a food explorer and traveller by plate, educator and
            researcher exploring Nigeria and West African diaspora and Global
            Foodways. She believes that Food is More than Eating.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <nuxt-link
              to="#"
              class="rounded-2xl  bg-transparent border border-blue px-10 py-4 text-sm font-medium text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >About me</nuxt-link
            >
          </div>
        </div>
        <div class="mt-16 relative sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <img src="/img/ozoz-one.webp" alt="ozoz first image">
          <img src="/img/white-bowl.webp" alt="white bowl of soup" class="absolute top-20 -left-24">
        </div>
      </div>
    </div>
  </div>
</template>
