<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <header class="w-full">
        <SysHeader />
      </header>
  
      <!-- Hauptinhalt -->
      <main class="flex-grow">
        <slot />
      </main>
  
      <!-- Footer -->
      <footer class="w-full">
        <SysFooter />
      </footer>
    </div>
  </template>
  