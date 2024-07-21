<template>
  <div class="testi-carousel py-12">
    <h3 class="text-accent text-center carousel-heading main-heading-font">
      What Our Customer Said
    </h3>
    <!-- Auto play / pause buttons -->
    <div class="text-center mt-3">
      <v-btn
        color="accent"
        class="mx-1"
        :variant="autoPlayRunning ? 'outlined' : 'plain'"
        @click="toggleAutoPlay"
        size="small"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn
        color="accent"
        class="mx-1"
        :variant="autoPlayRunning ? 'plain' : 'outlined'"
        @click="pauseAutoPlay"
        size="small"
      >
        <v-icon>mdi-stop</v-icon>
      </v-btn>
    </div>
    <!-- Carousel slide group -->
    <v-slide-group
      v-model="activeCard"
      touchless
      show-arrows
      center-active
      class="mt-6"
      v-if="displaySlides"
    >
      <v-slide-group-item
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <carousel-card :testimonial="testimonial" />
      </v-slide-group-item>
    </v-slide-group>
    <carousel-form />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";
import { useAppStore } from "@/stores/app";
import { testimonialsData } from "@/code/data";
import { storeToRefs } from "pinia";
import Sortable from "sortablejs";

// Reactive references
const activeCard = ref(0);
const displaySlides = ref(false);
const autoPlayRunning = ref(false);

// Pinia store reference
const { testimonials } = storeToRefs(useAppStore());

// Function to load testimonials data
const getTestimonials = () => {
  testimonials.value = testimonialsData;
};

// Fetch testimonials on component mount
onMounted(() => {
  getTestimonials();
});

// Watch for changes in testimonials and re-render slides
watch(
  testimonials,
  () => {
    displaySlides.value = false;
    nextTick(() => {
      displaySlides.value = true;
    });
  },
  { immediate: true, deep: true }
);

// Function to initialize sortable functionality
const sortCards = () => {
  const slidesGroup = document.querySelector(
    ".testi-carousel .v-slide-group__content"
  );
  if (!slidesGroup) return;
  Sortable.create(slidesGroup);
};

// Autoplay functionality
let interval: number;

const pauseAutoPlay = () => {
  if (interval) {
    clearInterval(interval);
  }
  autoPlayRunning.value = false;
};

const autoPlay = () => {
  pauseAutoPlay();
  interval = setInterval(() => {
    activeCard.value = (activeCard.value + 1) % testimonials.value.length;
  }, 1500);
  autoPlayRunning.value = true;
};

// Toggle autoplay based on its current state
const toggleAutoPlay = () => {
  if (autoPlayRunning.value) {
    pauseAutoPlay();
  } else {
    autoPlay();
  }
};

// Initialize sorting and autoplay when slides are displayed
watch(
  displaySlides,
  () => {
    if (displaySlides.value) {
      nextTick(() => {
        activeCard.value = 0;
        sortCards();
        autoPlay();
      });
    }
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss">
.testi-carousel {
  background: linear-gradient(#fafafa, #fff);
  .carousel-heading {
    font-size: 28px;
    font-weight: 700;
    line-height: 33.6px;
    margin-top: 42px;
  }
}
</style>
