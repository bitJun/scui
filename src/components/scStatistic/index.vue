<!--
 * @Descripttion: 统计数值组件
 * @version: 1.1
 * @Author: sakuya
 * @Date: 2021年6月23日13:11:32
 * @LastEditors: sakuya
 * @LastEditTime: 2022年5月14日19:55:09
-->

<template>
	<div class="sc-statistic">
		<div class="sc-statistic-title">
			{{ title }}
			<el-tooltip v-if="tips" effect="light">
				<template #content>
					<div style="width: 200px;line-height: 2;">
						{{ tips }}
					</div>
				</template>
				<el-icon class="sc-statistic-tips"><el-icon-question-filled/></el-icon>
			</el-tooltip>
		</div>
		<div class="sc-statistic-content">
			<span v-if="prefix" class="sc-statistic-content-prefix">{{ prefix }}</span>
			<span class="sc-statistic-content-value">{{ cmtValue }}</span>
			<span v-if="suffix" class="sc-statistic-content-suffix">{{ suffix }}</span>
		</div>
		<div v-if="description || $slots.default" class="sc-statistic-description">
			<slot>
			{{ description }}
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: { type: String, required: true, default: "" },
			value: { type: String, required: true, default: "" },
			prefix: { type: String, default: "" },
			suffix: { type: String, default: "" },
			description: { type: String, default: "" },
			tips: { type: String, default: "" },
			groupSeparator: { type: Boolean, default: false }
		},
		data() {
			return {

			}
		},
		computed: {
			cmtValue(){
				return this.groupSeparator ? this.$TOOL.groupSeparator(this.value) : this.value
			}
		}
	}
</script>

<style scoped>
</style>
