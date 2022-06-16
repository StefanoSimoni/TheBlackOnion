<template>
  <div class="frame">
    <LogoItem />
    <div class="content">
      <h1>Arma tu Configuración</h1>
      <SlidersItem />
      <button class="simularButton" @click="$router.push('simulateBuild')">
        Simular rendimiento
      </button>
    </div>
  </div>
</template>

<script>
import LogoItem from "@/components/Logo-Item.vue";
import SlidersItem from "@/components/Sliders-Item.vue";
export default {
  name: "ConfigureBuild-View",
  components: {
    LogoItem,
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

.frame .content h1 {
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 2%;
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
