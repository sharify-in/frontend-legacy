<template>
  <a-config-provider :theme="style">
    <a-layout
      v-if="
        !authStore.loading &&
        !statsStore.loading &&
        authStore.user &&
        statsStore.stats &&
        authStore.user.emailConfirmed
      "
      class="h-screen"
    >
      <a-layout-header
        class="flex flex-row justify-between items-center"
        :style="{ width: '100vw', 'background-color': '#141414' }"
      >
        <NavBar />
      </a-layout-header>
      <a-layout>
        <a-layout-sider breakpoint="lg" collapsed-width="0">
          <SideBar />
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px; overflow-y: auto">
          <a-layout-content
            :style="{
              margin: '24px 16px 0',
              'overflow-x': 'hidden',
            }"
          >
            <slot />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
    <div
      v-else-if="authStore.loading || statsStore.loading"
      class="grid h-screen place-items-center"
    >
      <a-spin tip="Loading..." :indicator="indicator"></a-spin>
    </div>
    <div
      v-else-if="!authStore.loading && !authStore.user.emailConfirmed"
      class="grid h-screen place-items-center p-2"
    >
      <a-card class="flex flex-col items-center w-2/5">
        <a-result
          status="warning"
          title="Check your email!"
          sub-title="We've sent you an email with verification link."
        >
          <template #extra>
            <div class="text-center">
              <h3 class="text-xl">Didn't get it?</h3>
              <button class="hover:underline" @click="resendVerification()">
                Send me another link
              </button>
            </div>
          </template>
        </a-result>
      </a-card>
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
  token: {
    colorPrimary: "#3e97ff",
    colorPrimaryBg: "#151e2c",
    colorPrimaryBgHover: "#192c45",
    colorPrimaryBorder: "#213b5b",
    colorPrimaryBorderHover: "#274f7e",
    colorPrimaryHover: "#5ea3e8",
    colorPrimaryActive: "#2f69ad",
    colorPrimaryTextHover: "#5ea3e8",
    colorPrimaryText: "#3883dc",
    colorPrimaryTextActive: "#2f69ad",
    colorSuccess: "#0eec17",
    colorSuccessBg: "#112913",
    colorSuccessBgHover: "#104113",
    colorSuccessBorder: "#125515",
    colorSuccessBorderHover: "#117515",
    colorSuccessHover: "#11751e",
    colorSuccessActive: "#10a016",
    colorSuccessTextHover: "#34e334",
    colorSuccessText: "#0fcc17",
    colorSuccessTextActive: "#10a016",
    colorWarning: "#fadc14",
    colorWarningBg: "#2b2611",
    colorWarningBgHover: "#443b11",
    colorWarningBorder: "#595014",
    colorWarningBorderHover: "#7c6e14",
    colorWarningHover: "#7c6e14",
    colorWarningActive: "#aa9614",
    colorWarningTextHover: "#e8d639",
    colorWarningText: "#d8be14",
    colorWarningTextActive: "#aa9614",
    colorError: "#F5222D",
    colorErrorBg: "#2a1215",
    colorErrorBgHover: "#431418",
    colorErrorBorder: "#58181c",
    colorErrorBorderHover: "#791a1f",
    colorErrorHover: "#e84749",
    colorErrorActive: "#a61d24",
    colorErrorTextHover: "#e84749",
    colorErrorText: "#d32029",
    colorErrorTextActive: "#a61d24",
    colorInfo: "#3e97ff",
    colorInfoBg: "#151e2e",
    colorInfoBgHover: "#192c45",
    colorInfoBorder: "#213b5b",
    colorInfoBorderHover: "#274f7e",
    colorInfoHover: "#274f7e",
    colorInfoActive: "#2f69ad",
    colorInfoTextHover: "#5ea3e8",
    colorInfoText: "#3883dc",
    colorInfoTextActive: "#2f69ad",
    colorBgBase: "#101010",
    colorTextBase: "#ffffff",
    colorText: "rgba(255, 255, 255, 0.85)",
    colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    colorTextTertiary: "rgba(255, 255, 255, 0.45)",
    colorTextQuaternary: "rgba(255, 255, 255, 0.25)",
    colorBorder: "#525252",
    colorBorderSecondary: "#404040",
    colorFill: "rgba(255, 255, 255, 0.18)",
    colorFillSecondary: "rgba(255, 255, 255, 0.12)",
    colorFillTertiary: "rgba(255, 255, 255, 0.08)",
    colorFillQuaternary: "rgba(255, 255, 255, 0.04)",
    colorBgContainer: "#141414",
    colorBgElevated: "#141414",
    colorBgLayout: "#101010",
    colorBgSpotlight: "#525252",
    colorBgMask: "rgba(0, 0, 0, 0.45)",
    marginXXS: 4,
    marginXS: 8,
    marginSM: 12,
    margin: 16,
    marginMD: 20,
    marginLG: 24,
    marginXL: 32,
    marginXXL: 48,
    paddingXXS: 4,
    paddingXS: 8,
    paddingSM: 12,
    padding: 16,
    paddingMD: 20,
    paddingLG: 24,
    paddingXL: 32,
    borderRadius: 8,
    borderRadiusSM: 6,
    borderRadiusLG: 10,
    borderRadiusXS: 2,
    algorithm: theme.darkAlgorithm,
  },
};
</script>

<style scoped>
body,
html {
  overflow: hidden;
}
</style>
