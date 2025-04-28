const express = require("express");
const app =express();
const port =3001;

//array of student JSON details

const students = require('./studentdb')

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu:id',(req,res)=>{
    const id = req.params.id
    const result = students.find((student)=>student.regno == id);
    res.send(result);
});


//filter student by gender

app.get('/stu/gender/:gen',(req,res)=>{
   const gender =req.params.gen
   const result = students.find((student)=>student.gender == gender);
   res.send(result);

   if(result){
        res.send(result);
    }
    else{
        res.status(404).send("Student not Found");
    }
});



app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
})