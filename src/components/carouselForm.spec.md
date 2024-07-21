# Carousel Form Component

## Overview

The `carouselForm` component is a Vue.js form used for adding or editing review cards. It features fields for the user's name, job title, and review, and includes form validation with Vuelidate. The component also supports a loading state during submission.

## Features

- **User Input Fields**: Collects user name, job title, and review.
- **Validation**: Uses Vuelidate for form validation.
- **Loading State**: Shows a loading spinner when submitting the form.
- **Submission**: Adds or edits testimonials in the application store.

## Dependencies

- **Vue 3**: The core framework used for building the component.
- **Vuelidate**: A validation library used for form validation.
- **Vuetify**: A Vue UI library used for form components and styling.

## Usage

To use the `carouselForm` component, follow these steps:

1. **Import the Component**:

   ```vue
   <script setup>
   import carouselForm from "@/components/carouselForm.vue";
   </script>
   ```

2. **Add the Component to Your Template**:

   ```vue
   <template>
     <carouselForm />
   </template>
   ```

3. **Ensure Store Integration**:
   Make sure that your application store (`appStore`) has methods for adding and editing testimonials. This component uses `useAppStore` from your store to manage data.

## Component Structure

### Template

- **`v-container`**: Wraps the entire form.
- **`v-form`**: Contains form elements.
- **`v-text-field`**: Input fields for user name and job title.
- **`v-textarea`**: Textarea for the review.
- **`v-btn`**: Button to submit the form.

### Script

- **`state`**: Reactive object for form data.
- **`rules`**: Validation rules using Vuelidate.
- **`v$`**: Vuelidate instance for validation.
- **`submit`**: Function to handle form submission.

### Styles

- **`.testi-form`**: Styles for the form container.
- **`.form-heading`**: Styles for the form heading.
- **`.form-btn`**: Styles for the submit button.

## Example

```vue
<template>
  <v-app>
    <carousel-form />
  </v-app>
</template>

<script setup>
import carouselForm from "@/components/carouselForm.vue";
</script>
```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues and pull requests. Please ensure that any contributions adhere to the project's coding standards and guidelines.

---

For further information, check the [Vuetify documentation](https://vuetifyjs.com) and the [Vuelidate documentation](https://vuelidate.js.org).

### Key Points in the `README.md`:

1. **Overview**: Describes the purpose and key features of the component.
2. **Dependencies**: Lists required libraries and installation commands.
3. **Usage**: Instructions for importing and using the component.
4. **Component Structure**: Breaks down the structure of the component into its template, script, and style parts.
5. **Example**: Provides an example of how to integrate the component into a Vue application.
6. **License and Contributing**: Details on licensing and contributing guidelines.

Feel free to adjust any details specific to your project!

```

```
