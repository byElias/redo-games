<template>
  <div class="flex justify-center">
    <div class="w-[130vh] bg-zinc-950 rounded-xl flex my-20 flex-col sm:flex-row">
        
      <!-- Linke Spalte in Tabelle, auf kleinen Bildschirmen ausgeblendet -->
      <div class="w-1/4 h-full text-white font-bold rounded-xl whitespace-nowrap px-3">
        <p class="py-2">PLATFORMS</p>
        <ul class="space-y-2 pt-2">
          <li>
            <input id="android" type="checkbox" v-model="selectedPlatforms.android" class="w-5 h-5 rounded mx-1" />
            <label for="android">ANDROID</label>
          </li>
          <li>
            <input id="ios" type="checkbox" v-model="selectedPlatforms.ios" class="w-5 h-5 rounded mx-1" />
            <label for="ios">IOS</label>
          </li>
          <li>
            <input id="windows" type="checkbox" v-model="selectedPlatforms.windows" class="w-5 h-5 rounded mx-1" />
            <label for="windows">WINDOWS</label>
          </li>
          <li>
            <input id="linux" type="checkbox" v-model="selectedPlatforms.linux" class="w-5 h-5 rounded mx-1" />
            <label for="linux">LINUX</label>
          </li>
          <li>
            <input id="macos" type="checkbox" v-model="selectedPlatforms.macos" class="w-5 h-5 rounded mx-1" />
            <label for="macos">MAC OS</label>
          </li>
        </ul>
      </div>
    
      <!-- Loop über gefilterte Spiele -->
      <div class="w-full">
        <div v-for="game in filteredGames" :key="game.name" class="flex items-center bg-zinc-900 text-white my-5 w-full sm:w-[90%] pr-5">
  
          <!-- Logo -->
          <div class="rounded-xl flex items-center justify-center shrink-0">
            <img :src="game.image" alt="App Logo" class="w-24 h-24"/>
          </div>
    
          <!-- Name und Release Datum -->
          <div class="flex flex-col ml-4 flex-grow justify-start">
            <h3 class="font-bold text-lg min-w-52 w-auto">{{ game.name }}</h3>
            <h3 class="sm:hidden text-sm text-gray-300">{{ game.platforms }}</h3>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-400">{{ game.releaseDate }}</span>
            </div>
          </div>

          <!-- md Platforms-->
          <div class="hidden md:flex flex-grow flex-col justify-between">
            <h3 class="font-semibold text-base w-24">{{ game.platforms }}</h3>
          </div>
            
          <!-- See More -->
          <div class="ml-2 text-sm text-white cursor-pointer flex flex-grow justify-end">
            <a :href="game.gameLink" target="_blank">see more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        games: [],
        selectedPlatforms: {
          android: true,
          ios: true,
          windows: true,
          linux: true,
          macos: true,
        },
      };
    },
    mounted() {
      this.fetchGames();
    },
    computed: {
      filteredGames() {
        return this.games.filter(game => {
          return (
            (this.selectedPlatforms.android && game.platforms.includes("ANDROID")) ||
            (this.selectedPlatforms.ios && game.platforms.includes("IOS")) ||
            (this.selectedPlatforms.windows && game.platforms.includes("WINDOWS")) ||
            (this.selectedPlatforms.linux && game.platforms.includes("LINUX")) ||
            (this.selectedPlatforms.macos && game.platforms.includes("MAC OS"))
          );
        });
      },
    },
    methods: {
      async fetchGames() {
          const response = await axios.get('/games.json');
          this.games = response.data;
      },
    },
  };
</script>

  