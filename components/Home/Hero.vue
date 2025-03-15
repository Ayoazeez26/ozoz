<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import {
  PortableText,
  type PortableTextVueComponents,
} from "@portabletext/vue";

import { ref } from "vue";

const about = ref<HTMLElement | null>(null);
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

const HOME_QUERY = groq`*[_type == "home"][0]{
 ...,
  "purchaseLocations": purchaseLocations[]->{
    ...,
  }
}`;
const {
  data: homeData,
  error,
  status,
} = await useSanityQuery<SanityDocument>(HOME_QUERY);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Access the first item directly without using the nested .value property
const homeDataItem = homeData.value;

console.log("home title:", homeDataItem?.purchaseLocations, status.value);

// Define custom components for rendering specific block elements
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
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return h(
        "a",
        {
          href: value.href,
          rel,
          class: "text-red font-bold underline",
        },
        slots.default?.()
      );
    },
  },
};
</script>

<template>
  <!-- Show loading state while data is loading -->
  <!-- <div
    v-if="status.value === 'pending'"
    class="flex justify-center items-center h-screen"
  >
    <p class="text-blue text-xl">Loading...</p>
  </div> -->

  <!-- Show error state if there's an error -->
  <div v-if="error" class="flex justify-center items-center h-screen">
    <p class="text-red text-xl">Error loading content: {{ error }}</p>
  </div>

  <!-- Only show content when data is loaded and available -->
  <!-- v-else-if="status.value === 'success' && homeData && homeDataItem?.title" -->
  <div v-if="homeData" class="bg-brown-3 scroll-smooth">
    <div class="relative isolate flex flex-col items-center md:pt-14">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-0"
      />
      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute top-40 left-0 z-0 rotate-z"
      />

      <img
        src="/svg/branch.svg"
        loading="lazy"
        alt="branch image"
        class="absolute bottom-0 right-40 rotate-180 z-0"
      />
      <div
        class="mx-auto w-full max-w-7xl px-4 md:px-6 relative z-[1] py-20 sm:py-32 flex flex-col md:flex-row flex-wrap lg:justify-between lg:items-center lg:gap-x-2 xl:px-0 lg:py-40"
      >
        <div
          class="mt-16 order-2 md:order-1 relative sm:mt-24 lg:mt-0 flex justify-start self-start"
        >
          <img
            v-if="homeDataItem?.heroImage"
            :src="urlFor(homeDataItem?.heroImage)?.url()"
            alt="chop book"
            class="w-4/5 mx-auto md:mx-0 md:w-full md:max-w-[364px]"
          />
        </div>
        <div
          class="mx-auto w-full order-1 md:order-2 max-w-[585px] lg:mx-0 lg:flex-auto"
        >
          <h1
            v-if="homeDataItem?.title"
            class="mt-10 lg:mt-0 text-pretty text-6xl font-medium tracking-tight text-red sm:text-7xl md:text-[112px]"
          >
            {{ homeDataItem?.title }}
          </h1>
          <div class="" v-if="homeDataItem?.subtitle">
            <div
              class="mt-6 md:mt-8 text-pretty text-base/[140%] home-subtitle text-brown sm:text-lg/[140%]"
            >
              <PortableText
                :value="homeDataItem?.subtitle"
                :components="customPortableTextComponents"
              />
            </div>
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
          class="flex flex-col order-3 gap-6 mt-10 lg:mt-0 text-lg font-medium text-blue"
        >
          <div
            class="flex flex-col order-3 gap-6 mt-10 lg:mt-0 text-lg font-medium text-blue"
            v-for="purchaseLocation in homeDataItem?.purchaseLocations"
            :key="purchaseLocation?._id"
          >
            <h3 class="text-2xl text-red">{{ purchaseLocation.title }}</h3>

            <nuxt-link
              v-for="buyLink in purchaseLocation.buyLinks"
              :key="buyLink._id"
              :to="buyLink.url"
              target="_blank"
              class="flex items-center gap-3 p-2"
            >
              {{ buyLink.retailer }}
              <Icon name="material-symbols:arrow-outward" size="20" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <button
        @click="goToAbout"
        class="text-blue hidden md:flex pb-8 font-medium gap-3 relative z-[1] cursor-pointer items-center"
      >
        SCROLL DOWN <Icon name="solar:arrow-down-linear" size="20" />
      </button>
      <div ref="about" />
    </div>
  </div>
</template>

<style scoped>
/* .home-subtitle strong {
  color: #b4181a !important;
} */
</style>
