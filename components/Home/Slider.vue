<script setup lang="ts">
const swiperInstance = ref(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const swipePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const swipeNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const breakpoints = ref({
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
});
</script>
<template>
  <div class="w-[287px] mx-auto md:w-full max-w-[1068px] text-brown">
    <button
      @click="swipePrev()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer left-1 flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
      }">
      <Icon name="material-symbols:arrow-left-alt" size="20" />
    </button>
    <button
      @click="swipeNext()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer flex right-1 items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
      }">
      <Icon
        name="material-symbols:arrow-left-alt"
        size="20"
        class="rotate-180" />
    </button>
    <Swiper
      :modules="[SwiperNavigation]"
      :breakpoints="{
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }"
      @swiper="onSwiper">
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey1.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Ozoz was born in Warri, on the southern coast of Nigeria
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full flex flex-col pt-20 justify-center items-center">
            <img
              src="/img/journey2.webp"
              alt="journey one img"
              class="max-w-[177px]" />
            <p class="mt-5 text-lg/[140%]">
              She didn’t enjoy food until <span class="font-bold">1985</span>,
              when she was nine years old. She fell in love with a hamburger and
              Mirinda at Wimpy’s on Princes Street in Edinburgh
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey3&4.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Ozoz did not like Chemistry so opted out of Quantity surveying,
              studying Urban & Regional Planning instead at Obafemi Awolowo
              University, Ile-Ife until <span class="font-bold">1997</span>. She
              loved cooking for her friends.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey3&4.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In <span class="font-bold">1997</span>, she moved to the UK to
              study Geology, and fell in love with Chemistry.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full flex flex-col pt-20 justify-center items-center">
            <img
              src="/img/journey5.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              During her time in the UK, she discovered food as comfort, and
              began cooking Nigerian dishes to fight homesickness. In
              <span class="font-bold">1998</span>, she created her first recipe,
              tomato salsa, which she still makes today.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey6.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Ozoz worked as a geologist in Nigeria, then moved abroad. In
              <span class="font-bold">2009</span>,, she began writing Kitchen
              Butterfly, her food blog while living and working in The
              Netherlands.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey7.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Her interest in travel, recipe research and development deepened
              with writing.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey8.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Her love for food history and its importance as cultural identity
              began in <span class="font-bold">2009, 2010</span> when she
              discovered Brazilian Acarajé, and its origins in Nigerian Àkàrà.
              This was a turning point in her food journey.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey9.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              Upon her return to Nigeria in <span class="font-hold">2011</span>,
              she deepened her food research on Nigerian ingredients,
              techniques, practices and more, in an attempt to document and
              codify the cuisine, including building Nigeria’s first seasonal
              produce calendar.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey10.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In <span class="font-bold">2014</span>, she presented her work
              Journey by Plate at
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
              Port Harcourt. In it, she documents the origins, philosophy and
              practice of her ongoing
              <span class="text-red-2 italic">#NewNigerianKitchen</span> 
              project.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey11.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In the intervening years, Sokoh has created experiences including
              <span class="text-red-2 italic">#EattheBooks</span> , celebrating
              literary and visual works and translating them to tastes in food
              and drink, at events and festivals across the world.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey12.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In Her interest in curatorial work has led to the development of
              exhibitions including the <span class="font-bold">2019</span> Food
              is More Than Eating Exhibition held as part of the Abori Food
              System Design Summit.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey13.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In Sokoh launched
              <nuxt-link
                to="https://www.feastafrique.com/"
                target="_blank"
                class="text-red-2"
                >Feast Afrique
                <Icon
                  name="material-symbols:arrow-outward"
                  size="16"
                  class="pt-2"
              /></nuxt-link>
              in <span class="font-bold">2020</span>, an online platform
              dedicated to the documentation and celebration of West African
              Food and Drink. A digital library of
              <span class="font-bold">240</span>+ West African and diasporic
              culinary and literary resources are a key part of this work.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey14.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              In <span class="font-bold">2021</span>, Ozoz graduated with Honors
              from the Museum and Cultural Management Program at Centennial
              College, Canada.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="w-[287px!important] max-w-[287px!important] md:min-w-[367px!important] md:max-w-[367px!important]">
        <div class="w-full flex items-start">
          <div class="w-full">
            <img
              src="/img/journey15.webp"
              alt="journey one img"
              class="w-full max-w-[280px]" />
            <p class="mt-5 text-lg/[140%]">
              She is a professor of Food and Tourism Studies at Centennial
              College.
            </p>
          </div>
          <div class="pt-[120px] w-full max-w-[87px]">
            <img src="/svg/link.svg" alt="link icon" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style></style>
