<script setup></script>

<template>
  <div class="bg-[#F9EDDF]">
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
        class="absolute hidden md:block bottom-60 left-80 rotate-[105deg] z-0" />

      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block top-[600px] right-[300px] rotate-[279deg] z-0" />
      <div
        class="mx-auto max-w-7xl w-full px-6 py-14 sm:py-32 flex flex-col items-center xl:px-0 lg:py-40 relative z-[1]">
        <div
          class="mx-auto flex flex-col md:flex-row gap-[36px] md:gap-0 w-full justify-between items-start lg:mx-0 lg:flex-auto">
          <h1
            class="text-pretty text-6xl/[120%] font-medium tracking-tight text-red sm:text-7xl md:text-[112px] max-w-[624px]">
            About <br class="hidden md:block" />Ozoz Sokoh
          </h1>
          <div class="relative max-w-[620px]">
            <p class="text-pretty text-base/[140%] text-brown sm:text-lg/[140%]">
              Ozoz Sokoh is a food explorer, educator, budding curator, and
              Traveler By Plate, for whom "Food Is More Than Eating". In 2009,
              she began journaling about food on her blog, Kitchen Butterfly. In
              2013, she created the
              <span class="font-semibold">#NewNigerianKitchen</span>, developing
              her philosophy and practice with Nigerian food. Also central to
              her work is connectedness through food, from food sovereignty,
              cultural identity, reclamation of food systems and importantly,
              the joy of eating.
            </p>
            <p class="mt-2 text-pretty text-base/[140%] text-brown sm:text-lg/[140%]">
              Her research and documentation explore the roots of Nigerian and
              West African cuisine, the impact of West African intellectual
              contributions to global development from the American South,
              through the Caribbean to Europe and Latin America, and the
              connection to the Afro-diaspora.
            </p>
          </div>
        </div>
        <div class="mt-20 flex items-start justify-between w-full">
          <img
            src="/img/ozoz-thumb1.webp"
            alt="ozoz sokoh first potrait"
            class="max-w-[71px] md:max-w-[264px] mt-5 md:mt-20" />
          <img
            src="/img/ozoz-main.webp"
            alt="ozoz sokoh large potrait"
            class="max-w-[162px] md:max-w-[608px]" />
          <img
            src="/img/ozoz-thumb2.webp"
            alt="ozoz sokoh third potrait"
            class="max-w-[71px] md:max-w-[264px] mt-8 md:mt-[120px]" />
        </div>
      </div>
    </div>
  </div>
</template>
