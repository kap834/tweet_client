<template>
    <div>
        <!-- <div class=" max-w-[600px] mx-auto flex  items-center h-screen">
            <div class="w-full">
                <div class="email my-2">
                <p class=" font-bold text-[20px]">Email</p>
                <input type="text" class=" outline-none w-full rounded-2xl py-4 bg-slate-800">
            </div>
            <div class="email my-2">
                <p class=" font-bold text-[20px]">Password</p>
                <input type="text" class=" outline-none w-full rounded-2xl py-4 bg-slate-800">
            </div>
            </div>
        </div> -->
        <div class="welcome w-full h-screen fixed bg-black">
            <div class="box max-w-[1000px] h-full mx-auto flex justify-between items-center">
                <div class="logo">
                    <img src="../assets/images/slack.png" alt="">
                </div>
                <div class="account text-white">
                    <div class="buttons">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

