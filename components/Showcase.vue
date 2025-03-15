<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableText,
  type PortableTextVueComponents,
} from "@portabletext/vue";

import { Swiper as SwiperClass } from "swiper/types";

const swiperInstance = ref<SwiperClass | null>(null);

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

const OTHER_WORK_QUERY = groq`*[_type == "otherWork"]{
 ...,
}`;
const { data: otherWorkData, error } = await useSanityQuery<SanityDocument>(
  OTHER_WORK_QUERY
);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const otherWorkDataItems = otherWorkData.value;

const customPortableTextComponents: Partial<PortableTextVueComponents> = {
  marks: {
    strong: (props) =>
      h(
        "strong",
        {
          class: "text-red font-bold",
        },
        props.text
      ),
    link: ({ value }, { slots }) => {
      const Icon = resolveComponent("Icon");
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return h(
        "a",
        {
          href: value.href,
          rel,
          target: value.href.startsWith("/") ? undefined : "_blank",
          class: "text-red-2",
        },
        [slots.default?.()]
      );
    },
  },
  block: {
    normal: (_, { slots }) =>
      h(
        "p",
        {
          class:
            "text-brown text-lg/[140%] text-ellipsis text-center line-clamp-2",
        },
        slots.default?.()
      ),
  },
};

const customPortableTextComponents_: Partial<PortableTextVueComponents> = {
  ...customPortableTextComponents,
  block: {
    normal: (_, { slots }) =>
      h(
        "p",
        {
          class: "text-brown text-lg/[140%] text-ellipsis line-clamp-2",
        },
        slots.default?.()
      ),
  },
};
</script>

<template>
  <div v-if="error" class="flex justify-center items-center h-screen">
    <p class="text-red text-xl">Error loading content: {{ error }}</p>
  </div>

  <div v-if="otherWorkData && otherWorkData.length">
    <div class="relative isolate flex flex-col items-center pt-14">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-[1]"
      />

      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block -top-4 right-3 rotate-[105deg] z-[1]"
      />
      <div class="bg-brown-3 absolute top-0 z-0 w-full h-[532px]" />
      <div
        class="mx-auto w-full max-w-7xl px-6 py-14 sm:py-32 lg:flex lg:items-center lg:gap-x-10 xl:px-0 lg:pt-20 lg:pb-40 relative z-[1]"
      >
        <div class="mx-auto w-full lg:mx-0 lg:flex-auto">
          <div class="flex flex-col md:flex-row justify-between relative">
            <h2
              class="text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl"
            >
              Other Work
            </h2>
            <div
              class="hidden md:flex self-end md:self-start mt-6 md:mt-0 gap-3 z-[2]"
            >
              <button
                @click="swipePrev()"
                :class="{
                  'left-1 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey z-[2]': true,
                }"
              >
                <Icon name="material-symbols:arrow-left-alt" size="20" />
              </button>
              <button
                @click="swipeNext()"
                :class="{
                  'right-1 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey z-[2]': true,
                }"
              >
                <Icon
                  name="material-symbols:arrow-left-alt"
                  size="20"
                  class="rotate-180"
                />
              </button>
            </div>
          </div>
          <div class="mt-8 md:mt-16 w-full max-w-7xl relative">
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              @swiper="onSwiper"
            >
              <SwiperSlide
                v-for="(otherWorkDataItem, index) in otherWorkDataItems"
                :key="index"
              >
                <div class="flex flex-wrap gap-11 w-full !max-w-7xl">
                  <div class="flex flex-col items-center w-full max-w-[612px]">
                    <div
                      class="bg-white rounded-3xl border border-grey-3 py-[108px] w-full"
                    >
                      <img
                        :src="
                          urlFor(otherWorkDataItem.otherWorks[0].image)?.url()
                        "
                        :alt="otherWorkDataItem.otherWorks[0].title"
                        loading="lazy"
                      />
                    </div>
                    <nuxt-link
                      :to="otherWorkDataItem.otherWorks[0].url"
                      target="_blank"
                      class="flex flex-col cursor-pointer gap-4 p-6 md:px-16 md:py-6 rounded-3xl border border-grey-3 bg-grey-4 w-11/12 md:w-full max-w-[548px] -mt-14"
                    >
                      <div class="flex gap-4 items-center justify-center">
                        <h3 class="text-red font-medium text-xl md:text-[28px]">
                          {{ otherWorkDataItem.otherWorks[0].title }}
                        </h3>
                        <button
                          class="text-white rounded-full flex items-center justify-center p-4 bg-blue"
                        >
                          <Icon
                            name="material-symbols:arrow-outward"
                            size="20"
                          />
                        </button>
                      </div>
                      <PortableText
                        :value="otherWorkDataItem.otherWorks[0].subtitle"
                        :components="customPortableTextComponents"
                      />
                    </nuxt-link>
                  </div>
                  <div class="flex flex-col gap-8 w-full max-w-[624px]">
                    <div
                      v-for="(otherWorkItem, index) in otherWorkDataItem.otherWorks.filter((_: any,i: number) => i > 0)"
                      :key="index"
                      class="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-grey-3 bg-grey-4 w-full"
                    >
                      <img
                        :src="urlFor(otherWorkItem.image)?.url()"
                        :alt="otherWorkItem.title"
                        class="w-full hidden md:block max-w-[280px]"
                      />
                      <img
                        :src="urlFor(otherWorkItem.image)?.url()"
                        :alt="otherWorkItem.title"
                        class="w-full md:hidden"
                      />
                      <nuxt-link
                        :to="otherWorkItem.url"
                        target="_blank"
                        class="flex flex-col gap-3 px-4 md:px-0 text-center md:text-left pb-6 md:pb-0 md:pr-6"
                      >
                        <div
                          class="flex gap-4 items-center justify-center md:justify-start"
                        >
                          <h3
                            class="text-red font-medium text-xl md:text-[28px]"
                          >
                            {{ otherWorkItem.title }}
                          </h3>
                          <button
                            class="text-white rounded-full flex items-center justify-center p-4 bg-blue"
                          >
                            <Icon
                              name="material-symbols:arrow-outward"
                              size="20"
                            />
                          </button>
                        </div>
                        <PortableText
                          :value="otherWorkItem?.subtitle"
                          :components="customPortableTextComponents_"
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              class="flex justify-center md:hidden self-end md:self-start mt-6 md:mt-0 gap-3 z-[2]"
            >
              <button
                @click="swipePrev()"
                :class="{
                  'left-1 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey z-[2]': true,
                }"
              >
                <Icon name="material-symbols:arrow-left-alt" size="20" />
              </button>
              <button
                @click="swipeNext()"
                :class="{
                  'right-1 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey z-[2]': true,
                }"
              >
                <Icon
                  name="material-symbols:arrow-left-alt"
                  size="20"
                  class="rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
