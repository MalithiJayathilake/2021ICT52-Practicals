const express=require('express');
const router=express.Router()
const studentServices=require('./studentservices')

router.get('/',(req,res)=>{
    const results = studentServices.getstudents()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,No Data Found !")
    }
})

router.get('./:id',(req,res)=>{
    const id = req.params.id 
    const results = studentServices.getStudent(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,No Data Found !")
    }
})

module.exports=router;