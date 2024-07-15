import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export interface Account {
	id: number;
	label: { text: string }[];
	type: string;
	login: string;
	password: string | null;
}

export const useAccountStore = defineStore('account', () => {
	const accounts = ref<Account[]>([]);

	const saveAccountsToLocalStorage = (): void => {
		const jsonAccounts = JSON.stringify(accounts.value);
		localStorage.setItem('accounts', jsonAccounts);
	};

	const loadAccountsFromLocalStorage = (): void => {
		const jsonAccounts = localStorage.getItem('accounts');
		if (jsonAccounts) {
			accounts.value = JSON.parse(jsonAccounts);
		}
	};

	const addAccount = () => {
		accounts.value.push({
			id: Math.floor(Math.random() * Date.now()),
			label: [],
			type: '',
			login: '',
			password: '',
		});
		saveAccountsToLocalStorage();
	};

	const deleteAccount = (id: number) => {
		accounts.value = accounts.value.filter((account) => account.id !== id);
		saveAccountsToLocalStorage();
	};

	const getAccountById = (id: number) => {
		return accounts.value.find((item: Account) => item.id === id);
	};

	const updateLabelById = (id: number, newLabel: string): void => {
		const itemToUpdate = accounts.value.find((item: Account) => item.id === id);
		if (itemToUpdate) {
			const parts = newLabel.trim().split(';');

			const result = parts.map((part) => ({
				text: part.trim(),
			}));

			itemToUpdate.label = result;
			saveAccountsToLocalStorage();
		}
	};

	const updateTypeById = (id: number, newType: string): void => {
		const itemToUpdate = accounts.value.find((item: Account) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.type = newType;
			if (newType === 'LDAP') {
				itemToUpdate.password = null;
			} else {
				itemToUpdate.password = '';
			}
			saveAccountsToLocalStorage();
		}
	};

	const updateLoginById = (id: number, newLogin: string): void => {
		const itemToUpdate = accounts.value.find((item: Account) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.login = newLogin;
			saveAccountsToLocalStorage();
		}
	};

	const updatePasswordById = (id: number, newPassword: string): void => {
		const itemToUpdate = accounts.value.find((item: Account) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.password = newPassword;
			saveAccountsToLocalStorage();
		}
	};

	return {
		accounts,
		addAccount,
		deleteAccount,
		getAccountById,
		updateLabelById,
		saveAccountsToLocalStorage,
		loadAccountsFromLocalStorage,
		updateTypeById,
		updateLoginById,
		updatePasswordById,
	};
});
