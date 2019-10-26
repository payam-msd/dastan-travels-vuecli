<template>
	<md-card class="test">
		<md-card-media style="height: 500px">
			<!-- swiper1 -->
			<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
				<swiper-slide class="`slide${i}`" v-for="(slide, i) in slides" :key="i">
					<img class="rounded m-2 bg-center bg-cover" :src="slide" alt />
				</swiper-slide>
				<div class="swiper-button-next" slot="button-next">
					<icon
						class="text-white"
						name="arrow-right-circle"
						stroke-width="2"
						height="28"
						width="28"
					/>
				</div>
				<div class="swiper-button-prev" slot="button-prev">
					<icon
						class="text-white"
						name="arrow-left-circle"
						stroke-width="2"
						height="28"
						width="28"
					/>
				</div>
			</swiper>
			<!-- swiper2 Thumbs -->
			<swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
				<swiper-slide v-for="(slide, i) in slides" :key="i" class="slide-1">
					<img class="rounded m-2 bg-center bg-cover" :src="slide" alt />
				</swiper-slide>
			</swiper>
		</md-card-media>
	</md-card>

	<!-- <div class>
		<icon
			class="text-white"
			name="arrow-left-circle"
			stroke-width="2"
			height="28"
			width="28"
		/>
		<icon
			class="text-white"
			name="arrow-right-circle"
			stroke-width="2"
			height="28"
			width="28"
		/>
	</div>-->
</template>

<script>
import "swiper/dist/css/swiper.css"

import {swiper, swiperSlide} from "vue-awesome-swiper"
export default {
	name: "Hero",
	data() {
		return {
			swiperOptionTop: {
				spaceBetween: 10,
				loop: true,
				loopedSlides: 5, //looped slides should be the same
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			swiperOptionThumbs: {
				spaceBetween: 10,
				slidesPerView: 4,
				touchRatio: 0.2,
				loop: true,
				loopedSlides: 5, //looped slides should be the same
				slideToClickedSlide: true,
			},
			slides: [
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562370/client-img-10_1_asbbfb.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562312/client-img-9_1_magmx4.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562258/client-img-8_1_qoxzwt.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561966/client-img-3_1_qhsxmz.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562211/client-img-7_1_ik7x2x.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562093/client-img-5_1_qimmco.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561733/client-img-1_1_pk3ip6.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561885/client-img-2_1_qencbx.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562031/client-img-4_1_k0zfzc.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562143/client-img-6_1_idhztt.webp",
			],
		}
	},
	components: {
		swiper,
		swiperSlide,
	},
	mounted() {
		this.$nextTick(() => {
			const swiperTop = this.$refs.swiperTop.swiper
			const swiperThumbs = this.$refs.swiperThumbs.swiper
			swiperTop.controller.control = swiperThumbs
			swiperThumbs.controller.control = swiperTop
		})
	},
}
</script>
<style lang="scss">
.swiper-slide {
	background-size: cover;
	overflow: hidden;
	background-position: center;
}
.gallery-top {
	height: 75vh;
	width: 100%;
}
.gallery-thumbs {
	height: 20vh !important;
	box-sizing: border-box;
	padding: 6px 0;
}
.gallery-thumbs .swiper-slide {
	width: 25%;
	height: 100%;
}
.gallery-thumbs .swiper-slide-active {
	opacity: 0.6;
}
/* .main {
	margin: 6px;
}

.thumbnails {
	margin: 0 4px;
	width: calc(100% - 10px);
}

.agile__nav-button {
	background: transparent;
	border: none;
	color: #ccc;
	cursor: pointer;
	font-size: 24px;
	transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
	left: 25px;
}
.thumbnails .agile__nav-button--next {
	right: 25px;
}

.slide {
	align-items: center;
	box-sizing: border-box;
	color: #fff;
	display: flex;
	height: 76vh;
	justify-content: center;
}
.slide--thumbniail {
	cursor: pointer;
	height: 100px;
	padding: 0 2px;
	transition: opacity 0.3s;
}
.slide--thumbniail:hover {
	opacity: 0.75;
}
.slide img {
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	-o-object-position: center;
	object-position: center;
	width: 100%;
	border-radius: 6px;
} */
</style>
