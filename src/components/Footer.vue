<template>
    <div class="mt-24 bg-background p-5 flex flex-wrap flex-row">
      <div>
        <h1 class="text-3xl font-bold text-accent">SHARIFY</h1>
        <span>
          <font-awesome-icon :icon="['fab', 'discord']"/>
        </span>
      </div>

      <div class="w-1/2"></div>

      <div class="flex">

        <div class="m-6 text-sm">
          <h1 class="uppercase text-xl text-accent font-bold">get started</h1>
          <a href="/register">Create an account</a><br>
          <a href="/login">Log in</a><br>
          <a href="/discord">Community</a>
        </div>

        <div class="m-6 text-sm">
          <h1 class="uppercase text-xl text-accent font-bold">resources</h1>
          <a href="/faq">FAQ</a><br>
          <a href="/pricing">Pricing</a><br>
          <a href="/status">Status</a><br>
        </div>

        <div class="m-6 text-sm">
          <h1 class="uppercase text-xl text-accent font-bold">legal</h1>
          <a href="/terms">Terms of Service</a><br>
          <a href="/privacy">Privacy Policy</a>
        </div>
        
      </div>

    </div>
</template>

<script>
export default {
  props: {
  },
};
</script>
