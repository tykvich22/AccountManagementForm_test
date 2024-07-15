<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { useAccountStore } from '@/stores/account';

const store = useAccountStore();

const addAcount = () => {
	store.addAccount();
};
</script>

<template>
	<div class="plus-button">
		<plus-outlined
			@click="addAcount"
			:style="{ fontSize: '30px', cursor: 'pointer' }"
		/>
	</div>
</template>

<style scoped>
.plus-button {
	margin: 11px;
}
</style>
