<template>
	<div id="blogcategory">
	   	<section id="page-header">
		   	<div class="row current-cat">
		   		<div class="col-full">
		   			<h1>Category: {{categorie.name}}</h1>
		   		</div>   		
		   	</div>
	   	</section>

	   	<section id="bricks" class="with-top-sep">
			<div class="row masonry">
	        	<div class="bricks-wrapper">
		         	<article v-for="post in categorie.posts" class="brick entry format-standard animate-this">
		               	<div class="entry-thumb">
			                <img :src="post.image" alt="">             
		               	</div>

		               	<div class="entry-text">
			               	<div class="entry-header">
			               		<div class="entry-meta">
			               			<span class="cat-links">
			               				<span>{{categorie.name}}</span>               				
			               			</span>			
			               		</div>

			               		<h1 class="entry-title"><a href="single-standard.html">{{post.title}}</a></h1>	               		
			               	</div>
							<div class="entry-excerpt">
								{{post.introduction}}
							</div>
		               </div>
					</article>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'BlogCategory',
		data() {
			return {
				categorie: [],
			}
		},
		created() {
			this.getCategorie(this.$route.params.id)
			console.log(this.$route.params.id)
		},
		methods: {
			getCategorie: function(id) {
				axios.get('http://localhost:8000/api/v1/categorie/' + id, { crossdomain: true })
				.then(response => {
					this.categorie = response.data[0];
				})
				.catch(e => {
					this.errors.push(e);
				})
			}			
		}
	}
</script>