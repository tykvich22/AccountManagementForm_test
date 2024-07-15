<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { ref, watch } from 'vue';

const props = defineProps<{
	type: string;
	id: number;
}>();

const store = useAccountStore();
const updateTypeById = store.updateTypeById;

const value = ref(props.type);

watch(
	() => props.type,
	(newType) => {
		value.value = newType;
	}
);

const handleChange = (event: string) => {
	updateTypeById(props.id, event);
};
</script>

<template>
	<a-space>
		<a-select
			ref="select"
			v-model:value="value"
			style="width: 120px"
			@change="handleChange"
		>
			<a-select-option value="local">Локальная</a-select-option>
			<a-select-option value="LDAP">LDAP</a-select-option>
		</a-select>
	</a-space>
</template>

<style scoped></style>
