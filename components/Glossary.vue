<script setup lang="ts">
const searchTerm = ref("");
const letters = ref([
  { name: "A", to: "#A" },
  { name: "B", to: "#B" },
  { name: "C", to: "#C" },
  { name: "D", to: "#D" },
  { name: "E", to: "#E" },
  { name: "F", to: "#F" },
  { name: "G", to: "#G" },
  { name: "H", to: "#H" },
  { name: "I", to: "#I" },
  { name: "J", to: "#J" },
  { name: "K", to: "#K" },
  { name: "L", to: "#L" },
  { name: "M", to: "#M" },
  { name: "N", to: "#N" },
  { name: "O", to: "#O" },
  { name: "P", to: "#P" },
  { name: "Q", to: "#Q" },
  { name: "R", to: "#R" },
  { name: "S", to: "#S" },
  { name: "T", to: "#T" },
  { name: "U", to: "#U" },
  { name: "V", to: "#V" },
  { name: "W", to: "#W" },
  { name: "X", to: "#X" },
  { name: "Y", to: "#Y" },
  { name: "Z", to: "#Z" },
]);
const selectedLetter = ref("A");

const goToLetter = (letter: { name: string; to: string }) => {
  selectedLetter.value = letter.name;
  // const link = document.createElement("a");
  // link.href = letter.to;
  // link.click();
  const element = document.querySelector(letter.to);
  const offset = 210; // Adjust this value to match the combined height of the navbar and search bar

  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};

const data = ref([
  {
    A: [
      {
        title: "ABACHA",
        desc: "Also known as African salad. It is a by-product of cassava. Popularly eaten as an appetizer. Originates from the south-eastern region.",
      },
      {
        title: "ACHARA",
        desc: "The spear grass vegetable. It is traditionally used in cooking egusi soup in the eastern region of Nigeria.",
      },
      {
        title: "ACHICHA EDE",
        desc: "Cocoyam pottage prepared with dried cocoyam flakes and leafy vegetables. Originates from the eastern region.",
      },
      {
        title: "ADALU",
        desc: "Beans and corn porridge. Also known as 'Ewa ati Agbado' (Yoruba) and 'Agwa na oka' (Igbo).",
      },
      {
        title: "AFANG",
        desc: "Made out of Eru leaves (Gnetum africanum), is a soup that originates from the southern region.",
      },
      {
        title: "AGIDI",
        desc: "A cornmeal cake traditionally eaten with beans and stew or Nigerian soups. Also known as Eko (Yoruba). Originates from the western region.",
      },
      {
        title: "AKARA",
        desc: "Fritters made from raw, skinned beans. A popular street food served with bread, smooth corn pap, oats, or other sides.",
      },
      {
        title: "ALKAKI",
        desc: "Fried wheat dough soaked in honey. Customarily presented by newlyweds in the north when visiting family. Enjoyed with pap or soft drinks.",
      },
      {
        title: "AMALA",
        desc: "Paste made from dried yam peels. Traditionally eaten with Ewedu and stew. Originates from the western region.",
      },
      {
        title: "ASALA",
        desc: "African walnut used in making soup in the western region.",
      },
      {
        title: "ASARO",
        desc: "Palm-oil stewed yam porridge, sometimes with added vegetables. Originates from the western region.",
      },
      {
        title: "ASUN",
        desc: "Spicy barbecued/grilled goat meat with the skin on, served with sautéed peppers and onions. A popular appetizer from the western region.",
      },
      {
        title: "ABAK ATAMA",
        desc: "Passion fruit and atama leaf soup popular in the southern region, usually eaten with starch.",
      },
      {
        title: "AYAMASE",
        desc: "Also known as Ofada stew, it is made with fermented locust beans and traditionally served with Ofada rice. Originates from the western region.",
      },
    ],
  },
  {
    B: [
      {
        title: "BANGA",
        desc: "Palm fruit soup, also known as Ofe Akwu (Igbo). Originates from the southern region.",
      },
      {
        title: "BEANS",
        desc: "Black-eyed peas cooked with palm oil and crayfish, served with plantain, rice, stew, or on its own.",
      },
      {
        title: "BOLE, BOLI",
        desc: "Roasted plantains, served as a snack in the south and west, paired with roasted groundnuts or fish and pepper sauce.",
      },
      {
        title: "BITTERLEAF",
        desc: "Vernonia amygdalina leaves used in Ofe Onugbu (Igbo) soup. Known for its unique taste due to ogiri (fermented pumpkin seed).",
      },
      {
        title: "BLACK SOUP",
        desc: "Known as Omoebe, made from bitterleaf and African basil (efinrin). Turns black when vegetables oxidize. Originates from the southern region.",
      },
    ],
  },
  {
    C: [
      {
        title: "CHAPMAN",
        desc: "Nigeria's favorite mocktail, originally created for medicinal purposes.",
      },
      {
        title: "CHICKEN CURRY",
        desc: "The Nigerian version is seasoned with local spices and higher heat levels compared to the Asian recipe.",
      },
      {
        title: "CHIN-CHIN",
        desc: "A popular fried snack similar to Scandinavian klenat, made from wheat flour and nutmeg for flavor.",
      },
      {
        title: "COCONUT CANDY",
        desc: "Street food snack/dessert made from grated coconut and granulated sugar.",
      },
      {
        title: "COCONUT RICE",
        desc: "Made with white rice and coconut milk/powder, served with vegetables or sauce.",
      },
      {
        title: "COCONUT RICE PUDDING",
        desc: "A popular breakfast/dessert in the northern region.",
      },
    ],
  },
  {
    D: [
      {
        title: "DANKUWA",
        desc: "A snack made from roasted maize flour and groundnut mixed with spices. Originates from the northern region.",
      },
      {
        title: "DAN WAKE",
        desc: "Beans dumplings from the northern region, served with suya spice, salad, and sauce.",
      },
      {
        title: "DODO",
        desc: "Sweet, fried plantains served as a side or on their own.",
      },
      {
        title: "DUN-DUN",
        desc: "Fried yam, also known as Yamarita.",
      },
    ],
  },
  {
    E: [
      {
        title: "EBA",
        desc: "Thick cassava meal paste prepared with hot water, eaten with various soups.",
      },
      {
        title: "EDIKANG IKONG",
        desc: "Thick soup with pumpkin and water leaves, assorted meats, and spices. Originates from the southern region.",
      },
      {
        title: "EFO-RIRO",
        desc: "Yoruba delicacy made with green amaranth, locust beans, and bleached palm oil, without tomatoes.",
      },
      {
        title: "EGUSI",
        desc: "A thick stew made from ground melon seeds and leafy greens.",
      },
      {
        title: "EKPANG NKUKWO",
        desc: "Cocoyam pottage with crayfish and palm oil. Originates from the southern region.",
      },
      {
        title: "EWEDU",
        desc: "Green leafy vegetable soup traditionally eaten with Amala and stew. Originates from the western region.",
      },
      {
        title: "EWA AGOYIN",
        desc: "Soft beans dish served with spicy pepper sauce. Originates from the western region.",
      },
    ],
  },
  {
    F: [
      {
        title: "FISHERMAN'S SOUP",
        desc: "Seafood soup made with palm oil and traditional spices. Originates from the southern region.",
      },
      {
        title: "FRIED RICE",
        desc: "Rice stir-fried with vegetables and proteins, unique to Nigeria due to heavy curry use.",
      },
      {
        title: "FURA DA NONO",
        desc: "Millet dough balls served with fermented milk. A popular northern snack/breakfast.",
      },
      {
        title: "FUFU",
        desc: "Dough made from boiled plantain or cassava, served with soups and stews.",
      },
      {
        title: "FUNKASO",
        desc: "Millet pancakes from the northern region, eaten with vegetables or sugar.",
      },
    ],
  },
  {
    G: [
      {
        title: "GARDEN EGG",
        desc: "A fruit used as a vegetable, commonly eaten with peanut butter or used in fish stews in the eastern region.",
      },
      {
        title: "GARRI",
        desc: "Cassava flour eaten as a cereal or accompaniment to other dishes. Ijebu-garri is known for its sour taste.",
      },
      {
        title: "GBEGIRI",
        desc: "Black-eyed beans soup served with ewedu and fufu. Originates from the western region.",
      },
      {
        title: "GIZDODO",
        desc: "Stir-fried gizzards mixed with dodo and vegetables in pepper sauce.",
      },
    ],
  },
  {
    H: [],
  },
  {
    I: [
      {
        title: "ISI-EWU",
        desc: "A spiced goat's head dish popular in the eastern region, served with palm oil-based sauce.",
      },
      {
        title: "INDOMIE",
        desc: "A popular ramen noodle brand in Nigeria, eaten plain or with assorted toppings.",
      },
    ],
  },
  {
    J: [
      {
        title: "JOLLOF RICE",
        desc: "Nigeria's iconic rice dish, originally from the Jolof Empire. A source of rivalry with Ghana.",
      },
    ],
  },
  {
    K: [
      {
        title: "KATUN RIDI",
        desc: "Sesame seed candy. Originates from the northern region.",
      },
      {
        title: "KILISHI",
        desc: "Dried spiced beef similar to jerky, popular in northern Nigeria.",
      },
      {
        title: "KULI-KULI",
        desc: "Groundnut snack from roasted peanuts, deep-fried. Common in the northern region.",
      },
      {
        title: "KUNNU AYA",
        desc: "A non-alcoholic drink made from tiger nuts, sometimes spiced with ginger.",
      },
    ],
  },
  {
    L: [
      {
        title: "LAFUN",
        desc: "Cassava flour paste similar to fufu, eaten with vegetable soup.",
      },
    ],
  },
  {
    M: [
      {
        title: "MAKARONI",
        desc: "Nigerian pasta dish often prepared with vegetables, proteins, and spicy tomato sauce.",
      },
      {
        title: "MASA",
        desc: "Rice cake popular in the northern region, often served with honey or vegetable soup.",
      },
      {
        title: "MOIN-MOIN",
        desc: "Steamed bean pudding made with blended black-eyed peas, peppers, and onions.",
      },
      {
        title: "MIYAN KUKA",
        desc: "Traditional northern soup made with baobab leaf powder, served with tuwo.",
      },
    ],
  },
  {
    N: [
      {
        title: "NKWOBI",
        desc: "Spicy cow foot dish served as an appetizer, commonly enjoyed in the eastern region.",
      },
      {
        title: "NUNU",
        desc: "Locally fermented milk drink from the northern region.",
      },
    ],
  },
  {
    O: [
      {
        title: "OFADA RICE",
        desc: "Local rice variety served with Ayamase (Ofada stew). Originates from the western region.",
      },
      {
        title: "OGBONO",
        desc: "A thick soup made from ground wild mango seeds, eaten with fufu or other starches.",
      },
      {
        title: "OKPA",
        desc: "Steamed bambara nut flour pudding, a popular snack in the eastern region.",
      },
      {
        title: "OKRO SOUP",
        desc: "Soup made with okra, often combined with leafy greens, eaten with fufu or pounded yam.",
      },
      {
        title: "OFADA STEW",
        desc: "Peppery stew made with palm oil and green bell peppers, served with Ofada rice.",
      },
    ],
  },
  {
    P: [
      {
        title: "PEPPER SOUP",
        desc: "Spicy broth made with assorted meats or fish and traditional herbs. Popular across regions.",
      },
      {
        title: "PONMO",
        desc: "Stewed or spiced cow skin, enjoyed as a snack or in main dishes.",
      },
      {
        title: "PAP",
        desc: "Fermented corn pudding typically served as a breakfast dish with akara or moin-moin.",
      },
    ],
  },
  {
    Q: [
      {
        title: "QUAKER OATS",
        desc: "Oatmeal adapted into Nigerian breakfast meals, often served with milk and sugar.",
      },
    ],
  },
  {
    R: [
      {
        title: "RICE AND STEW",
        desc: "Classic dish served with tomato-based stew and assorted proteins.",
      },
      {
        title: "ROASTED CORN",
        desc: "Street food often paired with coconut or pear (ube) in the southern region.",
      },
    ],
  },
  {
    S: [
      {
        title: "SUYA",
        desc: "Spicy grilled meat skewer, a popular street food originating from the northern region.",
      },
      {
        title: "SNAIL STEW",
        desc: "Delicacy prepared with large snails, seasoned with peppers and spices.",
      },
      {
        title: "SAMPHIRE",
        desc: "Sea vegetable occasionally used in coastal dishes.",
      },
      {
        title: "SHARWAMA",
        desc: "Nigerian twist on the Middle Eastern dish, made with spiced meat, vegetables, and creamy sauces in flatbread.",
      },
    ],
  },
  {
    T: [
      {
        title: "TUWO SHINKAFA",
        desc: "Rice flour meal, typically served with Miyan Kuka or Miyan Taushe in the northern region.",
      },
      {
        title: "TAPIOCA",
        desc: "Cassava-based dish served as a snack or dessert with coconut milk.",
      },
    ],
  },
  {
    U: [
      {
        title: "UKWA",
        desc: "African breadfruit porridge native to the eastern region.",
      },
      {
        title: "UBE",
        desc: "African pear often enjoyed with roasted corn.",
      },
    ],
  },
  {
    V: [
      {
        title: "VERMICELLI PUDDING",
        desc: "Pasta-based dessert flavored with milk, sugar, and spices.",
      },
    ],
  },
  {
    W: [
      {
        title: "WAINA",
        desc: "Another name for Masa, a rice cake commonly enjoyed in the northern region.",
      },
      {
        title: "WORO",
        desc: "Sweet snack made from grated coconuts and sugar.",
      },
    ],
  },
  {
    X: [
      {
        title: "XMAS RICE",
        desc: "Popular festive rice dish prepared during Christmas, cooked with spices, proteins, and vegetables.",
      },
    ],
  },
  {
    Y: [
      {
        title: "YAM PORRIDGE",
        desc: "Mashed yam dish cooked with palm oil, vegetables, and spices.",
      },
      {
        title: "YOGHURT",
        desc: "Locally made or commercial yoghurt enjoyed plain or mixed with fruits.",
      },
    ],
  },
  {
    Z: [
      {
        title: "ZOGALE",
        desc: "Moringa salad seasoned with local spices and sometimes mixed with groundnut or sesame.",
      },
      {
        title: "ZABUWA",
        desc: "Traditional meat dish prepared with assorted spices, specific to certain northern festivities.",
      },
    ],
  },
]);

const filteredData = computed(() => {
  if (!searchTerm.value) return data.value;

  return data.value
    .map((letterGroup) => {
      const letter = Object.keys(letterGroup)[0];
      const filteredItems = letterGroup[letter].filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchTerm.value.toLowerCase())
      );

      return filteredItems.length ? { [letter]: filteredItems } : null;
    })
    .filter(Boolean); // Remove any null entries
});
</script>
<template>
  <div class="bg-brown-3">
    <div class="relative isolate flex flex-col items-center pt-[100px] w-full">
      <div
        class="mt-2.5 flex px-4 md:px-6 flex-col relative z-[1] w-full max-w-[1160px] mx-auto">
        <div
          class="text-[#AAAAAA] md:pb-8 bg-brown-3 sticky top-[100px] self-start w-full max-w-[1160px]">
          <Icon
            name="ph:magnifying-glass-bold"
            size="20"
            class="absolute top-4 left-3" />
          <input
            v-model="searchTerm"
            type="text"
            name="search"
            id="search"
            class="block w-full rounded-xl border-0 pl-11 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-brown/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown/50 sm:text-sm/6"
            placeholder="Search for a term" />
        </div>
        <div class="flex flex-col items-start md:flex-row mt-16 w-full">
          <div
            class="sticky self-start top-[205px] md:w-[78px] hidden md:flex md:flex-col overflow-x-auto justify-start mr-4">
            <div class="overflow-y-auto max-h-[calc(100vh-205px)] pb-10">
              <button
                v-for="(letter, index) in letters"
                :key="index"
                @click="goToLetter(letter)"
                :class="[
                  'border border-brown-2 border-b-0 flex items-center justify-center px-5 py-3 !w-[78px] h-[78px] font-sauce',
                  selectedLetter === letter.name
                    ? 'bg-blue text-brown-2'
                    : 'bg-transparent text-brown',
                ]">
                {{ letter.name }}
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-4 w-full max-w-[669px] md:pl-[119px]">
            <div
              class="gap-4"
              v-for="(letterData, index) in filteredData"
              :key="index">
              <h2
                :id="Object.keys(letterData)[0]"
                class="text-red-2 text-[40px] font-medium">
                {{ Object.keys(letterData)[0] }}
              </h2>
              <div
                v-for="(item, idx) in letterData[Object.keys(letterData)[0]]"
                :key="idx"
                class="bg-white flex flex-col gap-4 p-8 rounded-2xl w-full mb-4">
                <h3 class="text-red-2 text-2xl font-medium uppercase">
                  {{ item.title }}
                </h3>
                <p class="text-brown text-lg/[140%] tracking-[-0.27px]">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
