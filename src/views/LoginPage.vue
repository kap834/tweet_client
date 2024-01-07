<template>
    <div :style="{ background: bgColor }" class="welcome w-full h-screen fixed bg-black flex justify-center items-center">
        <div v-if="status" class="bg-black w-[600px] fixed h-[85%] rounded-xl z-10">
            <button @click="close()"
                class="absolute top-5 left-5 text-white text-2xl rounded-full hover:bg-gray-800 w-9 h-9">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="box px-[5rem] pt-[4rem] pb-[2rem] flex flex-col justify-between h-full">
                <div class="">
                    <h1 class="text-white font-bold text-3xl mb-6">
                        Create your account
                    </h1>
                    <div class="mb-4">
                        <input :style="{ 'border-color': nameError }" v-model="user.name" type="text" placeholder="Name"
                            class="w-full outline-none py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                    </div>
                    <div class="">
                        <input :style="{ 'border-color': emailError }" v-model="user.email" type="email" placeholder="Email"
                            class="w-full outline-none  py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                    </div>
                </div>
                <div class="date">
                    <p class="font-semibold text-white mb-1">Date of birth <span
                            class=" font-semibold text-sm text-gray-400">(optional)</span></p>
                    <p class="text-gray-500 text-[12px]">This will not be shown publicly. Confirm your own age, even if
                        this account is for a business, a pet, or something else.</p>
                    <div class="flex gap-3 mt-4">
                        <div
                            class="option py-3 px-2 text-white border border-gray-800 bg-black rounded-lg flex flex-col w-[50%]">
                            <small class="text-xs text-gray-500">Month</small>
                            <select class="bg-black cursor-pointer outline-none">
                                <option value=""></option>
                                <option value="">January</option>
                            </select>
                        </div>
                        <div
                            class="option py-3 px-2 text-white border border-gray-800 bg-black rounded-lg flex flex-col w-[25%]">
                            <small class="text-xs text-gray-500">Day</small>
                            <select class="bg-black cursor-pointer outline-none">
                                <option value=""></option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </div>
                        <div
                            class="option py-3 px-2 text-white border border-gray-800 bg-black rounded-lg flex flex-col w-[25%]">
                            <small class="text-xs text-gray-500">Year</small>
                            <select class="bg-black cursor-pointer outline-none">
                                <option value=""></option>
                                <option value="">2000</option>
                                <option value="">2001</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="btn w-full flex justify-center mt-8">
                    <button @click="nextPage()"
                        class="w-full font-bold py-4 rounded-[2rem] bg-white text-black hover:bg-gray-200">
                        Next
                    </button>
                </div>
            </div>
        </div>

        <div v-if="next" class="bg-black w-[600px] fixed h-[85%] rounded-xl z-10">
            <button @click="close()"
                class="absolute top-5 left-5 text-white text-2xl rounded-full hover:bg-gray-800 w-9 h-9">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="box px-[5rem] pt-[4rem] pb-[2rem] flex flex-col justify-between h-full">
                <div class="">
                    <h1 class="text-white font-bold text-3xl mb-6">
                        Create your password
                    </h1>
                    <input :style="{ 'border-color': passError }" v-model="user.password" type="password"
                        placeholder="Password"
                        class="w-full outline-none mb-4 py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                    <div class="mb-12">
                        <input :style="{ 'border-color': conError }" v-model="user.confirm_password" type="password"
                            placeholder="Confirm Password"
                            class="w-full outline-none py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                        <small v-if="statusPass" class=" text-red-500 text-xs">Password does not match</small>
                    </div>
                </div>
                <div class="btn w-full flex flex-col justify-center">
                    <div class="flex gap-1 my-2">
                        <input type="checkbox" class=" bg-sky-500 w-4">
                        <p class="text-gray-200 text-[14px]">Agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    <button @click="register()"
                        class="w-full font-bold py-4 rounded-[2rem] bg-white text-black hover:bg-gray-200">
                        Create
                    </button>
                </div>
            </div>
        </div>

        <div v-if="signInPage" class="bg-black w-[600px] fixed h-[85%] rounded-xl z-10">
            <button @click="close()"
                class="absolute top-5 left-5 text-white text-2xl rounded-full hover:bg-gray-800 w-9 h-9">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="box px-[5rem] pb-[2rem] pt-[4rem] flex flex-col justify-between h-full">
                <div class="">
                    <h1 class="text-white font-bold text-3xl mb-6">
                        Sing in your account
                    </h1>
                    <input :style="{ 'border-color': passError }" v-model="user.email" type="email" placeholder="Email"
                        class="w-full outline-none mb-4 py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                    <div class="mb-12">
                        <input :style="{ 'border-color': conError }" v-model="user.password" type="password"
                            placeholder="password"
                            class="w-full outline-none py-4 px-2 text-white font-medium rounded-lg bg-black border border-gray-800" />
                        <small v-if="statusPass" class=" text-red-500 text-xs">Password does not match</small>
                        <small v-if="invaild" class=" text-red-500 text-xs">Email/Password is invaild</small>
                    </div>
                </div>
                <div class="btn w-full flex flex-col justify-center">
                    <div class="flex gap-1 my-2">
                        <input type="checkbox" class=" bg-sky-500 w-4">
                        <p class="text-gray-200 text-[14px]">Remember Me</p>
                    </div>
                    <button @click="logIn()"
                        class="w-full font-bold py-4 rounded-[2rem] bg-white text-black hover:bg-gray-200">
                        Sign In
                    </button>
                </div>
            </div>
        </div>

        <div class="box max-w-[1400px] h-full mx-auto flex items-center gap-10">
            <div class="logo w-[50%] flex justify-center">
                <div class="w-[450px]">
                    <img class="w-full" src="../assets/images/social.png" alt="" />
                </div>
            </div>
            <div class="account text-white w-[50%]">
                <div class="parent ml-[5rem]">
                    <h1 class="font-bold text-6xl mb-12">
                        The World Has Been Changing!
                    </h1>
                    <h1 class="font-bold text-3xl mb-6">Join today.</h1>
                    <div class="sign-up w-[50%] flex flex-col gap-2">
                        <button class="bg-white text-black rounded-[2rem] py-2 font-bold hover:bg-gray-200">
                            <i class="fa-brands fa-google text-[1rem]"></i> Sign up with
                            Google
                        </button>
                        <button class="bg-white text-black rounded-[2rem] py-2 font-bold hover:bg-gray-200">
                            <i class="fa-brands fa-apple text-[1.1rem]"></i> Sign up with
                            Apple
                        </button>
                        <div class="relative py-3">
                            <div class="bar bg-gray-700 h-[1px]"></div>
                            <p class="absolute right-[48%] top-[-1px] bg-black font-semibold px-[4px]">
                                or
                            </p>
                        </div>
                        <button @click="createAccount()"
                            class="bg-sky-500 hover:bg-sky-600 text-white rounded-[2rem] py-2 font-bold">
                            Create account
                        </button>
                        <small class="text-xs text-gray-400">By signing up, you agree to the
                            <span class="text-sky-500">Terms of Service</span> and
                            <span class="text-sky-500">Privacy Policy</span>, including
                            <span class="text-sky-500">Cookie Use.</span></small>
                    </div>
                    <div class="sign-in w-[50%] flex flex-col gap-2 mt-[3rem]">
                        <h1 class="font-bold mb-2">Already have account?</h1>
                        <button @click="logInPage()"
                            class=" bg-transparent hover:bg-gray-900 text-sky-500 rounded-[2rem] py-2 font-bold border border-gray-600">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "LoginPage",
    data() {
        return {
            status: false,
            statusPass: false,
            next: false,
            bgColor: "",
            nameError: '',
            emailError: '',
            passError: '',
            conError: '',
            user: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
            },
            signInPage: false,
            invaild: false
        };
    },
    computed: {
        ...mapGetters(['getUser', 'getToken'])
    },
    methods: {
        createAccount() {
            this.status = true;
            this.bgColor = ref("#36454F");
        },
        close() {
            this.$router.push('/login')
            location.reload()
        },
        nextPage() {
            if (this.user.name != "" && this.user.email != "") {
                this.status = false;
                this.next = true;
            }
            this.nameError = this.user.name == "" ? ref('red') : ''
            this.emailError = this.user.email == "" ? ref('red') : ''
        },
        register() {
            if (this.user.password != "" && this.user.confirm_password != "") {
                if (this.user.password == this.user.confirm_password) {
                    this.statusPass = false
                    axios.post('http://localhost:8000/api/user/register', this.user)
                        .then(res => {
                            this.storeData(res)
                            let token = localStorage.getItem('token')
                            if (token) {
                                this.$router.push('/home')
                            } else {
                                this.close()
                            }
                        });
                } else {
                    this.statusPass = true
                }
            }
            this.passError = this.user.password == "" ? ref('red') : ''
            this.conError = this.user.confirm_password == "" ? ref('red') : ''
        },
        logInPage() {
            this.signInPage = true
            this.bgColor = ref("#36454F");
        },
        logIn() {
            this.passError = this.user.email == "" ? ref('red') : ''
            this.conError = this.user.password == "" ? ref('red') : ''

            if (this.user.email != '' && this.user.password) {
                axios.post('http://localhost:8000/api/user/login', { email: this.user.email, password: this.user.password })
                    .then(res => {
                        this.storeData(res);
                        let token = localStorage.getItem('token')
                        if (token == 'null') {
                            this.invaild = true
                        } else {
                            this.$router.push('/home')
                        }
                    });
            }
        },
        storeData(res) {
            this.$store.dispatch('userData', res.data.user);
            this.$store.dispatch('userToken', res.data.token);
            localStorage.setItem('token', this.getToken)
            localStorage.setItem('user', JSON.stringify(this.getUser))
        }
    },
};
</script>
