<template>
    <div class="flex flex-col min-h-screen">
        <Header>
            <SysHeader/>
        </Header>
        <main>
            <slot/>
        </main>
        <Footer>
            <SysFooter/>
        </Footer>
    </div>
  </template>
  