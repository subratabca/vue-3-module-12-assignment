import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductTableView from '../views/ProductTableView.vue'
import AllProductView from '../views/AllProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import NotFound from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: ProductTableView
    },
    {
      path: '/all-products',
      name: 'all-product',
      component:AllProductView
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      component:ProductDetailView,
      props:true
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:NotFound
    }

  ]
})

export default router
