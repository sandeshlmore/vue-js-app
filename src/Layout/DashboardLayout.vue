<template>
    <body>
        <div>
            <top-navbar></top-navbar>
            <side-bar></side-bar>
            <router-view></router-view>
            <footer><footer>
        </div>
    </body>
</template>
<script>
import TopNavbar from "./TopNavbar.vue"
import Sidebar from "./SideBar.vue"
import Footer from "./Footer.vue"
export default {
    name: "dashboard-layout",
    
    components: {
        TopNavbar,
        Footer,
        Sidebar
    }
}
</script>