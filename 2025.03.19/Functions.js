//Functions

function PrintMsg()
{
	console.log("Hello JS")
}

PrintMsg()


//*******************************************************************************


function sum()
{
	return 5+6
}

console.log(sum())



//**************************************************************************

function sub(a,b)
{
	return a-b
}
console.log(sub(5,3))


//*************************************************************************

//Write a Boolean function to find a given number is prime

function PrimeNum(x)
{
	if (x%x==1 && x%1==x)
	{
		console.log("The Number is Not a Prime Number")
	}
	else
	{
		console.log("The Number is a Prime Number")
	}
	return x
}

console.log(PrimeNum(2))

//**************************************************************************


//arrow function


const msg = ()=>{return console.log("Hello JS")}
//console.log(msg)
msg()


//***************************************************************************

//Write an arrow function to sum 2 numbers

console.log("Addition")

const add = (a,b=2)=>{return a+b}
console.log(add(4,5))

//****************************************************************************


console.log("Multiplication")

const mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))


//****************************************************************************

//Read Parameter

/*
	const mysum = (...n)=>
	{
		console.log(n)
	}
	
*/

/*
const mysum = (...n)=>
{
	let t=0
	n.forEach ((i)=>t=t+i)
	console.log(t)
}
*/

const mysum = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}

console.log(mysum(4,5,6,8,2))


//***************************************************************************

//callback Functions


const greet =(msg,fun)=>
{
	console.log("Hi.. "+msg)
	fun()
}
greet("Good morning",()=>{console.log("My Name is David ")})


//***************************************************************************

const multtwo = (n)=>n*2

const myarr = (mul,...n)=>
{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)


//*****************************************************************************

