<template>
  <a-input-group compact>
    <!-- it's possible to use :v-model.value instead but it breaks the border radius for some reason -->
    <a-input :placeholder="username" style="width: calc(100% - 100px)" />
    <a-button type="primary">Change</a-button>
  </a-input-group>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/UserStore";

const authStore = useAuthStore();
const username = ref(authStore.user.username);
</script>
