<template>
  <p>Soon&trade; (next beta update)</p>
  <!--  <div>-->
  <!--    <a-progress-->
  <!--      class="w-11/12 h-0 pt-1 mb-10"-->
  <!--      :percent="storage_percentage"-->
  <!--      status="exception"-->
  <!--      size="small"-->
  <!--      :format="(percent) => `${percent}% of Storage used`"-->
  <!--    />-->

  <!--    <a-card>-->
  <!--      <div class="flex flex-row flex-wrap gap-5">-->
  <!--        <a-input-search-->
  <!--          v-model:value="onSearchValue"-->
  <!--          placeholder="Search by file name or display name"-->
  <!--          enter-button-->
  <!--          @search="onSearch"-->
  <!--          class="w-1/2 grow"-->
  <!--        />-->

  <!--        <a-select-->
  <!--          ref="select"-->
  <!--          v-model:value="search"-->
  <!--          style="width: 120px"-->
  <!--          :options="searchoptions"-->
  <!--          @focus="focus"-->
  <!--          @change="handleChange"-->
  <!--          class="w-1/3"-->
  <!--        ></a-select>-->
  <!--      </div>-->
  <!--    </a-card>-->

  <!--    <a-alert-->
  <!--      v-show="storage_percentage >= 90 && storage_percentage != 100"-->
  <!--      message="Storage almost full"-->
  <!--      type="warning"-->
  <!--      show-icon-->
  <!--      class="my-5"-->
  <!--    >-->
  <!--      <template #description>-->
  <!--        <p>-->
  <!--          Your storage space is low. You can-->
  <!--          <a href="/dashboard/premium" class="font-bold hover:text-white"-->
  <!--            >upgrade</a-->
  <!--          >-->
  <!--          to get more.-->
  <!--        </p>-->
  <!--      </template>-->
  <!--    </a-alert>-->

  <!--    <a-alert-->
  <!--      v-show="storage_percentage == 100"-->
  <!--      message="Account storage is full"-->
  <!--      type="error"-->
  <!--      show-icon-->
  <!--      class="my-5"-->
  <!--    >-->
  <!--      <template #description>-->
  <!--        <p>-->
  <!--          You've used all of your storage space. You can-->
  <!--          <a href="/dashboard/premium" class="font-bold hover:text-white"-->
  <!--            >upgrade</a-->
  <!--          >-->
  <!--          to get more.-->
  <!--        </p>-->
  <!--      </template>-->
  <!--    </a-alert>-->

  <!--    <div class="flex flex-row flex-wrap gap-2 mt-5 mb-40 justify-center">-->
  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <a-image src="https://xello.blue/usercontent/YJBAjnPOcb.png" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="NVIDIA Capture - ijdrg6.png">-->
  <!--          <template #description>-->
  <!--            <a href="">YJBAjnPOcb.png</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileUniversal" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="golf.ball">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.ball</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileZip" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Leaked pentagon documents.zip">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.zip</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileRar" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Leaked FSB documents.rar">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.rar</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileDB" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Discord users (breached).db">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.rar</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileDocument" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Vault7.docx">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.docx</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileExe" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Free robux.exe">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="filePDF" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Russian spyware usage.pdf">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="filePowerpoint" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Why sharify is the best.pptx">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileSpreadsheet" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="Doordash - tax report.xls">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileCode" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="GTA6_movementmanager.cs">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->

  <!--      <a-card class="w-96">-->
  <!--        <template #cover>-->
  <!--          <img :src="fileAudio" class="p-24" />-->
  <!--        </template>-->

  <!--        <a-card-meta title="GTA6 Loading theme.mp3">-->
  <!--          <template #description>-->
  <!--            <a href="">rjOAjgrk.exe</a>-->
  <!--            <a-button type="primary" class="mx-3" danger>Delete</a-button>-->
  <!--          </template>-->
  <!--        </a-card-meta>-->
  <!--      </a-card>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SelectProps } from "ant-design-vue";
import fileUniversal from "/src/assets/img/fileUniversal.png";
import fileZip from "/src/assets/img/fileZip.png";
import fileRar from "/src/assets/img/fileRar.png";
import fileDB from "/src/assets/img/fileDB.png";
import fileDocument from "/src/assets/img/fileDocument.png";
import fileExe from "/src/assets/img/fileExe.png";
import filePDF from "/src/assets/img/filePDF.png";
import filePowerpoint from "/src/assets/img/filePowerpoint.png";
import fileSpreadsheet from "/src/assets/img/fileSpreadsheet.png";
import fileCode from "/src/assets/img/fileCode.png";
import fileAudio from "/src/assets/img/fileAudio.png";

const storage_percentage = 97;

// SEARCH
const onSearchValue = ref<string>("");
const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", onSearchValue.value);
};

const search = ref("By file name");
const searchoptions = ref<SelectProps["options"]>([
  {
    value: "filename",
    label: "By file name",
  },
  {
    value: "displayname",
    label: "By display name",
  },
]);

const focus = () => {
  console.log("focus");
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>
