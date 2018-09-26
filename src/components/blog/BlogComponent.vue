<template>
   <section id="bricks">
	   	<div class="row masonry">
	         <div class="bricks-wrapper">
	         	<div class="grid-sizer"></div>
	         	<paginate name="blogposts" :list="posts" :per="limit">
		         	<article v-for="post in paginated('blogposts')" class="brick entry format-standard animate-this">
		         		<router-link :to="`/${post.category.name}/${post.title}/${post.id}`">
			               	<div class="entry-thumb">
								<img :src="post.image" alt="building">   
			               	</div>
			               	<div class="entry-text">
			               	<div class="entry-header">
			               		<div class="entry-meta">
			               			<span class="cat-links">{{ moment(post.created_at).format('DD MMMM, YYYY') }}</span>	
			               			<span class="cat-links">{{ post.category.name }}</span>			
			               		</div>
			               		<h1 class="entry-title">{{ post.title }}</h1>	
			               	</div>
								<div class="entry-excerpt">
									{{post.introduction}}
								</div>
			               	</div>
			            </router-link>
		        	</article>
		        </paginate>   
	        </div>
	        <paginate-links for="blogposts" :show-step-links="true"></paginate-links>       
	   	</div>
   </section>
</template>

<script>
	var moment = require('moment')
	import axios from 'axios'

	export default {
		name: 'blog',
		data() {
			return {
				moment: moment,
				posts: [],
				limit: 4,
				paginate: ['blogposts']
			}
		},
		created() {
			axios.get('http://localhost:8000/api/v1/posts', { crossdomain: true })
			.then(response => {
				this.posts = response.data;
			})
			.catch(e => {
				this.errors.push(e);
			})
		}
	}
</script>