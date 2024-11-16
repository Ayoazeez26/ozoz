<script setup lang="ts">
const navigation = ref([
  { name: "About (My Story)", to: "/about" },
  { name: "My Book", to: "/book" },
  { name: "Tours & Events", to: "/events" },
  {
    name: "My Nigerian Cookshelf",
    to: "https://www.kitchenbutterfly.com/2016/1934-2016-a-short-history-of-nigerian-cookbooks/",
  },
  { name: "A-Z Glossary", to: "/glossary" },
]);

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
const route = useRoute();
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
console.log(route.name);
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-10 transition-all duration-300',
      isScrolled ? 'bg-brown-3' : 'bg-transparent',
    ]">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global">
      <div class="flex lg:flex-1">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Ozoz Sokoh</span>
          <img class="w-[210px]" src="/img/logo.png" alt="logo" />
        </nuxt-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-3">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :target="item.name === 'My Nigerian Cookshelf' ? '_blank' : ''"
          :to="item.to"
          :class="[
            'p-2 pt-0 font-sauce',
            route.path === item.to
              ? 'border-b border-b-blue text-blue'
              : 'text-brown',
          ]"
          >{{ item.name }}
        </nuxt-link>
      </div>
      <div class="flex-1 items-center hidden md:flex justify-end gap-x-6">
        <nuxt-link
          to="/contact"
          class="rounded-2xl bg-blue px-10 py-4 text-sm font-medium text-grey-2 shadow-sm hover:bg-blue/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:blue"
          >Contact</nuxt-link
        >
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brown"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon
            name="icon-park-outline:hamburger-button"
            size="20"
            aria-hidden="true" />
        </button>
      </div>
    </nav>
    <HeadlessDialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <HeadlessDialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-brown-3 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between gap-x-6">
          <nuxt-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Ozoz Sokoh</span>
            <img class="w-[210px]" src="/img/logo.png" alt="logo" />
          </nuxt-link>

          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-brown"
            @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <Icon
              name="material-symbols:close-rounded"
              size="20"
              aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div
            @click="mobileMenuOpen = false"
            class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-8 mt-6 py-6">
              <nuxt-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                :target="item.name === 'My Nigerian Cookshelf' ? '_blank' : ''"
                :class="[
                  'p-2 block pt-0 -ml-3 font-sauce max-w-fit',
                  route.path === item.to
                    ? 'border-b border-b-blue text-blue'
                    : 'text-brown',
                ]"
                >{{ item.name }}
              </nuxt-link>
            </div>
            <div class="py-6">
              <nuxt-link
                to="/contact"
                class="rounded-2xl bg-blue px-10 py-4 text-sm font-semibold text-grey-2 shadow-sm hover:bg-blue/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:blue"
                >Contact</nuxt-link
              >
            </div>
          </div>
        </div>
      </HeadlessDialogPanel>
    </HeadlessDialog>
  </header>
</template>
