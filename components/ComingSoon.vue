<script setup lang="ts"></script>
<template>
  <div
    class="w-screen h-screen flex items-center justify-center relative overflow-hidden">
    <img
      src="/svg/bg-lines.svg"
      alt="lines"
      class="absolute -top-40 left-0 right-0 z-0" />
    <img
      src="/svg/branch.svg"
      alt="branch image"
      class="absolute hidden md:block top-[100px] left-0 z-0" />
    <img
      src="/svg/branch.svg"
      alt="branch image"
      class="absolute hidden md:block top-[100px] right-3 rotate-[105deg] z-0" />
    <img
      src="/svg/branch.svg"
      alt="branch image"
      class="absolute hidden md:block bottom-0 left-0 rotate-[279deg] z-0" />
    <img
      src="/svg/branch.svg"
      alt="branch image"
      class="absolute hidden md:block bottom-0 right-0 rotate-180 z-0" />
    <div class="flex flex-col text-center items-center px-4 md:px-0">
      <h2 class="text-red-2 text-[60px]/[120%] font-semibold tracking-[-0.9px]">
        Coming Soon!
      </h2>
      <p
        class="text-brown text-lg/[140%] md:text-xl/[140%] tracking-[-0.3px] mt-6 mb-10 w-full max-w-[423px]">
        Sign up for our newsletter to receive launch and event information
      </p>
      <div class="flex flex-col md:flex-row w-full md:w-auto gap-3">
        <nuxt-link
          to="/"
          class="rounded-2xl bg-transparent border border-grey-5 p-6 text-lg font-medium flex gap-2 items-center justify-center text-blue-3 shadow-sm hover:bg-blue-3 hover:text-grey-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          ><Icon name="material-symbols:arrow-left-alt" size="20" /> Go
          back</nuxt-link
        >
        <nuxt-link
          to="https://kitchenbutterfly.myflodesk.com/t4zs0ikqll"
          target="_blank"
          class="rounded-2xl bg-blue border border-blue p-6 text-lg font-medium text-white shadow-sm hover:bg-white hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-center"
          >Subscribe</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
