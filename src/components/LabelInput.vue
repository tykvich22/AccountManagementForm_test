<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { labelsToString } from '@/utils/labelsToString';
import { ref, watch } from 'vue';

interface InputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}

const props = defineProps<{
	label: { text: string }[];
	id: number;
}>();

const store = useAccountStore();

const { updateLabelById } = store;

const label = ref(labelsToString(props.label));

const handleBlur = (event: InputEvent) => {
	updateLabelById(props.id, event.target.value);
};

watch(
	() => props.label,
	(newLabelArray) => {
		label.value = labelsToString(newLabelArray);
	}
);
</script>

<template>
	<a-space direction="vertical">
		<a-input
			style="width: 180px"
			v-model:value="label"
			placeholder="Метки"
			@blur="handleBlur"
		/>
	</a-space>
</template>

<style scoped></style>
