<template>
    <div class="flex justify-center md:justify-between items-center bg-black text-white h-20">
      
      <!-- Logo -->
      <div class="whitespace-nowrap text-4xl font-extrabold mx-10">
        REDO GAMES
      </div>
  
      <!-- Navigation -->
      <div class="hidden md:block">
        <nav>
          <ul class="flex text-xl flex-row space-x-7 font-bold mx-10 whitespace-nowrap">
            <li>
              <router-link
                to="/"
                class="hover:text-gray-400"
                :class="{ 'text-red-500': $route.path === '/' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/available-games"
                class="hover:text-gray-400"
                :class="{ 'text-red-500': $route.path === '/available-games' }"
              >
                Available Games
              </router-link>
            </li>
            <li>
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