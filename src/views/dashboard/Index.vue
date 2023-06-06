<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between gap-5">
      <a-card title="API Key" class="w-2/4">
        <div class="border rounded-lg p-2">
          <p class="blur hover:blur-none transition-all duration-300">
            {{ authStore.user.token }}
          </p>
        </div>
        <div class="flex gap-5 mt-5">
          <a-popconfirm
            placement="topLeft"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm"
          >
            <template #title>
              <p>Are you sure you want to refresh your API Key?</p>
            </template>
            <a-button type="primary" danger class="w-full">
              <font-awesome-icon icon="arrows-rotate" class="mr-1" />
              Refresh API Key
            </a-button>
          </a-popconfirm>
          <a-button type="primary" class="w-full">
            <font-awesome-icon icon="fa-solid fa-copy" class="mr-1" />
            Copy API Key
          </a-button>
        </div>
      </a-card>
      <a-card title="Annoucements" class="w-2/4">
        <div class="flex flex-col justify-center gap-5">
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
        </div>
      </a-card>
    </div>

    <a-card title="Quick Actions">
      <div class="flex flex-row flex-wrap md:flex-nowrap gap-5 justify-between">
        <a-button type="primary" class="w-full">
          <font-awesome-icon icon="fa-solid fa-download" class="mr-1" />
          Get Config
        </a-button>
        <a-button type="primary" disabled class="w-full">
          <font-awesome-icon :icon="['fab', 'discord']" class="mr-1"/>
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
import { ref } from "vue";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { useAuthStore } from "@/stores/UserStore";
import { useStatsStore } from "@/stores/StatsStore";

dayjs.extend(relativeTime);

const authStore = useAuthStore();
const statsStore = useStatsStore();
</script>
