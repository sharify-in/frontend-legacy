<template>
    <div class="flex flex-col gap-3">
        <a-card title="User lookup" class="w-2/5">
            <a-input-search
                v-model:value="value"
                placeholder="UUID or @Username"
                enter-button="Find"
                @search="searchUser()"
            />
            <div class="font-bold my-3 text-lg flex flex-row gap-2 flex-wrap">User: 
                <div class=" font-normal text-accent">selectedUser.username</div>
                <Premium />
                <EarlyUser />
            </div>

            <a-tabs v-model:activeKey="activeKey">
                
                <a-tab-pane key="1">
                <template #tab>
                    <span>
                        <tool-filled />
                        Quick Actions
                    </span>
                </template>
                <a-divider orientation="left">Moderation</a-divider>
                <div class="flex flex-row flex-wrap gap-3">
                    
                    <a-input-number
                    v-model:value="value"
                    :min="1"
                    addonAfter="Days"
                    class="grow"
                    >
                        <template #prefix><ClockCircleOutlined /></template>
                    </a-input-number>
                        
                    <a-popconfirm placement="topRight" ok-text="Confirm" cancel-text="Cancel" @confirm="banUser" title="Are you sure?">
                        <a-button type="primary" danger><font-awesome-icon :icon="['fas', 'ban']" class="mr-1" /> Ban</a-button>
                    </a-popconfirm>
                    <a-button danger><font-awesome-icon :icon="['fas', 'rotate-left']" class="mr-1" @click="unbanUser" /> Unban</a-button>
                    

                </div>
                </a-tab-pane>
                
                <a-tab-pane key="2">
                <template #tab>
                    <span>
                        <info-circle-filled />
                        About
                    </span>
                </template>
                <div class="flex flex-col gap-1 flex-wrap">
                    <p><font-awesome-icon :icon="['fas', 'user']" /> yourdad (username)</p>
                    <p><font-awesome-icon :icon="['fas', 'hashtag']" /> fsfisdg-srtgfdg-fhf-hedr (uuid)</p>
                    <p><font-awesome-icon :icon="['fas', 'envelope']" /> your.dad@example.com (email)</p>
                    <p><font-awesome-icon :icon="['fas', 'folder-open']" /> 0 (file amount)</p>
                </div>

                </a-tab-pane>
            </a-tabs>


        </a-card>
        
    </div>
</template>

<script setup>
import { notification } from 'ant-design-vue';
import {
    InfoCircleFilled,
    ToolFilled,
    ClockCircleOutlined
} from '@ant-design/icons-vue';

const selectedUser = "(user object)";

function unbanUser() {
    notification["error"]({
        message: "Not yet",
        description: "your dad"
    }); 
}

function banUser() {
    notification["error"]({
        message: "Not yet",
        description: "your dad"
    }); 
}

function searchUser() {
    notification["error"]({
        message: "Not yet",
        description: "your dad"
    });
}

</script>