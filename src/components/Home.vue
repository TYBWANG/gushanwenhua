<template>
    <div class="page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <v-footer></v-footer>
        <!-- <div class="content">
                    <transition name="move" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div> -->
    </div>
</template>

<script>
import vHead from "./Header.vue"
import vSidebar from "./Sidebar.vue"
import vFooter from "./Footer.vue"
export default {
    components: {
        vHead, vSidebar, vFooter
    }
}
</script>

<style scoped>
@import url("../assets/style/bootstrap.min.css");
@import url("../assets/style/layout.css");
@import url("../assets/style/default.css");
</style>



