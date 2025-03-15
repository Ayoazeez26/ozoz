<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableText,
  type PortableTextVueComponents,
} from "@portabletext/vue";

const data = useDataStore();
const saveImg = (img: string) => {
  if (!img) return;
  data.clickedImg = img;
};

const BOOK_QUERY = groq`*[_type == "book"][0]{
 ...,
  "purchaseLocations": purchaseLocations[]->{
    ...,
  }
}`;
const {
  data: bookData,
  error,
  status,
} = await useSanityQuery<SanityDocument>(BOOK_QUERY);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const bookDataItem = bookData.value;
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
          target: value.href.startsWith("/") ? undefined : "_blank",
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
          class: "mb-2",
        },
        slots.default?.()
      ),
  },
};
</script>

<template>
  <!-- Show error state if there's an error -->
  <div v-if="error" class="flex justify-center items-center h-screen">
    <p class="text-red text-xl">Error loading content: {{ error }}</p>
  </div>

  <div v-if="bookData" class="bg-brown-3">
    <div class="relative isolate flex flex-col items-center pt-14">
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
        alt="branch image"
        class="absolute hidden md:block top-[550px] right-80 rotate-180 z-0"
      />
      <div
        class="mx-auto w-full max-w-7xl px-4 md:px-6 py-24 sm:py-32 lg:flex lg:justify-between items-start lg:gap-x-10 xl:px-0 lg:py-40 relative z-[1]"
      >
        <div
          class="lg:sticky lg:self-start lg:top-[200px] mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow hidden lg:block"
        >
          <img
            v-if="bookDataItem?.coverImage"
            :src="urlFor(bookDataItem?.coverImage)?.url()"
            alt="chop book"
            class="w-full max-w-[401px]"
          />
          <div class="mt-10 w-full max-w-[521px]">
            <h2 class="font-medium text-[32px]/[38.4px] text-red">
              Have a Sneak Peek
            </h2>
            <div class="mt-6 flex gap-4 flex-wrap">
              <img
                v-for="(img, index) in bookDataItem?.sneakPeek"
                :key="index"
                @click="saveImg(urlFor(img.image)?.url() ?? '')"
                :src="urlFor(img.thumbnail)?.url()"
                :alt="`book_preview _${index + 1} thumbnail`"
                class="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 w-[118px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div
          class="mx-auto max-w-[695px] lg:mx-0 gap-4 flex flex-col lg:flex-auto"
        >
          <h1
            v-if="bookDataItem?.title"
            class="text-pretty text-6xl/[120%] font-medium tracking-tight text-red sm:text-[64px]/[120%] lg:pr-10 mb-12 md:mb-0"
          >
            {{ bookDataItem?.title }}
          </h1>
          <div class="lg:hidden w-full">
            <img
              v-if="bookDataItem?.coverImage"
              :src="urlFor(bookDataItem?.coverImage)?.url()"
              alt="chop book"
              class="w-full max-w-[401px] mx-auto"
            />
            <div class="mt-10 w-full">
              <h2 class="font-medium text-[32px]/[38.4px] text-red">
                Have a Sneak Peek
              </h2>
              <div class="mt-6 flex gap-4 flex-wrap">
                <img
                  v-for="(img, index) in bookDataItem?.sneakPeek"
                  :key="index"
                  @click="saveImg(urlFor(img.image)?.url() ?? '')"
                  :src="urlFor(img.thumbnail)?.url()"
                  :alt="`book_preview _${index + 1} thumbnail`"
                  class="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 w-[118px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <p class="text-pretty text-base/[140%] text-brown sm:text-lg/[140%]">
            Chop Chop celebrates the vibrant, diverse world of Nigerian cuisine,
            featuring dishes like spiced beef suya, rich egusi soup, jollof
            rice, puff puff, and hibiscus drinks. Join author, Ozoz Sokoh on
            this journey, as you explore the country's beloved tastes and
            flavors in hearty soups, stews, rice dishes, fritters, and more.
            This book brings traditional Nigerian cuisine to home kitchens, and
            is full of historical context, ingredient profiles, and stunning
            visuals, capturing the nation’s food-loving spirit and cultural
            richness. Preorder now. The book is officially on sale
            <span class="text-red font-bold">March 18, 2025</span>. All the
            details and links for you to pre-order are here.
          </p>

          <div
            class=""
            v-for="purchaseLocation in bookDataItem?.purchaseLocations"
            :key="purchaseLocation?._id"
          >
            <h3 class="font-medium text-2xl text-red">
              {{ purchaseLocation.title }}
            </h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                v-for="buyLink in purchaseLocation.buyLinks"
                :key="buyLink._id"
                :to="buyLink.url"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium"
              >
                {{ buyLink.retailer }}
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>

          <div class="">
            <h3 class="font-medium text-2xl text-red">Other Territories</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium"
              >
                Check with your closest local bookstore
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h2
              class="text-pretty text-[48px] font-medium tracking-tight text-red sm:text-5xl"
            >
              More About the Book
            </h2>
            <div
              class="text-pretty mt-6 text-base/[140%] text-brown sm:text-lg/[25.2px]"
            >
              <PortableText
                :value="bookDataItem?.bookAbout"
                :components="customPortableTextComponents"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
