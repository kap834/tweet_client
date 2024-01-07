<template>
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
                        <div
                            class="search flex items-center gap-3 text-gray-500 p-2 pl-5 bg-white bg-opacity-10 w-full rounded-full">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input class=" outline-none border-none bg-transparent w-full" type="text" placeholder="Search">
                        </div>
                    </div>
                    <div class="setting text-white flex items-center justify-center">
                        <button>
                            <i class="fa-solid fa-table-list hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-ellipsis hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                        </button>
                    </div>
                </div>
                <div class="pinned text-white border-b border-gray-800 px-4">
                    <h1 class=" font-bold text-xl my-3">Pinned Lists</h1>
                    <p class=" text-white text-opacity-60 font-normal px-4 py-6">Nothing to see here yet — pin
                        your favorite Lists to access them quickly.</p>
                </div>
                <div class="trends text-white border-b border-gray-800">
                    <h1 class=" font-bold text-xl my-3 px-4">Discover new Lists</h1>
                    <div class="flex flex-col gap-3 mb-4">
                        <div
                            class="info px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                            <div class="detail flex items-center gap-4">
                                <img class="w-[45px] h-[45px] rounded-xl object-cover object-center"
                                    src="https://pbs.twimg.com/media/EXZ22fjU8AAau2G?format=png&name=240x240" alt="" />
                                <div class="name flex flex-col gap-1">
                                    <h1 class=" font-bold text-sm">News <span class=" text-xs text-white text-opacity-70">-
                                            1.3k members</span></h1>
                                    <p class=" text-xs text-white text-opacity-70">5.7k members including @Kyaw001</p>
                                </div>
                            </div>
                            <div class="more flex justify-center items-center">
                                <button><i class="fa-solid fa-plus bg-white text-black p-2 rounded-full"></i></button>
                            </div>
                        </div>
                        <div
                            class="info px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                            <div class="detail flex items-center gap-4">
                                <img class="w-[45px] h-[45px] rounded-xl object-cover object-center"
                                    src="https://pbs.twimg.com/media/EXZ22fjU8AAau2G?format=png&name=240x240" alt="" />
                                <div class="name flex flex-col gap-1">
                                    <h1 class=" font-bold text-sm">Climate change <span
                                            class=" text-xs text-white text-opacity-70">-
                                            2k members</span></h1>
                                    <p class=" text-xs text-white text-opacity-70">3.4k members including @mowmoe5454</p>
                                </div>
                            </div>
                            <div class="more">
                                <button><i class="fa-solid fa-plus bg-white text-black p-2 rounded-full"></i></button>
                            </div>
                        </div>
                        <div
                            class="info px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                            <div class="detail flex items-center gap-4">
                                <img class="w-[45px] h-[45px] rounded-xl object-cover object-center"
                                    src="https://pbs.twimg.com/media/EXZ22fjU8AAau2G?format=png&name=240x240" alt="" />
                                <div class="name flex flex-col gap-1">
                                    <h1 class=" font-bold text-sm">Southeast Asia <span
                                            class=" text-xs text-white text-opacity-70">-
                                            3.1k members</span></h1>
                                    <p class=" text-xs text-white text-opacity-70">6.1k members including @yuyewl2020</p>
                                </div>
                            </div>
                            <div class="more">
                                <button><i class="fa-solid fa-plus bg-white text-black p-2 rounded-full"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lists text-white px-4">
                    <h1 class=" font-bold text-xl my-3">Your Lists</h1>
                    <p class=" text-white text-opacity-60 font-normal px-4 py-6">You haven't created or followed any
                        Lists. When you do, they'll show up here.</p>
                </div>
            </div>
            <RightSide />
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import RightSide from "@/components/RightSide.vue";
export default {
    name: 'ListPage',
    components: {
        NavMenu, RightSide
    },
}
</script>
