<template>
    <div
        class=" bg-black w-[20%] sticky top-0 h-screen flex flex-col justify-between border-r border-gray-800 px-3 z-[100]">
        <div class="menu mt-4 px-1">
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
                <MoreBtn />
            </div>
            <div class="btn w-[90%] mt-2">
                <button @click="post()"
                    class=" py-3 w-full font-bold text-xl text-white bg-blue-500 hover:opacity-90 rounded-3xl">Post
                </button>
            </div>
        </div>
        <div
            class="profile flex justify-between items-center w-full p-2 hover:bg-white hover:bg-opacity-10 rounded-full relative mb-3">
            <div class="logo flex gap-2 items-center text-white w-full">
                <img class="w-[18%] rounded-full" :src="user.image" alt="" />
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
            <div v-if="logoutMenu"
                class="menu absolute w-full bg-black rounded-xl top-[-7rem] border border-gray-800 shadow-md shadow-gray-800">
                <div class="flex flex-col py-2">
                    <p @click="logout()" class=" text-white w-full px-3 py-2 font-bold hover:bg-white hover:bg-opacity-10">
                        Add an existing account</p>
                    <p @click="logout()" class=" text-white w-full px-3 py-2 font-bold hover:bg-white hover:bg-opacity-10">
                        Log out @codin00</p>
                </div>
            </div>
        </div>
        <div v-if="postArea" class=" fixed backdrop-blur-[5px] w-[85%] h-screen flex justify-center">
            <div class="flex flex-col gap-1 max-h-[350px] w-[600px] mt-10 px-2 bg-black rounded-2xl">
                <div class=" w-full h-[50px] flex items-center justify-between px-2">
                    <div @click="closePost()"
                        class=" text-white text-2xl flex items-center justify-center cursor-pointer rounded-full bg-white bg-opacity-0 hover:bg-opacity-20 w-8 h-8">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <h1 class=" text-blue-500 font-bold cursor-pointer">Draft</h1>
                </div>
                <div class=" h-[300px] w-full overflow-y-auto bg-black rounded-2xl px-2">
                    <div class="w-full h-auto flex gap-3 relative">
                        <img class="w-[45px] h-[45px] rounded-full" src="../assets/images/icon.png" alt="" />
                        <div class="features w-full h-auto flex flex-col gap-3 items-center">
                            <MyTextarea v-model="postInput" />
                            <div class="w-full h-auto relative">
                                <img :src="imagePreview" class=" rounded-xl w-full" />
                                <button v-if="postClose" @click="close()"
                                    class="absolute top-1 right-1 text-white text-lg rounded-full bg-black bg-opacity-40 hover:bg-opacity-20 w-8 h-8">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submit" class=" flex justify-between items-center w-full text-blue-500 py-2 px-2">
                    <div class=" flex gap-6 cursor-pointer items-center pl-1">
                        <label for="doc" class=" cursor-pointer">
                            <i class="fa-regular fa-image"></i>
                            <input type="file" @change="previewImage" hidden id="doc" />
                        </label>
                        <i class="fa-solid fa-bars-staggered"></i>
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="post-btn relative">
                        <button type="submit"
                            class=" bg-blue-500 hover:opacity-90 px-4 py-2 font-bold rounded-full text-white">Post</button>
                        <div v-if="postLoading"
                            class="bg-blue-500 absolute top-0 hover:opacity-90 px-4 py-2 flex justify-center items-center rounded-full">
                            <pulse-loader :loading="loading" :color="postColor" :size="postSize"></pulse-loader>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import MoreBtn from '@/components/MoreBtn.vue'
import MyTextarea from '@/components/MyTextarea.vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    name: 'NavMenu',
    components: {
        MoreBtn, MyTextarea, PulseLoader
    },
    data() {
        return {
            logoutMenu: false,
            morePage: false,
            menuStatus: true,
            user: '',
            postArea: false,
            postInput: '',
            imagePreview: null,
            postClose: false,
            file: '',
            postLoading: false,
            postColor: '#ffffff',
            postSize: '6px'
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user.image == null) {
            user.image = 'http://localhost:8000/img/user.png'
        }
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
        post() {
            this.postArea = true
        },
        submit() {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            let data = new FormData();
            data.append('image', this.file);
            data.append('text', this.postInput);
            data.append('userId', this.user.id);
            if (this.postInput != '') {
                this.postLoading = true
                axios.post('http://localhost:8000/api/user/post', data, config)
                    .then(() => location.reload())
            }
        },
        previewImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imagePreview = reader.result;
                this.postClose = true
            };
            this.file = event.target.files[0];
        },
        close() {
            this.imagePreview = ''
            this.postClose = false
        },
        closePost() {
            this.postArea = false
        }
    },
}
</script>
