<template>
  <div class="frame">
    <div class="content">
      <SearchItem />
      <img src="./../assets/a.jpg" />
      <SlidersItem />
      <button class="simularButton">
        Simular rendimiento
      </button>
    </div>
  </div>
</template>

<script>
import SearchItem from "@/components/Search-Item.vue";
import SlidersItem from "@/components/Sliders-Item.vue";
export default {
  name: "Configure-View",
  components: {
    SearchItem,
    SlidersItem,
  },
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
  margin: auto;
}

.frame .content {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow-x: hidden;
}

.frame img {
  height: auto;
  border-color: #7b78aa;
  border-style: solid;
  border-radius: 20px;
  border-width: 0px;
  box-shadow: 0px 2px 5px 0px #7b78aa;
}

.frame .simularButton {
  height: 50px;
  border-color: #7b78aa;
  background-color: #262450;
  border-radius: 30px;
  cursor: pointer;
  border-style: solid;
}
</style>
