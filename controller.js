import schema from './user.model.js'
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const {sign}=pkg;


export async function addUser(req,res){
    try {
        const {username,password}=req.body;
        if(!(username&&password))
        return res.status(404).send("Fileds are empty")
        bcrypt.hash(password,10)
        .then((hashedPwd)=>{
           schema.create({username,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("Successfully registered")
        })
        .catch((error)=>{
            res.status(500).send(error);
        })
        
       } catch (error) {
        console.log(error);
       }

}

export async function login(req,res){
    try {
    console.log(req.body);
    const {username,password}=req.body;
    const user=await schema.findOne({username});
    if(user===null) return res.status(404).send("user does not exist");
    const success=await bcrypt.compare(password,user.password)
    if(success!==true) return res.status(404).send("username or password not exist")
    const token=await sign({username},process.env.JWT_KEY,{expiresIn:"24h"})
    return res.status(200).send({msg:"successfully logged in",token})
    } catch (error) {
        console.log(error);
    }
}