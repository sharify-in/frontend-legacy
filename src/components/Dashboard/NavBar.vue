<template>
  <div>
    <p class="text-xl font-bold select-none">
      sharify.in
      <a
        class="text-sm mx-1 p-1 px-3 bg-amber-100 text-amber-500 rounded-full hover:text-amber-500"
        >BETA</a
      >
      <a-tag v-if="statsStore.stats.state.beta" color="orange">Beta</a-tag>
    </p>
  </div>
  <div class="flex flex-row items-center gap-2">
    <a-dropdown>
      <div
        :style="{
          // xel.
          // i will pretend like i didn't saw that
          // please fix.
          cursor: 'pointer',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      >
        <a-avatar :src="avatarUrl" class="mr-2" size="large" />
        <p class="md:block hidden font-bold">{{ authStore.user.username }}</p>
      </div>
      <template #overlay>
        <a-menu class="border-[#213b5b] border">
          <a-menu-item @click="logout()" :style="{ color: '#d32029' }">
            <font-awesome-icon :icon="['fas', 'door-open']" />
            Log out
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import axios from "axios";
import router from "@/router";
import { notification } from "ant-design-vue";

import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore";

const authStore = useAuthStore();
const statsStore = useStatsStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`;

async function logout() {
  await axios.post("/auth/logout").then(() => {
    notification["success"]({
      message: "Success!",
      description: "You've been logged out!",
    });
    router.push({ name: "home" });
  });
}
</script>
