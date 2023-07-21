<template>
     <div class="flex flex-col gap-3">
        <div class="flex justify-between gap-5 flex-wrap">
            <a-card title="Username" class="grow">
                <UsernameChange />
            </a-card>
            <a-card title="Credentials" class="grow">
                <a-divider orientation="left">E-Mail</a-divider>
                <p> {{authStore.user.email}}
                    <a-button type="link">Change</a-button>
                    <a-button type="link" danger>Remove</a-button>
                </p>
                
            </a-card>

            <a-card title="Delete Account" class="grow">
                <a-input-group compact>
                    <a-input-password placeholder="Your password" style="width: calc(100% - 100px);" danger/>
                    <a-button type="primary" danger>Delete</a-button>
                </a-input-group>
            </a-card>

            
        </div>
    </div>  
</template>

<script setup>
    import { useAuthStore } from "@/stores/UserStore";
    const authStore = useAuthStore();
</script>