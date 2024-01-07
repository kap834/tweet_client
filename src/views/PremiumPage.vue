<template>
    <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
        <div class=" w-[85%] mx-auto flex">
            <NavMenu />
            <div class=" bg-black w-[50%] h-auto border-r border-gray-800 px-4">
                <div class="nav sticky bg-black top-0 flex w-full py-3">
                    <div class=" w-full flex items-center">
                        <h1 class=" font-bold text-white text-xl">Premium</h1>
                    </div>
                    <div class="setting text-white flex items-center justify-center">
                        <button><i
                                class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
                    </div>
                </div>

                <div class="sub w-[75%] mx-auto flex flex-col gap-7 mt-10">
                    <div class="">
                        <h1 class="text-white font-bold text-3xl mb-2">
                            Warning!!
                        </h1>
                        <p class="text-opacity-70 text-white text-base font-normal">Premium features is currently
                            unavailable.</p>
                    </div>
                    <div class="subscribe p-3 px-4 bg-white bg-opacity-10 text-white rounded-2xl">
                        <h1 class=" font-bold text-xl">Subscribe to Premium</h1>
                        <p class=" text-opacity-70 text-white text-base font-normal py-2">Subscribe to unlock new
                            features and if eligible,
                            receive a share of ads revenue.</p>
                        <button
                            class=" bg-blue-500 px-3 py-2 font-bold rounded-full text-base text-white text-opacity-70">Subscribe</button>
                    </div>
                </div>
            </div>
            <FollowPage />
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import FollowPage from "@/components/FollowPage.vue";
export default {
    name: 'PremiumPage',
    components: {
        NavMenu, FollowPage
    },
}
</script>