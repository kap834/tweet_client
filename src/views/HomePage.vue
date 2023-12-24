<template>
    <div>
        <div class="main w-full fixed bg-black">
            <div class=" w-[85%] mx-auto flex">
                <div class=" bg-black w-[20%] h-screen flex flex-col justify-between border-r border-gray-800 px-3">
                    <div class="menu mt-4">
                        <div class="flex flex-col font-bold text-xl text-white cursor-pointer">
                            <div class="logo text-white w-[18%] border border-gray-400 rounded-full p-[6px] mb-2">
                                <img class="w-full" src="../assets/images/social.png" alt="" />
                            </div>
                            <div class="home flex items-center font-bold">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-house-crack w-12 text-2xl"></i>
                                    <h1 class="">Home</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-magnifying-glass w-12 text-2xl"></i>
                                    <h1 class="">Explore</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-bell w-12 text-2xl"></i>
                                    <h1 class="">Notifications</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-regular fa-envelope w-12 text-2xl"></i>
                                    <h1 class="">Messages</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-table-list w-12 text-2xl"></i>
                                    <h1 class="">Lists</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-regular fa-bookmark w-12 text-2xl"></i>
                                    <h1 class="">Bookmarks</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-users w-12 text-2xl"></i>
                                    <h1 class="">Communities</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-crown w-12 text-2xl"></i>
                                    <h1 class="">Premium</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-regular fa-user w-12 text-2xl"></i>
                                    <h1 class="">Profile</h1>
                                </div>
                            </div>
                            <div class="home flex items-center">
                                <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                                    <i class="fa-solid fa-ellipsis w-12 text-2xl"></i>
                                    <h1 class="">More</h1>
                                </div>
                            </div>
                        </div>
                        <div class="btn w-[90%] mt-2">
                            <button
                                class=" py-3 w-full font-bold text-xl text-white bg-blue-500 hover:opacity-90 rounded-3xl">Post</button>
                        </div>
                    </div>
                    <div
                        class="profile flex justify-between items-center w-full p-2 hover:bg-white hover:bg-opacity-10 rounded-full relative mb-3">
                        <div class="logo flex gap-2 items-center text-white w-full">
                            <img class="w-[18%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div class="name">
                                <h1 class=" font-bold text-[16px] text-white">Khun Aung Phyo</h1>
                                <p class=" font-semibold text-[14px] text-white opacity-80">@codin00</p>
                            </div>
                        </div>
                        <div @click="profileMenu()" class="logout text-white cursor-pointer">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <div v-if="logoutMenu"
                            class="menu absolute w-[90%] bg-black rounded-lg top-[-3rem] border border-gray-800 p-2">
                            <button @click="logout()" class=" text-white font-bold">Logout</button>
                        </div>
                    </div>
                </div>
                <div class=" bg-black w-[50%] h-screen border-r border-gray-800">
                    <div class="nav flex w-full h-[8%] border-b border-gray-800">
                        <div class="title flex items-center text-white w-[90%]">
                            <div
                                class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                                <button class=" w-full">For you</button>
                                <div class="outlie absolute bottom-0">
                                    <p class=" w-14 h-1 bg-blue-500 rounded-full"></p>
                                </div>
                            </div>
                            <div
                                class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                                <button class=" w-full">Following</button>
                                <div class="outlie absolute bottom-0 hidden">
                                    <p class="w-[73px] h-1 bg-blue-500 rounded-full"></p>
                                </div>
                            </div>
                        </div>
                        <div class="setting w-[10%] text-white flex items-center justify-center">
                            <button><i
                                    class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
                        </div>
                    </div>
                </div>
                <div class=" bg-black w-[30%] h-screen py-2 px-5">
                    <div class="third flex flex-col gap-3 ">
                        <div class="search flex items-center gap-3 text-gray-500 p-3 pl-5 bg-white bg-opacity-10 w-full rounded-full">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input class=" outline-none border-none bg-transparent" type="text" placeholder="Search">
                        </div>
                        <div class="subscribe p-3 px-4 bg-white bg-opacity-10 text-white rounded-2xl">
                            <h1 class=" font-bold text-lg">Subscribe to Premium</h1>
                            <p class=" text-opacity-80 font-normal mb-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                            <button class=" bg-blue-500 px-3 py-2 font-bold rounded-full">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            logoutMenu: false
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            location.reload()
        },
        profileMenu() {
            this.logoutMenu = true
        }
    },
}
</script>

