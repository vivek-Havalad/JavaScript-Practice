const moment = require("moment");


function main() {
	let now = moment();
	let plus_30 = moment().add(30 , 'seconds');
	let cl = setInterval(() => {
		let time = plus_30.diff(moment(), 'seconds');
		console.log(time);
		if(time <= 0) {
			clearInterval(cl);
		}
	}, 1000);
	
}
main();
