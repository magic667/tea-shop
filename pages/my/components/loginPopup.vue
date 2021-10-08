<template>
	<uni-popup ref="popup" type="bottom" @change="change">
		<view class="popup-content d-flex flex-column">
			<view class="d-flex justify-content-end">
				<image @tap="close" class="close_btn" src="/static/images/common/clousex-big.png"></image>
			</view>
			<view class="d-flex flex-fill flex-column justify-content-between">
				<view class="d-flex flex-column">
					<view class="font-size-extra-lg font-weight-bold text-color-base mb-30"> 欢迎登录喜茶星球~</view>
					<view class="font-size-base text-color-assist">登录后消费可获取积分，享受更好的服务体验</view>
				</view>
				<view class="d-flex flex-column">
					<button type="primary" class="w-100 font-size-lg mb-30" @click="getUserInfo">微信一键登录</button>
					<view class="text-center mb-30 font-size-sm text-color-assist">
						点击登录喜茶GO，即表示已阅读并同意<font class="text-color-primary">《喜茶隐私政策》</font>
					</view>
					<view class="text-center font-primary font-size-sm text-color-primary">《喜茶GO小程序服务指南》</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import {
		mapMutations
	} from 'vuex'

	export default {
		name: 'LoginPopup',
		components: {
			uniPopup
		},
		methods: {
			...mapMutations(['SET_USERINFO', 'SET_ISLOGIN']),
			open() {
				this.$refs['popup'].open();
			},
			close() {
				this.$refs['popup'].close();
			},
			change({
				show
			}) {
				this.$emit('change', show);
			},
			getUserInfo(e) {
				uni.getUserProfile({
					desc: 'Wexin Login',
					success: res => {
						this.SET_USERINFO(res.userInfo);
						this.SET_ISLOGIN(true);
					}
				});
				this.close();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup-content {
		background-color: #FFFFFF;
		border-radius: 24rpx 24rpx 0 0;
		height: 50vh;
		padding: 50rpx 40rpx;
	}

	.close_btn {
		width: 40rpx;
		height: 40rpx;
	}
</style>
