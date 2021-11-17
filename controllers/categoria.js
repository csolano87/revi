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
   const { PRODUCTOID,PRODUCTONAME } = req.body.Lines;

   
   
   
   //const cabecera= new Cabecera({ AREA, CODE, DATE, HOUR, IDENTIFICATIONTYPE, IDENTIFIER, NAME, LASTNAME, SECONDLASTNAME, BIRTHDAY, SEX, OBSERVATION });
  // const detalle= new Detalle({ PRODUCTOID,PRODUCTONAME  });

   

  // await sequelize.sync();
   const cabecera = await Cabecera.create({ AREA, CODE, DATE, HOUR, IDENTIFICATIONTYPE, IDENTIFIER, NAME, LASTNAME, SECONDLASTNAME, BIRTHDAY, SEX, OBSERVATION });
   const detalle = await Detalle.create({PRODUCTOID,PRODUCTONAME });
   await detalle.addBar(CODE);
   const fetchedFoo = await detalle.findOne({ include: Detalle })
  // console.log(JSON.stringify(fetchedFoo, null, 2));

   //await cabecera.save();
   
   //const detalle= new Detalle({PRODUCTOID,PRODUCTONAME})
  // await detalle.save();
   res.status(201).json({ 


     // cabecera
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