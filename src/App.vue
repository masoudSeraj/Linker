<script setup>
import PageHeader from '@/PageHeader.vue'
import LinkerForm from '@/LinkerForm.vue'

</script>

<template>
<br><br>
<br>
<br>

<div class="max-w-screen-md p-5 mx-auto font-vazir">

  <PageHeader title="لینک ساز">
    برای ایجاد لینک لطفا روی هر کدام از ورود ها کلیک کنید و مقدار <span class="text-indigo-600">UTM</span> مربوط
                را بنویسید
  </PageHeader>
 
  <LinkerForm></LinkerForm>
</div>


<!-- Credit: Componentity.com -->
<!-- <a href="https://componentity.com" target="_blank" class="block">
  <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" class="w-48 mx-auto my-5">
</a> -->



  

</template>

<style scoped>

</style>
