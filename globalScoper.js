function sampleCall(e){
	console.log(e)
}

function lestsCall() {
	for(i=0; i < 5; i++) {
		sampleCall(i)
	}
}
lestsCall()
