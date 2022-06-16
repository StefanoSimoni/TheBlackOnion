<template>
  <div class="frame">
    <LogoItem />
    <div class="searchContent">
      <SearchItem :games="games" />
      <div class="gameList">
        <select v-model="selectGame" @change="onChangeSelect($event)">
          <option value="" disabled hidden>Seleccionar Videojuego</option>
          <option v-for="game in games" :key="game.id">{{ game.name }}</option>
        </select>
      </div>
      <carousel
        :slides="slides"
        :sliderIndex="sliderIndex"
        :interval="3000"
        controls
        indicators
      ></carousel>
      <button
        class="buttonConfigure"
        type="button"
        @click="goConfigureBuild()"
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
  created(){
    fetch("http://localhost:4000/games5")
      .then(response => response.json())
      .then(json => {
        this.slides.push(json[0].url);
        this.sliderIndex.push(json[0].id);
        this.slides.push(json[1].url);
        this.sliderIndex.push(json[1].id);
        this.slides.push(json[2].url);
        this.sliderIndex.push(json[2].id);
        this.slides.push(json[3].url);
        this.sliderIndex.push(json[3].id);
        this.slides.push(json[4].url);
        this.sliderIndex.push(json[4].id);
        });
    fetch("http://localhost:4000/games30")
      .then(response => response.json())
      .then(json => {
        this.games = this.games.concat(json);
        })
  },
  data: () => ({
    slides: [],
    sliderIndex: [],
    games: [],
    selectGame: "",
  }),
  methods:{
    onChangeSelect(event){
      this.selectGame = this.games.find(item => item.name === event.target.value);
      this.goConfigure()
    },
    goConfigure(){
      this.$router.push({name:'Configure', params: { id: this.selectGame.id}});
    },
    goConfigureBuild(){
      this.$router.push({name:'ConfigureBuild', params: {id: this.selectGame}});
    },
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
