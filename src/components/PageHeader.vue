<script setup>
const props = defineProps(['title'])
</script>
<template>
    <div class="text-center mb-16">
        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            {{ title }}
        </p>
        <p class="text-gray-900">
            <slot>
                
            </slot>
        </p>
    </div>
</template>