<template>
  <div class="h-auto min-h-screen bg-black pt-20">

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
      <div class="text-3xl font-extrabold text-white text-center my-3" style="font-family: 'Russo One', sans-serif">REDO GAMES</div>
      <div class="text-white text-center" style="font-family: 'Russo One', sans-serif">mobile | desktop | console | webgames</div>
        
      <!-- Ko-Fi-->
      <div class="flex justify-center my-3">
        <SysKofiButton></SysKofiButton>
      </div>
    
      <!-- Social Media Buttons-->
      <ul class="flex flex-nowrap justify-center space-x-3 my-6">
        <li>
            <a href="https://www.youtube.com/@redogames8254" target="_blank" class="bg-white rounded-full">
              <img src="@/assets/socialmediaicons/youtube.png" alt="">
            </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@redo_information" target="_blank" class="bg-white rounded-full">
            <img src="@/assets/socialmediaicons/tiktok.png" alt="">
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/G8WFHfMxvx" target="_blank" class="bg-white rounded-full">
            <img src="@/assets/socialmediaicons/discord.png" alt="">
          </a>
        </li>
      </ul>  
    </div>

    <div class="p-10 pb-32" style="font-family: 'Russo One', sans-serif">
      <SysPartners></SysPartners>
    </div>

    <div class="p-10 pb-40">
      <div class="text-5xl font-extrabold text-white text-center" style="font-family: 'Russo One', sans-serif">Our Games</div>
      <div class="text-2xl text-white text-center pt-5">We work everyday to develop the best applications for our gamers.</div>
      <div class="text-center pt-5"><RouterLink to="/available-games" class="text-white text-2xl underline">see more!</RouterLink></div>
    </div>
    
  </div>  
</template>
