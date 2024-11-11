<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>
