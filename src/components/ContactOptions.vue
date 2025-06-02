<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME
const email = `support@${appName}.com`

const mailto = `mailto:${email}`

const startChat = () => {
  alert('Opening live chat widget...')
  // integrate Intercom, Tawk.to or others here
}
</script>

<template>
  <div class="d-grid gap-3">
    <div class="card card-flush bg-body mb-9">
      <div class="card-header">
        <h2 class="card-title fs-2 fw-bold">Prefer email?</h2>
        <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-icon btn-color-primary">
            <i class="ki-outline ki-phone fs-1"></i>
          </button>
        </div>
      </div>
      <div class="card-body pt-2">
        <span class="text-gray-800 fs-6 fw-semibold d-block mb-9">
          We're available anytime you need us.
        </span>

        <div class="mb-4">
          <div class="d-flex flex-wrap justify-content-between">
            <span class="text-gray-400 fw-bold">Support</span>
            <a :href="mailto" class="text-gray-700 text-hover-primary">{{ email }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-flush bg-body mb-9">
      <div class="card-header">
        <h2 class="card-title fs-2 fw-bold">Need a faster response?</h2>
        <div class="card-toolbar">
          <i class="ki-outline ki-phone fs-1"></i>
        </div>
      </div>
      <div class="card-body pt-2">
        <span class="text-gray-800 fs-6 fw-semibold d-block mb-9"> Chat with us live. </span>

        <div class="mb-4">
          <button @click="startChat" class="btn btn-primary w-100">Start</button>
        </div>
      </div>
    </div>
  </div>
</template>
