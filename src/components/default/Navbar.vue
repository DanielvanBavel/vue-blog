<template>
	<header class="short-header">   
    	<div class="gradient-block"></div>  

	    <div class="row header-content">
	      	<div class="logo">
	        	<a href="index.html">Author</a>
	        </div>

	    	<navigation></navigation>

	    	<div class="triggers">
	        	<a class="search-trigger" href="#"><i class="fa fa-search"></i></a>
	        	<a class="menu-toggle" href="#"><span>Menu</span></a>
	      	</div>      
	    </div> 
	</header>
</template>

<script>
  import Navigation from './Navigation'

  export default {
    components: { Navigation }
  }
</script>