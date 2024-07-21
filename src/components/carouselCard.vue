<template>
  <div class="mx-3 testi-card cursor-move">
    <!-- Testimonial Card -->
    <v-sheet width="300" color="secondary" class="pa-4 rounded-lg">
      <!-- Top Section: Image and Menu -->
      <v-layout align-center>
        <v-img src="@/assets/rating.png" max-width="98" class="mb-3" contain />
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon variant="plain" size="x-small" v-bind="props">
              <v-icon x-small>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              title="Delete"
              class="text-error"
              @click="deleteDialog = true"
            />
          </v-list>
        </v-menu>
      </v-layout>

      <!-- Review Section -->
      <v-sheet min-height="246" color="transparent">
        <div class="testi-review">
          {{ testimonial?.review }}
        </div>
      </v-sheet>

      <!-- User Info Section -->
      <v-list class="mx-0 bg-transparent">
        <v-list-item
          :prepend-avatar="testimonial?.avatar && getImg(testimonial?.avatar)"
          class="px-0"
        >
          <v-list-item-title>
            {{ testimonial?.userName }}
          </v-list-item-title>
          <v-list-item-subtitle class="mt-1">
            {{ testimonial?.jobTitle }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-sheet>

    <!-- Delete Confirmation Dialog -->
    <v-dialog max-width="500" v-model="deleteDialog">
      <v-card title="Delete Testimonial">
        <v-card-text> Are you sure you want to delete this? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="Close"
            color="primary"
            @click="deleteDialog = false"
          ></v-btn>
          <v-btn text="Delete" color="error" @click="confirmDelete()"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { iTestimonial } from "@/code/models";
import { useAppStore } from "@/stores/app";
import { defineProps, ref } from "vue";

// Props definition
const props = defineProps({
  testimonial: Object as () => iTestimonial,
});

// Function to get image URL
const getImg = (img: string) => {
  return new URL(`../assets/${img}`, import.meta.url).href;
};

// State management for delete dialog
const deleteDialog = ref(false);

// Function to confirm deletion
const confirmDelete = () => {
  useAppStore().deleteTestimonial(props.testimonial?.id || 0);
  deleteDialog.value = false;
};
</script>

<style lang="scss">
.testi-card {
  .testi-review {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #101828;
    padding-inline-end: 14px;
  }
  .v-list-item__prepend .v-img__img {
    object-fit: contain !important;
  }
}
</style>
