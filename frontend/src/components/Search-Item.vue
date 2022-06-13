<template>
  <div class="searchButton">
    <input type="text" class="input" placeholder="Buscar Videojuego" />
    <i class="bx bx-search" @click="$router.push('configure')"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.searchButton {
  position: relative;
  height: auto;
}

.searchButton .input {
  width: 99%;
  height: 50px;
  text-indent: 20px;
  border-radius: 30px;
  border-color: #7b78aa;
  background-color: #262450;
  border-style: solid;
  font-size: medium;
}

.searchButton .input::placeholder {
  color: white;
}

.searchButton i {
  position: absolute;
  right: 30px;
  top: 16px;
  height: 10px;
  width: 10px;
  font-size: x-large;
  cursor: pointer;
  background-color: transparent;
}
</style>
