<template>
    <div>
        <a-card>
            <div class="flex flex-row flex-wrap gap-5">
                <a-input-search
                    v-model:value="onSearchValue"
                    placeholder="Search by file name or display name"
                    enter-button
                    @search="onSearch"
                    class="w-1/2 grow"
                />

                <a-select
                    ref="select"
                    v-model:value="search"
                    style="width: 120px"
                    :options="searchoptions"
                    @focus="focus"
                    @change="handleChange"
                    class="w-1/3"
                ></a-select>
            </div>
        </a-card>

        <div class="flex flex-row flex-wrap gap-5 mt-5 mb-40">

            <a-card class="w-1/4">
                <template #cover>    
                    <img src="https://xello.blue/usercontent/YJBAjnPOcb.png" >
                </template>

                <a-card-meta title="NVIDIA Capture - ijdrg6.png">
                    <template #description>
                        <a href="">YJBAjnPOcb.png</a>
                        <a-button type="primary" class="mx-3" danger>Delete</a-button>
                    </template>
                </a-card-meta>
            </a-card>

            <a-card class="w-1/4">
                <template #cover>    
                    <img :src="fileIcon" >
                </template>

                <a-card-meta title="Leaked pentagon documents.zip">
                    <template #description>
                        <a href="">rjOAjgrk.zip</a>
                        <a-button type="primary" class="mx-3" danger>Delete</a-button>
                    </template>
                </a-card-meta>
            </a-card>

        </div>


        <div class="absolute z-10 bottom-2 left-1/2 bg-[#141414] p-2 rounded-lg border border-[#3f3f3f] hover:border-accent duration-300" style="transform: translate(-50%, 0%);">
            <a-pagination v-model:current="currentPage" :total="200" size="small" class="w-full"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import fileIcon from "/src/assets/img/file.png";


//PAGES
const currentPage = ref(6);

// SEARCH
const onSearchValue = ref<string>('');
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', onSearchValue.value);
};

const search = ref('By file name');
const searchoptions = ref<SelectProps['options']>([
  {
    value: 'filename',
    label: 'By file name',
  },
  {
    value: 'displayname',
    label: 'By display name',
  }
]);

const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>