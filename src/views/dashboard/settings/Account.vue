<template>
     <div class="flex flex-col gap-3">
        <div class="flex justify-between gap-5 flex-wrap">
            <a-card title="Username" class="grow">
                <UsernameChange />
            </a-card>
            <a-card title="Email" class="grow">
                <div class="border border-zinc-600 rounded-xl p-2 flex flex-row items-center">
                    <p class="w-full">
                        {{ authStore.user.email }}
                    </p>
                        <a-button type="primary" @click="emailChangeBox()">Change</a-button>
                </div>
                
            </a-card>

            <a-card title="Delete Account" class="grow">
                <a-input-group compact>
                    <a-input-password placeholder="Your password" style="width: calc(100% - 100px);" danger/>
                    <a-button type="primary" danger>Delete</a-button>
                </a-input-group>
            </a-card>
        </div>
    </div>  

    <div>
        <a-modal v-model:open="emailOpen" title="Change E-Mail" centered :confirm-loading="confirmLoading" @ok="emailChange">
            <template #footer>
                <a-button key="back" @click="closeEmailChange">Cancel</a-button>
                <a-button key="submit" type="primary" :loading="confirmLoading" @click="emailChange">Change</a-button>
            </template>

            <a-input placeholder="Your new e-mail address"></a-input>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
    import { useAuthStore } from "@/stores/UserStore";
    import { notification } from "ant-design-vue";
    import { ref } from 'vue';

    const authStore = useAuthStore();    
    const emailOpen = ref<boolean>(false);
    const confirmLoading = ref<boolean>(false);

    const emailChangeBox = () => {
        emailOpen.value = true;
    };

    const emailChange = () => {
        confirmLoading.value = true;

        //send the request

        notification["success"]({
            message: "Success!",
            description: "E-Mail address was changed",
        });
        emailOpen.value = false;
        confirmLoading.value = false;
    };

    const closeEmailChange = () => {
        emailOpen.value = false;
    }
</script>