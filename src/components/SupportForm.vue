<template>
  <div class="card bg-body flex-row-fluid mb-9 mb-xl-0 me-xl-9 h-auto" bis_skin_checked="1">
    <div class="card-body" bis_skin_checked="1">
      <form
        action="#"
        class="form mb-15"
        method="post"
        id="kt_contact_form"
        @submit.prevent="submitForm()"
      >
        <div class="d-flex flex-column mb-9 fv-row" bis_skin_checked="1">
          <h1 class="fw-bold text-dark mb-7">Submit a Request</h1>
          <span class="fs-4 fw-semibold text-gray-600 d-block">
            Have a question about your account? Looking for a specific product?
          </span>
        </div>
        <div class="row mb-5" bis_skin_checked="1">
          <div class="col-md-6 fv-row" bis_skin_checked="1">
            <label class="fs-5 fw-semibold mb-2">Name</label
            ><input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="name"
            />
          </div>
          <div class="col-md-6 fv-row" bis_skin_checked="1">
            <label class="fs-5 fw-semibold mb-2">Email</label
            ><input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="email"
            />
          </div>
        </div>
        <div class="d-flex flex-column mb-5 fv-row" bis_skin_checked="1">
          <label class="fs-5 fw-semibold mb-2">Subject</label
          ><input class="form-control form-control-solid" placeholder="" name="subject" />
        </div>
        <div class="d-flex flex-column mb-10 fv-row" bis_skin_checked="1">
          <label class="fs-6 fw-semibold mb-2">Message</label
          ><textarea class="form-control form-control-solid" rows="6" name="message" placeholder="">
          </textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="kt_contact_submit_button">
          <span class="indicator-label"> Send Feedback</span>
          <span class="indicator-progress">
            Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'General',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form)
  alert('Message sent! ✅')
}
</script>
