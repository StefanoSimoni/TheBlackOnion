<template>
  <!-- in vue 2.x you need wrap these buttons in a div -->
  <button class="carousel-control left" @click="$emit('prev')">
    <i class="bx bx-chevron-left"></i>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <i class="bx bx-chevron-right"></i>
  </button>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>
<style scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
i {
  margin-top: 10px;
  background-color: transparent;
  font-size:xx-large;
}
</style>
