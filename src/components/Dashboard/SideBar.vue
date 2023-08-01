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
        <home-outlined />
      </template>
      Home
    </a-menu-item>
    <a-menu-item key="dashboard_user">
      <template #icon>
        <user-outlined />
      </template>
      User
    </a-menu-item>
    <a-sub-menu key="dashboard_settings">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>
        <span>Settings</span>
      </template>
      <a-menu-item key="dashboard_account">
        <template #icon>
          <user-outlined />
        </template>
        Account
      </a-menu-item>
      <a-menu-item key="dashboard_privacy">
        <template #icon>
          <eye-outlined />
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
import { ref, defineComponent } from "vue";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  EyeOutlined,
  UploadOutlined,
  PictureOutlined,
  CloudServerOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";
import { useAuthStore } from "@/stores/UserStore";
import router from "@/router";

defineComponent({
  components: {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    EyeOutlined,
    UploadOutlined,
    PictureOutlined,
    CloudServerOutlined,
    StarOutlined,
  },
});

const authStore = useAuthStore();

const handleClick = (e) => {
  router.push({ name: e.key });
};

const selectedKeys = ref([router.currentRoute.value.name]);
const openKeys = ref(["settings"]);
</script>
