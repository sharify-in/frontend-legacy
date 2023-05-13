<template>
  <Card
    class="min-w-[25%] flex-1 md:basis-80 hover:scale-105 hover:shadow-xl hover:shadow-almost-black duration-150 delay-75">
    <template #title> <font-awesome-icon :icon="props.icon" /> {{ title }} </template>
    <template v-if="!props.loading & !props.error" #content>
      <p v-if="string">
        {{ props.number }}
      </p>
      <CountUp v-else :end-val="props.number"></CountUp>
    </template>
    <template v-else-if="props.loading & !props.error" #content>
      <p>Loading...</p>
    </template>
    <template v-else #content>
      <p>Couldn't load statistics</p>
    </template>
  </Card>
</template>

<script setup>
import { onMounted, ref } from "vue"
import CountUp from 'vue-countup-v3'

const props = defineProps(["icon", "title", "number", "loading", "error"])

let string = ref(false);
onMounted(() => {
  if (typeof props.number === "string") {
    string.value = true
  }
})

</script>
