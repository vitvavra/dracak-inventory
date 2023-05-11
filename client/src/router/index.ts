import { createRouter, createWebHistory } from 'vue-router'
import CharacterDetailView from "@/view/CharacterDetailView.vue";
import CharacterListView from "@/view/CharacterListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CharacterDetailView
    },
    {
      path: '/postavy',
      name: 'character',
      component: CharacterListView
    },
    {
      path: '/postava/:id',
      name: 'character_detail',
      component: CharacterDetailView
    }
  ]
})

export default router
