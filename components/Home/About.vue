<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableText,
  type PortableTextVueComponents,
} from "@portabletext/vue";

const ABOUT_QUERY = groq`*[_type == "about"][0]{
 ...,
}`;
const {
  data: aboutData,
  error,
} = await useSanityQuery<SanityDocument>(ABOUT_QUERY);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Access the first item directly without using the nested .value property
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
  block: {
    normal: (_, { slots }) =>
      h(
        "p",
        {
          class:
            "mt-4 md:mt-8 text-pretty text-base/[140%] font-medium text-brown sm:text-xl/8",
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

  <div v-if="aboutData" class="bg-white overflow-hidden">
    <div class="relative isolate">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-[-1]"
      />
      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block top-0 left-[200px] z-0"
      />

      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block top-[650px] right-3 rotate-[105deg] z-0"
      />
      <div
        class="mx-auto max-w-7xl px-4 md:px-6 py-16 sm:py-32 lg:flex lg:items-center justify-between lg:gap-x-10 lg:px-8 xl:px-0 lg:py-20 relative z-[1]"
      >
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h2
            v-if="aboutDataItem?.title"
            class="text-pretty text-5xl font-medium tracking-tight text-red sm:text-7xl ml-3"
          >
            {{ aboutDataItem.summaryTitle }}
          </h2>

          <PortableText
            :value="aboutDataItem?.summary"
            :components="customPortableTextComponents"
          />

          <div
            class="mt-10 flex items-center gap-x-6 w-full md:justify-start md:max-w-fit"
          >
            <nuxt-link
              to="/about"
              class="rounded-2xl bg-transparent border border-blue px-10 py-4 text-sm font-medium text-blue shadow-sm hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full flex items-center justify-center text-center"
            >
              About me
            </nuxt-link>
          </div>
        </div>
        <div
          class="mt-16 relative sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow max-w-fit"
        >
          <img
            v-if="aboutDataItem?.summaryImage"
            :src="urlFor(aboutDataItem?.summaryImage)?.url()"
            :alt="aboutDataItem?.summaryTitle"
            class="w-full max-w-[520px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div
      class="mx-auto max-w-7xl w-full px-6 py-16 sm:py-32 flex flex-col gap-16 lg:items-center justify-between overflow-x-hidden lg:px-6 xl:px-0 lg:py-20 relative"
    >
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-0"
      />
      <h2
        class="text-pretty text-5xl text-center font-medium tracking-tight text-red sm:text-7xl"
      >
        My Journey
      </h2>
      <HomeSlider />
    </div>
  </div>
</template>
