import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeScreen.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/loginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import(/* webpackChunkName: "appointments" */ '../views/Appointments.vue')
  },
  {
    path: '/register-appointment',
    name: 'registerAppointment',
    component: () => import(/* webpackChunkName: "registerAppointment" */ '../components/registerAppointment.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/thankyoucontact',
    name: 'thankyoucontact',
    component: () => import(/* webpackChunkName: "thankyoucontact" */ '../views/ThankYouContact.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
