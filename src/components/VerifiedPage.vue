<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu />
                <div class=" bg-black w-[50%] h-auto border-r border-gray-800">
                    <div class="nav sticky bg-black top-0 flex items-center justify-between w-full h-[3.5rem] px-3">
                        <h1 class=" font-bold text-white text-xl pl-3">Notifications</h1>
                        <div class="setting text-white">
                            <button><i
                                    class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
                        </div>
                    </div>
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
                                <div class=" h-full border-b-4 border-b-blue-500 flex items-center">
                                    <button class=" px-4">Verified</button>
                                </div>
                            </router-link>
                            <div
                                class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                                <div class=" h-full border-b-4 border-b-transparent flex items-center">
                                    <button class=" px-4">Mentions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="messages w-full">
                        <div class=" w-[60%] h-full mx-auto text-white flex flex-col gap-2 my-5">
                            <img src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png"
                                alt="">
                            <h1 class=" font-bold text-4xl">Nothing to see here — yet</h1>
                            <p class=" text-white text-opacity-60 font-normal text-sm">Likes, mentions, reposts, and a whole
                                lot more — when it comes from a verified account, you’ll find it here.</p>
                        </div>
                    </div>
                </div>
                <RightSide />
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import RightSide from "@/components/RightSide.vue";
export default {
    name: 'VerifiedPage',
    components: {
        NavMenu, RightSide,
    },
}
</script>