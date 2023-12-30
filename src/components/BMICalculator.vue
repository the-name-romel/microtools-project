<script setup>
import { ref } from "vue";

const weight = ref(null);
const height = ref(null);
const bmi = ref(null);

const calculateBMI = () => {
  if (!weight.value || !height.value) {
    alert("Please enter weight and height");
    return;
  }

  if (weight.value && height.value) {
    bmi.value = (weight.value / (height.value * height.value)).toFixed(2);
  }
};
</script>

<template>
  <div class="row">
    <div class="col">
      <h2 class="text-center">BMI Calculator</h2>

      <div class="form-group">
        <label for="weight">Weight (kg):</label>
        <input
          v-model.number="weight"
          id="weight"
          type="number"
          min="0"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="height">Height (m):</label>
        <input
          v-model.number="height"
          id="height"
          type="number"
          min="0"
          class="form-control"
        />
      </div>

      <button @click="calculateBMI" class="btn btn-primary btn-block mt-3">
        Calculate BMI
      </button>

      <div v-if="bmi" class="alert alert-info mt-3" role="alert">
        Your BMI is: {{ bmi }}
      </div>
    </div>
  </div>
</template>
