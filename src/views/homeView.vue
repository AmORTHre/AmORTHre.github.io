<template>
    <a-carousel :after-change="onChange" class="home-carousel">
      <div><img rel="icon" src="../material/1.jpeg" class="home-image" /></div>
      <div><img rel="icon" src="../material/2.jpeg" class="home-image" /></div>
      <div><img rel="icon" src="../material/3.jpeg" class="home-image" /></div>
      <div><img rel="icon" src="../material/4.jpg" class="home-image" /></div>
    </a-carousel>
  </template>
  <script lang="ts" setup>
  const onChange = (current: number) => {
    console.log(current);
  };
  </script>
  <style scoped>
  /* For demo */
  :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  :deep(.slick-slide h3) {
    color: #fff;
  }

  .home-image {
    width: 100%;
    height: 100%;
  }

  .home-carousel {
    width: 100%;
    height: 100%;
  }
  </style>