<template>
  <Card
    class="min-w-[25%] flex-1 md:basis-80 hover:scale-105 hover:shadow-xl hover:shadow-almost-black duration-150 delay-75"
  >
    <template #title> <font-awesome-icon :icon="icon" /> {{ title }} </template>
    <template #content>
      <p>
        {{ formatNumber(number) }}
      </p>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    number: Number || String,
  },
  methods: {
    formatNumber(num) {
      if (typeof num === "string") {
        return num;
      }

      const scales = ["", "k", "m", "b", "t"];
      const sign = Math.sign(num);
      const absNum = Math.abs(num);
      const scaleIndex = Math.min(
        Math.floor(Math.log10(absNum) / 3),
        scales.length - 1
      );
      const scale = scales[scaleIndex];
      const scaledNum = absNum / Math.pow(10, scaleIndex * 3);
      const formattedNum = scaledNum.toLocaleString(undefined, {
        maximumFractionDigits: 1,
      });
      return sign * formattedNum + scale;
    },
  },
};
</script>
