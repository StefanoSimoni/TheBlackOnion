<template>
  <div class="rangeSliderContent">
    <h2 class="component">{{this.displayCpu}} </h2>
    <input class="rangeSlider" type="range" min="0" max="6" value="3" @change="onChangeCPU($event)" />
    <h2 class="component">{{this.displayGpu}}</h2>
    <input class="rangeSlider" type="range" min="0" max="6" value="3" @change="onChangeGPU($event)" />
    <h2 class="component">{{this.displayRAM}}</h2>
    <input class="rangeSlider" type="range" min="0" max="6" value="3" @change="onChangeRAM($event)" />
    <h2 class="component">{{this.displayDisk}}</h2>
    <input class="rangeSlider" type="range" min="0" max="1" value="0" @change="onChangeDISK($event)" />
  </div>
</template>

<script>
export default {
  data: () => ({
      displayCpu: "CPU:",
      displayGpu: "GPU:",
      displayRAM: "RAM:",
      displayDisk: "- HDD -",
      ram: [1, 2, 4, 8, 16, 32, 64],
      disk: ["- HDD -", "- SSD -"],
      user: {
        cpu: 0,
        gpu: 0,
        men: 0,
        disk: false,
      },
  }),
  props: ['cpu11', 'gpu11', 'cpuName', 'gpuName'],
  beforeMount(){
      this.displayCpu = "CPU:" + this.cpuName
      this.displayGpu = "GPU:" + this.gpuName
  },
  methods:{
    onChangeCPU(event){
      this.displayCpu = "CPU: " + this.cpu11[event.target.value].name
      this.user.cpu = this.cpu11[event.target.value].id
    },
    onChangeGPU(event){
      this.displayGpu = "GPU: " + this.gpu11[event.target.value].name
      this.user.gpu = this.gpu11[event.target.value].id
    },
    onChangeRAM(event){
      this.displayRAM = "RAM: " + this.ram[event.target.value]
      this.user.ram = this.ram[event.target.value]
    },
    onChangeDISK(event){
      this.displayDisk = this.disk[event.target.value]
      if (event.target.value === 0) {
        this.user.disk = false
      } else {
        this.user.disk = true
      }
    },
  }
};
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
