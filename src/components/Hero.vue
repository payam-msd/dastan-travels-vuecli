<template>
	<md-card>
		<md-card-media>
			<swiper :options="swiperOptionTop" class="px-1" ref="swiperTop">
				<swiper-slide class="`slide-${i}`" v-for="(slide, i) in slides" :key="i">
					<img
						class="rounded h-75 my-1 w-full object-cover bg-center bg-cover overflow-hidden md:my-2"
						:src="slide"
						alt
					/>
				</swiper-slide>
			</swiper>
			<template v-if="isMobile">
				<swiper
					:options="swiperOptionThumbs"
					class="swiperThumb px-1"
					ref="swiperThumbs"
				>
					<swiper-slide v-for="(slide, i) in slides" :key="i" class="`slide-${i}`">
						<img
							class="rounded h-20 object-cover bg-center bg-cover w-full md:h-32"
							:src="slide"
							alt
						/>
					</swiper-slide>
				</swiper>
			</template>
		</md-card-media>
	</md-card>
</template>

<script>
import "swiper/dist/css/swiper.css"
import isMobile from "../isMobile"

import {swiper, swiperSlide} from "vue-awesome-swiper"
export default {
	name: "Hero",
	mixins: [isMobile],
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
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561966/client-img-3_1_qhsxmz.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562211/client-img-7_1_ik7x2x.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562093/client-img-5_1_qimmco.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561733/client-img-1_1_pk3ip6.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561885/client-img-2_1_qencbx.webp",
				"https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562143/client-img-6_1_idhztt.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562312/client-img-9_1_magmx4.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562258/client-img-8_1_qoxzwt.webp",
				// "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562031/client-img-4_1_k0zfzc.webp",
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
.swiperThumb .swiper-slide-active {
	opacity: 0.8;
}
</style>
