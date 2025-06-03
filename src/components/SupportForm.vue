<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: 'General',
  message: '',
})

const loading = ref(false)
const submitSuccess = ref(false)

const submitForm = async () => {
  loading.value = true
  const salesiq = window.$zoho?.salesiq

  if (!salesiq?.visitor) {
    alert('Live chat service is currently unavailable. Please try again later.')
    loading.value = false
    return
  }

  try {
    // Set basic visitor info
    salesiq.visitor.name(form.value.name)
    salesiq.visitor.email(form.value.email)

    // Set custom fields
    salesiq.visitor.info({
      'Contact Form Subject': form.value.subject,
      'Contact Form Message': form.value.message,
      'Submission Type': 'Contact Form',
      'Submission Time': new Date().toISOString(),
    })

    // Optional: Close widget if it's open
    if (salesiq.widget?.close) {
      salesiq.widget.close()
    }

    // Alternative approach to send as chat without opening widget
    // if (salesiq.visitor.question) {
    const fullMessage = `New Contact Form Submission:\n\nSubject: ${form.value.subject}\n\nMessage: ${form.value.message}`
    salesiq.visitor.question(fullMessage)
    // }

    // Clear form on success
    form.value = {
      name: '',
      email: '',
      subject: 'General',
      message: '',
    }

    submitSuccess.value = true
  } catch (error) {
    console.error('Error submitting to Zoho:', error)
    // alert('There was an error submitting your form. Please try again.')
  } finally {
    loading.value = false

    // Reset success message after 5 seconds
    if (submitSuccess.value) {
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)
    }
  }
}
</script>

<template>
  <div class="card bg-body flex-row-fluid mb-9 mb-xl-0 me-xl-9 h-auto">
    <div class="card-body">
      <form class="form mb-15" id="kt_contact_form" @submit.prevent="submitForm">
        <div class="d-flex flex-column mb-9 fv-row">
          <h1 class="fw-bold text-dark mb-7">Submit a Request</h1>
          <span class="fs-4 fw-semibold text-gray-600 d-block">
            Have a question about your account? Looking for a specific product?
          </span>
        </div>

        <!-- Success message -->
        <div v-if="submitSuccess" class="alert alert-success mb-5">
          Thank you! Your message has been submitted successfully.
        </div>

        <div class="row mb-5">
          <div class="col-md-6 fv-row">
            <label class="fs-5 fw-semibold mb-2">Name</label>
            <input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="name"
              v-model="form.name"
              required
            />
          </div>

          <div class="col-md-6 fv-row">
            <label class="fs-5 fw-semibold mb-2">Email</label>
            <input
              type="email"
              class="form-control form-control-solid"
              placeholder=""
              name="email"
              v-model="form.email"
              required
            />
          </div>
        </div>

        <div class="d-flex flex-column mb-5 fv-row">
          <label class="fs-5 fw-semibold mb-2">Subject</label>
          <input
            class="form-control form-control-solid"
            placeholder=""
            name="subject"
            v-model="form.subject"
            required
          />
        </div>

        <div class="d-flex flex-column mb-10 fv-row">
          <label class="fs-6 fw-semibold mb-2">Message</label>
          <textarea
            class="form-control form-control-solid"
            rows="6"
            name="message"
            placeholder=""
            v-model="form.message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          id="kt_contact_submit_button"
          :disabled="loading"
        >
          <span v-if="!loading">Send Feedback</span>
          <span v-else>
            Sending...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
