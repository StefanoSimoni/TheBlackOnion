<template>
  <div class="searchButton">
    <input
      v-model="searchGame"
      type="text"
      class="input"
      placeholder="Buscar Videojuego"
    />
    <i class="bx bx-search" @click="goConfigure()"></i>
    <div class="combobox">
      <ul>
        <li v-for="game in filterGame" :key="game.id">{{game.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchGame: "",
    selectGame: "",
  }),
  props: ['games'],
  computed:{
    filterGame(){
      const query = this.searchGame.toLowerCase()
      if(this.searchGame === "") {
        return this.games;
      }
      return this.games.filter((gam) => {
        return Object.values(gam).some((word) =>
          String(word).toLowerCase().includes(query))
      })
    },
  },
  methods:{
    goConfigure(){
      this.$router.push({name:'Configure', params: {id: this.selectGame}});
    },
  }
}
</script>

<style scoped>
.searchButton {
  position: relative;
  height: 50px;
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

.searchButton:hover > .combobox {
  visibility: visible;
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

.searchButton .combobox {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
  border: 2px solid;
  box-sizing: border-box;
  height: 120px;
  border-radius: 20px;
  border-color: #7b78aa;
  background-color: #262450;
  visibility: hidden;
  overflow-wrap: break-word;
}

.searchButton .combobox ul {
  overflow-x: hidden;
  overflow-y: scroll;
  height: auto;
  background-color: transparent;
}

.searchButton .combobox ul li {
  height: auto;
  padding: 5px 15px;
  font-size: smaller;
  list-style: none;
  background-color: transparent;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #7b78aa;
  border-radius: 20px;
  margin-block: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #262450;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #19173d;
}

</style>
