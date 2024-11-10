<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
   
    <div class="mx-auto w-full flex justify-between flex-wrap items-start max-w-7xl">
      <div class="flex flex-col">
        <h2
          class="text-pretty text-4xl font-semibold tracking-tight text-red sm:text-5xl">
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
                class="block text-sm/6 font-semibold text-gray-900"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm/6 font-semibold text-gray-900"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm/6 font-semibold text-gray-900"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Let’s talk
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
      <div class="lg:mt-6 w-full max-w-[576px] lg:flex-none">
        <img
          class="w-full"
          src="/img/ozoz-contact.webp"
          alt="ozoz contact image" />
      </div>
    </div>
  </div>
</template>
