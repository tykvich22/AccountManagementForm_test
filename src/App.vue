<script setup lang="ts">
import Accounts from './components/Accounts.vue';
import PlusButton from './components/PlusButton.vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
</script>

<template>
	<header>
		<div class="flex-container">
			<div><h1>Учетные записи</h1></div>
			<div><PlusButton /></div>
		</div>
		<div class="text-hint">
			<QuestionCircleOutlined />
			<div>
				Для указания нескольких меток для одной пары логин/пароль используйте
				разделитель ;
			</div>
		</div>
	</header>
	<main><Accounts /></main>
</template>

<style scoped>
.flex-container {
	display: flex;
	justify-content: flex-start;
	max-width: 300px;
}

.text-hint {
	background-color: #e1edff;
	display: flex;
	margin-bottom: 15px;
	align-items: center;
	div {
		margin-left: 15px;
	}
}
</style>
