<script setup lang="ts">
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
</script>
<template>
  <div class="relative isolate bg-white px-4 md:px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="mx-auto w-full flex justify-between flex-wrap items-start max-w-7xl">
      <div class="flex flex-col w-full max-w-[576px] md:pl-8 items-center">
        <div class="flex flex-col w-full max-w-[480px]">
          <h2
            class="text-pretty text-[48px] font-semibold tracking-tight text-red sm:text-5xl">
            Get in touch
          </h2>
          <p class="mt-5 text-xl/[140%] tracking-[-0.3px] text-brown">
            Our friendly team would love to hear from you.
          </p>
          <form action="#" method="POST" class="lg:flex-auto mt-12">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm/6 font-medium text-brown"
                  >First name</label
                >
                <div class="mt-2.5">
                  <input
                    v-model="formData.firstName"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown/50 sm:text-sm/6"
                    placeholder="First name" />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm/6 font-medium text-brown"
                  >Last name</label
                >
                <div class="mt-2.5">
                  <input
                    v-model="formData.lastName"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown/50 sm:text-sm/6"
                    placeholder="Last name" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    v-model="formData.email"
                    type="email"
                    name="email"
                    id="email"
                    class="block w-full rounded-md border-0 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown/50 sm:text-sm/6"
                    placeholder="you@example.com" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm/6 font-medium text-brown"
                  >Message</label
                >
                <div class="mt-2.5">
                  <textarea
                    v-model="formData.message"
                    id="message"
                    name="message"
                    rows="4"
                    class="block w-full rounded-md border-0 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown/50 sm:text-sm/6"
                    placeholder="Leave us a message..." />
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="block w-full rounded-2xl bg-blue px-10 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blu">
                Send message
              </button>
            </div>
            <p class="mt-4 text-sm/6 text-gray-500">
              By submitting this form, I agree to the
              <a href="#" class="font-semibold text-indigo-600"
                >privacy&nbsp;policy</a
              >.
            </p>
          </form>

        </div>
      </div>
      <div class="lg:mt-6 w-full max-w-[576px] hidden lg:block lg:flex-none">
        <img
          class="w-full"
          src="/img/ozoz-contact.webp"
          alt="ozoz contact image" />
      </div>
    </div>
  </div>
</template>
