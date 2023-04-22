<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <XyzTransition appear xyz="fade down duration-10 delay-1.5">
      <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
        <template #title>
          <p class="text-center">Sign In</p>
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
                    v-model="form.username"
                  />
                  <label for="username">Username/Email</label>
                </span>
              </div>
              <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <span class="p-float-label">
                  <Password
                    v-model="form.password"
                    class="p-inputtext-lg"
                    inputId="password"
                    :feedback="false"
                    type="password"
                    toggleMask
                  />
                  <label for="password">Password</label>
                </span>
              </div>
              <Button
                type="submit"
                label="Sign In"
                icon="pi pi-sign-in"
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

import { useToast } from "primevue/usetoast";
const toast = useToast();

const form = reactive({
  username: "",
  password: "",
});


</script>

<style scoped>
.p-password > :global(input) {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
</style>