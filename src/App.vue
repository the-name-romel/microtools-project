<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const currentPath = ref("/");
const setCurrentPath = (path) => {
  currentPath.value = path;
};
</script>

<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="row">
      <div class="col-md-4">
        <nav class="sticky-md-top" style="width: 18rem">
          <RouterLink
            to="/"
            class="text-decoration-none"
            @click="setCurrentPath('/')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="currentPath === '/' && 'bg-dark-subtle'"
              >
                <h5 class="card-title">Flexbox</h5>
                <p class="card-text">A CSS layout module.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink
            to="/expense-tracker"
            class="text-decoration-none"
            @click="setCurrentPath('/expense-tracker')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="currentPath === '/expense-tracker' && 'bg-dark-subtle'"
              >
                <h5 class="card-title">Expense Tracker</h5>
                <p class="card-text">A expense tracker module.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink
            to="/bmi-calculator"
            class="text-decoration-none"
            @click="setCurrentPath('/bmi-calculator')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="currentPath === '/bmi-calculator' && 'bg-dark-subtle'"
              >
                <h5 class="card-title">BMI Calculator</h5>
                <p class="card-text">A BMI calculator module.</p>
              </div>
            </div>
          </RouterLink>
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title">Mikrotools Project by</h5>
              <p class="card-text">Romel Acopra</p>
              <p class="card-text">Carl John Cruz</p>
              <p class="card-text">Sheena Lovendino</p>
              <p class="card-text">Marenel Villaralbo</p>
            </div>
          </div>
        </nav>
      </div>

      <div class="col mx-auto" style="width: 100%">
        <RouterView />
      </div>
    </div>
  </div>
</template>
