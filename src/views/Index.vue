<template>
  <XyzTransition appear xyz="fade duration delay-1.5">
    <nav class="xl:flex justify-center fixed top-5 w-full z-50 hidden">
      <div
        class="flex gap-3 w-fit justify-center font-semibold bg-background select-none px-5 rounded-full border-2 border-accent border-opacity-20"
      >
        <img
          :src="TransparentLogo"
          alt="sharify.in"
          class="rounded-full w-12 mx-auto mr-0"
          draggable="false"
        />
        <h1
          class="text-center self-center uppercase mr-5 font-black text-accent"
        >
          Sharify
        </h1>

        <a
          href="#why"
          class="text-center self-center hover:opacity-80 duration-300"
          >Why Us</a
        >
        <a
          href="#features"
          class="text-center self-center hover:opacity-80 duration-300"
          >Features</a
        >
        <a
          href="https://dsc.gg/sharify"
          class="text-center self-center hover:opacity-80 duration-300"
          >Community</a
        >
        <a
          href="/dashboard/premium"
          class="text-center self-center hover:opacity-80 duration-300 mr-3"
          >Premium</a
        >
      </div>
    </nav>
  </XyzTransition>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-blue-700 min-w-screen min-h-[60vh]"
  >
    <div
      class="flex xl:flex-row flex-col justify-around items-center gap-3 flex-wrap md:flex-nowrap w-full px-4 md:px-40"
    >
      <XyzTransition appear xyz="fade right-5 duration delay-1">
        <div
          class="flex flex-col justify-center xl:items-start items-center gap-3 text-center xl:text-left"
        >
          <h1 class="xl:block hidden text-5xl font-semibold w-1/2">
            Share in a Snap, Anywhere, Anytime!
          </h1>
          <h1 class="xl:hidden block text-5xl font-semibold">Sharify.in</h1>
          <p class="xl:block hidden w-1/2">
            Share images, videos and files effortlessly and instantly. Enjoy
            quick and easy file sharing, anytime, anywhere. Simplify your file
            sharing experience with us!
          </p>
          <p class="xl:hidden block">Fast and secure file sharing service</p>
          <XyzTransition appear xyz="fade right-5 duration delay-5">
            <Button
              class="!hidden xl:!block w-80"
              @click="router.push({ name: 'register' })"
              label="Get Started"
              severity="secondary"
              raised
            />
          </XyzTransition>
        </div>
      </XyzTransition>
      <XyzTransition appear xyz="fade right-5 duration delay-6">
        <Card v-if="true">
          <template #content>
            <div
              class="flex flex-row justify-center items-center md:flex-nowrap flex-wrap gap-5"
            >
              <Button
                class="shrink-0 grow"
                @click="router.push({ name: 'register' })"
                raised
              >
                <font-awesome-icon :icon="['fas', 'user-plus']" />
                <span class="px-2">Sign Up</span>
              </Button>
              <Button
                class="shrink-0 grow"
                @click="router.push({ name: 'login' })"
                outlined
              >
                <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
                <span class="px-2">Sign In</span>
              </Button>
            </div>
          </template>
        </Card>
      </XyzTransition>
    </div>
  </div>

  <div class="px-14">
    <div class="flex flex-col items-center text-center pt-14">
      <h1 class="text-4xl font-semibold uppercase text-accent" id="features">
        Why us
      </h1>
      <p class="text-1xl text-dim-accent">
        How do we set ourselves apart from typical file storing platforms
      </p>

      <XyzTransitionGroup
        class="item-group flex flex-col md:flex-row items-stretch flex-wrap justify-center gap-5 px-14 xl:px-60 mt-14"
        appear
        xyz="fade stagger-1.5 right-100% out-back duration-10 delay-8"
      >
        <Feature
          v-if="true"
          icon="fa-solid fa-gears"
          title="Customization"
          description="With our customization features, You are able to change domain, appearance of files and much more."
        />
        <Feature
          v-if="true"
          icon="fa-solid fa-credit-card"
          title="Affordable"
          description="Unlike traditional file hosts, we offer affordable pricing alongside our free solution."
        />
        <Feature
          v-if="true"
          icon="fa-solid fa-eye-slash"
          title="Privacy Focused"
          description="We don't spy on our users and we make sure personal data is kept safe."
        />
      </XyzTransitionGroup>
    </div>
  </div>

  <div class="my-16 bg-background" style="height: 1px"></div>

  <div class="px-14">
    <div class="flex flex-col items-center text-center pt-14">
      <h1 class="text-4xl font-semibold uppercase text-accent" id="why">
        Features
      </h1>
      <p class="text-1xl text-dim-accent">
        The features that are making your life easier
      </p>

      <XyzTransitionGroup
        class="item-group flex flex-col md:flex-row items-stretch flex-wrap justify-center gap-5 px-14 xl:px-60 mt-14"
        appear
        xyz="fade stagger-1.5 right-100% out-back duration-10 delay-8"
      >
        <Feature
          v-if="true"
          icon="fa-solid fa-user-group"
          title="Connections"
          description="Add people you know and share files between each other with a click of a button"
        />

        <Feature
          v-if="true"
          icon="fa-solid fa-image"
          title="Screenshots"
          description="Take a screenshot, upload it by using ShareX, iOS Shortcut or other applications and get a link within seconds"
        />

        <Feature
          v-if="true"
          icon="fa-solid fa-link"
          title="Domains"
          description="Select which domain you want to use when sharing a link to a file"
        />
      </XyzTransitionGroup>
    </div>

    <div class="my-16 bg-background" style="height: 1px"></div>

    <div class="flex flex-col items-center text-center pt-14">
      <h1 class="text-4xl font-semibold uppercase text-accent">Statistics</h1>
      <p class="text-1xl text-dim-accent">
        It's not just a simple service, It's an entire community!
      </p>

      <div
        class="flex flex-col md:flex-row items-stretch flex-wrap justify-center gap-5 px-14 mt-14 xl:px-60 w-full"
      >
        <Statistic
          icon="fa-solid fa-users"
          title="Users"
          :number="stats.users"
          :loading="request.loading"
          :error="request.error"
        />
        <Statistic
          icon="fa-solid fa-upload"
          title="Files"
          :number="stats.files"
          :loading="request.loading"
          :error="request.error"
        />
        <Statistic
          icon="fa-solid fa-globe"
          title="Domains"
          :number="stats.domains"
          :loading="request.loading"
          :error="request.error"
        />
      </div>
    </div>
  </div>

  <Footer class="mt-24" />
</template>

<style>
html,
body {
  scroll-behavior: smooth;
}
</style>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

import Feature from "../components/Feature.vue";
import Statistic from "../components/Statistic.vue";
import TransparentLogo from "../assets/img/transparent.png";
import router from "@/router";

let request = reactive({
  loading: true,
  error: false,
});

let stats = reactive({});

onMounted(async () => {
  await axios
    .get("/stats")
    .then(async (res) => {
      stats = res.data.stats;
      request.loading = false;
    })
    .catch(() => {
      request.loading = false;
      request.error = true;
    });
});
</script>
