<script setup lang="ts">
const swiperInstance = ref(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
}

const swipePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
}


const swipeNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
}
</script>
<template>
  <!-- <div class="navigation-wrapper relative w-full">
    <div ref="container" class="keen-slider text-brown flex justify-center max-w-[1068px] mx-auto overflow-hidden">
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
        <img
          src="/img/journey1.webp"
          alt="journey one img"
          class="max-w-[280px]" />
        <p class="mt-5 text-lg/[140%]">
          Sokoh was born in <span class="font-bold text-red">1976</span><br />
          in Warri, on the southern coast of Nigeria.
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important] flex flex-col pt-20 justify-center items-center">
        <img
          src="/img/journey2.webp"
          alt="journey one img"
          class="max-w-[177px]" />
        <p class="mt-5 text-lg/[140%]">
          She attended the Obafemi Awolowo University in Ile-Ife, Nigeria for 3
          years, studying Urban and Regional Planning, and left in 1997.
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
        <img
          src="/img/journey3.webp"
          alt="journey one img"
          class="max-w-[280px]" />
        <p class="mt-5 text-lg/[140%]">
          She moved to the United Kingdom where she earned a degree in Geology
          from the University of Liverpool. 
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
        <img
          src="/img/journey1.webp"
          alt="journey one img"
          class="max-w-[280px]" />
        <p class="mt-5 text-lg/[140%]">
          Sokoh was born in <span class="font-bold text-red">1976</span><br />
          in Warri, on the southern coast of Nigeria.
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important] flex flex-col pt-20 justify-center items-center">
        <img
          src="/img/journey2.webp"
          alt="journey one img"
          class="max-w-[177px]" />
        <p class="mt-5 text-lg/[140%]">
          She attended the Obafemi Awolowo University in Ile-Ife, Nigeria for 3
          years, studying Urban and Regional Planning, and left in 1997.
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
      <div
        class="keen-slider__slide min-w-[280px!important] max-w-[280px!important]">
        <img
          src="/img/journey3.webp"
          alt="journey one img"
          class="max-w-[280px]" />
        <p class="mt-5 text-lg/[140%]">
          She moved to the United Kingdom where she earned a degree in Geology
          from the University of Liverpool. 
        </p>
      </div>
      <div
        class="keen-slider__slide pt-[120px] min-w-[87px!important] max-w-[87px!important]">
        <img src="/svg/link.svg" alt="link icon" />
      </div>
    </div>
    <button
      @click="slider?.prev()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer left-1 flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
        arrow: true,
        'arrow--left': true,
        disabled: current === 0,
      }">
      <Icon name="material-symbols:arrow-left-alt" size="20" />
    </button>
    <button
    v-if="slider"
      @click="slider?.next()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer flex right-1 items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
        arrow: true,
        'arrow--left': true,
        disabled: current === slider.track.details.slides.length - 1,
      }">
      <Icon name="material-symbols:arrow-left-alt" size="20" class="rotate-180" />
    </button>
  </div> -->
  <div class="w-full max-w-[1068px] text-brown">
    <button
      @click="swipePrev()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer left-1 flex items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
        // arrow: true,
        // 'arrow--left': true,
        // disabled: current === 0,
      }">
      <Icon name="material-symbols:arrow-left-alt" size="20" />
    </button>
    <button
      @click="swipeNext()"
      :class="{
        'absolute top-[50%] translate-y-[-50%] cursor-pointer flex right-1 items-center justify-center w-14 h-14 rounded-full bg-red-2 text-white disabled:bg-blue-3 disabled:text-grey': true,
        // arrow: true,
        // 'arrow--left': true,
        // disabled: current === slider.track.details.slides.length - 1,
      }">
      <Icon name="material-symbols:arrow-left-alt" size="20" class="rotate-180" />
    </button>
    <Swiper
      :slides-per-view="4"
      @swiper="onSwiper">
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey1.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            Sokoh was born in <span class="font-bold text-red">1976</span><br />
            in Warri, on the southern coast of Nigeria.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full flex flex-col pt-20 justify-center items-center">
          <img
            src="/img/journey2.webp"
            alt="journey one img"
            class="max-w-[177px]" />
          <p class="mt-5 text-lg/[140%]">
            She attended the Obafemi Awolowo University in Ile-Ife, Nigeria for
            3 years, studying Urban and Regional Planning, and left in 1997.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey3.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            She moved to the United Kingdom where she earned a degree in Geology
            from the University of Liverpool. 
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey4.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            During her time in the UK, she began cooking Nigerian food to feel
            closer to home. According to Sokoh, she created her first recipe in
            <span class="font-bold">1998</span> while living and going to school
            in the UK.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full flex flex-col pt-20 justify-center items-center">
          <img
            src="/img/journey5.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            After graduating from the University of Liverpool, Sokoh worked as a
            geologist. She began a culinary blog,
            <span class="text-red-2 font-medium italic">Kitchen Butterfly</span>
            , and blogged about Nigerian food while she lived and worked in the
            Netherlands from <span class="font-bold">2007</span> to
            <span class="font-bold">2011</span>. She developed recipes.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey6.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            Upon her return to Nigeria in <span class="font-bold">2011</span>,
            she began researching familiar Nigerian ingredients and their uses
            from the perspective of culinary anthropology. She researched and
            presented a documentary on Agege bread, a staple in Nigeria, for
            ‘<span class="text-red-2 font-medium italic">For Africans</span>’.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey7.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            In <span class="font-bold">2018</span> Sokoh created
            <span class="text-red-2 font-medium italic">Feast Afrique</span>, an
            online curated collection of books relating to the culinary history
            of West Africa and its diaspora. This collection includes a digital
            library of <span class="font-bold">240+</span> West African and
            diasporic culinary and literary resources. 
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full flex flex-col pt-20 justify-center items-center">
          <img
            src="/img/journey8.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            She organized the first World Jollof Day in
            <span class="font-bold">2017</span>. The festival is held to
            celebrate Jollof rice, a dish that is ubiquitous in West Africa and
            the region's best known dish worldwide. 
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey9.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            She has created ‘<span class="font-bold italic">Eat The Book</span>’
            experiences, celebrating African food from African writing by
            creating the dishes at literary and arts festivals.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[87px!important] max-w-[87px!important]">
        <div class="pt-[120px] w-full">
          <img src="/svg/link.svg" alt="link icon" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="min-w-[280px!important] max-w-[280px!important]">
        <div class="w-full">
          <img
            src="/img/journey10.webp"
            alt="journey one img"
            class="max-w-[280px]" />
          <p class="mt-5 text-lg/[140%]">
            She was the co-organiser of <span
              class="font-medium text-red-2 italic"
              >Abori Food System Design Summit</span
            >, which was held at <span class="font-bold text-red-2 italic"
              >Alliance Française, Lagos</span
            > in 2019 and featured food exhibitions, discussions and a farmer's
            market.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style></style>
