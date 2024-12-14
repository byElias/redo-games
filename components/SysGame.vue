<template>
    <div class="flex justify-center">
      <div class="w-1/3 min-w-[350px] md:min-w-[600px] h-auto min-h-[500px] bg-gray-900 rounded-xl flex my-20">
        
        <!-- Linke Spalte in Tabelle, auf kleinen Bildschirmen ausgeblendet -->
        <div class="bg-slate-950 w-1/4 h-full text-white font-bold rounded-xl whitespace-nowrap pl-3 hidden md:block">
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
        <div class="w-3/4 h-full p-4">
          <div v-for="game in filteredGames" :key="game.name" class="flex items-center bg-black text-white rounded-xl p-4 w-full max-w-lg mb-4">
  
            <!-- Logo -->
            <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
              <img :src="game.image" alt="App Logo" class="w-full h-full" />
            </div>
    
            <!-- Name und Release Datum -->
            <div class="flex flex-col ml-4 space-y-2">
              <h3 class="font-bold text-lg">{{ game.name }}</h3>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-400">{{ game.releaseDate }}</span>
              </div>
            </div>
            
            <!-- See More -->
            <div class="ml-auto text-sm text-blue-500 cursor-pointer">
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
        const response = await axios.get('/games.json'); // Hier den Pfad zur JSON-Datei
        this.games = response.data;
    },
  },
};
</script>

  