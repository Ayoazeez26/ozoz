import BlockContent from "sanity-blocks-vue-component";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("block-content", BlockContent);
});
