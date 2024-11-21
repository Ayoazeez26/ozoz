<script setup lang="ts">
const swiperInstance = ref(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const swipePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const swipeNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};
</script>

<template>
  <div class="">
    <div class="relative isolate flex flex-col items-center pt-14">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-[1]" />

      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block -top-4 right-3 rotate-[105deg] z-[1]" />
      <div class="bg-brown-3 absolute top-0 z-0 w-full h-[532px]" />
      <div
        class="mx-auto w-full max-w-7xl px-6 py-14 sm:py-32 lg:flex lg:items-center lg:gap-x-10 xl:px-0 lg:pt-20 lg:pb-40 relative z-[1]">
        <div class="mx-auto w-full lg:mx-0 lg:flex-auto">
          <div class="flex flex-col md:flex-row justify-between relative">
            <h2
              class="text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl">
              Other Work
            </h2>
            <div class="flex self-end md:self-start mt-6 md:mt-0 gap-3">
              <button
                @click="swipePrev()"
                :class="{
                  'cursor-pointer left-1 flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
                }">
                <Icon name="material-symbols:arrow-left-alt" size="20" />
              </button>
              <button
                @click="swipeNext()"
                :class="{
                  'cursor-pointer flex right-1 items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
                }">
                <Icon
                  name="material-symbols:arrow-left-alt"
                  size="20"
                  class="rotate-180" />
              </button>
            </div>
          </div>
          <div class="mt-8 md:mt-16 w-full max-w-7xl">
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              @swiper="onSwiper">
              <SwiperSlide>
                <div class="flex flex-wrap gap-11 w-full !max-w-7xl">
                  <div class="flex flex-col items-center w-full max-w-[612px]">
                    <div
                      class="bg-white rounded-3xl border border-grey-3 py-[108px] w-full">
                      <img
                        src="/img/butterfly.webp"
                        alt="kitchen butterfly image" />
                    </div>
                    <nuxt-link
                      to="https://www.kitchenbutterfly.com/"
                      target="_blank"
                      class="flex flex-col cursor-pointer gap-4 p-6 md:px-16 md:py-6 rounded-3xl border border-grey-3 bg-grey-4 w-11/12 md:w-full max-w-[548px] -mt-14">
                      <div class="flex gap-4 items-center justify-center">
                        <h3 class="text-red font-medium text-xl md:text-[28px]">
                          Kitchen Butterfly
                        </h3>
                        <button
                          class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                          <Icon
                            name="material-symbols:arrow-outward"
                            size="20" />
                        </button>
                      </div>
                      <p
                        class="text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2">
                        My Guide to Food – Exploring and Mapping intersections
                        between Nigerian Cuisine and Foods of the World
                      </p>
                    </nuxt-link>
                  </div>
                  <div class="flex flex-col gap-8 w-full max-w-[624px]">
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/feast.webp"
                        alt="feast image"
                        class="w-full hidden md:block max-w-[280px]" />
                      <img
                        src="/img/feast-mob.webp"
                        alt="feast image"
                        class="w-full md:hidden" />
                      <nuxt-link
                        to="https://www.feastafrique.com/"
                        target="_blank"
                        class="flex flex-col gap-3 px-4 md:px-0 text-center md:text-left pb-6 md:pb-0 md:pr-6">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-start">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px]">
                            Feast Afrique
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          A Documentation & Celebration of West African Food &
                          Drink Knowledge & Heritage
                        </p>
                      </nuxt-link>
                    </div>
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/museumm.webp"
                        alt="museum image"
                        class="w-full hidden md:block max-w-[280px]" />
                      <img
                        src="/img/museumm-mob.webp"
                        alt="museum image"
                        class="w-full md:hidden" />
                      <nuxt-link
                        to="https://museumofglobalfoodways.com/"
                        target="_blank"
                        class="flex flex-col gap-3 md:pr-6 px-4 md:px-0 pb-6 md:pb-0 text-center md:text-left">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-start">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                            The Museum (and Atlas) of Global Foodways
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          Coming Soon
                        </p>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex flex-wrap gap-11 w-full !max-w-7xl">
                  <div class="flex flex-col items-center w-full max-w-[612px]">
                    <div
                      class="bg-white rounded-3xl border border-grey-3 w-full">
                      <img
                        src="/img/brittle.webp"
                        alt="kitchen butterfly image"
                        class="rounded-3xl" />
                    </div>
                    <nuxt-link
                      to="https://brittlepaper.com/contributors/Ozoz%20Sokoh/"
                      target="_blank"
                      class="flex flex-col cursor-pointer gap-4 p-6 md:px-16 md:py-6 rounded-3xl border border-grey-3 bg-grey-4 w-11/12 md:w-full max-w-[548px] -mt-14">
                      <div class="flex gap-4 items-center justify-center">
                        <h3 class="text-red font-medium text-xl md:text-[28px]">
                          Brittle Paper
                        </h3>
                        <button
                          class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                          <Icon
                            name="material-symbols:arrow-outward"
                            size="20" />
                        </button>
                      </div>
                      <p
                        class="text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2">
                        This is one of my favorite book titles ever for the
                        journey it evokes, the emergence in intimates. It makes
                        me think of how powerful remembering is and how memory
                        is a form of resistance, healing and comfort.
                      </p>
                    </nuxt-link>
                  </div>
                  <div class="flex flex-col gap-8 w-full max-w-[624px]">
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/culinary.webp"
                        alt="feast image"
                        class="w-full md:max-w-[280px]" />
                      <!-- <img
                        src="/img/feast-mob.webp"
                        alt="feast image"
                        class="w-full md:hidden" /> -->
                      <nuxt-link
                        to="https://www.worldsofflavor.com/ozoz-sokoh"
                        target="_blank"
                        class="flex flex-col gap-3 px-4 md:px-0 text-center md:text-left pb-6 md:pb-0 md:pr-6">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-start">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                            Culinary Institute of America
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          Ozoz Sokoh is a food explorer, budding curator, and
                          traveler-by-plate, for whom 'Food Is More Than
                          Eating.’
                        </p>
                      </nuxt-link>
                    </div>
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/tedx.webp"
                        alt="museum image"
                        class="w-full md:max-w-[280px]" />
                      <!-- <img
                        src="/img/museumm-mob.webp"
                        alt="museum image"
                        class="w-full md:hidden" /> -->
                      <nuxt-link
                        to="https://www.youtube.com/watch?v=TiSluxo1Bds"
                        target="_blank"
                        class="flex flex-col gap-3 md:pr-6 px-4 md:px-0 pb-6 md:pb-0 text-center md:text-left">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-between">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                            TedX
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          This talk was given at a local TEDx event, produced
                          independently of the TED Conferences. An
                          under-appreciated feature of a journey is the street
                          food and local delicacies. Ozoz takes us on a trip
                          around the world via the stomach, and shows how she
                          translates her discoveries into re-imagining Nigerian
                          food.
                        </p>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex flex-wrap gap-11 w-full !max-w-7xl">
                  <div class="flex flex-col items-center w-full max-w-[612px]">
                    <div
                      class="bg-white rounded-3xl border border-grey-3 w-full">
                      <img
                        src="/img/mag.webp"
                        alt="kitchen butterfly image"
                        class="rounded-3xl" />
                    </div>
                    <nuxt-link
                      to="https://www.smithsonianmag.com/smart-news/theres-free-online-library-dedicated-west-africas-food-traditions-180977076/"
                      target="_blank"
                      class="flex flex-col cursor-pointer gap-4 p-6 md:px-16 md:py-6 rounded-3xl border border-grey-3 bg-grey-4 w-11/12 md:w-full max-w-[548px] -mt-14">
                      <div class="flex gap-4 items-center justify-center">
                        <h3 class="text-red font-medium text-xl md:text-[28px]">
                          Smithsonian Mag
                        </h3>
                        <button
                          class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                          <Icon
                            name="material-symbols:arrow-outward"
                            size="20" />
                        </button>
                      </div>
                      <p
                        class="text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2">
                        New Online Portal Chronicles the Culinary Legacy of the
                        African Diaspora
                      </p>
                    </nuxt-link>
                  </div>
                  <div class="flex flex-col gap-8 w-full max-w-[624px]">
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/gastro.webp"
                        alt="feast image"
                        class="w-full md:max-w-[280px]" />
                      <!-- <img
                        src="/img/feast-mob.webp"
                        alt="feast image"
                        class="w-full md:hidden" /> -->
                      <nuxt-link
                        to="https://www.atlasobscura.com/articles/where-to-eat-lagos-nigeria"
                        target="_blank"
                        class="flex flex-col gap-3 px-4 md:px-0 text-center md:text-left pb-6 md:pb-0 md:pr-6">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-start">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                            Gastro Obscura
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          Meat-grilling maestros, perfectly-spiced soups, and
                          palm-wine cocktails await in Nigeria’s most diverse
                          city.
                        </p>
                      </nuxt-link>
                    </div>
                    <div
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full">
                      <img
                        src="/img/anthony.webp"
                        alt="museum image"
                        class="w-full md:max-w-[280px]" />
                      <img
                        src="/img/museumm-mob.webp"
                        alt="museum image"
                        class="w-full md:hidden" />
                      <nuxt-link
                        to="https://www.youtube.com/watch?v=b4c386YGsGg"
                        target="_blank"
                        class="flex flex-col gap-3 md:pr-6 px-4 md:px-0 pb-6 md:pb-0 text-center md:text-left">
                        <div
                          class="flex gap-4 items-center justify-center md:justify-between">
                          <h3
                            class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                            Anthony Bourdain’s Parts Unknown
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20" />
                          </button>
                        </div>
                        <p
                          class="text-brown text-lg/[140%] text-ellipsis line-clamp-2">
                          Bourdain traveled across the globe to uncover
                          little-known areas of the world and celebrate diverse
                          cultures by exploring food and dining rituals.
                        </p>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex flex-wrap gap-11 w-full !max-w-7xl">
                  <div class="flex flex-col items-center w-full max-w-[612px]">
                    <div
                      class="bg-white rounded-3xl border border-grey-3 w-full">
                      <img
                        src="/img/mag.webp"
                        alt="kitchen butterfly image"
                        class="rounded-3xl" />
                    </div>
                    <nuxt-link
                      to="https://explorepartsunknown.com/lagos/your-guide-to-nigerian-cuisine/"
                      target="_blank"
                      class="flex flex-col cursor-pointer gap-4 p-6 md:px-16 md:py-6 rounded-3xl border border-grey-3 bg-grey-4 w-11/12 md:w-full max-w-[548px] -mt-14">
                      <div class="flex gap-4 items-center justify-center">
                        <h3 class="text-red font-medium text-xl md:text-[28px] text-ellipsis line-clamp-1">
                          Your Guide to Nigerian Cuisine
                        </h3>
                        <button
                          class="text-white rounded-full flex items-center justify-center p-4 bg-blue">
                          <Icon
                            name="material-symbols:arrow-outward"
                            size="20" />
                        </button>
                      </div>
                      <p
                        class="text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2">
                        Food is more than eating. It’s history and heritage,
                        culture, recipes, techniques, produce, and
                        deliciousness. In 1998, as a geology student at the
                        University of Liverpool in the U.K.,
                      </p>
                    </nuxt-link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
