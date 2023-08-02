<template>
  <div class="flex flex-col gap-3">
    <a-alert
      message="Warning"
      description="This is a very early release. Expect bugs or missing features. (deadline forced us to release it earlier)"
      type="warning"
      show-icon
    />
    <div class="flex flex-wrap md:flex-nowrap justify-between gap-5">
      <a-card title="API Key" class="w-full">
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
      <a-card title="Annoucements" class="w-full">
        <p>
          Yeah... as you can see something fucked up during the development and
          i was too lazy to fix it
        </p>
        <!-- <div class="flex flex-col justify-center gap-5">
          <div class="flex flex-col gap-2">
            <div class="flex flex-row items-center gap-2">
              <Avatar
                :label="
                  statsStore.stats.announcements.author.username
                    .charAt(0)
                    .toUpperCase()
                "
                class="mr-2"
                size="large"
                shape="circle"
              >
              </Avatar>
              <div>
                <p>{{ statsStore.stats.announcements.author.username }}</p>
                <p>
                  {{ dayjs(statsStore.stats.announcements.date).fromNow() }}
                </p>
              </div>
            </div>
          </div>
          <p class="ml-2">{{ statsStore.stats.announcements.content }}</p>
        </div> -->
      </a-card>
    </div>

    <a-card title="Quick Actions">
      <div class="flex flex-row flex-wrap md:flex-nowrap gap-5 justify-between">
        <a-dropdown>
          <template #overlay>
            <a-menu @click="getConfig" class="border-[#213b5b] border">
              <a-menu-item key="sharex">ShareX</a-menu-item>
              <a-menu-item key="ios"
                >IOS Shortcut (plz help we don't have an iphone)</a-menu-item
              >
            </a-menu>
          </template>
          <a-button type="primary" class="w-full">
            <font-awesome-icon :icon="['fas', 'download']" class="mr-1" />
            Get Config
          </a-button>
        </a-dropdown>

        <a-button type="primary" disabled class="w-full">
          <font-awesome-icon :icon="['fab', 'discord']" class="mr-1" />
          Link Discord
        </a-button>
      </div>
    </a-card>
    <div
      class="flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-center gap-5"
    >
      <a-card class="w-full text-center">
        <p>Users</p>
        <a-statistic :value="statsStore.stats.stats.users" />
      </a-card>
      <a-card class="w-full text-center">
        <p>Files</p>
        <a-statistic :value="statsStore.stats.stats.files" />
      </a-card>
      <a-card class="w-full text-center">
        <p>Domains</p>
        <a-statistic :value="statsStore.stats.stats.domains" />
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

async function getConfig(type) {
  axios({
    url: "/user/@me/config", //your url
    method: "GET",
    responseType: "blob", // important
  }).then((response) => {
    const href = URL.createObjectURL(response.data);

    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", `sharify_${authStore.user.id}.sxcu`); //or any other extension
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  });
}
</script>
