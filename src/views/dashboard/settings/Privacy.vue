<template>
    <div class="flex flex-col gap-3">
       <div class="flex justify-between gap-5">
           <a-card title="Password" class="w-1/3">
                <a-input-password class="m-1" placeholder="Current Password" />
                <a-input-password class="m-1"  placeholder="New Password" />
                <a-input-password class="m-1"  placeholder="Confirm Password" />

                <div class="flex m-1 gap-2 w-full flex-wrap flex-row">
                    <a-popconfirm title="This action cannot be undone, make sure to remember your new password." ok-text="I understand" cancel-text="Cancel">
                        <a-button class="grow w-1/3" type="primary">Change</a-button>
                    </a-popconfirm>
                    <a-button class="grow w-1/3">Reset password</a-button>
                </div>
            </a-card>

            <a-card title="2 Factor Authentication" class="w-1/3">                
                <a-button type="primary" class="w-full">Enable 2FA</a-button>
            </a-card>

            <a-card title="Your Data" class="w-1/3">                
                <a-button type="primary" class="w-full">Request Data</a-button>
            </a-card>
       </div>
   </div>  

   
</template>

<script setup>
   import { useAuthStore } from "@/stores/UserStore";
   const authStore = useAuthStore();
</script>