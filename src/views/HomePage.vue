<template>
    <div>
        <div class="main w-full h-screen bg-black fixed overflow-y-scroll inset-0">
            <div class=" w-[85%] mx-auto flex">
                <NavMenu/>
                <PostSection/>
                <RightSide/>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import RightSide from "@/components/RightSide.vue";
import PostSection from "@/components/PostSection.vue";
export default {
    name: 'HomePage',
    components: {
        NavMenu,RightSide,PostSection
    },
}
</script>

