<template>
  <div v-if="contact" class="page">
    <h4>Thêm liên hệ</h4>
    <contact-form :contact="contact" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import contactService from "../services/contact.service";
import ContactForm from "../components/ContactForm.vue";
export default {
  components: { ContactForm },
  props: {},
  data() {
    return {
      contact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        const result = await contactService.create(data);
        if (result) this.message = "Liên hệ được tạo thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
