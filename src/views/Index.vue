<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-blue-700 min-w-screen min-h-[60vh]"
  >

  <div class="fixed top-5 inline-flex gap-3 font-semibold bg-background select-none px-5 rounded-full border-2 border-accent border-opacity-20 z-50">
    <img src="/transparent.png" alt="sharify.in" class="rounded-full w-12 mx-auto mr-0" draggable="false">
    <h1 class="block text-center self-center uppercase mr-5 font-black text-accent">Sharify</h1>
    
    <a href="#" class="text-center self-center hover:underline">Products</a>
    <a href="#about" class="text-center self-center hover:underline">About Us</a>
    <a href="https://dsc.gg/sharify" class="text-center self-center hover:underline">Community</a>
    <a href="/pricing" class="text-center self-center hover:underline mr-3">Pricing</a>
  </div>

    
    <div
      class="flex md:flex-row flex-col justify-between items-center gap-5 flex-wrap w-full px-4 md:px-40"
    >
      <div class="flex flex-col gap-3 text-center md:text-left">
        <h1 class="text-5xl font-semibold w-1/2">Share in a Snap, Anywhere, Anytime!</h1>
        <p class="w-1/2">Share images, videos and files effortlessly and instantly. Enjoy quick and easy file sharing, anytime, anywhere. Simplify your file sharing experience with us!</p>
        <Button
          class="!hidden md:!block w-80"
          @click="this.$router.push({ name: 'register' })"
          label="Get Started"
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
    <h1 class="text-4xl font-semibold uppercase text-accent">From gamers to businesses</h1>
    <p class="text-1xl text-dim-accent">No matter who you are, we have a file hosting solution tailored for your needs.</p>
    <div
      class="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-5 px-14 xl:px-60 mt-14"
    >
    <ImgFeature
      image = "/cover-gaming.png"
      title = "Gaming"
      description = "Share your clips with your friends with a click of a button"
    />
    <ImgFeature
      image = "/cover-work.png"
      title = "Work"
      description = "Bring your team together with centralized file storage"
    />
    <ImgFeature
      image = "/cover-family.png"
      title = "Family"
      description = "Send images of the things you've done to your family"
    />
    </div>
  </div>

  <separator />

  <div class="flex flex-col items-center pt-14">
    <h1 class="text-4xl font-semibold uppercase text-accent">Setting the Bar Higher</h1>
    <p class="text-1xl text-dim-accent">How do we set ourselves apart from typical file hosting platforms</p>

    <div
      class="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-5 px-14 xl:px-60 mt-14"
    >
    <Feature
        icon = "fa-solid fa-gears"
        title = "Customization"
        description = "With your customization features, You are able to change domain, embed and so much more"
      />
    <Feature
        icon = "fa-solid fa-credit-card"
        title = "Affordable"
        description = "Unlike traditional file hosts, we offer affordable pricing alongside our free solution"
      />
    <Feature
        icon = "fa-solid fa-link"
        title = "Connections"
        description = "Add your friends or colleagues to your friendlist to share your files with them in a matter of a few clicks"
      />
    </div>
  </div>

  <separator />

</template>

<script setup>
import Feature from "../components/Feature.vue";
</script>


<script>
export default {
  name: "HomeView",
  data() {
    return {
      windowTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      console.log(this.windowTop);
    }
  }
};
</script>
