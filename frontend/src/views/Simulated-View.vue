<template>
  <div class="frame">
    <div class="content">
      <ChartItem :newDataSet="newDataSet" ref="refresh"/>
      <SlidersItem />
      <button class="simularButton">`Volver</button>
    </div>
    <div class="light-top"></div>
    <div class="light-bot"></div>
  </div>
</template>

<script>
import SlidersItem from "@/components/Sliders-Item.vue";
import ChartItem from "@/components/Chart-Item.vue";
export default {
  name: "Simulated-View",
  components: {
    SlidersItem,
    ChartItem,
  },
  data(){
    return {
      newDataSet: ""
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
      //console.log(JSON.parse(this.simudata))
      fetch("http://localhost:4000/simgame",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: this.simudata
        }
      )
      .then(response => response.json())
        .then(json => {
          this.newDataSet = JSON.stringify(json)
          })
    }
  },
  props: {
    simudata: {
      type: String
    }
  }
}
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

.frame .simularButton {
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
