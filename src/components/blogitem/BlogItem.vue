<template>
	<section id="content-wrap" class="blog-single">
   		<div class="row">
   			<div class="col-twelve">
   				<article class="format-standard">
   				
	   				<div class="content-media">
						<div class="post-thumb">
							<img :src="post.image"/>
						</div>  
					</div>

					<div class="primary-content">
						<h1 class="page-title">{{post.title}}</h1>	

						<ul class="entry-meta">
							<li class="date">{{ moment(post.created_at).format('DD MMMM, YYYY') }}</li>						
							<li class="cat"><a href="">{{ }}</a></li>				
						</ul>						

						<div v-for="item in post.alineas">
							<h3>{{item.title}}</h3>
							<p class="lead">{{item.alinea}}</p>
						</div>

						<!-- <p><img src="images/shutterbug.jpg" alt=""></p>	 -->			
					</div> <!-- end entry-primary -->		  			   

	  			   	<div class="pagenav group">
		  				<div class="prev-nav">
		  			   		<a href="#" rel="prev">
		  			   			<span>Previous</span>
		  			   			Tips on Minimalist Design 
		  			   		</a>
		  			   	</div>
		  				<div class="next-nav">
		  					<a href="#" rel="next">
		  						<span>Next</span>
		  			   			Less Is More 
		  					</a>
		  				</div>  				   
	  				</div>
				</article> 		
			</div> <!-- end col-twelve -->
   		</div> <!-- end row -->

		<div class="comments-wrap">
			<div id="comments" class="row">
				<div class="col-full">
               		<h3> Comments</h3>
               		<!-- commentlist -->
	               	<ol v-for="comment in post.comments" class="commentlist">
	                	<li class="depth-1">
		                    <div class="avatar">
		                    	<img width="50" height="50" class="avatar" src="images/avatars/user-01.jpg" alt="">
		                    </div>
		                    <div class="comment-content">
			                	<div class="comment-info">
			                    	<cite>{{ comment.name }}</cite>

			                        <div class="comment-meta">
			                        	<time class="comment-time" datetime="2014-07-12T23:05">{{ moment(post.created_at).format('DD MMMM YYYY - h:mm') }}</time>
			                        </div>
			                    </div>
			                    <div class="comment-text">
			                    	<p>{{ comment.content }}</p>
			                    </div>
			                </div>
	                	</li>                
	               </ol> <!-- Commentlist End -->					

	               <!-- respond -->
	               <div class="respond">
	               		<h3>Leave a Comment</h3>
	                  	<form name="contactForm" id="contactForm" method="post" action="">
	  						<fieldset>
	                    		<div class="form-field">
	  						    	<input name="cName" type="text" id="cName" class="full-width" placeholder="Your Name" value="">
	                     		</div>

	                     		<div class="message form-field">
	                        		<textarea name="cMessage" id="cMessage" class="full-width" placeholder="Your Message" ></textarea>
	                     		</div>

	                     		<button type="submit" class="submit button-primary">Submit</button>
	  					   	</fieldset>
	  					</form> <!-- Form End -->
	               	</div>
         		</div> 
        	</div> 
		</div>
   </section>
</template>

<script>
	var moment = require('moment')
	import axios from 'axios'

	export default {
		data() {
			return {
				moment: moment,
				post: []
			}
		},
		created() {
			this.getPost(this.$route.params.id)
		},
		methods: {
			getPost: function(id) {
				axios.get('http://localhost:8000/api/v1/post/' + id, { crossdomain: true })
				.then(response => {
					this.post = response.data[0];
				})
				.catch(e => {
					this.errors.push(e);
				})
			}			
		}
	}
</script>