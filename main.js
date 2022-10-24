function topThreeWords(text) {
	const obj = text
		.toLowerCase()
		.replace(/[.,:/]| '/g, '')
		.split(/[ \n]/)
		.filter(word => word && word.length > 0)
		.reduce((obj, word) => {
			obj[word] ? obj[word] += 1 : obj[word] = 1;
			return obj;
		}, {});
	return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(entry => entry[0]).slice(0, 3);
}