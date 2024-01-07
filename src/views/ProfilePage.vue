<template>
    <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
        <div class=" w-[85%] mx-auto flex">
            <NavMenu />
            <div class=" bg-black w-[50%] h-auto border-r border-gray-800">
                <div class="nav sticky z-20 bg-black top-0 flex w-full px-4 py-1 gap-4">
                    <div class=" text-white flex items-center justify-center">
                        <button>
                            <i class="fa-solid fa-arrow-left hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                        </button>
                    </div>
                    <div class=" text-white flex flex-col justify-center">
                        <h1 class=" font-bold text-white text-2xl">{{ user.name }}</h1>
                        <p class=" text-white text-opacity-50 text-sm">0 posts</p>
                    </div>
                </div>
                <div class=" w-full h-[450px] bg-black border-b border-gray-800 relative">
                    <div class="w-full h-[45%] bg-white bg-opacity-20 relative">
                    </div>
                    <div class=" h-[55%] w-full relative">
                        <div class="image w-full mx-auto">
                            <div class="w-[133px] h-[133px] rounded-full absolute p-1 bg-black top-[-60px] left-5">
                                <img class=" w-full h-full rounded-full" :src="user.image" alt="">
                            </div>
                            <div class="setup absolute right-5 top-2">
                                <button
                                    class=" bg-black text-white font-bold rounded-3xl py-[6px] px-4 border border-gray-700 hover:bg-white hover:bg-opacity-5">Set
                                    up
                                    profile</button>
                            </div>
                        </div>
                        <div class="info px-5 pt-20">
                            <h1 class=" font-bold text-white text-2xl" style="line-height: 1.3;">{{ user.name }}</h1>
                            <p class=" text-white text-opacity-50 " style="line-height: 1;">@coddin0001122</p>
                            <p class=" text-white text-opacity-50 pt-3 py-1 text-[15px]">Joined {{ date }}</p>
                            <div class="flex gap-10 text-[15px] text-white">
                                <p>0 <span class="text-white text-opacity-50">Followers</span></p>
                                <p>0 <span class=" text-white text-opacity-50">Following</span></p>
                            </div>
                        </div>
                        <div class=" bg-black flex w-full h-[50px]  absolute bottom-0">
                            <div class="title flex items-center text-white w-full">
                                <router-link
                                    class="relative w-[50%] h-full flex items-center justify-center font-bold hover:bg-white hover:bg-opacity-10"
                                    to="/notifications">
                                    <div class=" h-full border-b-4 border-b-blue-500 flex items-center">
                                        <button class=" px-4">Posts</button>
                                    </div>
                                </router-link>
                                <router-link
                                    class="relative w-[50%] h-full flex items-center justify-center font-semibold hover:bg-white hover:bg-opacity-10"
                                    to="/notifications/verified">
                                    <div class=" h-full border-b-4 border-b-transparent flex items-center">
                                        <button class=" px-4 text-opacity-40 text-white">Repiles</button>
                                    </div>
                                </router-link>
                                <router-link
                                    class="relative w-[50%] h-full flex items-center justify-center font-semibold hover:bg-white hover:bg-opacity-10"
                                    to="/notifications/mentions">
                                    <div class=" h-full border-b-4 border-b-transparent flex items-center">
                                        <button class=" px-4 text-opacity-40 text-white">Hightlights</button>
                                    </div>
                                </router-link>
                                <router-link
                                    class="relative w-[50%] h-full flex items-center justify-center font-semibold hover:bg-white hover:bg-opacity-10"
                                    to="/notifications/mentions">
                                    <div class=" h-full border-b-4 border-b-transparent flex items-center">
                                        <button class=" px-4 text-opacity-40 text-white">Media</button>
                                    </div>
                                </router-link>
                                <router-link
                                    class="relative w-[50%] h-full flex items-center justify-center font-semibold hover:bg-white hover:bg-opacity-10"
                                    to="/notifications/mentions">
                                    <div class=" h-full border-b-4 border-b-transparent flex items-center">
                                        <button class=" px-4 text-opacity-40 text-white">Likes</button>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step text-white border-b border-gray-800 px-4 py-3 w-full">
                    <h1 class=" font-bold text-xl pb-2">Let’s get you set up</h1>
                    <div class="boxs flex py-2 w-full">
                        <div class=" w-[180px] h-[148px] p-3">
                            <img class=" rounded-xl w-full h-[96px]"
                                src="https://ton.twimg.com/onboarding/persistent_nux/profile_2x.png" alt="">
                            <h1 class=" font-bold text-sm text-white text-opacity-90 py-2">Complete your profile</h1>
                        </div>
                        <div class=" w-[180px] h-[148px] p-3">
                            <img class=" rounded-xl w-full h-[96px]"
                                src="https://ton.twimg.com/onboarding/persistent_nux/follow_2x.png" alt="">
                            <h1 class=" font-bold text-sm text-white text-opacity-90 py-2">Complete your profile</h1>
                        </div>
                        <div class=" w-[180px] h-[148px] p-3">
                            <img class=" rounded-xl w-full h-[96px]"
                                src="https://ton.twimg.com/onboarding/persistent_nux/topics_2x.png" alt="">
                            <h1 class=" font-bold text-sm text-white text-opacity-90 py-2">Complete your profile</h1>
                        </div>
                    </div>
                </div>
                <div class="follow text-white pb-2">
                    <h1 class=" font-bold text-xl p-3 px-4">Who to follow</h1>
                    <div class="info px-4 flex items-center py-2 w-full hover:bg-white hover:bg-opacity-5">
                        <div class="detail flex gap-2">
                            <img class="w-[9%] h-[9%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div class="name">
                                <div class="more flex justify-between">
                                    <div>
                                        <h1 class=" font-bold">Myanmar Now</h1>
                                        <p class=" text-base text-white text-opacity-50">@myanmarnow</p>
                                    </div>
                                    <button class=" font-bold h-8 bg-white text-black px-3 rounded-full">Follow</button>
                                </div>
                                <p>Correspondent
                                    @Reuters
                                    , reporting in Canada and Myanmar, Pulitzer win 2019 with Reuters Team, Children
                                    Books Author.</p>
                            </div>
                        </div>
                    </div>
                    <div class="info px-4 flex items-center py-2 w-full hover:bg-white hover:bg-opacity-5">
                        <div class="detail flex gap-2">
                            <img class="w-[9%] h-[9%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div class="name">
                                <div class="more flex justify-between">
                                    <div>
                                        <h1 class=" font-bold">Myanmar Now</h1>
                                        <p class=" text-base text-white text-opacity-50">@myanmarnow</p>
                                    </div>
                                    <button class=" font-bold h-8 bg-white text-black px-3 rounded-full">Follow</button>
                                </div>
                                <p>Correspondent
                                    @Reuters
                                    , reporting in Canada and Myanmar, Pulitzer win 2019 with Reuters Team, Children
                                    Books Author.</p>
                            </div>
                        </div>
                    </div>
                    <div class="info px-4 flex items-center py-2 w-full hover:bg-white hover:bg-opacity-5">
                        <div class="detail flex gap-2">
                            <img class="w-[9%] h-[9%] rounded-full" src="../assets/images/icon.png" alt="" />
                            <div class="name">
                                <div class="more flex justify-between">
                                    <div>
                                        <h1 class=" font-bold">Myanmar Now</h1>
                                        <p class=" text-base text-white text-opacity-50">@myanmarnow</p>
                                    </div>
                                    <button class=" font-bold h-8 bg-white text-black px-3 rounded-full">Follow</button>
                                </div>
                                <p>Correspondent
                                    @Reuters
                                    , reporting in Canada and Myanmar, Pulitzer win 2019 with Reuters Team, Children
                                    Books Author.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightSide />
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import RightSide from "@/components/RightSide.vue";
export default {
    name: 'ProfilePage',
    components: {
        NavMenu, RightSide,
    },
    data() {
        return {
            user: '',
            date: ''
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user.image == null) {
            user.image = 'http://localhost:8000/img/user.png'
        }
        let date = new Date(user.created_at)
        let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month = date.getMonth();
        let monthName = monthsArray[month];
        let year = date.getFullYear();
        let formattedDate = monthName + ' ' + year;
        this.date = formattedDate
        this.user = user
    },
}
</script>
