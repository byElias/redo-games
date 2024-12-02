<template>
    <div class="flex flex-col min-h-screen">
        <Header>
            <SysHeader/>
        </Header>
        <main class="flex-grow bg-black">
            <slot/>
        </main>
    </div>
  </template>
  