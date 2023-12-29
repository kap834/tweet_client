<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu/>
                <div class=" bg-black w-[50%] h-auto border-r border-gray-800">
                    <div class="nav sticky bg-black top-0 flex w-full h-[3.3rem] ">
                        <div class="px-4 py-3 w-full flex items-center">
                            <div
                            class="search flex items-center gap-3 text-gray-500 p-2 pl-5 bg-white bg-opacity-10 w-full rounded-full">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input class=" outline-none border-none bg-transparent" type="text" placeholder="Search">
                        </div>
                        </div>
                        <div class="setting w-[10%] text-white flex items-center justify-center">
                            <button><i
                                    class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
                        </div>
                    </div>
                    <div class="trends text-white border-b border-gray-800">
                            <h1 class=" font-bold text-xl my-3 px-4">Trends for you</h1>
                            <div class="info px-4 flex justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail">
                                    <p class=" text-opacity-50 text-white font-normal text-sm">trending in Myanmar</p>
                                    <h1 class=" font-bold text-base">Merry Christmas</h1>
                                    <p class=" text-opacity-50 text-white font-normal text-sm">1.5M posts</p>
                                </div>
                                <div class="more">
                                    <i class="fa-solid fa-ellipsis text-base text-white text-opacity-50"></i>
                                </div>
                            </div>
                            <div class="info px-4 flex justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail">
                                    <p class=" text-opacity-50 text-white font-normal text-sm">trending in Myanmar</p>
                                    <h1 class=" font-bold text-base">Merry Christmas</h1>
                                    <p class=" text-opacity-50 text-white font-normal text-sm">1.5M posts</p>
                                </div>
                                <div class="more">
                                    <i class="fa-solid fa-ellipsis text-base text-white text-opacity-50"></i>
                                </div>
                            </div>
                            <div class="info px-4 flex justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail">
                                    <p class=" text-opacity-50 text-white font-normal text-sm">trending in Myanmar</p>
                                    <h1 class=" font-bold text-base">Merry Christmas</h1>
                                    <p class=" text-opacity-50 text-white font-normal text-sm">1.5M posts</p>
                                </div>
                                <div class="more">
                                    <i class="fa-solid fa-ellipsis text-base text-white text-opacity-50"></i>
                                </div>
                            </div>
                            <div class="info px-4 flex justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                                <div class="detail">
                                    <p class=" text-opacity-50 text-white font-normal text-sm">trending in Myanmar</p>
                                    <h1 class=" font-bold text-base">Merry Christmas</h1>
                                    <p class=" text-opacity-50 text-white font-normal text-sm">1.5M posts</p>
                                </div>
                                <div class="more">
                                    <i class="fa-solid fa-ellipsis text-base text-white text-opacity-50"></i>
                                </div>
                            </div>
                        </div>
                        <div class="posts w-full h-auto p-4 border-b border-gray-800">
                        <div class="info flex gap-3">
                            <img class="w-[7%] h-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div>
                                <h1 class="name text-white font-bold">President Biden</h1>
                                <div class="flex flex-col gap-3">
                                    <p class="description text-white text-opacity-95">Today, may the light from the first
                                        Christmas illuminate your homes,
                                        warm your hearts, and kindle your hopes for the year to come.
                                        From the Biden family, we wish you and your family a peaceful and healthy holiday.
                                    </p>
                                    <div class="img">
                                        <img class=" rounded-xl"
                                            src="https://pbs.twimg.com/media/GCPTWx4XMAAQFmI?format=jpg&name=small" alt="">
                                    </div>
                                    <div
                                        class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
                                        <div class="comment flex gap-2 items-center">
                                            <i class="fa-regular fa-comment"></i>
                                            <p class=" text-white text-opacity-50 text-sm">234</p>
                                        </div>
                                        <div class="repost flex gap-2 items-center">
                                            <i class="fa-solid fa-repeat"></i>
                                            <p class=" text-white text-opacity-50 text-sm">334</p>
                                        </div>
                                        <div class="like flex gap-2 items-center">
                                            <i class="fa-regular fa-heart"></i>
                                            <p class=" text-white text-opacity-50 text-sm">534</p>
                                        </div>
                                        <div class="view flex gap-2 items-center">
                                            <i class="fa-solid fa-chart-simple"></i>
                                            <p class=" text-white text-opacity-50 text-sm">134k</p>
                                        </div>
                                        <div class="share flex gap-2 items-center">
                                            <i class="fa-regular fa-share-from-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="posts w-full h-auto p-4 border-b border-gray-800">
                        <div class="info flex gap-3">
                            <img class="w-[7%] h-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div>
                                <h1 class="name text-white font-bold">President Biden</h1>
                                <div class="flex flex-col gap-3">
                                    <p class="description text-white text-opacity-95">Today, may the light from the first
                                        Christmas illuminate your homes,
                                        warm your hearts, and kindle your hopes for the year to come.
                                        From the Biden family, we wish you and your family a peaceful and healthy holiday.
                                    </p>
                                    <!-- <div class="img">
                                        <img class=" rounded-xl"
                                            src="https://pbs.twimg.com/media/GCPTWx4XMAAQFmI?format=jpg&name=small" alt="">
                                    </div> -->
                                    <div
                                        class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
                                        <div class="comment flex gap-2 items-center">
                                            <i class="fa-regular fa-comment"></i>
                                            <p class=" text-white text-opacity-50 text-sm">234</p>
                                        </div>
                                        <div class="repost flex gap-2 items-center">
                                            <i class="fa-solid fa-repeat"></i>
                                            <p class=" text-white text-opacity-50 text-sm">334</p>
                                        </div>
                                        <div class="like flex gap-2 items-center">
                                            <i class="fa-regular fa-heart"></i>
                                            <p class=" text-white text-opacity-50 text-sm">534</p>
                                        </div>
                                        <div class="view flex gap-2 items-center">
                                            <i class="fa-solid fa-chart-simple"></i>
                                            <p class=" text-white text-opacity-50 text-sm">134k</p>
                                        </div>
                                        <div class="share flex gap-2 items-center">
                                            <i class="fa-regular fa-share-from-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FollowPage/>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import FollowPage from "@/components/FollowPage.vue";
export default {
    name: 'HomePage',
    components: {
        NavMenu,FollowPage
    },
}
</script>