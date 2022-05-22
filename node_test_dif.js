let p = require('./msg.js').d;
let j = require('./msg_1.js').j;

let t = [];

for(let i  = 0; i < p.length; i++ ) {
	flag =false;
	for(let k = 0; k < j.length; k++ ) {
	if(p[i] === j[k]){
		flag = true;
		t.push(p[i]);
	}
	
}
if(flag) {console.log(p[i])}
	
}
console.log(p.length, t.length);
