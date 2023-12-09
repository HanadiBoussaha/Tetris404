import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;
import db from "../config/Database.js";
import createblogs from "../models/blogs.js";
 
const blogs = createblogs(db,DataTypes);

export const addblogs = async(req, res) => {
    const {  titre,
        description, 
        image, 
        date ,
        idea} = req.body;
    try {
    await blogs.create({
        titre:titre,
        description : description, 
        image : image, 
        date:date,
        idea:idea,
    });
    res.json({msg: "added successful"});
    } catch (error) {
    console.log(error);
    return res.status(404).json({msg: "erreur to add"});
    }
    }; 
    export const getAllblogs= async ( req, res) => {
        try {
    
            let blog = await blogs.findAll({});
                   res.status(200).send(blog);
                   console.log(blog);
            
             } catch (error){
                 console.log(error);
                 return res.status(404).json({msg: "problem"});
         
             } 
    
    
    }