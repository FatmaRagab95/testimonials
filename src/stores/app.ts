// Utilities
import { iTestimonial } from "@/code/models";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    testimonials: [] as iTestimonial[],
  }),
  getters: {
    getTestimonialByUserName: (state) => (userName: string) => {
      return state.testimonials.find((t) => t.userName === userName);
    },
  },
  actions: {
    addTestimonial(testimonial: iTestimonial) {
      this.testimonials.push(testimonial);
    },
    addTestimonials(testimonials: iTestimonial[]) {
      this.testimonials.push(...testimonials);
    },
    editTestimonial(testimonial: iTestimonial) {
      const index = this.testimonials.findIndex((t) => t.id === testimonial.id);
      if (index !== -1) {
        this.testimonials[index] = testimonial;
      }
    },
    deleteTestimonial(id: number) {
      const index = this.testimonials.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.testimonials.splice(index, 1);
      }
    },
  },
});
