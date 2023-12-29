<template>
    <div class=" bg-black top-0 flex w-full h-[4rem] border-b border-gray-800">
        <div class="title flex items-center text-white w-full">
            <router-link
                class="relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10"
                to="/notifications">
                <div class=" h-full border-b-4 border-b-blue-500 flex items-center">
                    <button class=" px-4">All</button>
                </div>
            </router-link>
            <router-link
                class="relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10"
                to="/notifications/verified">
                <div class=" h-full border-b-4 border-b-transparent flex items-center">
                    <button class=" px-4">Verified</button>
                </div>
            </router-link>
            <router-link
                class="relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10"
                to="/notifications/mentions">
                <div class=" h-full border-b-4 border-b-transparent flex items-center">
                    <button class=" px-4">Mentions</button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotiBar'
}
</script>
