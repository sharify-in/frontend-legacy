<template>
  <div class="flex flex-col gap-3">
    <a-alert
      v-show="!warn_dismissed"
      message="Warning"
      description="This is a very early release. Expect bugs or missing features."
      type="warning"
      show-icon
      closable
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

        <a-button type="primary" disabled class="w-full">
          <font-awesome-icon :icon="['fab', 'discord']" class="mr-1" />
          Link Discord
        </a-button>
      </div>
    </a-card>

    <!-- <a-card title="Guides"> -->
    <a-card>
      <a-tabs
        v-model:activeKey="activeKey"
        :tab-position="tabPosition"
        animated
      >
      <!-- TODO: refactor: use api endpoint and v-each -->

        <!-- INTRUDUCTION -->
        <a-tab-pane key="1" tab="Guides">
          <pre class="font-sans">
Introduction
          </pre>
          <a-dropdown-button>
            View all guides
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <UserOutlined />1st tutorial
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />2nd tutorial
                </a-menu-item>
                <a-menu-item key="3">
                  <UserOutlined />3rd tutorial
                </a-menu-item>
                <a-menu-item key="4">
                  <UserOutlined />4th tutorial
                </a-menu-item>
                <a-menu-item key="5">
                  <UserOutlined />5th tutorial
                </a-menu-item>
              </a-menu>
            </template>
            <template #icon
              ><font-awesome-icon :icon="['fas', 'bars']"
            /></template>
          </a-dropdown-button>
        </a-tab-pane>

        <!-- ˇGUIDE 1 -->
        <a-tab-pane key="2" tab="Pinned tutorial">
          <pre class="font-sans">
              Lorem ipsum gugu gaga bla bla kuchnu ti fotra 2

              Guide on how to upload/use sharify
              Shortened version (click 'learn more' to open tutorial)
            </pre
          >
          <a-button>Learn More</a-button>
        </a-tab-pane>

        <!-- GUIDE 2 -->
        <a-tab-pane key="3" tab="Tutorial 2">
          <pre class="font-sans">
            Lorem ipsum gugu gaga bla bla kuchnu ti fotra 2

            Random guide
            Shortened version (click 'learn more' to open tutorial)
            </pre
          >
          <a-button>Learn More</a-button>
        </a-tab-pane>
      </a-tabs>
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
</script>
