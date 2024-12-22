<template>
    <div class="bg-black pt-20 cursor-crosshair">
      <div class="relative w-full h-[600px]">

        <!-- Hintergrundvideo -->
        <div class="absolute inset-0 overflow-hidden">
          <video class="object-cover w-full h-full" autoplay loop muted>
            <source :src="gamesPreview.video" type="video/mp4" />
          </video>
        </div>
  
        <!-- Diagonaler Schnitt -->
        <div class="absolute inset-0 bg-black clip-path-adjusted"></div>
  
        <!-- Text und Button -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 class="text-4xl font-bold mb-4 text-white">{{ gamesPreview.name}}</h1>
          <nav>
            <a :href="gamesPreview.link" target="_blank" class="px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg">
              See More
            </a>
          </nav>
        </div> 
      </div>
  
      <SysGame></SysGame>
      
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import previewData from '@/public/games_preview.json';
  
  export default defineComponent({
    data() {
      return {
        gamesPreview: {
          name: '',
          video: '',
          link: ''
        }
      };
    },
    mounted() {
      this.loadPrevData();
    },
    methods: {
      loadPrevData() {
        const [previewInfos] = previewData as { name: string; video: string; link: string }[];
        
        this.gamesPreview = {
          name: previewInfos.name,
          video: new URL(previewInfos.video, import.meta.url).href,
          link: previewInfos.link
        };
      }
    }
  });
  </script>
  
  <style scoped>
  .clip-path-adjusted {
    clip-path: polygon(0 80%, 100% 60%, 100% 100%, 0 100%);
  }
  </style>
  