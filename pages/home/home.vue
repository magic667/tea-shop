<template>
	<view class="container">
		<!-- 轮播图 -->
		<swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
			<swiper-item class="banner-swiper-item" v-for="(item,index) in swipers" :key="index">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>

		<!-- 主要内容 -->
		<view class="content">
			<!-- section-1 -->
			<view class="section-1">
				<navigator class="item" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<image src="/static/images/home/home_icon_ziqu1.png" mode="widthFix"></image>
					<view class="wenyue-font">门店自取</view>
					<view class="text-color-assist">下单免排队</view>
				</navigator>
				<navigator class="item" open-type="navigate" url="/pages/addresses/addresses" hover-class="none">
					<image src="/static/images/home/home_icon_waimai1.png" mode="widthFix"></image>
					<view class="wenyue-font">外卖</view>
					<view class="text-color-assist">无需接触 送喜到家</view>
				</navigator>
			</view>

			<!-- section-2 -->
			<view class="section-2">
				<navigator class="item" open-type="switchTab" url="/pages/mart/mart" hover-class="none">
					<view class="title">
						<image src="/static/images/home/home_icon_baihuo1.png"></image>
						<view>喜茶百货</view>
					</view>
					<view class="tips">灵感商品 立即选购</view>
				</navigator>
				<navigator class="item" open-type="navigate" url="/pages/home/group-dinner" hover-class="none">
					<view class="title">
						<image src="/static/images/home/home_icon_qiye1.png"></image>
						<view>企业团餐</view>
					</view>
					<view class="tips">50份起送</view>
				</navigator>
			</view>

			<!-- section-3 -->
			<view class="section-3">
				<navigator class="my-integral" open-type="navigate" url="/pages/integrals/mall" hover-class="none">
					<view class="integrals">
						<view>我的积分</view>
						<view class="neutra-font">65</view>
						<view class="tips">
							可兑换喜茶券和丰富灵感周边
						</view>
					</view>
				</navigator>
				<navigator class="my-code" open-type="navigate" url="/pages/my/code" hover-class="none">
					<image src="/static/images/home/home_icon_erweima.png"></image>
					<view>会员码</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [
					"https://go.cdn.heytea.com/storage/ad/2020/05/21/bfd57914d80d4671b19f5d0ccc176cd5.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/24/49f9b50738dd47878cf1ab54c2eee2e0.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/01/e1c6915022c849fd9492377021aef454.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/04/27/db60b797c1cd4afabe9666e7df958ffd.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/21/4ba53dda599345bdaf28a08420dd1b6f.jpg"
				]
			};
		}
	}
</script>

<style lang="scss">
	page {
		max-height: 100%;
	}

	.banner-swiper {
		width: 100%;
		height: 600rpx;

		.banner-swiper-item {
			image {
				width: 100%;
			}
		}
	}

	.content {
		position: relative;
		width: 100%;
		padding: 0 30rpx;
	}

	.section-1 {
		position: relative;
		display: flex;
		padding: 60rpx 0;
		margin-top: -60rpx;
		margin-bottom: 30rpx;
		background-color: $bg-color-white;
		border-radius: $border-radius-lg;
		box-shadow: $box-shadow;

		.item {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			flex-shrink: 0;
		}

		&:nth-child(1):after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			width: 2rpx;
			background-color: $border-color;
		}

		image {
			width: 100rpx;
			margin-bottom: 20rpx;
		}

		.wenyue-font {
			font-size: 48rpx;
			margin-bottom: 10rpx;
		}
	}

	.section-2 {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;

		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 335rpx;
			padding: $spacing-row-lg 0;
			background-color: #EAEBEC;
			border-radius: $border-radius-lg;
		}

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			font-size: $font-size-lg;

			image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 10rpx;
			}
		}

		.tips {
			font-size: $font-size-base;
			color: $text-color-assist;
		}
	}
	
	.section-3 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10rpx;
		margin-bottom: 30rpx;
		font-size: $font-size-base;
		color: $text-color-assist;
		
		.myintegral {
			display: flex;
			flex-direction: column;
			flex: 1;
			
			.integrals {
				display: flex;
				align-items: center;
				margin-bottom: 10rpx;
				font-size: $font-size-lg;
				color: $text-color-base;
				
				.neutra-font {
					margin-left: 10rpx;
					font-size: 42rpx;
				}
			}
		}
		
		.my-code {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 30rpx;
			
			image {
				width: 60rpx;
				height: 60rpx;
				margin-bottom: $spacing-col-sm;
			}
			
			&:before {
				content: " ";
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				border-left: 1rpx solid rgba($color: $border-color, $alpha: 0.6);
			}
		}
	}
</style>
