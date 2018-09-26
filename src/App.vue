<template>
  <div id="app">
    <navbar></navbar>
    <router-view :key="$route.fullPath"></router-view>
    <foot></foot>
  </div>
</template>

<script>
  	import Navbar from './components/default/Navbar'
    import Foot from './components/default/Foot'
  	
	export default {
		name: 'App',
    components: { Navbar, Foot }
  }
</script>