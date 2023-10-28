<script setup>
import { ref } from 'vue'
import {
  RocketOutlined,
  RocketFilled,
  RocketTwoTone,
} from "@ant-design/icons-vue";
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="font-vazir">سلام</h1>

  <rocket-outlined />
    <rocket-filled />
    <rocket-two-tone two-tone-color="#eb2f96" />
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
