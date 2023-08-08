<template>
  <div class="flex flex-col flex-wrap gap-3">
    <div class="flex flex-row flex-wrap gap-3">
      <a-card class="w-2/3 grow" title="API Key">
        <div class="border rounded-lg p-2">
          <p
            class="blur hover:blur-none transition-all duration-300 break-words"
          >
            {{ authStore.user.token }}
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-5 mt-5">
          <a-popconfirm
            cancel-text="No"
            ok-text="Yes"
            placement="topLeft"
            @confirm="refreshKey()"
          >
            <template #title>
              <p>Are you sure you want to refresh your API Key?</p>
            </template>
            <a-button class="w-full" danger type="primary">
              <font-awesome-icon class="mr-1" icon="arrows-rotate" />
              Refresh API Key
            </a-button>
          </a-popconfirm>
          <a-button class="w-full" type="primary" @click="copyKey()">
            <font-awesome-icon class="mr-1" icon="fa-solid fa-copy" />
            Copy API Key
          </a-button>
        </div>
      </a-card>

      <a-card class="w-1/4 grow" title="Upload Configuration">
        <a-dropdown>
          <template #overlay>
            <a-menu class="border-[#213b5b] border">
              <a-menu-item key="1">ShareX</a-menu-item>
              <a-menu-item key="2">iOS Shortcut</a-menu-item>
            </a-menu>
          </template>
          <a-button class="w-full" type="primary">
            <font-awesome-icon :icon="['fas', 'download']" class="mr-1" />
            Get Config
          </a-button>
        </a-dropdown>
        <p class="text-center mt-3">
          <a
            class="opacity-80 hover:text-accent hover:opacity-100 duration-250"
            href="/link-to-upload-guide"
            >Learn how to upload files using 3rd party applications</a
          >
        </p>
      </a-card>

      <a-card class="select-none" title="Embed Preview">
        <a-tabs class="flex items-center w-80" style="min-height: 24rem">
          <a-tab-pane key="1" tab="Discord">
            <div
              :style="{
                'border-left': '6px solid ' + embedColor,
              }"
              class="bg-[#2b2d31] rounded-md p-3"
            >
              <p class="font-bold">{{ embedAuthor }}</p>
              <p class="text-[#00a8fc] font-bold hover:underline">
                {{ embedTitle }}
              </p>
              <p>{{ embedDescription }}</p>
              <font-awesome-icon
                :icon="['fas', 'image']"
                class="text-9xl m-5"
              />
            </div>
          </a-tab-pane>

          <a-tab-pane key="2" tab="Telegram">
            <div class="bg-[#2b5378] p-3 rounded-lg">
              <h1 class="text-[#4ba5ff] hover:underline cursor-pointer">
                https://sharify.in/file
              </h1>
              <div class="m-3 p-2 border-l-2 border-l-[#65bbf4]">
                <p
                  class="text-[#90cbff] hover:underline cursor-pointer font-bold"
                >
                  sharify.in
                </p>
                <p class="text-[#cac8c4] font-bold">{{ embedTitle }}</p>
                <p class="text-[#cac8c4]">{{ embedDescription }}</p>
                <font-awesome-icon
                  :icon="['fas', 'image']"
                  class="text-5xl m-10"
                />
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="3" tab="Twitter">
            <div
              class="bg-[#101010] rounded-2xl border border-[#525a5e] flex flex-row flex-nowrap"
            >
              <font-awesome-icon
                :icon="['fas', 'newspaper']"
                class="p-8 text-3xl rounded-l-2xl text-[#71767b] border-r border-[#525a5e] bg-[#16181c]"
              />
              <div class="self-center p-2">
                <p class="text-sm text-[#6f767b]">sharify.in</p>
                <p>{{ embedTitle }}</p>
                <p class="text-sm text-[#6f767b] h-5 overflow-hidden">
                  {{ embedDescription }}
                </p>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>

      <div class="flex flex-col grow gap-3">
        <a-card class="grow" title="Embed Settings">
            <div
              :style="{
                'border-left': '6px solid ' + embedColor,
              }"
              class="bg-[#2b2d31] rounded-md p-3 w-96"
            >
                <a-input :placeholder="embedAuthor" size="small" class="w-44 m-1"></a-input>
                <a-input :placeholder="embedAuthorURL" size="small" class="w-32 m-1"></a-input> <br>
                
                <a-input :placeholder="embedTitle" size="small" class="w-56 m-1"></a-input><br>
                <a-textarea :placeholder="embedDescription" class="w-64 m-1"></a-textarea><br>
                <font-awesome-icon
                    :icon="['fas', 'image']"
                    class="w-44 h-44 m-5"
                /> <br>
                <div class="flex flex-row flex-wrap gap-7">
                    <ColorPicker />
                    <span>
                        <a-button class="rounded-r-none">Disable</a-button>
                        <a-button type="primary" class="rounded-l-none">Save</a-button>
                    </span>
                </div>
            </div>
        </a-card>

        <a-card title="Domain">
            <a-input-group class="flex flex-row flex-nowrap items-center" compact>
            <a-input
                :placeholder="subdomain"
                style="width: 10rem !important"
            ></a-input>
            <a-select :placeholder="domain" class="w-56">
                <a-select-option value="sharify.in">sharify.in</a-select-option>
                <a-select-option value="xello.blue">xello.blue</a-select-option>
            </a-select>
            <a-button type="primary">Save</a-button>
            </a-input-group>
        </a-card>
        </div>
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

//DOMAINS

const subdomain = "yourdad";
const domain = "sharify.in";

//EMBED

const embedColor = "#ff0080";
const embedDescription = "Hi! I use Sharify to manage my files";
const embedTitle = "Sharify";
const embedAuthor = "Author";
const embedAuthorURL = "https://sharify.in/";

//------

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
