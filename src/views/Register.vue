<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <XyzTransition appear xyz="fade down duration-10 delay-1.5">
      <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
        <template #title>
          <p class="text-center">Sign Up</p>
        </template>
        <template #content>
          <form>
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
                    :feedback="false"
                    type="password"
                    toggleMask
                  />
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
              />
            </div>
          </form>
        </template>
      </Card>
    </XyzTransition>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formValues = reactive({
  username: "",
  email: "",
  password: "",
  invite: "",
});
</script>

<style scoped>
.p-password > :global(input) {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
</style>
