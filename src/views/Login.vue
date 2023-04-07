<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <Card class="flex flex-col items-center w-full md:w-96">
      <template #title>
        <p class="text-center">Sign In</p>
      </template>
      <template #content>
        <form action="">
          <div class="flex flex-col gap-6">
            <span class="p-float-label">
              <InputText id="username" class="p-inputtext-lg" v-model="value" />
              <label for="username">Username</label>
            </span>
            <span class="p-float-label">
              <InputText
                v-model="pass"
                class="p-inputtext-lg"
                id="password"
                type="password"
                toggleMask
              />
              <label for="password">Password</label>
            </span>
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const pass = ref(null);
</script>
