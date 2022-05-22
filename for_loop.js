function backend() {
  this.i = 10;
  
  let a = {
    this.i : 20,
    
  }
  console.log(a, this.i)
  
}
backend()
