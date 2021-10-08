<template>
	<view class="container">
		<uni-nav-bar fixed backgroundColor="#424141" left-icon="arrowleft" color="#ffffff" @clickLeft="back">
		</uni-nav-bar>
		<view class="bg"></view>
		<view class="main">
			<view class="userinfo">
				<image class="avatar"
					:src="isLogin ? userInfo.avatarUrl : 'https://wx.qlogo.cn/mmopen/vi_32/vM0qx5z4BQUQU4icZNct8Oib0Q0ypMW6hdhejkBxrTzibvYHtdyaQI85hsWvL6PoA3ic3Jjwn99YdfxEj1ib7gvaJeQ/132'">
				</image>
				<view class="username">tinypuppet</view>
				<view class="desc">使用钱包喜茶钱包支付（您还未开通喜茶钱包）</view>
			</view>
			<view class="code-section">
				<view class="mb-20">此二维码可累计积分（不支持付款）</view>
				<!-- qrcode -->
				<canvas canvas-id="memberCode" style="width: 350rpx; height: 350rpx;"></canvas>
				<view class="tips">会员码每30秒自动刷新一次</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uQRCode from '@/common/uqrcode.js'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import {
		mapState
	} from 'vuex'

	export default {
		components: {
			uniNavBar
		},
		onShow() {
			let i = 1;
			this.makeMemberCode(i);
			setInterval(() => {
				i++;
				this.makeMemberCode(i);
			}, 30000);
		},
		computed: {
			...mapState(['isLogin', 'userInfo'])
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			makeMemberCode(i) {
				uQRCode.make({
					canvasId: 'memberCode',
					componentInstance: this,
					text: `memberCode${i}`,
					size: uni.upx2px(350),
					margin: 20,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					correctLevel: uQRCode.defaults.correctLevel,
					success: res => {}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.bg {
		height: 25vh;
		/* #ifdef H5 */
		height: calc(25vh - 44px);
		/* #endif */
		background-color: #424141;
	}

	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1rpx solid rgba($color: $border-color, $alpha: 0.6);

		.avatar {
			position: relative;
			width: 140rpx;
			height: 140rpx;
			margin-top: -70rpx;
			margin-bottom: 20rpx;
			border-radius: 100%;
		}

		.username {
			margin-bottom: 50rpx;
			font-size: $font-size-extra-lg;
			font-weight: 700;
		}

		.desc {
			margin-bottom: 20rpx;
			font-size: $font-size-sm;
			color: $text-color-assist;
		}
	}

	.code-section {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $font-size-base;
		color: $font-size-base;

		.tips {
			font-size: $font-size-sm;
			color: $text-color-assist;
		}
	}
</style>
