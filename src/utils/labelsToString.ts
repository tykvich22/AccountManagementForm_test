export const labelsToString = (arr: { text: string }[]): string => {
	const newArr: string[] = [];

	arr.forEach((obj) => {
		if (obj.text) {
			newArr.push(obj.text);
		}
	});

	return newArr.join('; ');
};
