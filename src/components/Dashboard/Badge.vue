<template>
    <div class="p-1 text-base rounded-md" :style="{
        'background-color': color,
        'color': '#fff'
    }">
        <p class=" font-semibold"><font-awesome-icon :icon="icon" />  {{ label }}</p>
    </div>
</template>

<script>
export default {
  props: {
    label: String,
    color: String,
    icon: String,
  },
};
</script>