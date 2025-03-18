//Array

let Char_Array = ['A','B','c','d']

console.log(Char_Array);

let Num_Array = [5,8,6,4]

console.log(Num_Array);

/*
for(let i=0; i<Num_Array.length; i++)
{
	console.log(Num_Array[i])
}

*/

Num_Array.forEach((n)=>
{
	console.log(n)
}
)


//Find the max number in the array using forEach

let max=0;

Num_Array.forEach((n)=>
{
	/*if(max<n)
	{
		max=n
	}
	*/
	//(max<n)?max=n:n=n
	(max<n)&&(max=n)
}
)
console.log("Max is : "+max)

//Print the nested array
//[[1,2,3],[8,9],[5,6,7]]

let Array2 = [[1,2,3],[8,9],[5,6,7]]

Array2.forEach((n)=>
{
	n.forEach((i)=>
	{
		console.log(i)
	}
	)
}
)

/*

Find the common elements between a and b
a=[4,5,6,3,7]
b=[8,3,2,1,5]

*/
console.log("Check the Common Elements")

let arraya=[4,5,6,3,7]
let arrayb=[8,3,2,1,5]

for(let i=0; i<arraya.length; i++)
{
	for(let j=0; j<arrayb.length; j++)
	{
		if(arraya[i]==arrayb[j])
		{
			console.log(arraya[i])
		}
	}
}
console.log()



//Array Operations
	
	//Push and pop
	
Array3=['a','b','c']
console.log("Array")
console.log(Array3)

console.log("Push e : ")
Array3.push('e')
console.log(Array3)

console.log("Pop :" )
Array3.pop()
console.log(Array3)

