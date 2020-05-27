import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import TechnicalSkills from '../views/TechnicalSkills.vue'
import Experience from '../views/Experience.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/TechnicalSkills',
    name: 'Technical Skills',
    component: TechnicalSkills
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
