<template>
	<view class="container">
		<swiper class="material-swiper" :indicator-dots="true" autoplay :interval="3000" :duration="500">
			<swiper-item v-for="(url, index) in detail.materialUrls" :key="index">
				<image :src="url" class="w-100" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="p-30 bg-white mb-20">
			<view class="d-flex justify-content-between align-items-center mb-30">
				<view class="font-size-extra-lg text-color-primary font-weight-bold">
					￥{{ parseFloat(detail.salePrice / 100)}}</view>
				<view class="font-size-sm text-color-assist">{{ detail.itemSalesVolume }}人已购买</view>
			</view>
			<view class="font-size-extra-lg mb-10">{{ detail.name }}</view>
			<view class="font-size-sm text-color-assist">{{ detail.subName }}</view>
		</view>
		<view class="p-30 bg-white mb-20 font-size-sm">
			<view class="mb-40 d-flex">
				<view class="mr-40 text-color-assist">品牌</view>
				<view>喜茶</view>
			</view>
			<view class="d-flex align-items-center">
				<view class="mr-40 text-color-assist">发货</view>
				<view class="flex-fill d-flex justify-content-between align-items-center">
					<view class="d-flex align-items-center">
						<view>{{ detail.placeOfDispatch}}</view>
						<view class="divider" />
						<view>快递：￥{{ parseFloat(detail.freight / 100)}}</view>
					</view>
					<view class="text-color-assist">预计 {{ detail.daysAfterBuyRange }} 发货</view>
				</view>
			</view>
		</view>
		<view class="p-30 bg-white">
			<view class="mt-30 mb-30 text-center">商品详情</view>
			<p class="img-wrapper">
				<image src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/636beabc152f42b4a53b03e965a6256a.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/a0859178aef54178a7931cca26364577.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/70d45373965244d7aa69694cf80dcec2.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/37556ad39fbd43aaa245088017c15d44.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/bf8f0864d0854829aa82c2fd7178e2ef.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/8b40a73f6a9042a385ab4c65e053802f.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/50f7f75426b9412b95d8848fc4090069.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/80a346fac54749a1acad9c8ec115b11f.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/e2109b23aa354853a0faed67ad14e3ed.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/21dccf357bc74cc0a0faecf39c13a421.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/debb7001eaea4fe1aaa5012820d55abf.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/c3b7d74a6a0545d6857e9ed1bc26de9a.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/b5dfcec384c94d609572e88bf7fc0f54.png"
					style="max-width: 100%;"><image
					src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/f1ca48c88dc9438abfefa9ca57c43dca.png"
					style="max-width: 100%;">
			</p>
		</view>
		<view class="footer">
			<view class="grid">
				<view class="item">
					<image src="/static/images/mall/store_brh_home_page_normal.png"></image>
					<view>百货</view>
				</view>
				<view class="item">
					<image src="/static/images/mall/store_brh_service_normal.png"></image>
					<view>客服</view>
				</view>
			</view>
			<view class="btns">
				<button type="info">加入购物车</button>
				<button type="primary">立即购买</button>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {
					salePrice: 0,
					itemSalesVolume: 0,
					name: '--',
					subName: '--',
					placeOfDispatch: '--',
					freight: '--',
					daysAfterBuyRange: '--'
				}
			};
		},
		async created() {
			this.detail = await this.$api('martDetail');
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: auto;
		padding-bottom: 120rpx;
	}
	
	.img-wrapper {
		
		image {
			width: 750rpx;
			height: 2110rpx;
		}
		
		image:last-child {
			height: 3120rpx;
		}
	}
	
	.material-swiper {
		height: 750rpx;
	}

	.divider {
		width: 1rpx;
		height: 0.8rem;
		margin: 0 20rpx;
		background-color: rgba($color: $border-color, $alpha: 0.6);
	}

	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		padding: 10rpx 20rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		z-index: 10;

		.grid {
			display: flex;
			align-items: center;
			font-size: $font-size-sm;

			.item {
				display: flex;
				padding: 0 20rpx;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}

		.btns {
			display: flex;

			button {
				padding: 0 40rpx;
				font-size: $font-size-lg;

				&:nth-child(1) {
					margin-right: 20rpx;
				}
			}
		}
	}
</style>
