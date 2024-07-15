<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { storeToRefs } from 'pinia';
import LabelInput from '@/components/LabelInput.vue';
import TypeSelect from '@/components/TypeSelect.vue';
import LoginInput from '@/components/LoginInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import DeleteButton from '@/components/DeleteButton.vue';
import { onMounted } from 'vue';

const store = useAccountStore();
const { accounts } = storeToRefs(store);

onMounted(() => {
	store.loadAccountsFromLocalStorage();
});

const columns = [
	{
		title: 'Метка',
		dataIndex: 'label',
		key: 'label',
	},
	{
		title: 'Тип записи',
		dataIndex: 'recordType',
		key: 'recordType',
	},
	{
		title: 'Логин',
		dataIndex: 'login',
		key: 'login',
	},
	{
		title: 'Пароль',
		key: 'password',
		dataIndex: 'password',
	},
	{
		title: '',
		key: 'deleteButton',
		dataIndex: 'deleteButton',
	},
];
</script>

<template>
	<a-table :columns="columns" :data-source="accounts" :pagination="false">
		<template #bodyCell="{ column, record }">
			<template v-if="column.key === 'label'">
				<LabelInput :label="record.label" :id="record.id" />
			</template>
			<template v-else-if="column.key === 'recordType'">
				<TypeSelect :type="record.type" :id="record.id" />
			</template>
			<template v-else-if="column.key === 'login'">
				<LoginInput :login="record.login" :id="record.id" />
			</template>
			<template v-else-if="column.key === 'password'">
				<PasswordInput :password="record.password" :id="record.id" />
			</template>
			<template v-else-if="column.key === 'deleteButton'">
				<DeleteButton :id="record.id" />
			</template>
		</template>
	</a-table>
</template>

<style scoped></style>
