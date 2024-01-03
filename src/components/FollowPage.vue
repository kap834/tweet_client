<template>
    <div class=" bg-black w-[30%] h-full sticky top-0">
        <div class="third flex flex-col gap-3 w-full h-auto px-5 py-2">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'FollowPage'
}
</script>