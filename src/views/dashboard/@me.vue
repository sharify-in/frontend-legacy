<template>
  <div class="flex flex-row gap-3 justify-center">
    <a-card title="Profile" class="w-1/2">
      <div class="flex flex-col items-center w-full h-full">
        <a-avatar
          :src="avatarUrl"
          :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }"
        />
        <h1 class="text-3xl mt-5">@{{ authStore.user.username }}</h1>
        <p @click="copyId()" class="hover:underline cursor-pointer">
          {{ authStore.user.id }}
        </p>
        <div class="flex flex-wrap justify-center gap-3 p-5">
          <Owner />
          <Admin />
          <Moderator />
          <Staff />
          <Beta />
          <Contributor />
          <EarlyUser />
          <Premium />
        </div>
      </div>
      <a-divider orientation="left" class="text-sm">About Me</a-divider>
      <a-textarea
        v-model:value="value"
        placeholder="Tell others a little bit about yourself"
        maxlength="250"
      />

      <!--      <div class="flex flex-col gap-2 mt-5">-->
      <!--        <a-input-group compact class="w-full">-->
      <!--          <a-input-->
      <!--            v-model:value="value19"-->
      <!--            style="width: calc(100% - 60px)"-->
      <!--            placeholder="Link to social media profile"-->
      <!--          />-->
      <!--          <a-button type="primary">Add</a-button>-->
      <!--        </a-input-group>-->

      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'youtube']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'instagram']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'tiktok']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'twitter']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'twitch']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'discord']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="@sharify" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon-->
      <!--            :icon="['fab', 'github']"-->
      <!--            class="text-lg px-3 w-5"-->
      <!--          />-->
      <!--          <a-input value="sharify-in" class="w-52" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <font-awesome-icon :icon="['fas', 'link']" class="text-lg px-3 w-5" />-->
      <!--          <a-input value="https://sharify.in/u/@system" class="w-52" />-->
      <!--        </div>-->
      <!--      </div>-->
    </a-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { notification } from "ant-design-vue";
import { useAuthStore } from "@/stores/UserStore";

import Owner from "@/components/Dashboard/Roles/Owner.vue";
import Admin from "@/components/Dashboard/Roles/Admin.vue";
import Moderator from "@/components/Dashboard/Roles/Moderator.vue";
import Staff from "@/components/Dashboard/Roles/Staff.vue";
import Beta from "@/components/Dashboard/Roles/Beta.vue";
import Contributor from "@/components/Dashboard/Roles/Contributor.vue";
import EarlyUser from "@/components/Dashboard/Roles/EarlyUser.vue";
import Premium from "@/components/Dashboard/Roles/Premium.vue";

import router from "@/router";

const authStore = useAuthStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`;

const copyAmount = ref(0);

function copyId() {
  navigator.clipboard.writeText(authStore.user.id);
  switch (copyAmount.value) {
    case 0:
      notification["success"]({
        message: "Success!",
        description: "Copied to clipboard!",
      });
      break;
    case 1:
      notification["success"]({
        message: "Dang",
        description: "Double copied!",
      });
      break;
    case 2:
      notification["success"]({
        message: "Okie!",
        description: "Triple copied!!!",
      });
      break;
    case 3:
      notification["warn"]({
        message: "Uh-oh",
        description: "Still not enough?",
      });
      break;
    case 4:
      notification["warn"]({
        message: "Hey!",
        description: "Stop that >:(",
      });
      break;
    case 5:
      notification["error"]({
        message: "STOP!",
        description: "THAT'S ENOUGH!!",
      });
      break;
    case 6:
      notification["error"]({
        message: "Stop it.",
        description: "Click that one more time and we will ban your account.",
      });
      break;
    case 7:
      notification["error"]({
        message: "LAST WARNING!",
        description: "Please stop.",
      });
      break;
    case 8:
      router.push({ name: "home" });
      notification["error"]({
        message: "Oops!",
        description: "You are banned for: The ban hammer has ben spoken",
      });
  }
  copyAmount.value = copyAmount.value + 1;
}
</script>
