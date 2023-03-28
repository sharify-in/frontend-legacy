<template>
  <Card class="min-w-[25%] flex-1 md:basis-80">
    <template #title> <i :class="icon" style="font-size: 1rem" /> {{ title }} </template>
    <template #content>
      <p>
        {{ description }}
      </p>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
