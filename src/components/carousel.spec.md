# Testimonial Carousel Component

This Vue.js component displays customer testimonials in a carousel format. It includes features like autoplay, sorting, and customizable slide content.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Slots](#slots)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Autoplay and manual play/pause functionality.
- Sortable slides using `sortablejs`.
- Reactive data handling with Vue 3 and Pinia.
- Customizable slide content through slots.

## Usage

To use the Testimonial Carousel component in your project, follow these steps:

1. Import the component in your Vue file:

   ```vue
   <template>
     <div>
       <carousel />
     </div>
   </template>

   <script setup lang="ts">
   import carousel from "@/components/carousel.vue";
   </script>
   ```

2. Ensure you have the required data structure for testimonials:

   ```ts
   const testimonialsData = [
     {
       id: 1,
       review: "Great service!",
       userName: "John Doe",
       jobTitle: "ABC Company",
     },
     {
       id: 2,
       review: "Loved it!",
       userName: "Jane Smith",
       jobTitle: "ABC Company",
     },
     // Add more testimonials here
   ];
   ```

3. Include the component in your template and pass the necessary props and slots.

## Props

The component does not require any props. It uses a Pinia store to manage the state of testimonials.

## Events

The component does not emit any custom events.

## Slots

The component uses a default slot to render each testimonial. You can customize the testimonial card by editing the `carousel-card` component.

## Dependencies

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [sortablejs](https://github.com/SortableJS/Sortable)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

```

```
