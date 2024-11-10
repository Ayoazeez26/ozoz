<template>
  <div class="bg-[#F9EDDF] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden sm:rounded-3xl">
        <h2
          class="mx-auto max-w-3xl text-center text-4xl font-medium text-red sm:text-[40px]">
          Stay up to date
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-center text-xl/[140%] text-brown">
          Join our community to receive the latest updates, exclusive recipes, and stories celebrating West African cuisine straight to your inbox!
        </p>
        <form class="mx-auto mt-10 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="min-w-0 flex-auto border-0 bg-white p-6 rounded-l-2xl text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
            placeholder="Enter your email address" />
          <button
            type="submit"
            class="flex-none uppercase rounded-r-2xl bg-blue -ml-4 p-6 text-white hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
