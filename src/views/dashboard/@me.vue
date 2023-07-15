<template>
    <div class="flex flex-row gap-3">
        <a-card title="Profile" class="w-1/2">
            <div class="flex flex-col items-center w-full h-full">
                <a-avatar :src="avatarUrl" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }"/>
                <h1 class="text-3xl mt-5 flex flex-wrap flex-row gap-3">
                        @{{ authStore.user.username }}

                        <div class="flex flex-wrap flex-row gap-3">
                            <Badge
                                label = "Admin"
                                color = "#ff0000"
                                icon = "fa-solid fa-user"
                            />
                            <Badge
                                label = "Early User"
                                color = "#ce85ff"
                                icon = "fa-solid fa-user"
                            />
                        </div>
                </h1>
                <a-popover title="User ID" trigger="click">
                    <template #content> <a onclick="e = document.getElementById('userId'); navigator.clipboard.writeText(e.textContent);"><font-awesome-icon :icon="['fas', 'copy']" /> Copy</a> </template>
                    <p id="userId" class="hover:underline cursor-pointer select-all">{{ authStore.user.id }}</p>
                </a-popover>
            </div>
        </a-card>
    </div>
</template>

<script>

</script>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from "@/stores/UserStore";

const authStore = useAuthStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`
</script>
