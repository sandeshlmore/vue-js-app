import DashboardLayout from '../Layout/DashboardLayout.vue'
import Dashboard from '../Dashboard.vue'
import Login from '../Pages/Login.vue'
import Register from '../Pages/Register.vue'
import SalesAnalysis from '../Pages/SalesAnalysis.vue'
import TestingPage from '../Pages/TestingPage.vue'
// import Dashboard from '@/Pages/Dashboard.vue'

// const Login = () => import('@/Pages/Login.vue');
// const Register = () => import('@/Pages/Register.vue');
// const Dashboard = () => import('@/Dashboard.vue')

const routes = [
        {
            path: '/',
            redirect: '/bot/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/bot/login',
            component: Login
        },
        {
            path: '/bot/login',
            name: 'Login',
            components: { default: Login }
        },
        {
            path: '/bot/register',
            name: 'Register',
            components: { default: Register }
        },
        {
            path: '/bot',
            component: DashboardLayout,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    components: { default: Dashboard }
                },
                {
                    path:'analytics',
                    name:'Analytics',
                    components: { default: SalesAnalysis}
                }
            ]
        },
        {
            path:'/bot/testing',
            name:'Testing',
            components:{default:TestingPage}
        }
]

export default routes