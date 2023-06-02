<template>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', 'padding-top':'12px' }"
        @click="handleClick">
        <a-menu-item key="dashboard">
            <template #icon>
                <home-outlined />
            </template>
            Home
        </a-menu-item>
        <a-menu-item key="dashboardUser">
            <template #icon>
                <user-outlined />
            </template>
            User
        </a-menu-item>
        <a-sub-menu key="settings">
            <template #icon>
                <setting-outlined />
            </template>
            <template #title>
                <span>Settings</span>
            </template>
            <a-menu-item key="dashboardAccount">
                <template #icon>
                    <user-outlined />
                </template>
                Account
            </a-menu-item>
            <a-menu-item key="dashboardPrivacy">
                <template #icon>
                    <eye-outlined />
                </template>
                Privacy
            </a-menu-item>
            <a-menu-item key="dashboardUploading">
                <template #icon>
                    <font-awesome-icon icon="fa-solid fa-upload" />
                </template>
                Uploading
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="dashboardGallery">
            <template #icon>
                <font-awesome-icon icon="fa-regular fa-image" />
            </template>
            Gallery
        </a-menu-item>
        <a-menu-item key="dashboardPremium">
            <template #icon>
                <font-awesome-icon icon="fa-regular fa-gem" />
            </template>
            Premium
        </a-menu-item>
        <a-menu-item key="dashboardAdmin">
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
    StarOutlined
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
        StarOutlined
    },
});

const authStore = useAuthStore();

const handleClick = (e) => {
    router.push({ name: e.key })
};

const selectedKeys = ref([router.currentRoute.value.name]);
const openKeys = ref(["settings"]);
</script>