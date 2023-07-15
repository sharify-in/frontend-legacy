<template>
    <div class="flex flex-row gap-3">
        <a-card title="Profile" class="w-1/2">
            <div class="flex flex-col items-center w-full h-full">
                <a-avatar :src="avatarUrl" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }" />
                <h1 class="text-3xl mt-5 flex flex-wrap flex-row gap-3">
                    @{{ authStore.user.username }}

                    <div class="flex flex-wrap flex-row gap-3">
                        <Badge label="Admin" color="#ff0000" icon="fa-solid fa-user" />
                        <Badge label="Early User" color="#ce85ff" icon="fa-solid fa-user" />
                    </div>
                </h1>
                <p @click="copyId()" class="hover:underline cursor-pointer">{{ authStore.user.id }}</p>
            </div>
        </a-card>
    </div>
</template>

<script>

</script>

<script setup>
import { ref } from 'vue'
import { notification } from 'ant-design-vue';
import { useAuthStore } from "@/stores/UserStore";

import router from "@/router";

const authStore = useAuthStore();

const usernameLetter = authStore.user.username.slice(0, 2).toUpperCase();
const avatarUrl = `https://avatar.vercel.sh/${authStore.user.username}.svg?text=${usernameLetter}`

const copyAmount = ref(0)

function copyId() {
    navigator.clipboard.writeText(authStore.user.id);
    switch (copyAmount.value) {
        case 0:
            notification["success"]({
                message: 'Success!',
                description: "Copied to clipboard!",
            });
            break;
        case 1:
            notification["success"]({
                message: 'Dang',
                description: "Double copied!",
            });
            break;
        case 2:
            notification["success"]({
                message: 'Okie!',
                description: "Triple copied!!!",
            });
            break;
        case 3:
            notification["warn"]({
                message: 'Uh-oh',
                description: "Still not enough?",
            });
            break;
        case 4:
            notification["warn"]({
                message: 'Hey!',
                description: "Stop that >:(",
            });
            break;
        case 5:
            notification["error"]({
                message: 'STOP!',
                description: "THAT'S ENOUGH!!",
            });
            break;
        case 6:
            notification["error"]({
                message: 'Stop it.',
                description: "Click that one more time and we will ban your account.",
            });
            break;
        case 7:
            notification["error"]({
                message: 'LAST WARNING!',
                description: "Please stop.",
            });
            break;
        case 8:
            router.push({ name: "home" })
            notification["error"]({
                message: 'Oops!',
                description: "You are banned for: The ban hammer has ben spoken",
            });
    }
    copyAmount.value = copyAmount.value + 1
}
</script>
