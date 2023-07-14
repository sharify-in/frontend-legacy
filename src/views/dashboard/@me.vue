<template>
    <div class="flex flex-col gap-3">
        <div class="flex justify-between gap-5">
            <a-card title="Username" class="w-1/3">
                <!--
                    BUG: Username cannot be edited. please fix 
                -->
                <UsernameChange />
            </a-card>
            
            <a-card title="Profile" class="w-2/3">
                <div class="flex flex-row gap-2 flex-wrap">

                    <div class="flex flex-col grow">
                        <div>
                            <a-checkbox v-model:checked="checked">
                                <h1 class="font-bold text-lg"></h1>
                            </a-checkbox>
                            <p>Setting description</p>
                        </div>
                    </div>

                    <div class="flex flex-col grow">
                        <div>
                            <a-checkbox v-model:checked="checked">
                                <h1 class="font-bold text-lg">Setting</h1>
                            </a-checkbox>
                            <p>Setting description</p>
                        </div>
                    </div>

                    <div class="flex flex-col grow">
                        <div>
                            <a-checkbox v-model:checked="checked">
                                <h1 class="font-bold text-lg">Setting</h1>
                            </a-checkbox>
                            <p>Setting description</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col grow">
                        <div>
                            <a-checkbox v-model:checked="checked">
                                <h1 class="font-bold text-lg">Setting</h1>
                            </a-checkbox>
                            <p>Setting description</p>
                        </div>
                    </div>
                    
                </div>
            </a-card>
        </div>
    </div>  
</template>