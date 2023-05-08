<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <XyzTransition appear xyz="fade down duration-10 delay-1.5">
      <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
        <template #title>
          <p v-if="request.done && !request.error" class="text-center">
            Sign Up
          </p>
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
                  <font-awesome-icon :icon="['fas', 'user']" />
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
                  <font-awesome-icon :icon="['fas', 'envelope']" />
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
                  <font-awesome-icon :icon="['fas', 'lock']" />
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
                  <font-awesome-icon :icon="['fas', 'ticket']" />
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
                iconPos="right"
                :loading="registerRequest.loading"
              >
              <div class="flex justify-center items-center w-full">
                <font-awesome-icon :icon="['fas', 'user-plus']" />
                <span class="px-2">Sign Up</span>
              </div>
              </Button>
            </div>
          </form>
          <div class="text-center" v-else-if="!request.loading & request.error">
            <img :src="fixingBugs" alt="error" />
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

import fixingBugs from "@/assets/img/error/fixing_bugs.svg";
const toast = useToast();

const formValues = reactive({
  username: "",
  email: "",
  password: "",
  invite: "",
});

const request = reactive({
  done: false,
  error: false,
});
onMounted(async () => {
  await axios
    .get("/stats")
    .then(() => {
      request.done = true;
    })
    .catch(() => {
      request.error = true;
    });
  console.log(request);
});

const registerRequest = reactive({
  done: false,
  loading: false,
  error: false,
});
const register = async () => {
  await axios.post("/auth/register", form).then((res) => {
    const user = res.data.user;
  });
};
</script>

<style scoped>
.p-password > :global(input) {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

.p-inputgroup-addon {
  padding-left: 15px;
}
</style>
