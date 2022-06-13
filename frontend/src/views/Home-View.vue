<template>
  <div class="frame">
    <LogoItem />
    <div class="searchContent">
      <SearchItem />
      <div class="gameList">
        <select>
          <option selected disabled hidden>Seleccionar Videojuego</option>
          <option>League of Legends</option>
        </select>
      </div>
      <carousel
        :slides="slides"
        :interval="3000"
        controls
        indicators
      ></carousel>
      <button
        class="buttonConfigure"
        type="button"
      >
        Configura tu PC
      </button>
    </div>
  </div>
</template>

<script>
import LogoItem from "@/components/Logo-Item.vue";
import SearchItem from "@/components/Search-Item.vue";
import Carousel from "@/components/Carousel-Item.vue";
export default {
  name: "Home-View",
  components: {
    LogoItem,
    SearchItem,
    Carousel,
  },
  data: () => ({
    slides: [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
  }),
};
</script>

<style scoped>
@media screen and (max-width: 9999px) {
  .frame {
    width: 540px;
    margin: auto;
  }
}

@media screen and (max-width: 540px) {
  .frame {
    width: 100vw;
  }
}

.frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow-x: hidden;
}

.frame header {
  display: flex;
  height: auto;
}

.frame .searchContent {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
}

.frame .searchContent .gameList {
  position: relative;
  height: auto;
}

.frame .searchContent .gameList select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  height: 50px;
  text-indent: 20px;
  border-radius: 30px;
  border-color: #7b78aa;
  background-color: #262450;
  border-style: solid;
  border-width: 2px;
  font-size: medium;
}

.frame .searchContent .gameList::after {
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 10px solid;
  position: absolute;
  right: 19px;
  top: 22px;
  content: "";
}

.buttonConfigure {
  height: 50px;
  border-color: #7b78aa;
  background-color: #262450;
  border-radius: 30px;
  cursor: pointer;
  border-style: solid;
  font-size: medium;
}
</style>
