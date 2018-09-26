<template>
	<nav id="main-nav-wrap">
    	<ul class="main-navigation sf-menu">      
      		<li><router-link to="/">Home</router-link></li>   
      		<li class="has-children">
				<span>{{ title }}</span>
				<ul class="sub-menu">
					<li v-for="categorie in categories">
						<router-link :to="`/${categorie.name}`">{{ categorie.name }}</router-link>
					</li>
				</ul>
			</li>                  
		</ul>
	</nav>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Navigation',

    data() {
      return {
        title: 'Categories',
        categories: []
      }
    },
    created() {
      axios.get('http://localhost:8000/api/v1/categories', { crossdomain: true })
      .then(response => {
        this.categories = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      })
    },
  }

</script>