function par(){
	let a =['a','a','b','b','b','c','c','a'];
	let res = [];
	let cnt = 1
	a.map((e,i) => {
	
	if(e !== a[i+1]){
		res.push(cnt+e);
		cnt = 1;
	}else{
	cnt+=1;
	}
	})
console.log(res);	
}
par()
