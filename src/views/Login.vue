<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5">
    <XyzTransition appear xyz="fade down duration-10 delay-1.5">
      <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
        <template #title>
          <p class="text-center">Sign In</p>
        </template>
        <template #content>
          <form @submit.prevent="login()">
            <div class="flex flex-col gap-6">
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
                <span class="p-float-label">
                  <InputText id="username" class="p-inputtext-lg" v-model="form.username" />
                  <label for="username">Username/Email</label>
                </span>
              </div>
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
                <span class="p-float-label">
                  <Password v-model="form.password" class="p-inputtext-lg" inputId="password" :feedback="false"
                    type="password" />
                  <label for="password">Password</label>
                </span>
              </div>
              <Button type="submit" iconPos="right" :loading="loginRequest.loading">
                <div class="flex justify-center items-center w-full">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
                  <span class="px-2">Sign In</span>
                </div>
              </Button>
            </div>
          </form>
        </template>
      </Card>
    </XyzTransition>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

import { useAuthStore } from "@/stores/UserStore";
import { useToast } from "primevue/usetoast";
import router from "@/router";
import axios from "axios";

const toast = useToast();

const authStore= useAuthStore()

onMounted(async () => {
  await authStore.getUser();
});

authStore.$subscribe((mutation, state) => {
  if (state.authUser && !state.requestLoading) {
    router.push({ name: "dashboard" });
  }
});

const form = reactive({
  username: "",
  password: "",
});

const loginRequest = reactive({
  done: false,
  loading: false,
});
const login = async () => {
  loginRequest.loading = true
  await axios.post("/auth/login", form).then((res) => {
    toast.add({ severity: 'success', summary: 'Success!', detail: `Welcome ${res.data.user.username}`, life: 3000 });
    return router.push({ name: "dashboard" })
  }).catch((err) => {
    const furry = err.response.data

    if (furry.errors) {
      loginRequest.loading = false
      return toast.add({
        severity: "error",
        summary: "Validation Error",
        detail: furry.errors[0].message,
        life: 3000
      })
    } else if (furry.error && furry.message) {
      loginRequest.loading = false
      return toast.add({
        severity: "error",
        summary: "Sign in Failed",
        detail: furry.message,
        life: 3000
      })
    } else {
      loginRequest.loading = false
      return toast.add({
        severity: "error",
        summary: "Sign in failed",
        detail: "Unknown error occurred, Please try again later",
        life: 3000
      })
    }

  });
};
</script>

<style scoped>
.p-password> :global(input) {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.p-inputgroup-addon {
  padding-left: 15px;
}
</style>