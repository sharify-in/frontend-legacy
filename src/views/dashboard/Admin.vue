<template>
  <div class="flex flex-col gap-3">
    <a-card class="w-2/5" title="User lookup">
      <a-input-search
          v-model:value="value"
          enter-button="Find"
          placeholder="UUID or @Username"
          @search="searchUser()"
      />
      <div class="font-bold my-3 text-lg flex flex-row gap-2 flex-wrap">User:
        <div class=" font-normal text-accent">selectedUser.username</div>
        <Premium/>
        <EarlyUser/>
      </div>

      <a-tabs>

        <a-tab-pane key="1">
          <template #tab>
                    <span>
                        <tool-filled/>
                        Quick Actions
                    </span>
          </template>
          <a-divider orientation="left">Moderation</a-divider>
          <div class="flex justify-center gap-3">
            <a-popconfirm cancel-text="Cancel" ok-text="Confirm" placement="topRight" title="Are you sure?"
                          @confirm="banUser">
              <a-button class="w-full" danger type="primary">
                <font-awesome-icon :icon="['fas', 'ban']" class="mr-1"/>
                Ban
              </a-button>
            </a-popconfirm>
            <a-button class="w-full" danger>
              <font-awesome-icon :icon="['fas', 'rotate-left']" class="mr-1" @click="unbanUser"/>
              Unban
            </a-button>
          </div>
          <a-divider orientation="left">Account Actions</a-divider>
          <div>
            <a-button class="w-full" type="primary">
              <font-awesome-icon :icon="['fas', 'rotate-left']" class="mr-1" @click="unbanUser"/>
              Reset Password
            </a-button>
          </div>
        </a-tab-pane>

        <a-tab-pane>
          <template #tab>
                    <span>
                        <info-circle-filled/>
                        About
                    </span>
          </template>
          <div class="flex flex-col gap-1 flex-wrap">
            <p>
              <font-awesome-icon :icon="['fas', 'user']"/>
              yourdad (username) too bad that you don't have one
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'hashtag']"/>
              fsfisdg-srtgfdg-fhf-hedr (uuid)
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'envelope']"/>
              your.dad@example.com (email)
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'folder-open']"/>
              0 (file amount)
            </p>
          </div>

        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script setup>
import {notification} from 'ant-design-vue';
import {InfoCircleFilled, ToolFilled} from '@ant-design/icons-vue';

import EarlyUser from "@/components/Dashboard/Roles/EarlyUser.vue";
import Premium from "@/components/Dashboard/Roles/Premium.vue";

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