<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME
</script>

<template>
  <footer class="text-center mt-5 pt-3 border-top text-muted">
    © 2025 <span class="text-capitalize">{{ appName }}</span> — All rights reserved
  </footer>
</template>
