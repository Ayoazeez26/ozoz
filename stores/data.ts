import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {

  const clickedImg = ref("");
  const showModal = ref(true);

  return {
    clickedImg,
    showModal
  }
},
{
  persist: {
    storage: persistedState.localStorage
  }
}
)