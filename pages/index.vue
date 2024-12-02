<template>
  <div class="h-auto min-h-screen bg-black">

    <!-- Video Element -->
    <div class="w-full h-[600px] overflow-hidden">
      <video 
        autoplay muted loop 
        class="w-full h-full object-cover"
        :style="{ clipPath: 'ellipse(60% 60% at 50% 0%)' }">
        <source src="../assets/default.mp4" type="video/mp4">
      </video>
    </div>
    
    <!-- Media -->
    <div class="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="text-6xl font-extrabold text-white text-center my-3">
        REDO GAMES
      </div>
        
    <div class="font-extrabold text-white text-center">
      mobile | desktop | console | webgames
    </div>
        
    <div class="flex justify-center my-3">
      <SysKofiButton></SysKofiButton>
    </div>
        
    <ul class="flex flex-nowrap justify-center space-x-3 my-6">
      <li>
        <SysSocialMedia
          link="https://www.youtube.com/@redogames8254"
          icon="https://static.wixstatic.com/media/11062b_c67939a99eaf442d95d3f851857ceedf~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_c67939a99eaf442d95d3f851857ceedf~mv2.png"
        />
      </li>
      <li>
        <SysSocialMedia
          link="https://www.tiktok.com/@redo_information"
          icon="https://static.wixstatic.com/media/11062b_7edd292d29b34c309100535a26dc5033~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7edd292d29b34c309100535a26dc5033~mv2.png"
        />
      </li>
      <li>
        <SysSocialMedia
          link="https://discord.com/invite/G8WFHfMxvx"
          icon="https://static.wixstatic.com/media/11062b_06b8fba6b104430da4abdb0c1ac35673~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_06b8fba6b104430da4abdb0c1ac35673~mv2.png"
        />
      </li>
    </ul>  
  </div>
</div>  
      
  
  

</template>

<script>
import SysSocialMedia from './components/SysSocialMedia.vue';

export default {
  components: {
    SysSocialMedia
  }
}
</script>