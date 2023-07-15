<template>
    <div class="flex flex-row gap-3">
        <a-card title="Profile" class="w-1/2">
            <div class="flex flex-col items-center w-full h-full">
                <a-avatar :src="avatarUrl" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }"/>
                <h1 class="text-3xl mt-5">@{{ authStore.user.username }}</h1>
                <p>{{ authStore.user.id }}</p>
            </div>
        </a-card>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/UserStore";

const authStore = useAuthStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`
</script>
