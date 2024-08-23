import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/login.vue'
import dashboard from '@/views/dashboard.vue'
import Form from '@/views/Form.vue'
import Admin from '@/views/admin.vue'
import Student from '@/views/student.vue'
import Teacher from '@/views/teacher.vue'
import Section from '@/views/section.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: loginView,
      meta: { requiresAuth: true },
    },
    {
      path: "/form",
      name: "form",
      component: Form,
      meta: { requiresAuth: true },
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
    },
    {
      path: "/students",
      name: "students",
      component: Student,
      meta: { requiresAuth: true },
    },
    {
      path: "/teachers",
      name: "teachers",
      component: Teacher,
      meta: { requiresAuth: true },
    },
    {
      path: "/sections",
      name: "sections",
      component: Section,
      meta: { requiresAuth: true },
    }
  ]
})

export default router
