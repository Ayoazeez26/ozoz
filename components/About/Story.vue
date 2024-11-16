<script setup lang="ts"></script>

<template>
  <div class="bg-white">
    <div class="relative isolate">
      <img
        src="/svg/bg-lines.svg"
        alt="lines"
        class="absolute -top-40 left-0 right-0 z-0" />
      <img
        src="/svg/branch.svg"
        alt="branch image"
        class="absolute hidden md:block top-0 left-[400px] z-0" />

      <div
        class="mx-auto max-w-7xl px-6 py-24 relative z-[1] sm:py-32 lg:flex lg:items-center justify-between lg:gap-x-10 lg:px-8 xl:px-0 lg:py-20">
        <div class="mx-auto max-w-[696px] lg:mx-0 lg:flex-auto">
          <h2
            class="text-pretty text-5xl/[120%] font-medium tracking-tight text-red sm:text-7xl/[120%]">
            Current <br /> Explorations
          </h2>
          <p
            class="mt-6 text-pretty text-base/[140%] md:text-lg/[120%] text-brown">
            Her ongoing exploration, "Coast to Coast: From West Africa to the
            World" traces the histories and edible trails of West Africa and its
            diaspora through ingredients and "commodities" and is documented on
            <nuxt-link
              to="https://www.feastafrique.com/"
              target="_blank"
              class="text-red-2"
              >Feast Afrique
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" /></nuxt-link
            >. It includes an open-access digital library of
            <span class="font-semibold">250+</span>
            cuisine and cookbooks from the 1800s to date, a hall of fame,
            data-driven work on the role of food media in marginalizing West
            African voices, and a series of short films available for screening.
          </p>

          <p
            class="mt-3 text-pretty text-base/[140%] md:text-lg/[120%] text-brown">
            Ozoz has spoken at
            <nuxt-link
              to="https://www.youtube.com/watch?v=TiSluxo1Bds"
              target="_blank"
              class="text-red-2">
              TEDx
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" />
            </nuxt-link>
            and at conferences hosted by the
            <nuxt-link
              to="https://www.worldsofflavor.com/ozoz-sokoh"
              target="_blank"
              class="text-red-2">
              Culinary Institute of America
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" />
            </nuxt-link>
            . Her work has been featured in
            <nuxt-link
              to="https://www.smithsonianmag.com/smart-news/theres-free-online-library-dedicated-west-africas-food-traditions-180977076/"
              target="_blank"
              class="text-red-2">
              Smithsonian Magazine
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" />
            </nuxt-link>
            ,
            <nuxt-link
              to="https://www.atlasobscura.com/articles/where-to-eat-lagos-nigeria"
              target="_blank"
              class="text-red-2">
              Gastro Obscura
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" />
            </nuxt-link>
            , CNN African Voices,
            <nuxt-link
              to="https://www.youtube.com/watch?v=b4c386YGsGg"
              target="_blank"
              class="text-red-2">
              Anthony Bourdain's Parts Unknown
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="pt-2" /> </nuxt-link
            >, and more.
          </p>
          <p
            class="mt-3 text-pretty text-base/[140%] md:text-lg/[120%] text-brown">
            She is a professor of Food and Tourism studies at Centennial
            College. She makes her home with her three teenage children in
            Mississauga, Ontario-Canada, on Land of the Mississaugas of the
            Credit First Nation.
          </p>
        </div>
        <div
          class="mt-16 relative sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow max-w-fit">
          <img
            src="/img/ozoz1.webp"
            alt="ozoz first image"
            class="w-full max-w-[520px]" />
        </div>
      </div>
    </div>
  </div>
</template>
