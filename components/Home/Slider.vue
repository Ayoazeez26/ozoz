<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableText,
  type PortableTextVueComponents,
} from "@portabletext/vue";
import { resolveComponent } from "vue";

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

const ABOUT_QUERY = groq`*[_type == "about"][0]{
 ...,
}`;
const { data: aboutData, error } = await useSanityQuery<SanityDocument>(
  ABOUT_QUERY
);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const aboutDataItem = aboutData.value;

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
        [
          slots.default?.(),
          h(Icon, {
            name: "material-symbols:arrow-outward",
            size: "16",
            class: "pt-2",
          }),
        ]
      );
    },
  },
  block: {
    normal: (_, { slots }) =>
      h(
        "p",
        {
          class: "mt-5 text-lg/[140%]",
        },
        slots.default?.()
      ),
  },
};

const breakpoints = ref({
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
});
</script>
<template>
  <div v-if="error" class="flex justify-center items-center h-screen">
    <p class="text-red text-xl">Error loading content: {{ error }}</p>
  </div>

  <div
    v-if="aboutData"
    class="w-[287px] mx-auto md:w-full max-w-[1101px] text-brown"
  >
    <button
      @click="swipePrev()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer left-1 flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
      }"
    >
      <Icon name="material-symbols:arrow-left-alt" size="20" />
    </button>
    <button
      @click="swipeNext()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer flex right-1 items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
      }"
    >
      <Icon
        name="material-symbols:arrow-left-alt"
        size="20"
        class="rotate-180"
      />
    </button>
    <Swiper
      :modules="[SwiperNavigation]"
      :breakpoints="{
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(img, index) in aboutDataItem?.myjourney"
        :key="index"
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]"
      >
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              :src="urlFor(img.image)?.url()"
              :alt="`journey ${index} img`"
              class="w-full max-w-[280px]"
            />
            <PortableText
              :value="img?.subtitle"
              :components="customPortableTextComponents"
            />
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style></style>
