<script setup lang="ts">
import { DeleteOutlined } from '@ant-design/icons-vue';
import { useAccountStore } from '@/stores/account';

const props = defineProps<{
	id: number;
}>();

const store = useAccountStore();

const deleteAccount = () => {
	store.deleteAccount(props.id);
};
</script>

<template>
	<div class="plus-button">
		<delete-outlined
			@click="deleteAccount"
			:style="{ fontSize: '22px', cursor: 'pointer' }"
		/>
	</div>
</template>

<style scoped></style>
