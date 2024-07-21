# carousel Card Component

A Vue.js component for displaying a testimonial card with interactive features including a delete option.

## Features

- **Image and Menu**: Displays an image with a menu button for additional actions.
- **Review Section**: Shows the testimonial review.
- **User Info Section**: Displays user information including avatar, name, and job title.
- **Delete Confirmation Dialog**: A dialog box that confirms deletion of the testimonial.

## Usage

Import and use the `TestimonialCard` component in your Vue project:

```vue
<template>
  <TestimonialCard :testimonial="testimonial" />
</template>

<script setup lang="ts">
import TestimonialCard from "@/components/TestimonialCard.vue";
import { ref } from "vue";
import { iTestimonial } from "@/code/models";

// Example testimonial data
const testimonial = ref<iTestimonial>({
  id: 1,
  review: "This is a great product!",
  avatar: "avatar.png",
  userName: "John Doe",
  jobTitle: "Software Engineer",
});
</script>
```

## Component Props

### `testimonial`

- **Type**: `iTestimonial`
- **Description**: The testimonial data object containing review, avatar, userName, and jobTitle.

## Methods

### `confirmDelete`

- **Description**: Handles the confirmation of testimonial deletion.

## Styles

Custom styles are included for card appearance and text formatting. Adjust the SCSS as needed to fit your design requirements.

```scss
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
```

```

```
