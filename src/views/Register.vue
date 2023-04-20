<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <XyzTransition appear xyz="fade down duration-10 delay-1.5">
      <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
        <template #title>
          <p v-if="request.done && !request.error" class="text-center">Sign Up</p>
        </template>
        <template #content>
          <ProgressSpinner v-if="!request.done && !request.error" />
          <form
            v-if="request.done && !request.error"
            @submit.prevent="register()"
          >
            <div class="flex flex-col gap-6">
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <span class="p-float-label">
                  <InputText
                    id="username"
                    class="p-inputtext-lg"
                    v-model="formValues.username"
                  />
                  <label for="username">Username</label>
                </span>
              </div>
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <span class="p-float-label">
                  <InputText
                    id="email"
                    class="p-inputtext-lg"
                    v-model="formValues.email"
                  />
                  <label for="email">Email</label>
                </span>
              </div>
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <span class="p-float-label">
                  <Password
                    v-model="formValues.password"
                    class="p-inputtext-lg"
                    inputId="password"
                    type="password"
                    toggleMask
                  >
                    <template #header>
                      <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                      <Divider />
                      <p class="mt-2">Suggestions</p>
                      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                      </ul>
                    </template></Password
                  >
                  <label for="password">Password</label>
                </span>
              </div>
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-ticket"></i>
                </span>
                <span class="p-float-label">
                  <Password
                    v-model="formValues.invite"
                    class="p-inputtext-lg"
                    inputId="invite"
                    :feedback="false"
                    type="password"
                  />
                  <label for="invite">invite</label>
                </span>
              </div>
              <Button
                type="submit"
                label="Sign Up"
                icon="pi pi-user-plus"
                iconPos="right"
                :loading="registerDone"
              />
            </div>
          </form>
          <div class="text-center" v-else>
            <i class="pi pi-times" style="font-size: 2.5rem; color: #ff5252;"></i>
            <h1 class="text-3xl">Oops..</h1>
            <p>It looks like something is wrong</p>
          </div>
        </template>
      </Card>
    </XyzTransition>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

import { useToast } from "primevue/usetoast";
import router from "@/router";
import axios from "axios";
const toast = useToast();

const formValues = reactive({
  username: "",
  email: "",
  password: "",
  invite: "",
});

const request = reactive({
  done: false,
  error: true,
});
onMounted(async () => {
  await axios
    .get("/stats")
    .then((request.done = true))
    .catch((request.error = true));
});

const registerRequest = reactive({
  done: false,
  error: true
});
const register = async () => {
  await axios.post("/auth/register", form).then((res) => {
    const user = res.data.user
  });
};
</script>

<style scoped>
.p-password > :global(input) {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
</style>
