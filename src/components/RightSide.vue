<template>
    <div class=" bg-black w-[30%] h-full sticky top-0">
        <div class=" w-full py-2 px-5 bg-black h-[4rem]">
            <div class="search flex items-center gap-3 text-gray-500 p-3 pl-5 bg-white bg-opacity-10 w-full rounded-full">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input class=" outline-none border-none bg-transparent w-full" type="text" placeholder="Search">
            </div>
        </div>
        <div class="third flex flex-col gap-3 w-full h-auto px-5 py-2">
            <!-- <div class="subscribe p-3 px-4 bg-white bg-opacity-10 text-white rounded-2xl">
                            <h1 class=" font-bold text-xl">Subscribe to Premium</h1>
                            <p class=" text-opacity-80 font-normal mb-2">Subscribe to unlock new features and if eligible,
                                receive a share of ads revenue.</p>
                            <button class=" bg-blue-500 px-3 py-2 font-bold rounded-full">Subscribe</button>
                        </div> -->
            <div class="trends bg-white bg-opacity-10 text-white rounded-2xl">
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
            <div class="follow bg-white bg-opacity-10 text-white rounded-2xl">
                <h1 class=" font-bold text-xl p-3 px-4">Who to follow</h1>
                <div class="info px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                    <div class="detail flex items-center gap-2">
                        <img class="w-[18%] rounded-full" src="../assets/images/icon.png" alt="" />
                        <div class="name">
                            <h1 class=" font-bold">Myanmar Now</h1>
                            <p class=" text-base text-white text-opacity-50">@myanmarnow</p>
                        </div>
                    </div>
                    <div class="more">
                        <button class=" font-bold bg-white text-black py-1 px-3 rounded-full">Follow</button>
                    </div>
                </div>
                <div class="info px-4 flex items-center justify-between py-2 w-full hover:bg-white hover:bg-opacity-5">
                    <div class="detail flex items-center gap-2">
                        <img class="w-[18%] rounded-full" src="../assets/images/icon.png" alt="" />
                        <div class="name">
                            <h1 class=" font-bold">Myanmar Now</h1>
                            <p class=" text-base text-white text-opacity-50">@myanmarnow</p>
                        </div>
                    </div>
                    <div class="more">
                        <button class=" font-bold bg-white text-black py-1 px-3 rounded-full">Follow</button>
                    </div>
                </div>
            </div>
            <div class="term px-4">
                <p class=" text-xs text-white text-opacity-60">Terms of Service
                    Privacy Policy
                    Cookie Policy
                    Accessibility
                    Ads info
                    More
                    © 2023 X Corp</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightSide'
}
</script>

