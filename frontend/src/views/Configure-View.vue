<template>
  <div class="frame">
    <div class="content">
      <div class="searchContent">
        <div class="gameList">
          <select v-model="selectGame" @change="onChangeSelect($event)">
            <option value="" disabled hidden>Seleccionar Videojuego</option>
            <option v-for="game in games" :key="game.id">{{ game.name }}</option>
          </select>
        </div>
      </div>
      <img :src="this.game.url" />
      <SlidersItem :cpu11="cpu11" :gpu11="gpu11" :gameid=game.id ref="slider"/>
      <button class="simularButton" @click="goSignal()">
        Simular rendimiento
      </button>
    </div>
  </div>
</template>

<script>
import SlidersItem from "@/components/Sliders-Item.vue";
export default {
  name: "Configure-View",
  components: {
    SlidersItem,
  },
  data(){
    return {
    games: [],
    selectGame: "",
    cpu: [],
    gpu: [],
    cpu11: [],
    gpu11: [],
    ram: [1, 2, 4, 8, 16, 32, 64],
    game: {
      id: 0,
      url: "",
      name: "",
      cpu: 0,
      cpuIndex: 0,
      gpu: 0,
      gpuIndex: 0,
      men: 0,
      ssd: false,
    },
    user: {
      cpu: 0,
      gpu: 0,
      men: 0,
      ssd: false,
    }
    }
  },
  props: {
    id: {
      type: Number,
      default: 3
    }
  },
  created(){
    this.$watch(
      () => this.$router.params,
      () => {
        this.fetchData()
      },
      {immediate: true}
    )
  },
  methods:{
    async fetchData() {
      fetch(`http://localhost:4000/game/${this.id}`)
        .then(response => response.json())
        .then(json => {
          this.game.id = json.id
          this.game.url = json.url
          this.game.name = json.name
          })
      fetch("http://localhost:4000/games30")
        .then(response => response.json())
        .then(json => {
          this.games = this.games.concat(json);
          //console.log(this.games)
          })
      fetch("http://localhost:4000/cpus")
        .then(response => response.json())
        .then(json => {
          this.cpu = this.cpu.concat(json);
          //console.log(this.cpu)
          })
      fetch("http://localhost:4000/gpus")
        .then(response => response.json())
        .then(json => {
          this.gpu = this.gpu.concat(json);
          //console.log(this.gpu)
          })
      fetch(`http://localhost:4000/requeriment/${this.id}`)
        .then(response => response.json())
          .then(json => {
            this.game.cpu = json[1].cpu1_id
            this.game.gpu = json[1].gpu1_id
            this.game.men = json[1].men
            this.game.ssd = json[1].ssd
            //console.log(this.game.cpu, this.game.gpu)
            this.cpuIndex = this.cpu.map(e => e.id).indexOf(this.game.cpu);
            this.gpuIndex = this.gpu.map(e => e.id).indexOf(this.game.gpu);
            //console.log(this.cpuIndex, this.gpuIndex)
            for (let index = -3; index < 4; index++) {
              this.cpu11.push(this.cpu[this.cpuIndex + index])
              this.gpu11.push(this.gpu[this.gpuIndex + index])
            }
            //console.log([this.game.cpu, this.game.gpu, this.game.men, this.game.ssd, this.cpu11, this.gpu11])
          })
    },
    onChangeSelect(event){
      this.selectGame = this.games.find(item => item.name === event.target.value);
    },
    goConfigure(){
      this.$router.push({name:'Configure', params: { id: this.selectGame.id}});
    },
    goSignal(){
      this.$refs.slider.goSimuData();
    },
  }
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

.frame .content .searchContent {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  height: auto;
}

.frame .content .searchContent .gameList {
  position: relative;
  height: auto;
}

.frame .content .searchContent .gameList select {
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

.frame .content .searchContent .gameList::after {
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 10px solid;
  position: absolute;
  right: 19px;
  top: 22px;
  content: "";
}

.frame img {
  height: 250px;
  border-color: #7b78aa;
  border-style: solid;
  border-radius: 20px;
  border-width: 0px;
  box-shadow: 0px 2px 5px 0px #7b78aa;
  object-fit: cover;
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
