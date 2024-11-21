<script setup lang="ts">
const data = useDataStore();
const thumbImages = ref([
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eight",
  "ninth",
  "tenth",
]);
const saveImg = (img: string) => {
  data.clickedImg = img;
};
</script>

<template>
  <div class="bg-brown-3">
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
        class="absolute hidden md:block top-[550px] right-80 rotate-180 z-0" />
      <div
        class="mx-auto w-full max-w-7xl px-4 md:px-6 py-24 sm:py-32 lg:flex lg:justify-between items-start lg:gap-x-10 xl:px-0 lg:py-40 relative z-[1]">
        <div
          class="lg:sticky lg:self-start lg:top-[200px] mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow hidden lg:block">
          <img
            src="/img/chop-book.webp"
            alt="chop book"
            class="w-full max-w-[401px]" />
          <div class="mt-10 w-full max-w-[521px]">
            <h2 class="font-medium text-[32px]/[38.4px] text-red">
              Have a Sneak Peek
            </h2>
            <div class="mt-6 flex gap-4 flex-wrap">
              <img
                v-for="(img, index) in thumbImages"
                :key="index"
                @click="saveImg(img)"
                :src="`/img/${img}-thumb.webp`"
                :alt="`${img} thumbnail`"
                class="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 w-[118px]" />
            </div>
          </div>
        </div>
        <div
          class="mx-auto max-w-[695px] lg:mx-0 gap-4 flex flex-col lg:flex-auto">
          <h1
            class="text-pretty text-6xl/[120%] font-medium tracking-tight text-red sm:text-[64px]/[120%] lg:pr-10 mb-12 md:mb-0">
            Chop Chop: Cooking the Food of Nigeria
          </h1>
          <div class="lg:hidden w-full">
            <img
              src="/img/chop-book.webp"
              alt="chop book"
              class="w-full max-w-[401px] mx-auto" />
            <div class="mt-10 w-full">
              <h2 class="font-medium text-[32px]/[38.4px] text-red">
                Have a Sneak Peek
              </h2>
              <div class="mt-6 flex gap-4 flex-wrap">
                <img
                  v-for="(img, index) in thumbImages"
                  :key="index"
                  @click="saveImg(img)"
                  :src="`/img/${img}-thumb.webp`"
                  :alt="`${img} thumbnail`"
                  class="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 w-[118px]" />
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
          <div class="">
            <h3 class="font-medium text-2xl text-red">United States</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.hachettebookgroup.com/titles/ozoz-sokoh/chop-chop/9781648291890/?lens=artisan"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                HBG
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.barnesandnoble.com/w/chop-chop-ozoz-sokoh/1145934034;jsessionid=F8B6CB4B7D560C9E313FD3BEBD33A386.prodny_store01-atgap05?ean=9781648291890&st=AFF&2sid=Hachette%20Book%20Group_8040641_NA&sourceId=AFFHachette%20Book%20Group"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Barnes & Noble
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.booksamillion.com/p/9781648291890?cjdata=MXxOfDB8WXww&AID=11552245&PID=8040641&cjevent=94a30174721611ef8328b0cd0a82b820"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Books-a-Million
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://bookshop.org/p/books/chop-chop-cooking-the-food-of-nigeria-ozoz-sokoh/21618903?ean=9781648291890"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Bookshop
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.amazon.com/gp/product/1648291899?tag=hacboogrosit-20"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Amazon
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Canada</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.adifferentbooklist.com/item/BXWUqR7ec6jvgFHW4zLVlQ"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                A Different Booklist
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://anotherstory.ca/item/BXWUqR7ec6jvgFHW4zLVlQ"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Another Story Bookshop
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://shoplocal.bookmanager.com/isbn/9780525612544"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Shop Local
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.amazon.ca/Chop-Cooking-Food-Nigeria/dp/0525612548/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.tt8ATcX0kUJStLcItTPKBZ9RsD___NSX1cVOmbQeEhPVC2wUVUbshC4nsW8qV_SbMk5CMY0JAijRzyquk8rVcf_CuPMNtKjSRT5bEXwvNrNb2YvuhXHn3nSBND9wfi3gmj317RO0azeQ-k7tHx8Gakd5HnTJInnrleysTUP4qyucUhH0ZyETYWHUHjBGkoKM6l8BGEc51p9TwCLM6kL7_3fBgVNyoQEGPOpuyeiEq6gpqn6wswLwD1twqvisQQHrU3NhuUCgeNzg0RtfC2GbnLFetgZ3A3RKx3hI0XQ5mf0.OYdLXV-JfHJOuPrIdLZxGfMoBV3YUtqOIT3BUoR8IIY&qid=1719862555&sr=8-1"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Amazon.ca
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.indigo.ca/en-ca/chop-chop-cooking-the-food-of-nigeria/9780525612544.html"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Indigo
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">United Kingdom</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.foyles.co.uk/book/chop-chop/ozoz-sokoh/9781648291890"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Foyles
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.amazon.co.uk/dp/1648291899/ref=sr_1_3?crid=GROATUOVA1KU&dib=eyJ2IjoiMSJ9.tY7n79bBDlH7KQrErUJxmbRIPiu040ojUC8mxoQgftZm2-1EBOmfRfb08Ac3e9gJ9IL4rs1GWre5QIsETJSs21rNUEohFf5bYbhFKBhF7KO4erFFXLZBEqNfGukHXQSS2s-_uKlYa9Y7RXRmEtEda4V7jJ9jVHz4U71b9N65-PnrnCR2K93bX1bnsZfVJ4mH7cV68xdMM4ZB0r9kUKQUJcAwTaUw12Yh92z4Uh0GUTU.K3ZjPmia784yYW0Fv7QJ3AF2_LnMeBJotsYAcugAKcw&dib_tag=se&keywords=chop+chop+ozoz&qid=1719862579&sprefix=chop+chop+ozoz%2Caps%2C206&sr=8-3"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Amazon UK
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.waterstones.com/book/chop-chop/ozoz-sokoh/9781648291890"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Waterstones
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">New Zealand</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.mightyape.co.nz/product/chop-chop-hardback/38994783"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Mighty Ape
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Nigeria</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.narrativelandscape.com/"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Narrative Landscape Press (Coming soon)
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Australia</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="https://www.qbd.com.au/"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                QBD (Coming soon)
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="https://www.amazon.com.au/Chop-Cooking-Food-Nigeria/dp/1648291899/ref=sr_1_1?crid=3VFCG7HOE5FUH&dib=eyJ2IjoiMSJ9.nfoXiAR_OcteWLTg8EROXw.AsFo3bH4Ot84Od9CnkdzevHvbm00nxDgNq6yj7Wt_X4&dib_tag=se&keywords=9781648291890&qid=1731968746&sprefix=9781648291890%2Caps%2C263&sr=8-1"
                target="_blank"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Amazon AU
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Other Territories</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg cursor-pointer font-medium">
                Check with your closest local bookstore
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h2
              class="text-pretty text-[48px] font-medium tracking-tight text-red sm:text-5xl">
              More About the Book
            </h2>
            <div
              class="text-pretty mt-6 text-base/[140%] text-brown sm:text-lg/[25.2px]">
              <p class="mb-2">
                An introduction to classic Nigerian home cooking featuring 100
                delicious recipes by food explorer, culinary anthropologist, and
                Nigerian Native of @kitchenbutterfly fame, Ozoz Sokoh.
              </p>
              <p class="mb-2">
                In Nigeria, the word “chop” is all about food and feasting and
                “chop chop” a nickname given to someone who loves to eat. And
                it's no surprise Nigeria has an entire vocabulary dedicated to
                eating—with more than 50 nationally recognized languages and
                over 250 ethnicities, Nigeria's food is as rich and diverse as
                its people.This book reflects the foodways’ incredibly flavorful
                complexity, ingredients, and recipes from all six regions,
                gathered and showcased in a highly photographic cookbook.
              </p>
              <p class="mb-2">
                In Chop Chop, author, culinary anthropologist, and Nigerian
                Native Ozoz Sokoh celebrates classic and traditional Nigerian
                cuisine to underscore the ingredients, flavors, and textures
                that make it not only beloved, but delicious and easy for the
                home cook. Featuring:
              </p>
              <p class="mb-2">
                <span class="text-red font-bold"
                  >A COLLECTION OF CLASSIC AND TRADITIONAL NIGERIAN
                  RECIPES</span
                >: Think smoky spiced beef suya skewers, egusi soup with greens,
                restorative pepper soup, jollof rice studded with tomatoes, soft
                puff puff dough bites, and sweet-tart hibiscus drinks, and more
                from across the country.
              </p>
              <p class="mb-2">
                <span class="text-red font-bold"
                  >LEXICON OF NIGERIAN CUISINE</span
                >: Learn how to shop and cook like a Nigerian and learn about
                the ingredients integral to Nigerian cuisine, like nuts and
                seeds, greens, grains, and cereals (especially in the north),
                roots and tubers (favorites of the south), and proteins that
                come together on the plate in the form of hearty soups and
                stews, steamed puddings, salads, rice dishes, fritters, and
                more.
              </p>
              <p class="mb-2">
                <span class="text-red font-bold"
                  >ILLUMINATING CULTURAL AND HISTORICAL EXPLORATIONS</span
                >: With headnotes and sidebars that give important cultural and
                historical context, including how Nigerian cuisine travelled the
                globe leaving its mark, you will learn the deep roots behind
                dishes and drinks, and global foodways connections.
              </p>
              <p class="mb-2">
                <span class="text-red font-bold">STUNNING PHOTOGRAPHY</span>:
                With gorgeous photos from Nigeria’s landscapes, food markets,
                and people, as well as beautiful photography of ingredients and
                finished dishes, Chop Chop is a cookbook to behold.
              </p>
              <p class="mb-2">
                Written through the lens of Ozoz's deep connection to the
                region, Chop Chop will bring Nigeria's food-loving spirit to
                home kitchens everywhere, so you can travel, by plate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
