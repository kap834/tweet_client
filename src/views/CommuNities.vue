<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu />
                <div class=" bg-black w-[50%] h-auto border-r border-gray-800">
                    <div class="nav sticky bg-black top-0 flex w-full h-[3.3rem] px-4 gap-2">
                        <div class="setting text-white flex items-center justify-center">
                            <button>
                                <i class="fa-solid fa-arrow-left hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                            </button>
                        </div>
                        <div class=" w-full flex items-center">
                            <h1 class=" font-bold text-white text-xl pl-3">Communities</h1>
                        </div>
                        <div class="setting text-white flex items-center justify-center">
                            <button>
                                <i
                                    class="fa-solid fa-magnifying-glass hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                            </button>
                            <button>
                                <i class="fa-solid fa-user-plus text-sm hover:bg-white hover:bg-opacity-10 rounded-full p-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="trends text-white border-b border-gray-800">
                        <h1 class=" font-bold text-xl my-3 px-4">Discover new Communities</h1>
                        <div class="flex flex-col gap-3 mb-4">
                            <div
                                class="info cursor-pointer px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail flex items-center gap-4">
                                    <img class="w-[96px] h-[96px] rounded-xl object-cover"
                                        src="https://pbs.twimg.com/list_banner_img/1450612153426214914/nqtK4C5h?format=jpg&name=360x360" alt="" />
                                    <div class="name flex flex-col gap-1">
                                        <h1 class=" font-bold text-base">Communities Feedback</h1>
                                        <h1 class=" font-bold text-base">1.8K <span class=" text-base font-normal text-white text-opacity-70">Members</span></h1>
                                        <div class="flex">
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="info cursor-pointer px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail flex items-center gap-4">
                                    <img class="w-[96px] h-[96px] rounded-xl object-cover"
                                        src="https://pbs.twimg.com/list_banner_img/1450612153426214914/nqtK4C5h?format=jpg&name=360x360" alt="" />
                                    <div class="name flex flex-col gap-1">
                                        <h1 class=" font-bold text-base">Communities Feedback</h1>
                                        <h1 class=" font-bold text-base">1.8K <span class=" text-base font-normal text-white text-opacity-70">Members</span></h1>
                                        <div class="flex">
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="info cursor-pointer px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail flex items-center gap-4">
                                    <img class="w-[96px] h-[96px] rounded-xl object-cover"
                                        src="https://pbs.twimg.com/list_banner_img/1450612153426214914/nqtK4C5h?format=jpg&name=360x360" alt="" />
                                    <div class="name flex flex-col gap-1">
                                        <h1 class=" font-bold text-base">Communities Feedback</h1>
                                        <h1 class=" font-bold text-base">1.8K <span class=" text-base font-normal text-white text-opacity-70">Members</span></h1>
                                        <div class="flex">
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                            <img class="w-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    name: 'CommuNites',
    components: {
        NavMenu, RightSide
    },
}
</script>
