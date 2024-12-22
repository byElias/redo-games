<template>
  <div class="h-auto min-h-screen bg-black pt-20 cursor-crosshair">

    <!-- Video Element -->
    <div class="w-full h-[600px] overflow-hidden">
      <video 
        autoplay muted loop 
        class="w-full h-full object-cover"
        :style="{ clipPath: 'ellipse(60% 60% at 50% 25%)' }">
        <source src="../assets/default.mp4" type="video/mp4">
      </video>
    </div>
    
    <!-- Media -->
    <div class="absolute left-1/2 top-[200px] transform -translate-x-1/2">
      <div class="text-6xl font-extrabold text-white text-center my-3">
        REDO GAMES
      </div>
        
      <div class="font-extrabold text-white text-center">
        mobile | desktop | console | webgames
      </div>
        
      <!-- Ko-Fi-->
      <div class="flex justify-center my-3">
        <SysKofiButton></SysKofiButton>
      </div>
    
        <!-- Social Media Buttons-->
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

    <div class="p-10 pb-32">
      <SysPartners></SysPartners>
    </div>

    <div class="p-10 pb-40">
      <div class="text-5xl font-extrabold text-white text-center">Our Games</div>
      <div class="text-2xl text-white text-center pt-5">We work everyday to develop the best applications for our gamers.</div>
      <div class="text-center pt-5"><RouterLink to="/available-games" class="text-white text-2xl underline">see more!</RouterLink></div>
    </div>
    
  </div>  
</template>
