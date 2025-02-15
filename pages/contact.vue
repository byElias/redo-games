<template>
  <div class="bg-black h-screen pt-36 cursor-crosshair">
    <div class="flex bg-zinc-800 h-auto justify-center">
      <div class="text-white pt-16 px-[20%] flex flex-col w-full">
        <h1 class="text-5xl">contact</h1>
        <p class="pt-16">E-Mail Adresse</p>
        <a href="mailto:redo.games.message@gmail.com" class="py-4 border-b-2">redo.games.message@gmail.com</a>
        
        <form @submit.prevent="submit(form)">
          <div class="input-wrapper my-5">
            <div class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-[10%] ">

              <div class="flex flex-col w-full">
                <label for="email">E-Mail:</label>
                <input required v-model="form.email" type="email" name="email" class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] text-sm p-1">
              </div>
              
              <div class="flex flex-col w-full">
                <label for="email">Name:</label>
                <input required v-model="form.name" type="name" name="name" class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] text-sm p-1">
              </div>

              <div class="flex flex-col w-full">
                <label for="email">Anliegen:</label>
                <input required v-model="form.subject" type="subject" name="subject" class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] text-sm p-1">
              </div>
            </div>

            <div class="flex flex-col w-full my-5">
              <label for="email">Nachricht:</label>
              <textarea required v-model="form.message" type="message" name="message" class="box-border bg-black h-36 border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] text-sm p-1"/>
            </div>

          </div>
        </form>

        <button type="submit" class="w-[35%] h-[35px] bg-red-700 rounded-lg hover:bg-red-900 mb-10">
          <template v-if="waiting">Laden</template>
          <template v-if="!waiting">Abschicken</template>
        </button>
        <p v-if="errors">Ups! Hier ist etwas schief gelaufen</p>
        <p v-if="success">Abgeschickt! Vielen Dank für deine Anfrage</p>
            
      </div>
    </div>        
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const success = ref(false);
const errors = ref(false);
const waiting = ref(false);

async function submit(form){
  console.log(form);
}
</script>



