<template>
  <Card
    class="flex-1 md:basis-80 hover:scale-105 hover:shadow-xl hover:shadow-almost-black duration-150 delay-75"
  >
    <template #title>
      <font-awesome-icon :icon="icon" /> {{ title }}
    </template>
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
