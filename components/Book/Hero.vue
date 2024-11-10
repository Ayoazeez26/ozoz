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
        class="absolute hidden md:block top-[550px] right-80 rotate-180 z-0" />
      <div
        class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:justify-between items-start lg:gap-x-10 xl:px-0 lg:py-40 relative z-[1]">
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <img
            src="/img/chop-chop.webp"
            alt="chop book"
            class="max-w-[521px]" />
        </div>
        <div class="mx-auto max-w-[695px] lg:mx-0 gap-4 flex flex-col lg:flex-auto">
          <h1
            class="text-pretty text-5xl font-medium tracking-tight text-red sm:text-[64px]/[120%] lg:pr-10">
            Chop Chop: Cooking the Food of Nigeria
          </h1>
          <p class="text-pretty text-lg text-brown sm:text-lg/[140%]">
            Chop Chop celebrates the vibrant, diverse world of Nigerian cuisine,
            featuring dishes like spicy beef suya, rich egusi stew, and jollof
            rice, as well as puff puff, hibiscus drinks, and more. With
            Nigeria’s culinary heritage rooted in over 250 ethnicities, author
            and culinary anthropologist Ozoz Sokoh compiles the country's
            beloved flavors—nuts, grains, greens, and tubers—into hearty soups,
            stews, rice dishes, and fritters. This book brings traditional
            Nigerian food to the home kitchen with historical context,
            ingredient profiles, and stunning visuals, capturing the nation’s
            food-loving spirit and cultural richness.
          </p>
          <div class="">
            <h3 class="font-medium text-2xl text-red">United States</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                HBG
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Amazon
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Barnes & Noble
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Books-a-Million
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Bookshop
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Canada</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Indigo
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Amazon.ca
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Shop Local
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">United Kingdom</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Water Stones
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Amazon UK
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Foyles
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">Australia</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                QBD (link coming soon)
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
          <div class="">
            <h3 class="font-medium text-2xl text-red">New Zealand</h3>
            <div class="flex flex-wrap gap-4 mt-2 text-blue">
              <nuxt-link
                to="#"
                class="flex items-center gap-3 p-2 text-lg font-medium">
                Mighty Ape
                <Icon name="material-symbols:arrow-outward" size="20" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
