<script setup></script>

<template>
  <div class="">
    <div class="relative isolate flex flex-col items-center pt-14">
      <div class="bg-[#F9EDDF] absolute top-0 z-0 w-full h-[532px]" />
      <div
        class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 xl:px-0 lg:pt-20 lg:pb-40 relative z-[1]">
        <div class="mx-auto w-full lg:mx-0 lg:flex-auto">
          <h2
            class="text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl">
            Other works
          </h2>
          <div class="mt-16 flex flex-wrap gap-11">
            <div class="flex flex-col items-center w-full max-w-[612px]">
              <div
                class="bg-white rounded-3xl border border-grey-3 py-[108px] w-full">
                <img src="/img/butterfly.webp" alt="kitchen butterfly image" />
              </div>
              <div
                class="flex flex-col gap-4 px-16 py-6 rounded-3xl border border-grey-3 bg-grey-4 w-full max-w-[548px] -mt-14">
                <div class="flex gap-4 items-center justify-center">
                  <h3 class="text-red font-medium text-[28px]">
                    Kitchen Butterfly
                  </h3>
                  <nuxt-link
                    to="#"
                    class="text-white rounded-full flex items-center justify-center p-4 bg-blue"
                    ><Icon name="material-symbols:arrow-outward" size="20"
                  /></nuxt-link>
                </div>
                <p
                  class="text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2">
                  My Guide to Food – Exploring and Mapping intersections between
                  Nigerian Cuisine and Foods of the World
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-8 w-full max-w-[624px]">
              <div
                class="flex items-center gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                <img
                  src="/img/feast.webp"
                  alt="feast image"
                  class="w-full max-w-[280px]" />
                <div class="flex flex-col gap-3 pr-6">
                  <div class="flex gap-4 items-center">
                    <h3 class="text-red font-medium text-[28px]">
                      Feast Afrique
                    </h3>
                    <nuxt-link
                      to="#"
                      class="text-white rounded-full flex items-center justify-center p-4 bg-blue"
                      ><Icon name="material-symbols:arrow-outward" size="20"
                    /></nuxt-link>
                  </div>
                  <p
                    class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                    A Documentation & Celebration of West African Food & Drink
                    Knowledge & Heritage
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                <img
                  src="/img/museum.webp"
                  alt="museum image"
                  class="w-full max-w-[280px]" />
                <div class="flex flex-col gap-3 pr-6">
                  <div class="flex gap-4 items-center">
                    <h3 class="text-red font-medium text-[28px] text-ellipsis line-clamp-1">
                      The Museum (and Atlas) of Global Foodways
                    </h3>
                    
                  </div>
                  <p
                    class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
