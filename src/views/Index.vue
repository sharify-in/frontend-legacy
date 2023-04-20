<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-blue-800 min-w-screen min-h-[60vh]"
  >

  <div class="absolute top-5 inline-flex gap-3 uppercase">
    <img src="/icon-2.png" alt="sharify.in" class="rounded-full w-32 mx-auto">
    <a href="https://dsc.gg/sharify" class="block text-center self-center hover:underline">community</a>
    <a href="" class="block text-center self-center hover:underline"></a>
    <a href="#" class="block text-center self-center hover:underline">pricing</a>
    <a href="#" class="block text-center self-center hover:underline">pricing</a>
  </div>

    
    <div
      class="flex md:flex-row flex-col justify-between items-center gap-5 flex-wrap w-full px-4 md:px-40"
    >
      <div class="flex flex-col gap-3 text-center md:text-left">
        <h1 class="text-6xl font-semibold">Share in a Snap, <br>Anywhere, Anytime!</h1>
        <Button
          class="!hidden md:!block"
          @click="this.$router.push({ name: 'register' })"
          label="Get started"
          severity="secondary"
          raised
        />
      </div>
      
      <Card>
        <template #content>
          <div
            class="flex flex-row justify-center items-center flex-wrap gap-5"
          >
            <Button
              icon="pi pi-user-plus"
              @click="this.$router.push({ name: 'register' })"
              label="Sign Up"
              raised
            />
            <Button
              icon="pi pi-sign-in"
              @click="this.$router.push({ name: 'login' })"
              label="Sign In"
              outlined
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
  <div class="flex flex-col items-center pt-14">
    <h1 class="text-4xl">Why us?</h1>

    <div
      class="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-5 px-14 xl:px-60 mt-14"
    >
      <Feature
        icon="pi pi-forward"
        title="Fast"
        description="Our file sharing service is meant to be lightning fast, allowing you to access your files quickly and easily from anywhere, at any time. "
      />
      <Feature
        icon="pi pi-server"
        title="Reliable"
        description="Downtime is not a problem for us, with 99.9% of uptime, you can always count on us to be up and running."
      />
      <Feature
        icon="pi pi-eye-slash"
        title="Privacy Focused"
        description="We place a high value on your privacy and take it very seriously. We preserve your files and personal information with advanced security methods and never share your data with third parties."
      />
      <Feature
        icon="pi pi-wallet"
        title="Affordable"
        description="Our flexible and affordable plans are designed to each user's needs and budget, making secure and efficient file sharing accessible to all."
      />
      <Feature
        icon="pi pi-check-square"
        title="Easy to use"
        description="Our user-friendly interface simplifies and speeds up the process of uploading and sharing files. Join us today to discover how simple it is to share and collaborate on your files."
      />
    </div>
  </div>
</template>

<script setup>
import Feature from "../components/Feature.vue";
</script>
