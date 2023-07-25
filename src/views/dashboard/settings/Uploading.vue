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

            <a-card title="Embed Preview">
                <a-tabs v-model:activeKey="activeKey" class=" w-80" style="min-height: 24rem;">
                    <a-tab-pane key="1" tab="Discord">
                        <div class="bg-[#2b2d31] rounded-md p-3" :style="{
                                'border-left': '5px solid '+embedColor
                            }">
                                <p class="font-bold">{{embedAuthor}}</p>
                                <p class="text-[#00a8fc] font-bold hover:underline" >{{embedTitle}}</p>
                                <p>{{embedDescription}}</p>
                                <font-awesome-icon :icon="['fas', 'image']" class=" text-9xl m-5" />
                            </div>
                    </a-tab-pane>

                    <a-tab-pane key="2" tab="Telegram">
                        <div class=" bg-[#2b5378] p-3 rounded-lg">
                            <h1 class="text-[#4ba5ff] hover:underline cursor-pointer">https://sharify.in/file</h1>
                            <div class=" m-3 p-2 border-l-2 border-l-[#65bbf4]">
                                <p class="text-[#90cbff] hover:underline cursor-pointer font-bold">sharify.in</p>
                                <p class="text-[#cac8c4] font-bold">{{embedTitle}}</p>
                                <p class="text-[#cac8c4]">{{embedDescription}}</p>
                                <font-awesome-icon :icon="['fas', 'image']" class="text-5xl m-10" />
                            </div>
                        </div>
                    </a-tab-pane>

                    <a-tab-pane key="3" tab="Twitter">
                        <div class="bg-[#101010] rounded-2xl border border-[#525a5e] flex flex-row flex-nowrap">
                            <font-awesome-icon :icon="['fas', 'newspaper']" class="p-8 text-3xl rounded-l-2xl text-[#71767b] border-r border-[#525a5e] bg-[#16181c]"/>
                            <div class=" self-center p-2">
                                <p class="text-sm text-[#6f767b]">sharify.in</p>
                                <p>{{embedTitle}}</p>
                                <p class="text-sm text-[#6f767b]">{{embedDescription}}</p>
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </a-card>

            <a-card title="Embed Settings" class="grow">
                <div class="flex flex-row flex-wrap gap-5">
                    <div class="w-64">
                        <h1 class="font-bold">Title</h1>
                        <a-input :placeholder="embedTitle"></a-input>
                    </div>
                    <div class="w-96">
                        <h1 class="font-bold">Description</h1>
                        <a-input :placeholder="embedDescription"></a-input>
                    </div>
                    <div class="w-10">
                        <h1 class="font-bold">Color</h1>
                        <ColorPicker format="hex" is-widget />
                    </div>

                    <div class="grow">
                        <a-button type="primary" class="w-full my-1">Save</a-button>
                        
                    </div>
                </div>

                
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

//EMBED

const embedColor = "#ff0080";
const embedDescription = "Hi! I use Sharify to manage my files"
const embedTitle = "Sharify"
const embedAuthor = "Author"

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