<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { ref, watch } from 'vue';

interface InputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}

const props = defineProps<{
	login: string;
	id: number;
}>();

const store = useAccountStore();
const updateLoginById = store.updateLoginById;

const value = ref(props.login);
const errorString = ref<string>('');
const isEmpty = ref<boolean>(false);
const isMaxLength = ref<boolean>(false);

const handleBlur = (event: InputEvent) => {
	isEmpty.value = false;
	isMaxLength.value = false;
	if (!event.target.value) {
		isEmpty.value = true;
		errorString.value = 'error';
		return;
	}
	if (event.target.value.length > 100) {
		isMaxLength.value = true;
		errorString.value = 'error';
		return;
	}
	updateLoginById(props.id, event.target.value);
	errorString.value = '';
};

watch(
	() => props.login,
	(newValue) => {
		value.value = newValue;
	}
);
</script>

<template>
	<a-space direction="vertical">
		<a-input
			:status="errorString"
			v-model:value="value"
			placeholder="Логин"
			@blur="handleBlur"
			style="width: 180px"
		/>
	</a-space>
	<p v-if="isEmpty" class="empty-text">Поле не должно быть пустым!</p>
	<p v-if="isMaxLength" class="empty-text">
		Максимальная длина логина 100 символов!
	</p>
</template>

<style scoped>
.empty-text {
	color: red;
	font-size: 0.6rem;
}
</style>
