<template>
    <div>
      <p class="text-xl font-bold">
        sharify.in
        <a-tag color="orange">Beta</a-tag>
      </p>
    </div>
    <div class="flex flex-row items-center gap-2">
      <Avatar label="F" class="mr-2" size="large" shape="circle" />
      <p class="md:block hidden font-bold">furry</p>
    </div>
  </template>
  
  <script setup>
  import { defineComponent } from "vue";
  import { useAuthStore } from "@/stores/UserStore";
  
  const authStore = useAuthStore();

  </script>