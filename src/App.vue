<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="row">
      <div class="col-md-4">
        <div class="card mt-3" style="width: 18rem">
          <a href="javascript: void(0)" class="text-decoration-none">
            <div class="card-body">
              <h5 class="card-title">Flexbox</h5>
              <p class="card-text">A CSS layout module.</p>
            </div>
          </a>
        </div>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>
