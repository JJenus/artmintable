<script setup lang="ts">
import SupportHeader from '@/components/SupportHeader.vue'
import SupportForm from '@/components/SupportForm.vue'
import ContactOptions from '@/components/ContactOptions.vue'
import AppFooter from '@/components/AppFooter.vue'

import { useThemeToggle } from '@/composables/useThemeToggle.ts'
const { theme } = useThemeToggle()
</script>

<!-- src/views/SupportPage.vue -->
<template>
  <div class="container py-10 py-md-5 bg-body px-8 px-md-auto" :data-bs-theme="theme">
    <SupportHeader />
    <div class="row mt-4">
      <div class="col-md-6 mb-4 order-md-1 order-last">
        <SupportForm />
      </div>
      <div class="col-md-6 mb-4 order-md-2 order-first">
        <ContactOptions />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
