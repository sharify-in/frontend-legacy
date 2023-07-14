<template>
    <a-input-group compact>
        <a-input :value="authStore.user.username" style="width: calc(100% - 100px);"/>
        <a-button type="primary">Change</a-button>
    </a-input-group>
</template>

<script setup>
    import { useAuthStore } from "@/stores/UserStore";
    const authStore = useAuthStore();
</script>