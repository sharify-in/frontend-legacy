<template>
    <div class="bg-background p-5 flex flex-wrap flex-row items-start">
     
        <div class="mb-10">
            <a href="/" class="text-4xl font-bold text-accent">SHARIFY</a>
            <div class="text-2xl">
                <a href="https://dsc.gg/sharify" class="opacity-70 hover:opacity-100 duration-200">
                    <font-awesome-icon :icon="['fab', 'discord']"/>
                </a>
            </div>
        </div>

        <div class="grow"></div>

        <div class="flex flex-row flex-wrap">

            <div class="m-6 text-md">
            <h1 class="uppercase text-2xl text-accent font-bold">get started</h1>
            <a href="/register" class="hover:opacity-80 duration-300">Create an account</a><br>
            <a href="/login" class="hover:opacity-80 duration-300">Log in</a><br>
            <a href="https://dsc.gg/sharify" class="hover:opacity-80 duration-300">Community</a>
            </div>

            <div class="m-6 text-md">
            <h1 class="uppercase text-2xl text-accent font-bold">resources</h1>
            <a href="/dashboard/premium" class="hover:opacity-80 duration-300">Premium</a><br>
            <a href="/faq" class="hover:opacity-80 duration-300">FAQ</a><br>
            <a href="/status" class="hover:opacity-80 duration-300">Status</a><br>
            </div>

            <div class="m-6 text-md">
            <h1 class="uppercase text-2xl text-accent font-bold">legal</h1>
            <a href="/terms" class="hover:opacity-80 duration-300">Terms of Service</a><br>
            <a href="/privacy" class="hover:opacity-80 duration-300">Privacy Policy</a>
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
