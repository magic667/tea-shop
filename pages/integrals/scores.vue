<template>
	<view class="container">
		<view class="header">
			<view class="mb-30">当前积分</view>
			<view class="value">74</view>
			<view class="rules">
				<image class="rules-icon" src="/static/images/my/icon_rules.png"></image>
				<view>积分规则</view>
			</view>
		</view>
		<view class="flex-fill overflow-hidden">
			<view class="content" v-if="!scores.length">
				<view class="top">积分记录</view>
				<view class="flex-fill d-flex align-items-center just-content-center">
					暂无积分记录
				</view>
			</view>
			<scroll-view scroll-y class="content" v-else>
				<view class="top">积分记录</view>
				<list-cell v-for="(score, index) in scores" :key="index">
					<view class="score">
						<view class="left">
							<view class="title mb-10">{{ title(score) }}</view>
							<view class="mb-10" v-if="score.shopName">{{ score.shopName }}</view>
							<view>{{ score.createAt }}</view>
						</view>
						<view class="right">+{{ score.scoreChange }}</view>
					</view>
				</list-cell>
				<nomore :visible="!loading" :line="false" text="没有更多积分记录了~"></nomore>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import nomore from '@/components/nomore/nomore.vue'

	export default {
		components: {
			listCell,
			nomore
		},
		async onLoad() {
			this.loading = true;
			this.scores = await this.$api('scores');
			this.loading = false;
		},
		data() {
			return {
				scores: [],
				loading: false
			};
		},
		computed: {
			title() {
				return (score) => {
					switch (score.method) {
						case 1:
							return '消费' + score.payment + '元';
						case 7:
							return '任务获取';
						default:
							return '积分获取';
					}
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}
	
	.container {
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	
	.header {
		flex-shrink: 0;
		display: flex;
		width: 100%;
		padding: 30rpx 40rpx;
		margin-bottom: 20rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: $font-size-medium;
		color: $text-color-base;
		
		.value {
			margin-bottom: 30rpx;
			font-size: 64rpx;
			font-weight: 500;
			color: $color-primary;
		}
		
		.rules {
			display: flex;
			width: 100%;
			justify-content: flex-end;
			align-items: center;
			
			.rules-icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
		}
	}
	
	.content {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		background-color: $bg-color-white;
		
		.top {
			padding: 20rpx 30rpx;
			font-size: $font-size-lg;
			font-weight: 500;
		}
		
		.score {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			
			.left {
				flex: 1;
				display: flex;
				flex-direction: column;
				font-size: $font-size-sm;
				color: $text-color-assist;
				
				.title {
					margin-bottom: 10rpx;
					font-size: $font-size-lg;
					color: $text-color-base;
				}
			}
			
			.right {
				font-size: $font-size-lg;
				color: $color-primary;
			}
		}
	}
</style>
