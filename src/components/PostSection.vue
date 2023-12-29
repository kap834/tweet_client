<template>
    <div class=" bg-black w-[50%] h-full border-r border-gray-800">
        <div class="nav sticky bg-black top-0 flex w-full h-[4rem] border-b border-gray-800">
            <div class="title flex items-center text-white w-[90%]">
                <div
                    class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                    <div class=" h-full border-b-4 border-b-blue-500 flex items-center">
                        <button class=" px-1">For you</button>
                    </div>
                </div>
                <div
                    class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                    <button class=" w-full">Following</button>
                </div>
            </div>
            <div class="setting w-[10%] text-white flex items-center justify-center">
                <button><i class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
            </div>
        </div>
        <div class="post-area flex w-full h-auto p-4 border-b border-gray-800 gap-4">
            <img class="w-[7%] h-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
            <div class="features w-full h-auto flex flex-col items-center">
                <input class="font-normal w-full h-auto text-xl outline-none border-none bg-transparent text-white" type="text"
                    placeholder="What is happing?!">
                <div class="post-feature flex justify-between items-center mt-3 w-full text-blue-500 ">
                    <div class=" flex gap-6 cursor-pointer">
                        <i class="fa-regular fa-image"></i>
                        <i class="fa-solid fa-bars-staggered"></i>
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="post-btn">
                        <button
                            class=" bg-blue-500 hover:opacity-90 px-4 py-2 font-bold rounded-full text-white">Post</button>
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
                        <div class="img">
                            <img class=" rounded-xl" src="https://pbs.twimg.com/media/GCPTWx4XMAAQFmI?format=jpg&name=small"
                                alt="">
                        </div>
                        <div class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
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
                        <div class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
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
                        <div class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
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
                        <div class="img">
                            <img class=" rounded-xl" src="https://pbs.twimg.com/media/GCPTWx4XMAAQFmI?format=jpg&name=small"
                                alt="">
                        </div>
                        <div class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
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
                        <div class="img">
                            <img class=" rounded-xl" src="https://pbs.twimg.com/media/GCPTWx4XMAAQFmI?format=jpg&name=small"
                                alt="">
                        </div>
                        <div class="reaction flex justify-between items-center text-white text-opacity-50 text-lg">
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
</template>

<script>
export default {
    name: 'PostSection'
}
</script>

<style lang="scss" scoped></style>