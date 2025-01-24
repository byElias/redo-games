<template>
  <div class="bg-black h-screen pt-36 cursor-crosshair">
    <div class="flex bg-zinc-800 h-auto justify-center">
      <div class="text-white pt-16 px-[20%] flex flex-col w-full">
        <h1 class="text-5xl">contact</h1>
        <p class="pt-16">E-Mail Adresse</p>
        <a href="mailto:redo.games.message@gmail.com" class="pt-4">redo.games.message@gmail.com</a>

        <div class="flex flex-col pt-10 xl:flex-row xl:space-x-10">
          <SysRedContactField v-model="firstname" :title="'Vorname'" :width="'100%'" :heigth="'35px'" />
          <SysRedContactField v-model="lastname" :title="'Nachname'" :width="'100%'" :heigth="'35px'" />
          <SysRedContactField v-model="mailAdress" :title="'Email *'" :width="'100%'" :heigth="'35px'" />
        </div>

        <div class="my-10">
          <SysRedContactField v-model="textMessage" :title="'Nachricht'" :width="'100%'" :heigth="'70px'" />
        </div>

        <button @click="SendIt" class="w-[35%] h-[35px] bg-red-700 rounded-lg hover:bg-red-900 mb-10">Senden</button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SysRedContactField from '~/components/SysRedContactField.vue';

const SendIt = async () => {
  await $fetch('/api/contactFormularAPI', {
    body: {
      firstname: firstname.value,
      lastname: lastname.value,
      mailAdress: mailAdress.value,
      textMessage: textMessage.value
    },
    method: 'POST'
  })
}

const firstname = ref('')
const lastname = ref('')
const mailAdress = ref('')
const textMessage = ref('') 
</script>
