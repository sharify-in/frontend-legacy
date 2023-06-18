<template>
  <div>
    <p class="text-xl font-bold">
      sharify.in
      <a-tag v-if="statsStore.stats.beta" color="orange">Beta</a-tag>
    </p>
  </div>
  <div class="flex flex-row items-center gap-2">
    <a-dropdown @click.prevent>
    <div
      :style="{
        cursor: 'pointer',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }"
    >
        <Avatar :label="usernameLetter" class="mr-2" size="large" shape="circle" />
        <p class="md:block hidden font-bold">{{ authStore.user.username }}</p>
    </div>
    <template #overlay>
      <a-menu class=" border-[#213b5b] border">
        <a-menu-item key="1"><font-awesome-icon :icon="['fas', 'gear']" /> Settings</a-menu-item>
        <a-menu-item key="2" :style="{color: '#d32029'}"><font-awesome-icon :icon="['fas', 'door-open']" /> Log out</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore"

const authStore = useAuthStore();
const statsStore = useStatsStore();

const usernameLetter = authStore.user.username.charAt(0).toUpperCase();
</script>
