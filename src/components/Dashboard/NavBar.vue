<template>
  <div>
    <p class="text-xl font-bold">
      sharify.in
      <a-tag v-if="statsStore.stats.beta" color="orange">Beta</a-tag>
    </p>
  </div>
  <div class="flex flex-row items-center gap-2">
    <Avatar :label="usernameLetter" class="mr-2" size="large" shape="circle" />
    <p class="md:block hidden font-bold">{{ authStore.user.username }}</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore"

const authStore = useAuthStore();
const statsStore = useStatsStore();

const usernameLetter = authStore.user.username.charAt(0).toUpperCase();
</script>
