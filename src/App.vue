<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="row">
      <div class="col-md-4">
        <nav class="sticky-md-top" style="width: 18rem">
          <RouterLink to="/" class="text-decoration-none">
            <div class="card mt-3">
              <a href="javascript: void(0)" class="text-decoration-none">
                <div class="card-body">
                  <h5 class="card-title">Flexbox</h5>
                  <p class="card-text">A CSS layout module.</p>
                </div>
              </a>
            </div>
          </RouterLink>
          <RouterLink to="/expense-tracker" class="text-decoration-none">
            <div class="card mt-3">
              <a href="javascript: void(0)" class="text-decoration-none">
                <div class="card-body">
                  <h5 class="card-title">Expense Tracker</h5>
                  <p class="card-text">A expense tracker module.</p>
                </div>
              </a>
            </div>
          </RouterLink>
        </nav>
      </div>

      <div class="col mx-auto" style="width: 100%">
        <RouterView />
      </div>
    </div>
  </div>
</template>
