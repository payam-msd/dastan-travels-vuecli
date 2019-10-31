<template>
	<div id="app">
		<SplashScreen :isLoading="isLoading" />
		<router-view />
	</div>
</template>
<script>
import SplashScreen from "@/components/SplashScreen.vue"
export default {
	name: "App",
	data() {
		return {
			isLoading: true,
		}
	},
	components: {
		SplashScreen,
	},
	mounted() {
		setTimeout(() => {
			this.isLoading = false
		}, 1000)
	},
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");
#app {
	font-family: "Lexend Deca", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background-color: #f7fafc;
	overflow-x: hidden;
	scroll-behavior: smooth;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
/* recommended css code for vue-svgicon */
.svg-icon {
	display: inline-block;
	width: 16px;
	height: 16px;
	color: none;
	vertical-align: middle;
	fill: none;
	stroke: currentColor;
}

.svg-fill {
	fill: currentColor;
	stroke: none;
}

.svg-up {
	transform: rotate(0deg);
}

.svg-right {
	transform: rotate(90deg);
}

.svg-down {
	transform: rotate(180deg);
}

.svg-left {
	transform: rotate(-90deg);
}
</style>
