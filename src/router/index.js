import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogComponent from '@/components/blog/BlogComponent'
import BlogCategory from '@/components/blogcategory/BlogCategory'
import BlogItem from '@/components/blogitem/BlogItem'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
	routes: [
    {
    	path: '/',
        name: 'home',
      	component: BlogComponent
    },
    {
    	path: '/:category/:id',
        name: 'blogcategory',
    	component: BlogCategory
    },
    {
		path: '/:category/:title/:id',
        name: 'blogitem',
    	component: BlogItem
    }
  ]
})
