<template>
  <div class="rangeSliderContent">
    <h2 class="component">CPU</h2>
    <input class="rangeSlider" type="range" min="1" max="100" value="50" />
    <h2 class="component">GPU</h2>
    <input class="rangeSlider" type="range" min="1" max="100" value="50" />
    <h2 class="component">RAM</h2>
    <input class="rangeSlider" type="range" min="1" max="100" value="50" />
    <h2 class="component">DISK</h2>
    <input class="rangeSlider" type="range" min="1" max="100" value="50" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frame .rangeSliderContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  background-color: transparent;
}

.frame .rangeSliderContent h2 {
  text-align: center;
  background-color: transparent;
  margin-bottom: 2%;
}

.frame .rangeSliderContent .rangeSlider {
  margin-bottom: 2%;
}
</style>
