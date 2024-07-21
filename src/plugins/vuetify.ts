/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1570EF",
          secondary: "#F2F4F7",
          accent: "#405391",
          error: "#F44336",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          background: "#fff",
          secondaryBg: "#fafafa",
          greyLine: "#bbb",
        },
      },
    },
  },
});
