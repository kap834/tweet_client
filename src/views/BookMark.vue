<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu />
                <div class=" bg-black w-[50%] h-auto border-r border-gray-800">
                    <div class="nav sticky bg-black top-0 flex flex-col w-full h-auto px-5 py-3">
                        <h1 class=" font-bold text-white text-xl">Bookmarks</h1>
                        <h1 class=" text-white text-opacity-70 text-xs">@codin00</h1>
                    </div>
                    <div class="messages w-full">
                        <div class=" w-[60%] h-full mx-auto text-white flex flex-col gap-2 my-5">
                            <h1 class=" font-bold text-4xl">Save posts for later</h1>
                            <p class=" text-white text-opacity-60 font-normal text-sm">Bookmark posts to easily find them again in the future.</p>
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
    name: 'BookMark',
    components: {
        NavMenu, RightSide
    },
}
</script>
