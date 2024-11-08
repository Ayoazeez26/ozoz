<script setup lang="ts">
const baseFee = ref(5000);
const fees = ref(500);
const count = ref(1);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phoneNumber = ref("");
const amount = computed(() => {
  return baseFee.value * count.value;
});
const totalAmount = computed(() => {
  return fees.value + amount.value;
});
</script>

<template>
  <div class="bg-white w-full min-h-screen">
    <div class="bg-lime w-full py-5">
      <div class="flex items-center gap-3 text-green max-w-[1280px] mx-auto">
        <Icon name="mdi:information-variant-circle-outline" size="24" />
        <p class="text-lg">
          We have reserved your ticket, please complete pay out within 10
          minutes to confirm
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between w-full mx-auto">
      <div class="flex flex-col w-1/2 mt-10">
        <div class="w-full flex flex-col max-w-[506px] mx-auto">
          <div class="flex flex-col w-full gap-5">
            <div class="w-full">
              <label
                for="first-name"
                class="block text-sm/6 text-gray-900"
                >First name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  v-model="firstName"
                  autocomplete="given-name"
                  required
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 px-3 focus:ring-green-2 sm:text-sm/6" />
              </div>
            </div>

            <div class="w-full">
              <label
                for="last-name"
                class="block text-sm/6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  v-model="lastName"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 px-3 focus:ring-green-2 sm:text-sm/6" />
              </div>
            </div>
            <div class="w-full">
              <label
                for="phone"
                class="block text-sm/6 text-gray-900"
                >Phone Number</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  v-model="phoneNumber"
                  autocomplete="phone-number"
                  placeholder="+234"
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 px-3 focus:ring-green-2 sm:text-sm/6" />
              </div>
            </div>

            <div class="w-full">
              <label
                for="email"
                class="block text-sm/6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  v-model="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 px-3 focus:ring-green-2 sm:text-sm/6" />
                  <p class="text-xs mt-1 text-[#757575]">Tickets will only be sent to the email address you provide here</p>
              </div>
            </div>

            <div class="w-full">
              <label
                for="email"
                class="block text-sm/6 text-gray-900"
                >Confirm email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  v-model="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 px-3 focus:ring-green-2 sm:text-sm/6" />
              </div>
            </div>
          </div>
          <button
            class="text-white bg-green-2 rounded-lg px-14 py-4 text-2xl font-bold max-w-fit self-end mt-8">
            Continue
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <img src="/img/info-bg.webp" alt="info background" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
