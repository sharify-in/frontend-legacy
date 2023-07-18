<template>
  <div>
    <p class="text-xl font-bold">
      sharify.in
      <a-tag v-if="statsStore.stats.state.beta" color="orange">Beta</a-tag>
    </p>
  </div>
  <div class="flex flex-row items-center gap-2">
    <a-dropdown @click.prevent>
      <div :style="{
        // xel.
        // i will pretend like i didn't saw that
        // please fix.
        cursor: 'pointer',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }">
        <a-avatar :src="avatarUrl" class="mr-2" size="large" />
        <p class="md:block hidden font-bold">{{ authStore.user.username }}</p>
      </div>
      <template #overlay>
        <a-menu class=" border-[#213b5b] border">
          <a-menu-item key="logout" :style="{ color: '#d32029' }">
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

import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore"

const authStore = useAuthStore();
const statsStore = useStatsStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`

</script>
