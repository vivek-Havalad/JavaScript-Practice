let fh = '{[}]';


function braces(values) {
	let str = values.split('');
	let emptyMatch = [];
	let openMatch ='{([<';
	let c = {
'}': '{',
']': '[',
')' : '(',
	};
	for(let x = 0 ; x < str.length; x++) {
		if(openMatch.includes(str[x])) {
			emptyMatch.push(str[x]);
		} else if( emptyMatch.length && emptyMatch[emptyMatch.length - 1 ] === c[str[x]]) {
			emptyMatch.pop();
		} else {
			return 'NO';
		}
	}
	if (emptyMatch.length === 0) {
		return 'YES';
	}
	return 'NO';
}
console.log(braces(fh))
