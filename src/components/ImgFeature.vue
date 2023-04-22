<template>
    <Card class="w-72  hover:scale-105 hover:shadow-xl hover:shadow-almost-black duration-150 delay-75">
        
        <template #title>
            <div class="flex flex-col">
                <img :src="image" alt="cover image" class="w-5/6 self-center select-none" draggable="false">
                <h1 class="self-center">{{ title }}</h1>
            </div>
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
      image: String,
      title: String,
      description: String,
    },
  };
  </script>
  