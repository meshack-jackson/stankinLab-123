// function myFunction(p1) {
//   return p1 ;
//   }   

//   var out=myFunction(2);

//   console.log(out);


// function myFunction(p1,p2) {
//   return p1 +p2 ;
//   }   

//   var sum=myFunction(1,3);

//   console.log(sum);


function myFunction(array) {
   
    var n=1;
	for (var i in array ){

		if(!isNaN(array[i])){
           n=array[i]*array[i]; 
           array[i] = n;
		}
		else{
			array[i] = 0
		}

	}
	return array;
  }  

list_array=[1,2,3,4,'o'];
var out=myFunction(list_array);
console.log(out);
