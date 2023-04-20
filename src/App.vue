<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<script setup>
import { RouterView } from "vue-router";
import Toast from 'primevue/toast';
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");
</style>
