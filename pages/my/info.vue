<template>
	<view class="container">
		<view class="brand">
			<image
				:src="isLogin ? userInfo.avatarUrl : 'https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132'"
				class="avatar"></image>
			<view class="username">{{ isLogin ? userInfo.nickName :'tinypuppet' }}</view>
		</view>
		<!-- 用户表单 -->
		<view class="user-form">
			<list-cell line-right padding="30rpx">
				<view class="form-item">
					<view class="label">昵称</view>
					<input type="text" v-model="isLogin ? userInfo.nickName :form.username" />
				</view>
			</list-cell>
			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">手机号码</view>
					<input type="text" v-model="form.telphone" />
					<button type="default" plain class="font-size-sm" @tap="showTelphoneModal">更换手机</button>
				</view>
			</list-cell>
			<list-cell>
				<view class="form-item">
					<view class="label">性别</view>
					<view class="radio" @tap="form.gender= !form.gender">
						<image
							:src="!form.gender?'/static/images/common/gouxuankuang.png' : '/static/images/common/round-black-selected.png'">
						</image>
						<view>男</view>
					</view>
					<view class="radio" @tap="form.gender = !form.gender">
						<image
							:src="form.gender ? '/static/images/common/gouxuankuang.png' : '/static/images/common/round-black-selected.png'">
						</image>
						<view>女</view>
					</view>
				</view>
			</list-cell>
			<listCell line-right padding="30rpx" last>
				<view class="form-item">
					<view class="label">生日</view>
					<picker class="flex-fill" mode="date" :value="form.birthday" @change="handleBirthdayChange">
						<view>{{ form.birthday }}</view>
					</picker>
				</view>
			</listCell>
		</view>
		<view class="save-btn">
			<button type="info" @tap="saveForm">保存</button>
		</view>
		<modal :show="telphoneModalVisible" custom padding="40rpx 30rpx">
			<view class="telphone-modal">
				<view class="header">
					<view>温馨提示</view>
					<image class="close-icon" src="/static/images/common/closex.png" @tap="closeTelphoneModal"></image>
				</view>
				<view class="tips">
					为保障您正常使用喜茶GO小程序，请在绑定前确定新手机号未绑定喜茶GO。
				</view>
				<view class="telphone-form">
					<list-cell padding="30rpx 0">
						<view class="telphone-input">
							<view class="prefix">+86</view>
							<input type="text" v-model="telphoneForm.telphone" placeholder="请填写有效手机号码"
								placeholder-class="font-size-base text-color-assist" />
						</view>
					</list-cell>
					<list-cell padding="30rpx 0">
						<view class="verfiycode-input">
							<input type="text" v-model="telphoneForm.verifyCode" placeholder="6位数字验证码"
								placeholder-class="font-size-base text-color-assist" />
							<view class="countdown"
								:class="{'text-color-assist': !countdown, 'text-color-base': countdown}"
								@tap="getVerifyCode">
								{{ !countdown ? '获取验证码' : countdown + '秒可获取'}}
							</view>
						</view>
					</list-cell>
				</view>
				<view class="footer">
					<button type="primary" @tap="closeTelphoneModal">确认</button>
				</view>
			</view>
		</modal>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import modal from '@/components/modal/modal.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			listCell,
			modal
		},
		data() {
			return {
				form: {
					username: 'tinypuppet',
					telphone: '18666610100',
					gender: 0,
					birthday: '2000-06-01'
				},
				telphoneModalVisible: false,
				telphoneForm: {
					telphone: '',
					verifyCode: ''
				},
				countdown: 0
			};
		},
		onLoad() {
			this.form = JSON.parse(JSON.stringify(this.myForm));
		},
		computed: {
			...mapState(['isLogin', 'userInfo', 'myForm'])
		},
		methods: {
			...mapMutations(['SET_MYFORM']),
			saveForm() {
				this.SET_MYFORM(this.form);
			},
			handleBirthdayChange({
				target: {
					value
				}
			}) {
				this.form.birthday = value;
			},
			showTelphoneModal() {
				this.telphoneModalVisible = true;
			},
			closeTelphoneModal() {
				this.telphoneModalVisible = false;
				this.telphoneForm = this.telphoneForm;
			},
			getVerifyCode() {
				if (this.countdown) {
					return;
				}
				if (!this.telphoneForm.telphone) {
					uni.showToast({
						title: '请填写手机号码',
						icon: 'none'
					});
					return;
				}
				this.countdown = 60;
				let interval = setInterval(() => {
					if (!this.countdown) {
						clearInterval(interval);
					}
					this.countdown -= 1;
				}, 1000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.brand {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40rpx 0;
		margin-bottom: 20rpx;
		background-color: $bg-color-white;
	}

	.avatar {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100%;
		margin-bottom: 30rpx;

		.username {
			font-weight: 700;
			color: $font-size-medium;
		}
	}

	.user-form {

		.form-item {
			display: flex;
			width: 100%;
			align-items: center;

			.label {
				width: 160rpx;
			}

			input {
				flex: 1;
			}

			.radio {
				display: flex;
				margin-right: 50rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}

	.save-btn {
		padding: 0 30rpx;
		margin-top: 60rpx;

		button {
			width: 100%;
			font-size: $font-size-extra-lg;
		}
	}

	.telphone-modal {

		.header {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			margin-bottom: 30rpx;
			font-size: $font-size-extra-lg;
			font-weight: 700;

			.close-icon {
				position: absolute;
				right: 0;
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.telphone-modal {
		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			font-size: $font-size-extra-lg;
			font-weight: bold;
			margin-bottom: 30rpx;

			.close-icon {
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				right: 0;
			}
		}

		.tips {
			color: $text-color-grey;
			line-height: 1.2rem;
			margin-bottom: 50rpx;
		}

		.telphone-form {
			font-size: $font-size-base;

			.telphone-input {
				width: 100%;
				display: flex;
				align-items: center;

				.prefix {
					color: $color-primary;
					display: flex;
					align-items: center;
					padding-right: 20rpx;
					position: relative;
					margin-right: 10rpx;

					&::after {
						content: " ";
						position: absolute;
						width: 4rpx;
						background-color: $border-color;
					}
				}

				input {
					flex: 1;
				}
			}

			.verfiycode-input {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.countdown {
					font-size: $font-size-base;
				}
			}
		}

		.footer {
			margin-top: 30rpx;

			button {
				font-size: $font-size-lg;
			}
		}
	}
</style>
