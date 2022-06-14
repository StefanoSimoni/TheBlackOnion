<template>
  <div class="frame">
    <div class="content">
      <ChartItem />
      <div class="gameList"></div>
      <button class="downloadButton">Descargar</button>
    </div>
    <div class="light-top"></div>
    <div class="light-bot"></div>
  </div>
</template>

<script>
import ChartItem from "@/components/Chart-Item.vue";
export default {
  name: "SimulateBuild-View",
  components: {
    ChartItem,
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

.frame .content .gameList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 45%; /*Poner en auto*/
  border: 2px solid;
  box-sizing: border-box;
  border-radius: 20px;
  border-color: #7b78aa;
  background-color: #262450;
}

.frame .downloadButton {
  height: 50px;
  border-color: #7b78aa;
  background-color: #262450;
  border-radius: 30px;
  cursor: pointer;
  border-style: solid;
}

.frame .light-top {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  background: rgba(13, 166, 194, 0.6);
  filter: blur(150px);
}

.frame .light-bot {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 75%;
  background: rgba(13, 166, 194, 0.6);
  filter: blur(150px);
  transform: translate(-50%, -50%);
}
</style>
