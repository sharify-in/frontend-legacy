<template>
  <nav class="xl:flex justify-center fixed top-5 w-full z-50 hidden">
    <div
      class="flex gap-3 w-fit justify-center font-semibold bg-background select-none px-5 rounded-full border-2 border-accent border-opacity-20"
    >
      <img
        src="/transparent.png"
        alt="sharify.in"
        class="rounded-full w-12 mx-auto mr-0"
        draggable="false"
      />
      <h1
        class="text-center self-center uppercase mr-5 font-black text-accent"
      >
        Sharify
      </h1>

      <a href="#" class="text-center self-center hover:underline">Products</a>
      <a href="#about" class="text-center self-center hover:underline"
        >About Us</a
      >
      <a
        href="https://dsc.gg/sharify"
        class="text-center self-center hover:underline"
        >Community</a
      >
      <a href="/pricing" class="text-center self-center hover:underline mr-3"
        >Pricing</a
      >
    </div>
  </nav>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-blue-700 min-w-screen min-h-[60vh]"
  >
    <div
      class="flex xl:flex-row flex-col justify-around items-center gap-3 flex-wrap md:flex-nowrap w-full px-4 md:px-40"
    >
      <div class="flex flex-col justify-center xl:items-start items-center gap-3 text-center xl:text-left">
        <h1 class="xl:block hidden text-5xl font-semibold w-1/2">
          Share in a Snap, Anywhere, Anytime!
        </h1>
        <h1 class="xl:hidden block text-5xl font-semibold">Sharify.in</h1>
        <p class="xl:block hidden w-1/2">
          Share images, videos and files effortlessly and instantly. Enjoy quick
          and easy file sharing, anytime, anywhere. Simplify your file sharing
          experience with us!
        </p>
        <p class="xl:hidden block">Fast and secure file sharing service</p>
        <Button
          class="!hidden xl:!block w-80"
          @click="this.$router.push({ name: 'register' })"
          label="Get Started"
          severity="secondary"
          raised
        />
      </div>

      <Card>
        <template #content>
          <div
            class="flex flex-row justify-center items-center md:flex-nowrap flex-wrap gap-5"
          >
            <Button class="shrink-0 grow" @click="this.$router.push({ name: 'register' })" raised>
              <font-awesome-icon :icon="['fas', 'user-plus']" />
              <span class="px-2">Sign Up</span>
            </Button>
            <Button class="shrink-0 grow" @click="this.$router.push({ name: 'login' })" outlined>
              <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
              <span class="px-2">Sign In</span>
            </Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
 
  <div class="flex flex-col items-center text-center pt-14 px-5">
    <h1 class="text-4xl font-semibold uppercase text-accent">
      From gamers to businesses
    </h1>
    <p class="text-1xl text-dim-accent">
      No matter who you are, we have a file hosting solution tailored for your
      needs.
    </p>
    <div
      class="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-5 px-14 xl:px-60 mt-14"
    >
      <ImgFeature
        image="/cover-gaming.png"
        title="Gaming"
        description="Share your clips with your friends with a click of a button"
      />
      <ImgFeature
        image="/cover-work.png"
        title="Work"
        description="Bring your team together with centralized file storage"
      />
      <ImgFeature
        image="/cover-family.png"
        title="Family"
        description="Send images of the things you've done to your family"
      />
    </div>
  </div>

    <Divider />

    <div class="flex flex-col items-center text-center pt-14">
      <h1 class="text-4xl font-semibold uppercase text-accent">
        Still not convinced?
      </h1>
      <p class="text-1xl text-dim-accent">
        It's not just a simple service, It's an entire community!
      </p>

      <div
        class="flex flex-col md:flex-row items-stretch flex-wrap justify-center gap-5 px-14 mt-14 xl:px-60 w-full"
      >
        <Statistic icon="fa-solid fa-users" title="Users" :number="54356" />
        <Statistic icon="fa-solid fa-upload" title="Files" :number="54356" />
        <Statistic icon="fa-solid fa-globe" title="Domains" :number="54356" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Feature from "../components/Feature.vue";
import Statistic from "../components/Statistic.vue";

import CoverGaming from "../assets/img/cover-gaming.png";
import CoverWork from "../assets/img/cover-work.png";
import CoverFamily from "../assets/img/cover-family.png";
import TransparentLogo from "../assets/img/transparent.png";
</script>
