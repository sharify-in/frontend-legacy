<template>
    <div class="flex flex-col flex-wrap gap-3">
        <div class="flex flex-row flex-wrap gap-3">
            <a-card title="API Key" class="w-2/3 grow">
                <div class="border rounded-lg p-2">
                <p
                    class="blur hover:blur-none transition-all duration-300 break-words"
                >
                    {{ authStore.user.token }}
                </p>
                </div>
                <div class="flex flex-wrap md:flex-nowrap gap-5 mt-5">
                <a-popconfirm
                    placement="topLeft"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="refreshKey()"
                >
                    <template #title>
                    <p>Are you sure you want to refresh your API Key?</p>
                    </template>
                    <a-button type="primary" danger class="w-full">
                    <font-awesome-icon icon="arrows-rotate" class="mr-1" />
                    Refresh API Key
                    </a-button>
                </a-popconfirm>
                <a-button type="primary" class="w-full" @click="copyKey()">
                    <font-awesome-icon icon="fa-solid fa-copy" class="mr-1" />
                    Copy API Key
                </a-button>
                </div>
            </a-card>

            <a-card title="Upload Configuration" class="w-1/4 grow">
                <a-dropdown>
                    <template #overlay>
                        <a-menu class="border-[#213b5b] border">
                        <a-menu-item key="1">ShareX</a-menu-item>
                        <a-menu-item key="2">iOS Shortcut</a-menu-item>
                        </a-menu>
                    </template>
                    <a-button type="primary" class="w-full">
                        <font-awesome-icon :icon="['fas', 'download']" class="mr-1" />
                        Get Config
                    </a-button>
                </a-dropdown>
                <p class=" text-center mt-3">
                    <a href="/link-to-upload-guide" class="opacity-80 hover:text-accent hover:opacity-100 duration-250">Learn how to upload files using 3rd party applications</a>
                </p>
            </a-card>
        </div>
    </div>
</template>

<script setup>
import { notification } from "ant-design-vue";
import axios from "axios";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore";

dayjs.extend(relativeTime);

const authStore = useAuthStore();
const statsStore = useStatsStore();


async function refreshKey() {
  await axios
    .post("/user/@me/refresh_key")
    .then(async (res) => {
      notification["success"]({
        message: "Success!",
        description: res.data.message,
      });
      // Wait for 1.5 seconds for better effect
      // Why nodejs can't add wait or sleep function??
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.reload();
    })
    .catch(() => {
      notification["error"]({
        message: "Oops...",
        description: "Something went wrong!",
      });
    });
}


function copyKey() {
  navigator.clipboard.writeText(authStore.user.token);
  notification["success"]({
    message: "Success!",
    description: "Copied to clipboard!",
  });
}
</script>