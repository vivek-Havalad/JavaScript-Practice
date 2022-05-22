var x = 1;
function test() {
	if(false) {
	var x = 2;
}
console.log(x);
}
test();

const values = new Set();

values.add(1);
values.add(1);
values.add("a");
values.add("a");
values.add(undefined);
values.add(undefined);
values.add({isObject: true});
values.add({isObject: true});

console.log("size: ", values.size);

