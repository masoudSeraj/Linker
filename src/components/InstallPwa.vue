<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'

let shown = ref(false)
let installEvent = ref()

// onBeforeMount(() => {
//     console.log(window)
//     window.addEventListener('beforeinstallprompt', (e) => {
//       e.preventDefault()
//       console.log(e)
//       installEvent.value = e
//       shown.value = true
//     })

//     console.log('yes')
// })

window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      console.log(e)
      installEvent.value = e
      shown.value = true;
      console.log('yes')
    })

// onMounted(()=> console.log('mounted'))

function installPWA() {
    installEvent.value.prompt()
      installEvent.value.userChoice.then((choice) => {
        dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
}

function dismissPrompt() {
 shown.value = false
}

</script>

<template>

<!-- <div>
    <button @click="install()"></button>
</div> -->


<div v-if="shown">
    Add app to home screen?

    <button @click="installPWA()">
      Install!
    </button>

    <button @click="dismissPrompt()">
      No, thanks
    </button>
  </div>

</template>

