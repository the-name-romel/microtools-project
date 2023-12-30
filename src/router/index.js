import { createRouter, createWebHistory } from "vue-router";
import FlexboxVue from "@/components/Flexbox.vue";
import ExpenseTracker from "@/components/ExpenseTracker.vue";
import BMICalculator from "@/components/BMICalculator.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FlexboxVue,
    },
    {
      path: "/expense-tracker",
      name: "expense-tracker",
      component: ExpenseTracker,
    },
    {
      path: "/bmi-calculator",
      name: "bmi-calculator",
      component: BMICalculator,
    },
  ],
});

export default router;
