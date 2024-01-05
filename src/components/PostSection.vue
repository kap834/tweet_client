<template>
    <div class=" bg-black w-[50%] h-full border-r border-gray-800">
        <div class="nav sticky backdrop-blur-md top-0 flex w-full h-[3.5rem] border-b border-gray-800 z-50">
            <div class="title flex items-center text-white w-[90%]">
                <div
                    class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                    <div class=" h-full border-b-4 border-b-blue-500 flex items-center">
                        <button class=" px-1">For you</button>
                    </div>
                </div>
                <div
                    class="for relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10">
                    <div class=" h-full border-b-4 border-b-transparent flex items-center">
                        <button>Following</button>
                    </div>
                </div>
            </div>
            <div class="setting w-[10%] text-white flex items-center justify-center">
                <button><i class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i></button>
            </div>
        </div>
        <div class="post-area flex w-full h-auto px-4 pt-4 pb-3 border-b border-gray-800 gap-4">
            <img class="w-[7%] h-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
            <div class="features w-full h-auto flex flex-col items-center">
                <MyTextarea v-model="postInput" />
                <div class="w-full h-auto relative">
                    <img :src="imagePreview" class=" mt-5 rounded-xl w-full" />
                    <button v-if="postClose" @click="close()"
                        class="absolute top-6 right-1 text-white text-lg rounded-full bg-black bg-opacity-40 hover:bg-opacity-20 w-8 h-8">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <form @submit.prevent="submit"
                    class="post-feature flex justify-between items-center mt-5 w-full text-blue-500 ">
                    <div class=" flex gap-6 cursor-pointer items-center">
                        <label for="doc" class=" cursor-pointer">
                            <i class="fa-regular fa-image"></i>
                            <input type="file" @change="previewImage" hidden id="doc" />
                        </label>
                        <i class="fa-solid fa-bars-staggered"></i>
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                    <div class="post-btn">
                        <button type="submit"
                            class=" bg-blue-500 hover:opacity-90 px-4 py-2 font-bold rounded-full text-white">Post</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-for="(item, index) in posts" :key="index" class="posts w-full h-auto p-4 border-b border-gray-800">
            <div class="info flex gap-3">
                <img class="w-[7%] h-[7%] rounded-full" src="../assets/images/icon.png" alt="" />
                <div class=" w-full">
                    <h1 class="name text-white font-bold">{{ user.name }}</h1>
                    <div class="flex flex-col gap-3 w-full">
                        <p class="description text-white text-opacity-95">
                            {{ item.text }}
                        </p>
                        <img class=" rounded-xl" :src="item.image">
                        <div class="reaction w-full flex justify-between items-center text-white text-opacity-50 text-lg">
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
import MyTextarea from '@/components/MyTextarea.vue'
import axios from 'axios'
export default {
    name: 'PostSection',
    components: {
        MyTextarea,
    },
    data() {
        return {
            postInput: '',
            imagePreview: null,
            postClose: false,
            posts: null,
            user: null,
            file: ''
        }
    },
    mounted() {
        axios.get('http://localhost:8000/api/user/posts')
            .then(res => {
                this.posts = res.data.posts;
                this.posts.forEach(item => {
                    item.image = `http://localhost:8000/storage/${item.image}`
                });
                console.log(this.posts);
            });
        let user = JSON.parse(localStorage.getItem('user'));
        this.user = user
    },
    methods: {
        submit() {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            let data = new FormData();
            data.append('image', this.file);
            data.append('text', this.postInput);
            axios.post('http://localhost:8000/api/user/post', data, config)
                .then((res) => {
                    location.reload()
                })
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
            this.imagePreview = null
            this.postClose = false
        }
    },

}
</script>
