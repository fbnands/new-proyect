import express from 'express'; // Se importa el módulo express.

import {
  getCustomers,
  getCustomerById,
  getCustomerByName,
  postCustomer,
  putCustomer,
  deleteCustomer
} from '../service/customers.service'; // Se importa la función que obtiene los clientes. Especificando el path relativo al archivo, es hacia la capa de servicios (Lógica de negocio).

const router = express.Router();

router.get('/id', async (req, res) => {
    try{
      const response = await getCustomers(); 
  
      res.status(response.code).json({ result: response.result }); 
    }catch(error){ 
      console.log(error);
      const customError = error as {code: number, message: string};
      res.status(customError.code ).json(customError.message );
    }


   }

   router.get("id") => {
    try {


        
      const response = await 
    } catch (error) {
        
    }




   }