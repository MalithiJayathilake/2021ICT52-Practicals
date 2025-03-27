const express = require("express");
const app =express();
const port =3003;

//array of student JSON details

const students = require('./DB/studentdb')

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu:id',(req,res)=>{
    const id=req.params.id
    const result = students.find((student)=>student.RegNo == id);
    res.send(result);
});


//filter student by gender

app.get('/stu/gender/:gen',(req,res)=>{
   const gender =req.params.gen
   const result = students.find((student)=>student.gender == gender);
   res.send(result);
});

app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
})