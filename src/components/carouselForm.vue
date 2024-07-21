<template>
  <v-container fluid class="pt-0 testi-form">
    <h2 class="form-heading">Add / Edit Review Card</h2>
    <v-form class="mt-3">
      <!-- User Name Input -->
      <v-text-field
        v-model="state.userName"
        :counter="10"
        :error-messages="userNameErrorMsg"
        label="Name"
        required
        @blur="v$.userName.$touch"
        @input="v$.userName.$touch"
        variant="outlined"
        base-color="greyLine"
      ></v-text-field>

      <!-- Job Title Input -->
      <v-text-field
        v-model="state.jobTitle"
        :error-messages="jobTitleErrorMsg"
        label="Job Title"
        required
        @blur="v$.jobTitle.$touch"
        @input="v$.jobTitle.$touch"
        variant="outlined"
        base-color="greyLine"
      ></v-text-field>

      <!-- Review Textarea -->
      <v-textarea
        row="2"
        v-model="state.review"
        :error-messages="reviewErrorMsg"
        label="Review"
        @blur="v$.review.$touch"
        @input="v$.review.$touch"
        variant="outlined"
        base-color="greyLine"
      ></v-textarea>

      <!-- Submit Button -->
      <v-btn
        color="primary"
        class="mt-1 form-btn rounded-lg"
        height="44"
        @click="submit"
        block
        :loading="loading"
      >
        Save
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useAppStore } from "@/stores/app";
import { iTestimonial } from "@/code/models";

// Reactive state for form inputs
const state = ref({
  userName: "",
  jobTitle: "",
  review: "",
  avatar: "11.png",
  rating: 5,
});

// Validation rules
const rules = {
  userName: { required },
  jobTitle: { required },
  review: { required },
};

// Initialize Vuelidate
const v$ = useVuelidate(rules, state);

// Computed error messages
const userNameErrorMsg = computed(
  () => (v$.value.userName.$errors[0]?.$message as string) || ""
);
const jobTitleErrorMsg = computed(
  () => (v$.value.jobTitle.$errors[0]?.$message as string) || ""
);
const reviewErrorMsg = computed(
  () => (v$.value.review.$errors[0]?.$message as string) || ""
);

// Loading state
const loading = ref(false);

// Submit form
const submit = async () => {
  try {
    // Validate form
    v$.value.$validate();
    if (v$.value.$error) return;

    const appStore = useAppStore();
    const existedTestimonial = appStore.getTestimonialByUserName(
      state.value.userName
    );

    loading.value = true;

    const newTestimonial: iTestimonial = {
      ...state.value,
      id: existedTestimonial ? existedTestimonial.id : Math.random(),
    };

    // Add or edit testimonial
    if (existedTestimonial) {
      appStore.editTestimonial(newTestimonial);
    } else {
      appStore.addTestimonial(newTestimonial);
    }

    // Reset form
    state.value = {
      userName: "",
      jobTitle: "",
      review: "",
      avatar: "11.png",
      rating: 5,
    };
    v$.value.$reset();
  } catch (error) {
    console.error(error);
  } finally {
    // Reset loading state
    setTimeout(() => (loading.value = false), 500);
  }
};
</script>

<style lang="scss">
.testi-form {
  margin-top: 120px;

  .form-heading {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }

  .form-btn {
    text-transform: unset !important;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
