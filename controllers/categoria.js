const { Request, Response } = require('express');



const bcryptjs = require('bcryptjs');

//const { json } =require ('sequelize/types');
const Cabecera = require('../models/cabecera');
const Detalle = require('../models/detalle');


const categoriaGet = async (req, res) => {
   
    
      
    const cabecera = await Cabecera.findAll();
   
    res.send('select  guardada con exito..');
   
       

};


    const categoriaPost = async (req, res) => {


       const { AREA, CODE, DATE, HOUR, IDENTIFICATIONTYPE, IDENTIFIER, NAME, LASTNAME, SECONDLASTNAME, BIRTHDAY, SEX, OBSERVATION } = req.body.Header;
   //const { Header,Lines } = req.body;
     
   //console.log(Lines[1].PRODUCTOID)
   
   
   //const cabecera= new Cabecera({ AREA, CODE, DATE, HOUR, IDENTIFICATIONTYPE, IDENTIFIER, NAME, LASTNAME, SECONDLASTNAME, BIRTHDAY, SEX, OBSERVATION });
   //const detalle= new Detalle({CODE:cabecera.CODE ,PRODUCTOID,PRODUCTONAME  });
   

   

  // await sequelize.sync();
  
  
  const cabecera = await Cabecera.create({ AREA, CODE, DATE, HOUR, IDENTIFICATIONTYPE, IDENTIFIER, NAME, LASTNAME, SECONDLASTNAME, BIRTHDAY, SEX, OBSERVATION });
   
  req.body.Lines.forEach(async(e) => { 
    const detalle = await Detalle.create({CODE:cabecera.CODE ,PRODUCTOID:e.PRODUCTOID,PRODUCTONAME:e.PRODUCTONAME});
  });
  

   res.status(201).json({ 


    msg: 'La orden se creado con exito '
    }
      );
    };

    const categoriaUpdate = async (req, res) => {
   
    
        res.send('update guardada con exito..');
    
    };

    const categoriaDelete = async (req, res) => {
   
        res.send('delete guardada con exito..');
    
    };

    module.exports={categoriaGet,

        categoriaPost,
        categoriaUpdate,
        categoriaDelete
    }