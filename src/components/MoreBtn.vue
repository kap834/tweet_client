<template>
    <div>
        <div class="home flex items-center">
            <div @click="modal = true" class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                <i class="fa-solid fa-ellipsis w-12 text-2xl"></i>
                <h1 class="">More</h1>
            </div>
        </div>
        <div v-if="modal" v-on-click-outside="closeModal"
            class="menu absolute w-full z-50 bg-black rounded-xl bottom-0 border border-gray-800 shadow-md shadow-gray-800">
            <div class="flex flex-col py-2 text-base">
                <p class=" text-white w-full p-3 px-4 font-bold hover:bg-white hover:bg-opacity-10 text-xl"><i
                        class="fa-solid fa-money-bills"></i> Monetization</p>
                <div class=" mx-4 h-[1px] bg-gray-700"></div>
                <p class=" text-white w-full p-3 px-4 font-bold hover:bg-white hover:bg-opacity-10">
                    Professional Tools</p>
                <p class=" text-white w-full p-3 px-4 font-bold hover:bg-white hover:bg-opacity-10">
                    Setting and Support</p>
                <p class=" text-white w-full p-3 px-4 font-bold hover:bg-white hover:bg-opacity-10">
                    Creater Studio</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
    modal.value = false
}
</script>

