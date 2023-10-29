<script setup>
import PageHeader from '@/PageHeader.vue'
import LinkerForm from '@/LinkerForm.vue'
import InstallPwa from '@/InstallPwa.vue';

</script>

<template>
<br><br>
<br>
<br>

<div class="mx-6 mb-4">

  <div class="max-w-screen-md bg-violet-100 py-6 px-4 rounded-xl mx-auto font-vazir min-h-screen relative">
    <PageHeader title="لینک ساز/خودساخته">
    <div class="flex justify-center">
      <img class="mix-blend-multiply" src="/img/icons/icon-192x192.png" alt="خودساخته">
    </div>
    
    <p>
      برای ایجاد لینک لطفا روی هر کدام از ورودی ها کلیک کنید و مقدار <span class="text-indigo-600">UTM</span> مربوط
                را بنویسید
    </p>
    
  </PageHeader>
 
  <LinkerForm></LinkerForm>

  <!-- <InstallPwa></InstallPwa> -->
  </div>
  


</div>

<footer class="mx-6 mb-4">
  <div class="max-w-screen-md mx-auto text-violet-500 w-full mt-auto">
    <div class="w-full h-8">
      <p>&#169; طراحی و توسعه به وسیله تیم خودساخته</p>
    </div>
  </div>
    
</footer>

</template>

<style scoped>

</style>
