<template>
    <div class=" bg-black w-[20%] sticky top-0 h-screen flex flex-col justify-between border-r border-gray-800 px-3">
        <div class="menu mt-4">
            <div class="flex flex-col font-bold text-xl text-white cursor-pointer relative">
                <div class="logo text-white w-[18%] border border-gray-400 rounded-full p-[6px] mb-2">
                    <img class="w-full" src="../assets/images/social.png" alt="" />
                </div>
                <div class="home flex items-center font-bold">
                    <router-link to="/home">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-house-crack w-12 text-2xl"></i>
                            <h1>Home</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/explore">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-magnifying-glass w-12 text-2xl"></i>
                            <h1>Explore</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/notifications">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-bell w-12 text-2xl"></i>
                            <h1>Notifications</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/messages">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-regular fa-envelope w-12 text-2xl"></i>
                            <h1 class="">Messages</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/lists">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-table-list w-12 text-2xl"></i>
                            <h1 class="">Lists</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/bookmarks">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-regular fa-bookmark w-12 text-2xl"></i>
                            <h1 class="">Bookmarks</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/communites">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-users w-12 text-2xl"></i>
                            <h1 class="">Communities</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/premium">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-solid fa-crown w-12 text-2xl"></i>
                            <h1 class="">Premium</h1>
                        </div>
                    </router-link>
                </div>
                <div class="home flex items-center">
                    <router-link to="/profile">
                        <div class="hover:bg-white hover:bg-opacity-10 rounded-full flex p-2 pr-5">
                            <i class="fa-regular fa-user w-12 text-2xl"></i>
                            <h1 class="">Profile</h1>
                        </div>
                    </router-link>
                </div>
                <MoreBtn/>
            </div>
            <div class="btn w-[90%] mt-2">
                <button class=" py-3 w-full font-bold text-xl text-white bg-blue-500 hover:opacity-90 rounded-3xl">Post
                </button>
            </div>
        </div>
        <div
            class="profile flex justify-between items-center w-full p-2 hover:bg-white hover:bg-opacity-10 rounded-full relative mb-3">
            <div class="logo flex gap-2 items-center text-white w-full">
                <img class="w-[18%] rounded-full" src="../assets/images/icon.png" alt="" />
                <div class="name">
                    <h1 class=" font-bold text-[16px] text-white">{{ user.name }}</h1>
                    <p class=" font-semibold text-[14px] text-white opacity-80 text-clip">@codin00</p>
                </div>
            </div>
            <div v-if="menuStatus" @click="openMenu()" class=" text-white cursor-pointer w-4">
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div v-if="!menuStatus" @click="closeMenu()" class=" text-white cursor-pointer w-4">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div v-if="logoutMenu" class="menu absolute w-full bg-black rounded-xl top-[-7rem] border border-gray-800 shadow-md shadow-gray-800">
                <div class="flex flex-col py-2">
                    <p @click="logout()" class=" text-white w-full px-3 py-2 font-bold hover:bg-white hover:bg-opacity-10">Add an existing account</p>
                    <p @click="logout()" class=" text-white w-full px-3 py-2 font-bold hover:bg-white hover:bg-opacity-10">Log out @codin00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoreBtn from '@/components/MoreBtn.vue'

export default {
    name: 'NavMenu',
    components: {
        MoreBtn,
    },
    data() {
        return {
            logoutMenu: false,
            morePage: false,
            menuStatus: true,
            user: ''
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.user = user
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            location.reload()
        },
        openMenu() {
            this.logoutMenu = true
            this.menuStatus = false
        },
        closeMenu() {
            this.logoutMenu = false
            this.menuStatus = true
        },
    },
}
</script>
