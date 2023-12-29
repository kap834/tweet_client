<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu />
                <div class=" bg-black w-[35%] h-auto border-r border-gray-800">
                    <div class="nav sticky bg-black top-0 flex items-center justify-between w-full h-[3.5rem] px-3">
                        <h1 class=" font-bold text-white text-xl pl-3">Messages</h1>
                        <div class="setting text-white">
                            <button>
                                <i class="fa-solid fa-gear hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                            </button>
                            <button>
                                <i class="fa-regular fa-envelope hover:bg-white hover:bg-opacity-10 rounded-full p-3"></i>
                            </button>
                        </div>
                    </div>
                    <div class="messages w-full mt-7">
                        <div class=" w-[80%] h-full mx-auto text-white flex flex-col gap-2 my-5">
                            <h1 class=" font-bold text-4xl">Welcome to your inbox!</h1>
                            <p class=" text-white text-opacity-60 font-normal text-sm">Drop a line, share posts and more
                                with private conversations between you and others on X.</p>
                            <div class="btn w-[50%] mt-4">
                                <button
                                    class=" py-3 w-full font-bold text-base text-white bg-blue-500 hover:opacity-90 rounded-3xl">Write a message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" bg-black w-[45%] h-screen flex items-center border-r border-gray-800">
                    <div class="messages w-full">
                        <div class=" w-[60%] h-full mx-auto text-white flex flex-col gap-2 my-5">
                            <h1 class=" font-bold text-4xl">Select a message</h1>
                            <p class=" text-white text-opacity-60 font-normal text-sm">Choose from your existing conversations, start a new one, or just keep swimming.</p>
                            <div class="btn w-[50%] mt-4">
                                <button
                                    class=" py-3 w-full font-bold text-base text-white bg-blue-500 hover:opacity-90 rounded-3xl">New message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
export default {
    name: 'MessagePage',
    components: {
        NavMenu,
    },
}
</script>
