<script setup>
import { ref, computed, watch } from 'vue';

const domain = ref('https://landing.khodsakhte.ir');
const landing = ref();
const utm_source = ref('');
const utm_medium = ref('');
const utm_campaign = ref('');
const source = ref(true);
const disableDomain = ref(true)
const linkCopy = ref(true)
const linkCopyError = ref(false)

const link = computed(() => `${domain.value}/${landing.value ?? 'نام لندینگ'}?utm_source=${utm_source.value}&utm_medium=${utm_medium.value}&utm_campaign=${utm_campaign.value}${source.value ? '&source=' + utm_source.value : ''}`)

watch(disableDomain, (newValue, oldValue) => {
  disableDomain ? domain.value = 'https://landing.khodsakhte.ir' : ''
})

function toggleDomain() {
  if(!disableDomain.value && confirm('آیا میخواهید دامنه را تغییر دهید؟') === false) {
    disableDomain.value = true;
    return;
  } 
}

function copyLinkCode(text) {
  console.log(domain.value, utm_campaign.value)
  if(domain.value === '' || utm_campaign.value === '' || utm_medium.value === '' || utm_source.value === '' || landing.value === undefined){
    linkCopyError.value = true;
    setTimeout(() => linkCopyError.value = false, 2000)
    return;
  }
  linkCopy.value = false;
  setTimeout(() => linkCopy.value = true, 2000)
  navigator.clipboard.writeText(text)
}


</script>
<template>
  <form class="w-full">
    <div class="flex flex-wrap mb-6 -mx-3">
      <div dir="ltr" class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <div class="flex justify-between">
          <label class="block mb-2 text-xs tracking-wide text-gray-700 uppercase" for="grid-first-name">
            دامنه
          </label>
          <div class="flex items-center mb-2 ">
            <label class="block mr-2 text-xs tracking-wide text-gray-700 uppercase" for="domain-activator">
              فعال/غیر فعال
            </label>
            <input type="checkbox" v-model="disableDomain" id="domain-activator" @change="toggleDomain()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          
        </div>

        <input v-model="domain"
          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded appearance-none focus:outline-none focus:bg-white"
          :class="{ 'cursor-not-allowed border-violet-500 bg-gray-300': disableDomain }" :disabled="disableDomain"
          id="grid-first-name" type="text" placeholder="">

      </div>
      <div class="w-full px-3 md:w-1/2" dir="ltr">
        <label class="block mb-2 text-xs tracking-wide text-gray-700 uppercase" for="grid-last-name">
          landing
          <span class="text-xs italic text-red-500">*</span>
        </label>
        <input v-model="landing"
          class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name" type="text" placeholder="">

      </div>
    </div>
    <div class="flex flex-wrap mb-6 -mx-3" dir="ltr">
      <div class="w-full px-3">
        <label class="block mb-2 text-xs tracking-wide text-gray-700 uppercase" for="grid-password">
          utm_source
          <span class="text-xs italic text-red-500">*</span>

        </label>
        <input v-model="utm_source"
          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-source">
      </div>
    </div>

    <div class="flex flex-wrap mb-6 -mx-3" dir="ltr">
      <div class="w-full px-3">
        <label class="block mb-2 text-xs tracking-wide text-gray-700 uppercase" for="grid-password">
          utm_medium
          <span class="text-xs italic text-red-500">*</span>

        </label>
        <input v-model="utm_medium"
          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-medium">
      </div>
    </div>

    <div class="flex flex-wrap mb-6 -mx-3" dir="ltr">
      <div class="w-full px-3">
        <label class="block mb-2 text-xs tracking-wide text-gray-700 uppercase" for="grid-password">
          utm_campaign
          <span class="text-xs italic text-red-500">*</span>

        </label>
        <input v-model="utm_campaign"
          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-campaign">
      </div>
    </div>

    <div class="flex justify-between w-full mb-4">
      <div class="md:flex md:items-center">
        <label class="block text-gray-500">
          <input class="w-4 h-4 leading-tight bg-gray-100 border-gray-300 rounded text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" v-model="source">
          <span class="text-sm">
            افزودن source
          </span>
        </label>
      </div>
      <!-- <button
      class="px-6 py-2 text-white bg-indigo-600 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"
      type="submit">
      Send Message
    </button> -->
    </div>

  </form>

  <div class="relative flex w-full min-h-10 text-xs" dir="ltr">

    <div class="relative w-full bg-gray-100">
      <div :class="{ 'invisible' : linkCopy }" class="absolute right-0 flex items-center justify-center h-6 py-4 text-xs text-black bg-gray-200 rounded-md w-28 -bottom-10">
        <p>لینک کپی شد</p>
      </div>

      <div dir="rtl" :class="{ 'invisible' : !linkCopyError }" class="absolute right-0 flex items-center justify-center h-6 py-4 text-xs text-red-800 bg-red-200 rounded-md w-40 -bottom-10">
        <p>لطفا همه فیلد ها را پر کنید!!!</p>
      </div>
      
      <div id="link-code" class="flex items-center h-full text-left" style="width: calc(100% - 100px);">
        <p class="w-full break-words">{{ link }}</p>
      </div>
      <button
      @click="copyLinkCode(link)"
      class="!absolute right-1 top-1 z-10 select-none rounded bg-violet-500 text-xs py-2 px-6 text-center align-middle font-sans uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
      type="button" data-ripple-light="true">
      Copy
    </button>
    </div>



  </div>
</template>