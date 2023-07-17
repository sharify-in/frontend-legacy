<template>
    <div class="flex flex-col flex-wrap items-center gap-5">

        <!-- PLANS -->
        <div class="flex flex-row flex-wrap items-center gap-5 select-none">

            <div style=" background: rgb(62,151,255); background: linear-gradient(180deg, #4e5ef6 0%, #a7aef1 100%);" class=" rounded-2xl p-5 w-96 flex flex-col gap-2">
                <div  class="flex flex-row gap-2 items-center">
                    <h1 class="text-2xl font-bold"> Share </h1>
                    <div class="rounded-md select-none font-black text-white px-3 uppercase" style="background-color: rgba(255,255,255,0.3);"> Plus </div>
                    <div class="text-3xl w-full text-end"> <font-awesome-icon :icon="['fas', 'cloud']"/> </div>
                </div>

                <div class="flex flex-col text-lg">
                    <p><font-awesome-icon :icon="['fas', 'boxes-packing']"/> 10GB of storage</p>
                    <p><font-awesome-icon :icon="['fas', 'shield']" /> Advanced file encryption</p>
                    <p><font-awesome-icon :icon="['fas', 'palette']" /> Colored nickname</p>
                    <p><font-awesome-icon :icon="['fas', 'certificate']" /> Special Premium badge</p>
                    <p>
                        <br>
                    </p>
                </div>
                
                <a-button class="mt-10">Subscribe</a-button>
            </div>

            <div style=" background: rgb(177,0,255); background: linear-gradient(0deg, #a7aef1 0%, #d44ef6 100%);" class=" rounded-2xl p-5 w-96 flex flex-col gap-2">
                <div  class="flex flex-row gap-2 items-center">
                    <h1 class="text-2xl font-bold"> Share </h1>
                    <div class="rounded-md select-none font-black text-white px-3 uppercase" style="background-color: rgba(255,255,255,0.3);"> Pro </div>
                    <div class="text-3xl w-full text-end"> <font-awesome-icon :icon="['fas', 'cloud-bolt']"/> </div>
                </div>

                <div class="flex flex-col text-lg">
                    <p><font-awesome-icon :icon="['fas', 'boxes-packing']"/> 25GB of storage</p>
                    <p><font-awesome-icon :icon="['fas', 'shield']" /> Advanced file encryption</p>
                    <p><font-awesome-icon :icon="['fas', 'palette']" /> Colored nickname</p>
                    <p><font-awesome-icon :icon="['fas', 'certificate']" /> Special Premium badge</p>
                    <p><font-awesome-icon :icon="['fas', 'lock']" /> Password protected files and way more!</p>
                </div>

                <a-button class="mt-10">Subscribe</a-button>
            </div>
            
        </div>

        <!-- FEATURES -->
        <h1 class="text-3xl mt-10 font-bold">Premium Features</h1>

        <div class="flex flex-row flex-wrap items-center gap-5">
            <div style="background: rgb(169,2,255); background: linear-gradient(0deg, rgb(77, 94, 246) 0%, rgb(168, 175, 241) 100%);" class=" hover:scale-105 hover:drop-shadow-md duration-200 rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
                <img :src="premiumStorage" class="select-none rounded-3xl">
                <div class="h-2"></div>
                <h1 class=" text-lg font-bold text-white">More Storage Space</h1>
                <p class=" text-center opacity-90">Make your way life easier with bigger, or <span class="font-bold">unlimited</span> storage space.</p>
            </div>

            <div style="background-color: #141414;" class=" hover:scale-105 hover:drop-shadow-md duration-200 rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
                <img :src="premiumPassword" class="select-none">
                <div class="h-2"></div>
                <h1 class=" text-lg font-bold text-white">Password Protection</h1>
                <p class=" text-center opacity-80">Protect files with a password, so only people you trust can access them.</p>
            </div>
        </div>

        <div class="flex flex-row flex-wrap items-center gap-5">
            <div style="background-color: #141414;" class=" hover:scale-105 hover:drop-shadow-md duration-200 rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
                <img :src="premiumEncryption" class="select-none">
                <div class="h-2"></div>
                <h1 class=" text-lg font-bold text-white">File Encryption</h1>
                <p class=" text-center opacity-80">Don't worry about your private documents with our advanced file  encryption.</p>
            </div>

            <div style="background-color: #141414;" class=" hover:scale-105 hover:drop-shadow-md duration-200 rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
                <img :src="premiumNames" class="select-none">
                <div class="h-2"></div>
                <h1 class=" text-lg font-bold text-white">Colored Usernames</h1>
                <p class=" text-center opacity-80">Make yourself stand out with customisable, cool looking usernames.</p>
            </div>
        </div>

        <div class="flex flex-row flex-wrap items-center gap-5">
            <div style="background-color: #141414;" class=" hover:scale-105 hover:drop-shadow-md duration-200 rounded-2xl p-5 w-96 h-72 flex flex-col items-center">
                <img :src="premiumBadge" class="select-none">
                <div class="h-2"></div>
                <h1 class=" text-lg font-bold text-white">Premium Badge</h1>
                <p class=" text-center opacity-80">Show off your premium membership with a badge on your profile.</p>
            </div>
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