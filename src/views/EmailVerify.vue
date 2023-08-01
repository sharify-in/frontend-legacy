<template>
  <div
    class="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('../svg/background.svg')] bg-no-repeat bg-cover p-5"
  >
    <Card v-if="true" class="flex flex-col items-center w-full md:w-96">
      <template #content>
        <ProgressSpinner />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";

import router from "@/router";
import axios from "axios";

const toast = useToast();
const route = useRoute();
const code = ref(route.query.code);

onMounted(async () => {
  if (!code.value) {
    router.push({ name: "home" });
  }

  await axios
    .get("/auth/confirm_email", { params: { code: route.query.code } })
    .then((res) => {
      toast.add({
        severity: "success",
        summary: "Success!",
        detail: `Successfully verified email address!`,
        life: 3000,
      });
      return router.push({ name: "login" });
    })
    .catch((err) => {
      if ((err.response.data.error = "INVALID_CODE")) {
        router.push({ name: "home" });
        return toast.add({
          severity: "error",
          summary: "Verification failed",
          detail: "Invalid code",
          life: 3000,
        });
      }
      router.push({ name: "home" });
      return toast.add({
        severity: "error",
        summary: "Verification failed",
        detail: "Unknown error occurred, Please try again later",
        life: 3000,
      });
    });
});
</script>
