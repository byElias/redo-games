<template>

    <div class="fixed flex justify-center md:justify-between items-center bg-black text-white h-20 w-full z-50">
      <!-- Logo -->
      <div class="whitespace-nowrap text-4xl font-extrabold px-10 hidden sm:block">REDO GAMES</div>
      
      <!-- Navigation -->
      <div>
        <nav>
          <ul class="flex text-base flex-row font-bold px-5 whitespace-nowrap">
            <li>
              <router-link
              to="/"
              class="hover:text-gray-400"
              :class="{ 'text-red-500': $route.path === '/' }"
              >
              Home
            </router-link>
          </li>
          <li class="pl-7">
            <router-link
            to="/available-games"
            class="hover:text-gray-400"
            :class="{ 'text-red-500': $route.path === '/available-games' }"
            >
            Available Games
          </router-link>
        </li>
        <li class="ml-7">
          <router-link
          to="/about-us"
          class="hover:text-gray-400"
          :class="{ 'text-red-500': $route.path === '/about-us' }"
          >
          About Us
        </router-link>
      </li>
    </ul>
  </nav>
</div>
</div>
</template>