<template>
    <div class="inline-grid grid-cols-2 gap-5 m-1/2 translate-x-1/2">

        <div style="background: rgb(169,2,255); background: linear-gradient(0deg, rgb(77, 94, 246) 0%, rgb(168, 175, 241) 100%);" class=" rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
            <img :src="premiumStorage" class="pointer-events-none rounded-3xl">
            <div class="h-2"></div>
            <h1 class=" text-lg font-bold text-white">More Storage Space</h1>
            <p class=" text-center opacity-90">Make your way life easier with bigger, or <span class="font-bold">unlimited</span> storage space.</p>
        </div>

        <div style="background-color: #141414;" class=" rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
            <img :src="premiumNames" class="pointer-events-none">
            <div class="h-2"></div>
            <h1 class=" text-lg font-bold text-white">Colored Usernames</h1>
            <p class=" text-center opacity-80">Make yourself stand out with customisable, cool looking usernames.</p>
        </div>

        <div style="background-color: #141414;" class=" rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
            <img :src="premiumBadge" class="pointer-events-none">
            <div class="h-2"></div>
            <h1 class=" text-lg font-bold text-white">Premium Badge</h1>
            <p class=" text-center opacity-80">Show off your premium membership with a badge on your profile.</p>
        </div>
        
        <div style="background-color: #141414;" class=" rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
            <img :src="premiumEncryption" class="pointer-events-none">
            <div class="h-2"></div>
            <h1 class=" text-lg font-bold text-white">File Encryption</h1>
            <p class=" text-center opacity-80">Don't worry about your private documents with our advanced file  encryption</p>
        </div>
        
        <div style="background-color: #141414;" class=" rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
            <img :src="premiumPassword" class="pointer-events-none">
            <div class="h-2"></div>
            <h1 class=" text-lg font-bold text-white">Password Protection</h1>
            <p class=" text-center opacity-80">Protect files with a password, so only people you trust can access them.</p>
        </div>
        
        

        
    </div>
</template>

<script setup>
    import premiumBadge from "/src/assets/img/premium-badge-0002.png";
    import premiumNames from "/src/assets/img/premium-names-0003.png";
    import premiumStorage from "/src/assets/img/premium-storage-0001.png";
    import premiumEncryption from "/src/assets/img/premium-encryption-0004.png";
    import premiumPassword from "/src/assets/img/premium-password-0005.png";
    
</script>