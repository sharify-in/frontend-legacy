<template>
    <div class="flex flex-col gap-3">
        <a-card title="User lookup" class="w-1/2">
            <a-input-search
                v-model:value="value"
                placeholder="UUID or @Username"
                enter-button="Find"
                @search="searchUser()"
            />
            <h1 class="font-bold my-3 text-lg">User: 
                <span class=" font-normal text-accent">selectedUser.username</span>
            </h1>

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
                Tab 2
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