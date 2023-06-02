<template>
  <a-config-provider :theme="style">

    <a-layout v-if="
      !authStore.loading &&
      !statsStore.loading &&
      authStore.user &&
      statsStore.stats
    " class="h-screen">
      <a-layout-header class="flex flex-row justify-between items-center"
        :style="{ width: '100vw', 'background-color': '#101010' }">
        <NavBar />
      </a-layout-header>
      <a-layout>
        <a-layout-sider breakpoint="lg" collapsed-width="0">
          <SideBar />
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px; overflow-y: auto;">
          <a-layout-content :style="{
            margin: '24px 16px 0',
            'overflow-x': 'hidden',
          }">
            <slot />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
    <div v-else-if="authStore.loading || statsStore.loading" class="grid h-screen place-items-center">
      <a-spin tip="Loading..." :indicator="indicator"></a-spin>
    </div>
  </a-config-provider>
</template>

<script setup>
import { onMounted, h } from "vue";
import { notification, theme } from "ant-design-vue";

import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore";
import { LoadingOutlined } from "@ant-design/icons-vue";


import SideBar from "@/components/Dashboard/SideBar.vue";
import NavBar from "@/components/Dashboard/NavBar.vue";
import router from "@/router";
import axios from "axios";


const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "24px",
  },
  spin: true,
});

const authStore = useAuthStore();
const statsStore = useStatsStore();

onMounted(async () => {
  await authStore.getUser();
  await statsStore.getStats();
  console.log(authStore.requestLoading)
});

authStore.$subscribe((mutation, state) => {
  if (!state.authUser && !state.requestLoading) {
    router.push({ name: "home" });
  }
});

async function resendVerification() {
  axios
    .post("/auth/resend_code")
    .then((response) => {
      notification["success"]({
        message: "Success!",
        description: response.data.message,
      });
    })
    .catch((err) => {
      notification["error"]({
        message: "Oops",
        description: err.data.message,
      });
    });
}

const style = {
  "token": {
    "colorTextBase": "#ffffff",
    "colorBgBase": "#101010",
    "borderRadius": 8,
    algorithm: theme.darkAlgorithm,
  }
}
</script>

<style scoped>
body,
html {
  overflow: hidden;
}
</style>