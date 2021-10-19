import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/Home.vue"
import Jeju from "./views/Jeju.vue"
import Gyeongnam from "./views/Gyeongnam.vue"
import Gyeongbuk from "./views/Gyeongbuk.vue"
import Jeoanam from "./views/Jeoanam.vue"
import Jeoanbuk from "./views/Jeoanbuk.vue"
import Chungnam from "./views/Chungnam.vue"
import Chungbuk from "./views/Chungbuk.vue"
import Gangwon from "./views/Gangwon.vue"
import Gyeonggi from "./views/Gyeonggi.vue"
import Sejong from "./views/Sejong.vue"
import Ulsan from "./views/Ulsan.vue"
import Daejeon from "./views/Daejeon.vue"
import Gwangju from "./views/Gwangju.vue"
import Incheon from "./views/Incheon.vue"
import Daegu from "./views/Daegu.vue"
import Busan from "./views/Busan.vue"
import Seoul from "./views/Seoul.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      },

    base: process.env.BASE_URL,
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path:'/Jeju',
            name: "Jeju",
            component: Jeju
        },
        {
            path:'/Gyeongnam',
            name: "Gyeongnam",
            component: Gyeongnam
        },
        {
            path:'/Gyeongbuk',
            name: "Gyeongbuk",
            component: Gyeongbuk
        },
        {
            path:'/Jeoanam',
            name: "Jeoanam",
            component: Jeoanam
        },
        {
            path:'/Jeoanbuk',
            name: "Jeoanbuk",
            component: Jeoanbuk
        },
        {
            path:'/Chungnam',
            name: "Chungnam",
            component: Chungnam
        },
        {
            path:'/Chungbuk',
            name: "Chungbuk",
            component: Chungbuk
        },
        {
            path:'/Gangwon',
            name: "Gangwon",
            component: Gangwon
        },
        {
            path:'/Gyeonggi',
            name: "Gyeonggi",
            component: Gyeonggi
        },
        {
            path:'/Sejong',
            name: "Sejong",
            component: Sejong
        },
        {
            path:'/Ulsan',
            name: "Ulsan",
            component: Ulsan
        },
        {
            path:'/Daejeon',
            name: "Daejeon",
            component: Daejeon
        },
        {
            path:'/Gwangju',
            name: "Gwangju",
            component: Gwangju
        },
        {
            path:'/Incheon',
            name: "Incheon",
            component: Incheon
        },
        {
            path:'/Daegu',
            name: "Daegu",
            component: Daegu
        },
        {
            path:'/Busan',
            name: "Busan",
            component: Busan
        },
        {
            path:'/Seoul',
            name: "Seoul",
            component: Seoul
        },

    ]
})
