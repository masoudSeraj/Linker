<script setup>
import PageHeader from '@/PageHeader.vue'
import LinkerForm from '@/LinkerForm.vue'

</script>

<template>
<br><br>
<br>
<br>

<div class="max-w-screen-md p-5 mx-auto font-vazir min-h-screen relative">

  <PageHeader title="لینک ساز/خودساخته">
    <div class="flex justify-center">
      <img src="/img/icons/icon-192x192.png" alt="خودساخته">
    </div>
    
    <p>
      برای ایجاد لینک لطفا روی هر کدام از ورودی ها کلیک کنید و مقدار <span class="text-indigo-600">UTM</span> مربوط
                را بنویسید
    </p>
    
  </PageHeader>
 
  <LinkerForm></LinkerForm>

  <footer class="absolute bottom-0 text-violet-500 w-full mt-6">
    <div class="w-full h-8">
      <p>&#169; طراحی و توسعه به وسیله تیم خودساخته</p>
    </div>
</footer>
</div>
 

</template>

<style scoped>

</style>
