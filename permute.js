var s=['a','b','c','d'];
 function permute(s,l,r){
   if(l==r){
     console.log(s)
   }
   //l and r -end points
   for(var  i=l;i<r;i++){
     var temp=s[l];
     s[l]=s[i];
     s[i]=temp;
    
     permute(s,l+1,r);
    temp=s[l];
     s[l]=s[i];
     s[i]=temp;
     
   }
 }
 permute(s,0,s.length)
