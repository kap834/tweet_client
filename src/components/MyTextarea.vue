<template>
    <textarea ref="textarea" v-model="input"
        class="font-normal w-full text-xl outline-none border-none bg-transparent text-white resize-none"
        placeholder="What is happing?!"></textarea>
</template>

<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
const { textarea, input } = useTextareaAutosize()
</script>

