<template>
    <a-config-provider :theme="style">
        <div class="flex flex-row items-center justify-center gap-2 flex-wrap mb-10">
            <a href="/" draggable="false" class="select-none flex flex-row items-center mr-20">
                <img :src="Logo" draggable="false"  class="w-16">
                <h1 class=" font-black uppercase">Sharify</h1>
            </a>

            <div class="flex gap-5 flex-wrap">
                <a href="#" class="text-center hover:underline">Products</a>
                <a href="#about" class="text-center hover:underline">About Us</a>
                <a href="https://dsc.gg/sharify" class="text-center hover:underline">Community</a>
                <a href="/pricing" class="text-center hover:underline mr-3">Pricing</a>
            </div>
        </div>   
        
        <slot />
 

        <Footer class="mt-24" />
    </a-config-provider>

</template>

<style>
html, body {
    scroll-behavior: smooth;
}
</style>

<script setup>
import { theme } from "ant-design-vue";
import Logo from "../assets/img/white.png";
import Footer from "@/components/Footer.vue";

const style = {
  token: {
    "colorPrimary": "#3e97ff",
    "colorPrimaryBg": "#151e2c",
    "colorPrimaryBgHover": "#192c45",
    "colorPrimaryBorder": "#213b5b",
    "colorPrimaryBorderHover": "#274f7e",
    "colorPrimaryHover": "#5ea3e8",
    "colorPrimaryActive": "#2f69ad",
    "colorPrimaryTextHover": "#5ea3e8",
    "colorPrimaryText": "#3883dc",
    "colorPrimaryTextActive": "#2f69ad",
    "colorSuccess": "#0eec17",
    "colorSuccessBg": "#112913",
    "colorSuccessBgHover": "#104113",
    "colorSuccessBorder": "#125515",
    "colorSuccessBorderHover": "#117515",
    "colorSuccessHover": "#11751e",
    "colorSuccessActive": "#10a016",
    "colorSuccessTextHover": "#34e334",
    "colorSuccessText": "#0fcc17",
    "colorSuccessTextActive": "#10a016",
    "colorWarning": "#fadc14",
    "colorWarningBg": "#2b2611",
    "colorWarningBgHover": "#443b11",
    "colorWarningBorder": "#595014",
    "colorWarningBorderHover": "#7c6e14",
    "colorWarningHover": "#7c6e14",
    "colorWarningActive": "#aa9614",
    "colorWarningTextHover": "#e8d639",
    "colorWarningText": "#d8be14",
    "colorWarningTextActive": "#aa9614",
    "colorError": "#F5222D",
    "colorErrorBg": "#2a1215",
    "colorErrorBgHover": "#431418",
    "colorErrorBorder": "#58181c",
    "colorErrorBorderHover": "#791a1f",
    "colorErrorHover": "#e84749",
    "colorErrorActive": "#a61d24",
    "colorErrorTextHover": "#e84749",
    "colorErrorText": "#d32029",
    "colorErrorTextActive": "#a61d24",
    "colorInfo": "#3e97ff",
    "colorInfoBg": "#151e2e",
    "colorInfoBgHover": "#192c45",
    "colorInfoBorder": "#213b5b",
    "colorInfoBorderHover": "#274f7e",
    "colorInfoHover": "#274f7e",
    "colorInfoActive": "#2f69ad",
    "colorInfoTextHover": "#5ea3e8",
    "colorInfoText": "#3883dc",
    "colorInfoTextActive": "#2f69ad",
    "colorBgBase": "#101010",
    "colorTextBase": "#ffffff",
    "colorText": "rgba(255, 255, 255, 0.85)",
    "colorTextSecondary": "rgba(255, 255, 255, 0.65)",
    "colorTextTertiary": "rgba(255, 255, 255, 0.45)",
    "colorTextQuaternary": "rgba(255, 255, 255, 0.25)",
    "colorBorder": "#525252",
    "colorBorderSecondary": "#404040",
    "colorFill": "rgba(255, 255, 255, 0.18)",
    "colorFillSecondary": "rgba(255, 255, 255, 0.12)",
    "colorFillTertiary": "rgba(255, 255, 255, 0.08)",
    "colorFillQuaternary": "rgba(255, 255, 255, 0.04)",
    "colorBgContainer": "#141414",
    "colorBgElevated": "#141414",
    "colorBgLayout": "#101010",
    "colorBgSpotlight": "#525252",
    "colorBgMask": "rgba(0, 0, 0, 0.45)",
    "marginXXS": 4,
    "marginXS": 8,
    "marginSM": 12,
    "margin": 16,
    "marginMD": 20,
    "marginLG": 24,
    "marginXL": 32,
    "marginXXL": 48,
    "paddingXXS": 4,
    "paddingXS": 8,
    "paddingSM": 12,
    "padding": 16,
    "paddingMD": 20,
    "paddingLG": 24,
    "paddingXL": 32,
    "borderRadius": 8,
    "borderRadiusSM": 6,
    "borderRadiusLG": 10,
    "borderRadiusXS": 2,
    algorithm: theme.darkAlgorithm,
  },
};
</script>