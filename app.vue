<script setup lang="ts">
provideHeadlessUseId(() => useId())
useHead({
  script: [
    {
      children: `
        (function(w, d, t, h, s, n) {
          w.FlodeskObject = n;
          var fn = function() {
            (w[n].q = w[n].q || []).push(arguments);
          };
          w[n] = w[n] || fn;
          var f = d.getElementsByTagName(t)[0];
          var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
          var sm = d.createElement(t);
          sm.async = true;
          sm.type = 'module';
          sm.src = h + s + '.mjs' + v;
          f.parentNode.insertBefore(sm, f);
          var sn = d.createElement(t);
          sn.async = true;
          sn.noModule = true;
          sn.src = h + s + '.js' + v;
          f.parentNode.insertBefore(sn, f);
        })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
      `,
      // This script should be added to the head
      tagPosition: 'head'
    },
    {
      children: `
        window.fd('form', {
          formId: '6762262dc1f8f33b1410d11d'
        });
      `,
      // Execute after the previous script is loaded
      tagPosition: 'bodyClose'
    }
  ]
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
