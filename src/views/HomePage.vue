<template>
    <div>
            <div class="main w-full fixed bg-black">
                <div class=" w-[80%] mx-auto flex">
                    <div class=" bg-black w-[25%] h-screen flex flex-col justify-between border-r border-gray-800 py-4 px-6">
                        <div class="menu flex flex-col gap-5 cursor-pointer">
                            <div class="flex flex-col gap-5 px-3">
                                <div class="logo text-white w-[15%] border border-gray-400 rounded-full p-[6px]">
                                <img class="w-full" src="../assets/images/social.png" alt="" />
                            </div>
                            <div class="home">
                                <h1 class=" font-bold text-xl text-white hover:bg-black">Home</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Explore</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Notifications</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Messages</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Lists</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Bookmarks</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Communities</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Premium</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">Profile</h1>
                            </div>
                            <div class="home">
                                <h1 class=" font-semibold text-xl text-white">More</h1>
                            </div>
                            </div>
                            <div class="btn w-full">
                                <button class=" py-3 w-full font-bold text-xl text-white bg-blue-500 hover:opacity-90 rounded-3xl">Post</button>
                            </div>
                        </div>
                        <div class="profile flex justify-between items-center w-full px-3">
                            <div class="logo text-white w-[15%] border border-gray-400 rounded-full p-[6px]">
                                <img class="w-full" src="../assets/images/social.png" alt="" />
                            </div>
                            <div class="name">
                                <h1 class=" font-bold text-[16px] text-white">Khun Aung Phyo</h1>
                                <p class=" font-semibold text-[14px] text-white opacity-80">@codin00</p>
                            </div>
                            <div class="logout">
                                <h1 class=" text-white">Logout</h1>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-black w-[45%] h-screen border-r border-gray-800">
                        <div class="menu">
                            <div class="logo text-white">
                                Tweet
                            </div>
                        </div>
                    </div>
                    <div class=" bg-black w-[30%] h-screen">
                        <div class="menu">
                            <div class="logo text-white">
                                Tweet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- <button @click="logout">logout</button> -->
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    // methods: {
    //     logout() {
    //         localStorage.removeItem('token')
    //         location.reload()
    //     }
    // },
}
</script>

