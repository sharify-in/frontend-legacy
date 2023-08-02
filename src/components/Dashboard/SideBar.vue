<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', 'padding-top': '12px' }"
    @click="handleClick"
    class="select-none"
  >
    <a-menu-item key="dashboard">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'house']" />
      </template>
      Home
    </a-menu-item>
    <a-menu-item key="dashboard_user">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'user']" />
      </template>
      User
    </a-menu-item>
    <a-sub-menu key="dashboard_settings">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'gear']" />
      </template>
      <template #title>
        <span>Settings</span>
      </template>
      <a-menu-item key="dashboard_account">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'user']" />
        </template>
        Account
      </a-menu-item>
      <a-menu-item key="dashboard_privacy">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'eye']" />
        </template>
        Privacy
      </a-menu-item>
      <a-menu-item key="dashboard_uploading">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-upload" />
        </template>
        Uploading
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="dashboard_gallery">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-image" />
      </template>
      Gallery
    </a-menu-item>
    <a-menu-item key="dashboard_premium">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-gem" />
      </template>
      Premium
    </a-menu-item>
    <a-menu-item key="dashboard_admin">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-user-shield" />
      </template>
      Admin
    </a-menu-item>
  </a-menu>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/UserStore";
import router from "@/router";

const authStore = useAuthStore();

const handleClick = (e) => {
  router.push({ name: e.key });
};

const selectedKeys = ref([router.currentRoute.value.name]);
const openKeys = ref(["settings"]);
</script>
