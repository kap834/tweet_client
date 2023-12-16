<template>
    <div>
        <div class="welcome w-full h-screen fixed bg-black">
            <div class="box max-w-[1400px] h-full mx-auto flex items-center gap-10">
                <div class="logo w-[50%] flex justify-center">
                    <div class="w-[450px]">
                        <img class=" w-full" src="../assets/images/social.png" alt="">
                    </div>
                </div>
                <div class="account text-white w-[50%]">
                    <div class="parent ml-[5rem]">
                        <h1 class=" font-bold text-6xl mb-12">The World Has Been Changing!</h1>
                        <h1 class=" font-bold text-3xl mb-6">Join today.</h1>
                        <div class="sign-up w-[50%] flex flex-col gap-2">
                            <button class=" bg-white text-black rounded-[2rem] py-2 font-bold hover:bg-gray-200"><i
                                    class="fa-brands fa-google text-[1rem]"></i> Sign up with Google</button>
                            <button class=" bg-white text-black rounded-[2rem] py-2 font-bold hover:bg-gray-200"><i
                                    class="fa-brands fa-apple text-[1.1rem]"></i> Sign up with Apple</button>
                            <div class="  relative py-3">
                                <div class="bar bg-gray-700 h-[1px]"></div>
                                <p class=" absolute right-[48%] top-[-1px] bg-black font-semibold px-[4px]">or</p>
                            </div>
                            <button class=" bg-sky-500 hover:bg-sky-600 text-white rounded-[2rem] py-2 font-bold">Create
                                account</button>
                            <small class=" text-xs text-gray-400">By signing up, you agree to the <span
                                    class="text-sky-500">Terms of Service</span> and <span class="text-sky-500">Privacy
                                    Policy</span>, including <span class="text-sky-500">Cookie Use.</span></small>
                        </div>
                        <div class="sign-in w-[50%] flex flex-col gap-2 mt-[3rem]">
                            <h1 class=" font-bold mb-2">Already have account?</h1>
                            <button
                                class=" bg-black hover:bg-gray-900 text-sky-500 rounded-[2rem] py-2 font-bold border border-gray-600">Sign
                                in</button>
                        </div>
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

